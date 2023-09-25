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
        const res = await authApi.fetchme();
        console.log(res.data.user);
        console.log("authen : ",this.isAuthenticate);
        this.user = res.data.user;
        this.isAuthenticate = true;
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
