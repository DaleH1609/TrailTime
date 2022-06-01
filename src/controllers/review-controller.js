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
      const newReview = {
        review: request.payload.review,
        rating: request.payload.rating,
        email: request.payload.email
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


