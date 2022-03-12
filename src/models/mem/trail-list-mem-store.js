import { v4 } from "uuid";
import { trailMemStore } from "./trail-mem-store.js";

let traillists = [];

export const traillistMemStore = {
  async getAllTrailLists() {
    return traillists;
  },

  async addTrailList(traillist) {
    traillist._id = v4();
    traillists.push(traillist);
    return traillist;
  },

  async getTraillistById(id) {
    const list = traillists.find((traillist) => traillist._id === id);
    list.trails = await trailMemStore.getTrailsByTrailListId(list._id);
    return list;
  },

  async deleteTraillistById(id) {
    const index = traillists.findIndex((traillist) => traillist._id === id);
    traillists.splice(index, 1);
  },

  async deleteAllTraillists() {
    traillists = [];
  },
};