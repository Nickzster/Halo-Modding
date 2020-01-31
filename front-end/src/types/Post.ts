interface UserInfo {
  username: string;
  email: string;
}

export interface Link {
  source: string;
  url: string;
}

export interface Post {
  avatarurl?: string;
  userinfo: UserInfo;
  projecttitle: string;
  game: string;
  projecttype: string;
  images: Array<Link>;
  description: string;
  downloadmirrors: Array<Link>;
  projectmirrors: Array<Link>;
  projectstate?: string;
  isverified?: boolean;
}
