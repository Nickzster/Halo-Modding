export const formatGame = (game: string) => {
  switch (game) {
    case 'halo-custom-edition':
      return 'HaloCustomEdition';
    case 'halo-2-vista':
      return 'HaloTwoVista';
    case 'halo-ce':
    case 'halo-combat-evolved':
      return 'HaloCE';
    case 'master-chief-collection':
      return 'MasterChiefCollection';
    default:
      throw 'INVALID_GAME';
  }
};

export const formatProjectType = (projectType: string) => {
  switch (projectType) {
    case 'util':
    case 'utility':
      return 'Utility';
    case 'custom-map':
    case 'custom-maps':
      return 'CustomMap';
    case 'modded-map':
      return 'ModdedMap';
    case 'mod':
      return 'Mod';
    default:
      throw 'INVALID_PROJECT_TYPE';
  }
};
