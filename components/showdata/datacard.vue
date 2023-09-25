import { Teleport } from 'nuxt/dist/app/compat/capi';
<template>
  <div>
    <div class="showlist">
      <div class="card" v-for="(el, index) in data" :key="index">
        <div class="name">{{ el.name }}</div>
        <div class="email">{{ el.email }}</div>
        <div @click="isOpen = true">
          <img class="edit" src="../../public/edit.svg" />
          <Teleport to="body">
            <div class="modal" v-if="isOpen">
              <datacardinput @close="isOpen = false" :userId="el.id" />
              <!-- <datacardinput /> -->
            </div>
          </Teleport>
        </div>

        <div @click="onDelete(el.id)">
          <img class="bin" src="../../public/bin.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import datacardinput from "./datacardinput.vue";

export default {
  name: "datacard",
  components: {
    datacardinput,
  },
};
</script>

<script setup>
import { userStore } from "../../store/user-store";
import { ref } from "vue";

const isOpen = ref(false);

const store = userStore();
await store.getAllUser();
const data = store.userData;

const onDelete = async (e) => {
  try {
    const id = e;
    await store.deleteUser({ id: id });
    alert("delete complete");
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped>
.showlist {
  border: 1px solid black;
  width: 50vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  gap: 16px;
}
.card {
  border: 1px solid black;
  width: 40vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.name {
  border: 1px solid black;
  width: 8rem;
  padding: 4px;
}

.email {
  border: 1px solid black;
  width: 12rem;
  padding: 4px;
}
.edit {
  width: 48px;
  height: 48px;
}
.bin {
  width: 34px;
  height: 34px;
}
.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 250, 0.1);
}
</style>
