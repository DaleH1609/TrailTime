import { db } from "../models/db.js";

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const traillist = await db.traillistStore.getAllTraillists();
      const viewData = {
        title: "Trail Time Dashboard",
        user: loggedInUser,
        traillist: traillist,
      };
      return h.view("dashboard-view", viewData);
    },
  },

  deleteTraillist: {
    handler: async function (request, h) {
      const traillist = await db.traillistStore.getTraillistById(request.params.id);
      await db.traillistStore.deleteTraillistById(traillist._id);
      return h.redirect("/dashboard");
    },
  },

  addTraillist: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const newTrailList = {
        userid: loggedInUser._id,
        title: request.payload.title,
      };
      await db.traillistStore.addTraillist(newTrailList);
      return h.redirect("/dashboard");
    },
  },
};