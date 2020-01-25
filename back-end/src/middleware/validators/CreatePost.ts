import { checkForToxicity } from './Toxicity/toxicity';
import { Post } from '../../types/Post';
import { Error } from '../../types/Error';
import { generateError } from '../../util/generateError';
import Posts from '../../models/Posts';

/* 
Validate Post
-Needs to make sure all fields are present
-Need to make sure all typed fields do not have toxicity or spam
*/

const checkProjectTypeString = (projectType: string): String => {
  if (
    projectType !== 'CustomMap' &&
    projectType !== 'ModdedMap' &&
    projectType !== 'Utility' &&
    projectType !== 'Mod'
  )
    throw 'INVALID_PROJECT_TYPE';
  else return projectType;
};

const checkGameString = (game: string): String => {
  if (
    game !== 'HaloCustomEdition' &&
    game !== 'HaloTwoVista' &&
    game !== 'HaloCE' &&
    game !== 'MasterChiefCollection'
  )
    throw 'INVALID_GAME';
  else return game;
};

const checkMandatoryFields = (data: any): Array<Error> => {
  let Errors: Array<Error> = [];

  if (!(data && data.UserInfo)) Errors.push(generateError('INVALID_USER_INFO'));
  if (!(data.UserInfo && data.UserInfo.UserName))
    Errors.push(generateError('USER_NAME_IS_NULL'));
  if (
    !(data.UserInfo && data.UserInfo.UserEmail) ||
    data.UserInfo.UserEmail.search('@') === -1
  )
    Errors.push(generateError('EMAIL_IS_NULL'));
  if (data.Game === null || data.Game === undefined)
    Errors.push(generateError('GAME_IS_NULL'));
  if (data.ProjectType === null || data.ProjectType === undefined)
    Errors.push(generateError('PROJECT_TYPE_IS_NULL'));
  if (data.ProjectTitle === null || data.ProjectType === undefined)
    Errors.push(generateError('PROJECT_TITLE_IS_NULL'));
  if (
    data.Images === null ||
    data.Images === undefined ||
    data.Images.length === 0
  )
    Errors.push(generateError('IMAGES_IS_INVALID'));
  if (data.Description === undefined || data.Description === null)
    Errors.push(generateError('DESCRIPTION_IS_NULL'));
  return Errors;
};

const validatePost = async (data): Promise<Post> => {
  let Errors: Array<Error> = checkMandatoryFields(data);
  if (Errors.length > 0) throw Errors;
  let isToxic = await checkForToxicity([
    data.UserInfo.UserName,
    data.Description,
    data.ProjectTitle
  ]);
  if (isToxic) throw generateError('TOXICITY_DETECTED');
  let newPost: Post = new Posts({
    UserInfo: data.UserInfo,
    Game: checkGameString(data.Game),
    ProjectType: checkProjectTypeString(data.ProjectType),
    DownloadMirrors:
      data.DownloadMirrors === null
        ? []
        : data.DownloadMirrors === undefined
        ? []
        : data.DownloadMirrors,
    ProjectMirrors:
      data.ProjectMirrors === null
        ? []
        : data.ProjectMirrors === undefined
        ? []
        : data.ProjectMirrors,
    Images: data.Images,
    ProjectTitle: data.ProjectTitle,
    Description: data.Description
  });
  return newPost;
};

export default validatePost;
