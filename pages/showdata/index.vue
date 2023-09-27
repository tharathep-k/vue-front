<template>
  <div>
    <Title>List Data</Title>
    <div class="body">
      <div class="container">
        <div class="searchbar">
          <searchinput />
        </div>
        <datacard />
      </div>
    </div>
  </div>
</template>

<script>
import { authStore } from "../../store/auth-store";
import datacard from "../../components/showdata/datacard.vue";
import searchinput from '~/components/showdata/searchinput.vue';

export default {
  name: "showdata",
  components: {
    datacard,
    searchinput
  },
  // middleware: [
  //   function () {
  //     const store = authStore();

  //     const isAuthenticated = store.isAuthenticate;
  //     if (!isAuthenticated) {
  //       return navigateTo("/");
  //     }
  //   },
  // ],
  // middleware: ["auth"]
};
</script>

<script setup>
definePageMeta({
  middleware: "auth"
});
</script>

<style scoped>
.body {
  display: flex;
  justify-content: center;
}

.container {
  border: 2px solid black;
  width: 70vw;
  height: 80vh;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.searchbar {
  display: flex;
  justify-content: center;
}
</style>
