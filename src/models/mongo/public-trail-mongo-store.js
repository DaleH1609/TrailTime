import { publicTrail } from "./public-trail.js";

export const publicTrailMongoStore = {
  async getAllPublicTrails() {
    const publicTrails = await publicTrail.find().lean();
    return publicTrails;
  },

  async addPublicTrail(pTrail) {
    const newPublicTrail = new publicTrail(pTrail);
    newPublicTrail.save();
  },
};