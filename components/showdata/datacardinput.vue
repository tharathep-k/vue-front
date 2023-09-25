<template>
  <div>
    <form @submit.prevent="onSubmit" class="modalcontainer">
      <h2>Edit Information</h2>
      <div class="containerinput">
        <label>Email</label>
        <input
          class="email"
          type="text"
          placeholder="Email"
          v-model="initialEdit.email"
        />
        <p>{{ errorMessage.email }}</p>
      </div>
      <div class="containerinput">
        <label>Password</label>
        <input
          class="password"
          type="password"
          placeholder="Password"
          v-model="initialEdit.password"
        />
        <p>{{ errorMessage.password }}</p>
      </div>
      <div class="containerinput">
        <label>Confirm Password</label>
        <input
          class="ConfirmPassword"
          type="password"
          placeholder="Confirm Password"
          v-model="initialEdit.confirmpassword"
        />
        <p>{{ errorMessage.confirmpassword }}</p>
      </div>
      <div class="button">
        <button @click="$emit('close')" class="cancel">Cancel</button>
        <button class="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "datacardinput",
  emits: ["close"],
};
</script>

<script setup>
import { userStore } from "../../store/user-store";
import validateEditUser from "../validator/edit-validate";

const props = defineProps(["userId"]);


const store = userStore();

const initialEdit = {
  email: "",
  password: "",
  confirmpassword: "",
};

let errorMessage = {};

const onSubmit = async () => {
  try {
    const result = validateEditUser(initialEdit);
    if (result) {
      Object.assign(errorMessage, result);
    }

    const id = props.userId
    const data = {...initialEdit, id}
    await store.editUser(data);

    errorMessage = {};

    alert("Edit Success");
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped>
.modalcontainer {
  background-color: white;
  box-shadow: 5px 5px lightgray;
  border: 1px solid lightgray;
  padding: 50px;
  border-radius: 2rem;
  width: 40vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.containerinput {
  display: flex;
  flex-direction: column;
  width: 20vw;
  gap: 8px;
}

input {
  padding-left: 4px;
  border-radius: 4px;
  height: 24px;
}
.button {
  display: flex;
  gap: 32px;
}
.submit {
  width: 4rem;
  height: 2rem;
  border-radius: 6px;
  background-color: mediumseagreen;
  color: azure;
  border: none;
}
.cancel {
  width: 4rem;
  height: 2rem;
  border-radius: 6px;
  background-color: rgb(255, 52, 59);
  color: azure;
  border: none;
}

p {
  color: red;
  font-size: 14px;
}
</style>
