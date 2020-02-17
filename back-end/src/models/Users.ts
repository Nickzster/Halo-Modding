import mongoose, { Schema } from "mongoose";
import { User } from "../types/User";

const UserSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
  },
  avatar: {
    type: String
  }
});

export default mongoose.model<User>("Users", UserSchema);
