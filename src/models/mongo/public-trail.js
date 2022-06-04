import Mongoose from "mongoose";

const { Schema } = Mongoose;

const publicTrailSchema = new Schema({
  pTitle: String,
  pLocation: String,
  pType: String,
  pLatitude: Number,
  pLongitude: Number,
  pCategory: String,
  userid: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const publicTrail = Mongoose.model("publicTrail", publicTrailSchema);