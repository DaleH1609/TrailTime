import { db } from "../models/db.js";

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const traillist = await db.traillistStore.getAllTrailLists();
      const viewData = {
        title: "Trail Time Dashboard",
        traillist: traillist,
      };
      return h.view("dashboard-view", viewData);
    },
  },

  addTraillist: {
    handler: async function (request, h) {
      const newTrailList = {
        title: request.payload.title,
      };
      await db.traillistStore.addTrailList(newTrailList);
      return h.redirect("/dashboard");
    },
  },
};