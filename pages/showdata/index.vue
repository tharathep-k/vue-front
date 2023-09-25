<template>
  <div>
    <div class="body">
      <div class="container">
        <div class="searchbar">
          <input />
        </div>
        <datacard />
      </div>
    </div>
  </div>
</template>

<script>
import { authStore } from "../../store/auth-store";
import datacard from "../../components/showdata/datacard.vue";

// definePageMeta({
//   middleware: [
//     function () {
//       const store = authStore();

//       const isAuthenticated = store.isAuthenticate;
//       if (!isAuthenticated) {
//         return navigateTo("/");
//       }
//     },
//   ],
// });

export default {
  name: "showdata",
  components: {
    datacard,
  },
  middleware: [
    function () {
      const store = authStore();

      const isAuthenticated = store.isAuthenticate;
      if (!isAuthenticated) {
        return navigateTo("/");
      }
    },
  ],
};
</script>

<script setup></script>

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

input {
  width: 40vw;
  height: 36px;
  padding-left: 4px;
  font-size: 20px;
}
</style>
