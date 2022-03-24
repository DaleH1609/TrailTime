import Boom from "@hapi/boom";
import { IdSpec, TraillistArraySpec, TraillistSpec, TraillistSpecPlus } from "../models/joi-schemas.js";
import { db } from "../models/db.js";
import { validationError } from "./logger.js";

export const traillistApi = {
    find: {
      auth: {
        strategy: "jwt",
      },
        handler: async function (request, h) {
          try {
            const traillists = await db.traillistStore.getAllTraillists();
            return traillists;
          } catch (err) {
            return Boom.serverUnavailable("Database Error");
          }
      },
      tags: ["api"],
      response: { schema: TraillistArraySpec, failAction: validationError },
      description: "Get all Traillists",
      notes: "Returns all Traillists",
    },

  findOne: {
    auth: {
      strategy: "jwt",
    },
    async handler(request) {
      try {
        const traillist = await db.traillistStore.getTraillistById(request.params.id);
        if (!traillist) {
          return Boom.notFound("No traillist with this id");
        }
        return traillist;
      } catch (err) {
        return Boom.serverUnavailable("No Traillist with this id");
      }
    },
    tags: ["api"],
    description: "Find a Traillist",
    notes: "Returns a Traillist",
    validate: { params: { id: IdSpec }, failAction: validationError },
    response: { schema: TraillistSpecPlus, failAction: validationError },
  },


  create: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const traillist = request.payload;
        const newTraillist = await db.traillistStore.addTraillist(traillist);
        if (newTraillist) {
          return h.response(newTraillist).code(201);
        }
        return Boom.badImplementation("error creating traillist");
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Create a Traillist",
    notes: "Returns the newly created traillist",
    validate: { payload: TraillistSpec, failAction: validationError },
    response: { schema: TraillistSpecPlus, failAction: validationError },
  },

  deleteOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const traillist = await db.traillistStore.getTraillistById(request.params.id);
        if (!traillist) {
          return Boom.notFound("No trail list with this id");
        }
        await db.traillistStore.deleteTraillistById(traillist._id);
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("No trail list with this id");
      }
    },
    tags: ["api"],
    description: "Delete a traillist",
    validate: { params: { id: IdSpec }, failAction: validationError },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        await db.traillistStore.deleteAllTraillists();
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Delete all TraillistApi",
  },
};