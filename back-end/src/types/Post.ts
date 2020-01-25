import { Document } from 'mongoose';

// export enum Games {
//   HaloCustomEdition,
//   HaloTwoVista,
//   HaloCE,
//   MasterChiefCollection
// }

// export enum ProjectType {
//   CustomMap,
//   ModdedMap,
//   Mod,
//   Utility
// }

interface Link {
  Source: string;
  URL: string;
}

export interface Post extends Document {
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
