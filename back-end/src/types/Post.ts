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

export interface Post extends Document {
  Game: String;
  ProjectType: String;
  ProjectTitle: string;
  Images: Array<string>;
  Description: string;
  DownloadMirrors: Array<string>;
  ProjectMirrors: Array<string>;
  UserInfo: {
    UserEmail: string;
    UserName: string;
  };
}
