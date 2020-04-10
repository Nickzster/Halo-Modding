import { Document } from "mongoose";

export interface Comment extends Document {
  user: string;
  postid: string;
  commentText: string;
  date: Date;
}
