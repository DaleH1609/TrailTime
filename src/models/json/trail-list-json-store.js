import { v4 } from "uuid";
// eslint-disable-next-line import/no-unresolved
import { JSONFile, Low } from "lowdb";
import { trailJsonStore } from "./trail-json-store.js";

const db = new Low(new JSONFile("./src/models/json/trail-lists.json"));
db.data = { traillists: [] };

export const traillistJsonStore = {
  async getAllTraillists() {
    await db.read();
    return db.data.traillists;
  },

  async addTraillist(traillist) {
    await db.read();
    traillist._id = v4();
    db.data.traillists.push(traillist);
    await db.write();
    return traillist;
  },

  async getTraillistById(id) {
    await db.read();
    let list = db.data.traillists.find((traillist) => traillist._id === id);
    if (list) {
        list.trails = await trailJsonStore.getTrailsByTraillistId(list._id);
      } else {
        list = null;
      }
      return list;
    },

  async getUserTraillists(userid) {
    await db.read();
    return db.data.traillists.filter((traillist) => traillist.userid === userid);
  },

  async deleteTraillistById(id) {
    await db.read();
    const index = db.data.traillists.findIndex((traillist) => traillist._id === id);
    if (index !== -1) db.data.traillists.splice(index, 1);
    await db.write();
  },

  async deleteAllTraillists() {
    db.data.traillists = [];
    await db.write();
  },
};