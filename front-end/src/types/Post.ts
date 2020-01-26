export interface Post {
  avatarurl?: string;
  username: string;
  projecttitle: string;
  game: string;
  projecttype: string;
  images: Array<string>;
  description: string;
  downloadmirrors: Array<{ Source: string; URL: string }>;
  projectmirrors: Array<{ Source: string; URL: string }>;
  projectstate?: string;
  isverified?: boolean;
}
