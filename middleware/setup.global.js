import { authStore } from "~/store/auth-store";
import { getAccessToken } from "~/utils/localstorage";

export default defineNuxtRouteMiddleware(() => {
  try {
    const store = authStore();
    if (typeof localStorage !== "undefined" && getAccessToken()) {
        console.log("eieiza hahaplus");
      store.fetchMe();
    }
  } catch (error) {
    console.log(error);
  }
});
