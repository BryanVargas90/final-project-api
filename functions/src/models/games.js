import { Schema } from "mongoose";
import { model } from "mongoose";

const SessionSchema = new Schema({
  game: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Session = model("Session", SessionSchema);
export default Session;
