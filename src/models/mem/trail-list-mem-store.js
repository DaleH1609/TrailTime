import { v4 } from "uuid";

let traillists = [];

export const TraillistMemStore = {
  async getAllTrailli() {
    return traillists;
  },

  async addTraillist(traillist) {
    traillist._id = v4();
    traillists.push(traillist);
    return playlist;
  },

  async getTraillistId(id) {
    return traillists.find((traillist) => traillist._id === id);
  },

  async deleteTraillistById(id) {
    const index = traillists.findIndex((traillist) => traillist._id === id);
    traillists.splice(index, 1);
  },

  async deleteAllTraillists() {
    traillists = [];
  },
};