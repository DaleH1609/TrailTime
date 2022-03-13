import { db } from "../models/db.js";
import { TrailSpec } from "../models/joi-schemas.js";

export const trailListController = {
  index: {
    handler: async function (request, h) {
      const traillist = await db.traillistStore.getTraillistById(request.params.id);
      const viewData = {
        title: "Trail list",
        traillist: traillist,
      };
      return h.view("traillist-view", viewData);
    },
  },

  deleteTrail: {
    handler: async function(request, h) {
      const traillist = await db.traillistStore.getTraillistById(request.params.id);
      await db.trailStore.deleteTrail(request.params.trailid);
      return h.redirect(`/traillist/${traillist._id}`);
    },
  },

  addTrail: {
    validate: {
      payload: TrailSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("traillist-view", { title: "Add trail error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const traillist = await db.traillistStore.getTraillistById(request.params.id);
      const newTrail = {
        title: request.payload.title,
        location: request.payload.locaion,
        type: request.payload.type,
      };
      await db.trailStore.addTrail(traillist._id, newTrail);
      return h.redirect(`/traillist/${traillist._id}`);
    },
  },
};