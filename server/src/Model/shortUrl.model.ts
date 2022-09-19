import mongoose, { Document } from "mongoose";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("qwertyuiopasdfghjklzxcvbnm1234567890", 6);

export interface ShortURL extends Document{
    shortID: string,
    destination: string
}


const shortURLSchema = new mongoose.Schema({
    shortID: {
        type: String,
        unique: true,
        required: true,
        default: () => nanoid(),
    },
    destination: { type: String, required: true }
});

const shortURL = mongoose.model<ShortURL>("shortURL", shortURLSchema);

export default shortURL;