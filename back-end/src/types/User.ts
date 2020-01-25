import { Post } from './Post';
import { Document } from 'mongoose';

export interface User extends Document {
  UserName: string;
  UserEmail: string;
  Password?: string;
  Avatar?: string;
  Posts?: Array<Post>;
}
