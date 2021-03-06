import { Trail } from "./trail.js";

export const trailMongoStore = {
  async getAllTrails() {
    const trails = await Trail.find().lean();
    return trails;
  },

  async addTrail(traillistId, trail) {
    trail.traillistid = traillistId;
    const newTrail = new Trail(trail);
    const trailObj = await newTrail.save();
    return this.getTrailById(trailObj._id);
  },

  async getTrailsByTraillistId(id) {
    const trails = await Trail.find({ traillistid: id }).lean();
    return trails;
  },

  async getTrailById(id) {
    if (id) {
      const trail = await Trail.findOne({ _id: id }).lean();
      return trail;
    }
    return null;
  },

  async deleteTrail(id) {
    try {
      await Trail.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deleteAllTrails() {
    await Trail.deleteMany({});
  },

  async updatetrail(trail, updatedTrail) {
    trail.title = updatedTrail.title;
    trail.location = updatedTrail.location;
    trail.type = updatedTrail.type;
    trail.latitude = updatedTrail.latitude;
    trail.longitude = updatedTrail.longitude;
    trail.category = updatedCategory.category
    await trail.save();
  },
};