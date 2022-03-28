import { v4 } from "uuid";

let trails = [];

export const trailMemStore = {
  async getAllTrails() {
    return trails;
  },

  async addTrail(trailListId, trail) {
    trail._id = v4();
    trail.trailListid = trailListId;
    trails.push(trail);
    return trail;
  },

  async getTrailsByTrailListId(id) {
    return trails.filter((trail) => trail.trailListid === id);
  },

  async getTrailById(id) {
    return trails.find((trail) => trail._id === id);
  },

  async getTrailListTrails(trailListId) {
    return trails.filter((trail) => trail.trailListid === trailListId);
  },

  async deleteTrailList(id) {
    const index = trails.findIndex((trail) => trail._id === id);
    trails.splice(index, 1);
  },

  async deleteAllTrails() {
    trails = [];
  },

  async updateTrail(trail, updatedTrail) {
    trail.title = updatedTrail.title;
    trail.location = updatedTrail.location;
    trail.type = updatedTrail.type;
    trail.latitude = updatedLatitude.latitude;
    trail.longitude = updatedLongitude.longitude;
    trail.category = updatedCategory.category;
  },
};