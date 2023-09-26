import { defineStore } from "pinia";

import * as userApi from "../api/user-api";

export const userStore = defineStore("user", {
  state: () => ({
    userData: [],
    filterUserData: [],
    data: []
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
        const res = await userApi.edituser(input);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    },

    async searchUserByEmail(input) {
      try {
        console.log("ooooooo : ",input);
        const res = await userApi.searchuser(input)
        // console.log(res.data);
        this.filterUserData = res.data
        console.log("After search : ",this.filterUserData);
      } catch (error) {
        console.log(error);
      }
    },

    // searchUser(input) {
    //   try {
    //     console.log(input);
    //     console.log("Before : ",this.userData);
    //     this.data = this.userData.filter((el) => {
    //       el.email.toLowerCase().startsWith(input);
    //     });
    //     console.log("After : ",this.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
  },
});
