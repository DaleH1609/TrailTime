import { userMemStore } from "./mem/user-mem-store.js";
import { traillistMemStore } from "./mem/trail-list-mem-store";

export const db = {
  userStore: null,
  traillistStore: null,

  init() {
    this.userStore = userMemStore;
    this.traillistStore = traillistMemStore;
  },
};