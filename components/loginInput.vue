<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="inputs">
        <label>Email</label>
        <input class="email" type="text" placeholder="Email" v-model="initialLogin.email" />
        <p>{{ errorMessage.email }}</p>
      </div>
      <div class="inputs">
        <label>Password</label>
        <input class="password" type="password" placeholder="Password" v-model="initialLogin.password" />
        <p>{{ errorMessage.password }}</p>
      </div>
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "loginInput",
};
</script>

<script setup>
// definePageMeta({
//   middleware: "auth",
// });

import { object } from "joi";
import { reactive } from "vue"

import loginValidate from "./validator/login-validate";
import { authStore } from "../store/auth-store";

const store = authStore();

const user = store.user;
console.log("user : ", user);

const initialLogin = {
  email: "",
  password: "",
};

let errorMessage = reactive({});

const onSubmit = async (e) => {
  try {
    console.log(initialLogin);
    const result = loginValidate(initialLogin);
    if (result) {
      errorMessage.email = result.email;
      errorMessage.password = result.password;
      return

      // return Object.assign(errorMessage, result);
      //  console.log("====== :", errorMessage);
    }

    await store.login(initialLogin);
    errorMessage = {};

    const isAuthenticated = store.isAuthenticate;
    if (isAuthenticated) {
      return navigateTo("/showdata");
    }

    console.log("Login Success !!");
  } catch (error) {
    console.log("Login False !!");
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
}

.inputs {
  display: flex;
  flex-direction: column;
  width: 20vw;
  gap: 6px;
}

input {
  padding-left: 4px;
  border-radius: 4px;
  height: 24px;
}

button {
  width: 4rem;
  height: 2rem;
  border-radius: 6px;
  background-color: mediumseagreen;
  color: azure;
  border: none;
}

p {
  color: red;
  font-size: 14px;
  margin-top: 0;
}
</style>
