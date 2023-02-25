import { defineStore } from "pinia";
import axios from "axios";
import type { User } from "./userData.type";

type State = {
  userDetail: User;
};

export const useUserStore = defineStore({
  id: "user",
  state: (): State => {
    return {
      userDetail: {} as User,
    };
  },
  getters: {
    getUserModel: (state: State) => () => state.userDetail,
  },
  actions: {
    async getUserDetail(id: string) {
      try {
        const response = await axios.get(`http://localhost:3000/user/${id}`);
        this.userDetail = response.data[0];
        console.log(this.userDetail);
        return this.userDetail;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
