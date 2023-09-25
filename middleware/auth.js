import { authStore } from "~/store/auth-store";

export default defineNuxtRouteMiddleware(() => {
  const store = authStore();
  const isAuthenticated = store.isAuthenticate;
  if (isAuthenticated) {
    return navigateTo("/showdata");
  }
});
