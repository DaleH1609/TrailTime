import { Traillist } from "./trail-list.js";
import { trailMongoStore } from "./trail-mongo-store.js";

export const traillistMongoStore = {
  async getAllTraillists() {
    const traillists = await Traillist.find().lean();
    return traillists;
  },

  async getTraillistById(id) {
    if (id) {
      const traillist = await Traillist.findOne({ _id: id }).lean();
      if (traillist) {
        traillist.trails = await trailMongoStore.getTrailsByTraillistId(traillist._id);
      }
      return traillist;
    }
    return null;
  },

  async addTraillist(traillist) {
    const newTraillist = new Traillist(traillist);
    const traillistObj = await newTraillist.save();
    return this.getTraillistById(traillistObj._id);
  },

  async getUserTraillists(id) {
    const traillist = await Traillist.find({ userid: id }).lean();
    return traillist;
  },

  async deleteTraillistById(id) {
    try {
      await Traillist.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async updateTraillist(updatedTraillist) {
    const traillist = await Traillist.findOne({ _id: updatedTraillist._id });
    traillist.title = updatedTraillist.title;
    traillist.img = updatedTraillist.img;
    await traillist.save();
  },

  async deleteAllTraillists() {
    await Traillist.deleteMany({});
  }
};

