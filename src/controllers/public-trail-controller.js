import { db } from "../models/db.js";

export const publicTrailController = {
  index: {
    handler: async function (request, h) {
      const publicTrails = await db.publicTrailStore.getAllPublicTrails();
      const viewData = {
        title: "Add a public POI",
        publicTrails: publicTrails
      };
      return h.view("public-view", viewData);
    },
  },

  addPublicTrail: {
    handler: async function (request, h) {
      const newPublicTrail = {
        pTitle: request.payload.pTitle,
        pLocation: request.payload.pLocation,
        pType: request.payload.pType,
        pLatitude: request.payload.pLatitude,
        pLongitude: request.payload.pLongitude,
        pCategory: request.payload.pCategory,
      };
      await db.publicTrailStore.addPublicTrail(newPublicTrail);
      return h.redirect("/public");
    },
  },
};