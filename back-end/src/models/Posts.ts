import mongoose, { Schema } from 'mongoose';
import { Post } from '../types/Post';

const PostSchema: Schema = new Schema({
  Game: {
    type: String,
    required: true
  },
  ProjectType: {
    type: String,
    required: true
  },
  ProjectTitle: {
    type: String,
    required: true
  },
  Images: {
    type: Array,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  DownloadMirrors: [
    {
      Source: String,
      URL: String
    }
  ],
  ProjectMirrors: [
    {
      Source: String,
      URL: String
    }
  ],
  UserInfo: {
    UserName: {
      type: String,
      required: true
    },
    UserEmail: {
      type: String,
      required: true
    }
  }
});

export default mongoose.model<Post>('Posts', PostSchema);
