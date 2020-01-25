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
  DownloadMirrors: {
    type: Array
  },
  ProjectMirrors: {
    type: Array
  },
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
