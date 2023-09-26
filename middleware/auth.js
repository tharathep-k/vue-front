import { authStore } from "~/store/auth-store";

export default defineNuxtRouteMiddleware(() => {
  const store = authStore();
  const isAuthenticated = store.isAuthenticate;
  console.log("-------in auth : ", isAuthenticated);
  if (!isAuthenticated) {
    return navigateTo("/login");
  }
});
