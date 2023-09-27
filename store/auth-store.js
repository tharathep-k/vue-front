import { defineStore } from "pinia";

import * as authApi from "../api/auth-api";
import { removeAccessToken, setAccessToken } from "../utils/localstorage";

export const authStore = defineStore("auth", {
  state: () => ({
    user: null,
    isAuthenticate: false,
  }),
  actions: {
    async login(input) {
      try {
        const res = await authApi.login(input);
        setAccessToken(res.data.accessToken);
        const resFetchMe = await authApi.fetchme();
        this.user = resFetchMe.data.user;
        this.isAuthenticate = true;
      } catch (error) {
        console.log(error);
      }
    },

    async fetchMe() {
      try {
        console.log("Hiiiiii in fetchMe");
        const res = await authApi.fetchme();
        console.log("user :",res.data.user);
        this.user = res.data.user;
        this.isAuthenticate = true;
        console.log("authen : ",this.isAuthenticate);
      } catch (error) {
        console.log(error);
      }
    },

    logout() {
      removeAccessToken();
      this.isAuthenticate = false;
      this.user = null;
    },
  },
});
