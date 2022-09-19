import mongoose, { Document } from "mongoose";
import { ShortURL } from "./shortUrl.model";

interface Analytics extends Document {
  shortURL: ShortURL;
}

const schema = new mongoose.Schema(
  {
    shortURL: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "shortURL",
      required: true,
    },
  },
  { timestamps: true }
);

const analytics = mongoose.model<Analytics>("analytics", schema);

export default analytics;