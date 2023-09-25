<template>
  <div>
    <div>
      
    </div>
  </div>
</template>

<script>
import { authStore } from "../../store/auth-store";

definePageMeta({
  middleware: [
    function () {
      const store = authStore();

      const isAuthenticated = store.isAuthenticate;
      if (!isAuthenticated) {
        return navigateTo("/");
      }
    },
  ],
});
</script>

<script setup></script>

<style scoped></style>
