import Mongoose from "mongoose";

const { Schema } = Mongoose;

const noticeSchema = new Schema({
  post: String,
  urgency: String,
  userid: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Notice = Mongoose.model("Notice", noticeSchema);