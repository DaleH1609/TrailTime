import Mongoose from "mongoose";

const { Schema } = Mongoose;

const trailSchema = new Schema({
  title: String,
  location: String,
  type: String,
  latitude: Number,
  longitude: Number,
  traillistid: {
    type: Schema.Types.ObjectId,
    ref: "Traillist",
  },
});

export const Trail = Mongoose.model("Trail", trailSchema);
