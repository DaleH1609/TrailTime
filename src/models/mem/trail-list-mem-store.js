import { v4 } from "uuid";
import { trailMemStore } from "./trail-mem-store.js";

let traillists = [];

export const traillistMemStore = {
  async getAllTrailLists() {
    return traillists;
  },

  async getUserTraillists(userid) {
    return traillists.filter((traillist) => traillist.userid === userid);
  },

  async addTrailList(traillist) {
    traillist._id = v4();
    traillists.push(traillist);
    return traillist;
  },

  async getTraillistById(id) {
    const list = traillists.find((traillist) => traillist._id === id);
    if (list) {
      list.trails = await trailMemStore.getTrailsByTrailListId(list._id);
      return list;
    }
    return null;
  },

  async deleteTraillistById(id) {
    const index = traillists.findIndex((traillist) => traillist._id === id);
    if (index !== -1) traillists.splice(index, 1);
  }, 

  async deleteAllTraillists() {
    traillists = [];
  },
};