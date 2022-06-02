import Mongoose from "mongoose";

const { Schema } = Mongoose;

const reviewSchema = new Schema({
  trail: String,
  review: String,
  rating: Number,
  userid: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Review = Mongoose.model("Review", reviewSchema);