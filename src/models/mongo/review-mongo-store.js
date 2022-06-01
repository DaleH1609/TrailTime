import { Review } from "./review.js";

export const reviewMongoStore = {
  async getAllReviews() {
    const review = await Review.find().lean();
    return review;
  },

  async addReview(review) {
    const newReview = new Review(review);
    newReview.save();
 },
};