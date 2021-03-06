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
    type: [
      {
        source: String,
        url: String
      }
    ],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  downloadmirrors: {
    type: [
      {
        source: String,
        url: String
      }
    ]
  },
  projectmirrors: {
    type: [
      {
        source: String,
        url: String
      }
    ]
  },
  userinfo: {
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model<Post>('Posts', PostSchema);
