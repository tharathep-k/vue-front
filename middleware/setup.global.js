import { authStore } from "~/store/auth-store";
import { getAccessToken } from "~/utils/localstorage";

export default defineNuxtRouteMiddleware(async () => {
  try {
    const store = authStore();
    if (typeof localStorage !== "undefined" && getAccessToken()) {
      console.log(localStorage.accessToken);
      await store.fetchMe();
      console.log("--------",store.isAuthenticate);
    }
  } catch (error) {
    console.log(error);
  }
});

// export default defineNuxtRouteMiddleware(() => {
//   try {
//     const store = authStore();
//     const getAccessToken = localStorage.getItem("accessToken");
//     console.log(getAccessToken);
//     // if (getAccessToken) {
//     //   store.fetchMe();
//     // }
//   } catch (error) {
//     console.log(error);
//   }
// });
