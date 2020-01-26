import { Document } from 'mongoose';

interface Link {
  source: string;
  url: string;
}

export interface Post extends Document {
  game: String;
  projecttype: String;
  projecttitle: string;
  images: Array<string>;
  description: string;
  downloadmirrors: Array<Link>;
  projectmirrors: Array<Link>;
  userinfo: {
    email: string;
    username: string;
  };
}
