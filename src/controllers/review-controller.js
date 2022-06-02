import { db } from "../models/db.js";

export const reviewController = {
  index: {
    handler: async function (request, h) {
      const reviews = await db.reviewStore.getAllReviews();
      const viewData = {
        title: "Review Trail Time",
        reviews: reviews
      };
      return h.view("review-view", viewData);
    },
  },

  addReview: {
    handler: async function (request, h) {
      const user = await db.userStore.getUserById(request.params.id);
      const newReview = {
        trail: request.payload.trail,
        review: request.payload.review,
        rating: request.payload.rating,
        user: user
      };
      await db.reviewStore.addReview(newReview);
      return h.redirect("/review");
    },
  },

  deleteReview: {
    handler: async function (request, h) {
      const newReview = {
        review: request.payload.review,
      };
      await db.reviewStore.addReview(newReview);
      return h.redirect("/review");
    },
  },
};


