interface Link {
  Source: string;
  URL: string;
}

export interface Post {
  Game: String;
  ProjectType: String;
  ProjectTitle: string;
  Images: Array<string>;
  Description: string;
  DownloadMirrors: Array<Link>;
  ProjectMirrors: Array<Link>;
  UserInfo: {
    UserEmail: string;
    UserName: string;
  };
}

export interface PostQuery {
  Name: string;
  Param: string;
}
