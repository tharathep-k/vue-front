import { defineStore } from "pinia";

import * as userApi from "../api/user-api";

export const userStore = defineStore("user", {
  state: () => ({
    userData: [],
    filterUserData: [],
  }),
  actions: {
    async getAllUser() {
      try {
        const res = await userApi.getalluser();
        this.userData = res.data;
        this.filterUserData = res.data;
      } catch (error) {
        console.log(error);
      }
    },

    async deleteUser(id) {
      try {
        const res = await userApi.deleteUser(id);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    },

    async editUser(input) {
      try {
        console.log("----- : ", input);
        const res = await userApi.edituser(input)
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  },
});
