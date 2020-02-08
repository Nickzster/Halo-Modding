import { generateError } from "./generateError";

let validProjectTypes = {
  utility: "utility",
  util: "utility",
  "custom-map": "custom-map",
  "custom-maps": "custom-map",
  "modded-map": "modded-map",
  mod: "mod",
  video: "video",
  multiplayer: "multiplayer",
  "modded-mp": "modded-mp",
  "single-player": "single-player",
  "modded-sp": "modded-sp",
  "custom-firefight": "custom-firefight",
  "modded-firefight": "modded-firefight",
  mappack: "mappack",
  gametype: "gametype",
  "vehicle-asset": "vehicle-asset",
  "weapon-asset": "weapon-asset",
  "character-asset": "character-asset",
  "misc-asset": "misc-asset",
  rp: "rp"
};

let validGames = {
  "halo-custom-edition": "halo-custom-edition",
  "halo-2-vista": "halo-2-vista",
  "halo-ce": "halo-ce",
  "halo-combat-evolved": "halo-ce",
  "master-chief-collection": "master-chief-collection"
};

export const isValidGame = (game: string): string => {
  let verifiedGame = validGames[game];
  if (!!verifiedGame) return verifiedGame;
  else throw generateError("GAME_IS_NULL");
};

export const isValidProjectType = (projectType: string): string => {
  let verifiedProjectType = validProjectTypes[projectType];
  if (!!verifiedProjectType) return verifiedProjectType;
  else throw generateError("PROJECT_TYPE_IS_NULL");
};
