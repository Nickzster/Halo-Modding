import mongoose, { Schema } from 'mongoose';
import { Post } from '../types/Post';

const PostSchema: Schema = new Schema({
  game: {
    type: String,
    required: true
  },
  projecttype: {
    type: String,
    required: true
  },
  projecttitle: {
    type: String,
    required: true
  },
  images: {
    type: Array,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  downloadmirrors: [
    {
      Source: String,
      URL: String
    }
  ],
  projectmirrors: [
    {
      Source: String,
      URL: String
    }
  ],
  userinfo: {
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  }
});

export default mongoose.model<Post>('Posts', PostSchema);
