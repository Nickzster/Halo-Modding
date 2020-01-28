interface UserInfo {
  username: string;
  email: string;
}

export interface Mirror {
  Source: string;
  URL: string;
}

export interface Post {
  avatarurl?: string;
  userinfo: UserInfo;
  projecttitle: string;
  game: string;
  projecttype: string;
  images: Array<string>;
  description: string;
  downloadmirrors: Array<Mirror>;
  projectmirrors: Array<Mirror>;
  projectstate?: string;
  isverified?: boolean;
}
