import mongoose, { Schema } from 'mongoose';
import { User } from '../types/User';

const UserSchema: Schema = new Schema({
  UserName: {
    type: String,
    required: true
  },
  UserEmail: {
    type: String,
    required: true
  },
  Password: {
    type: String
  },
  Avatar: {
    type: String
  },
  Posts: {
    type: Array
  }
});

export default mongoose.model<User>('Users', UserSchema);
