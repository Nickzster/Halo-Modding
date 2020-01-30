import { checkForToxicity } from './Toxicity/toxicity';
import { Post } from '../../types/Post';
import { Error } from '../../types/Error';
import { generateError } from '../../util/generateError';
import { isValidGame, isValidProjectType } from '../../util/validNames';
import Posts from '../../models/Posts';

/* 
Validate Post
-Needs to make sure all fields are present
-Need to make sure all typed fields do not have toxicity or spam
*/

const checkMandatoryFields = (data: any): Array<Error> => {
  let Errors: Array<Error> = [];
  if (!(data && data.userinfo)) Errors.push(generateError('INVALID_USER_INFO'));
  if (!(data && data.userinfo && data.userinfo.username))
    Errors.push(generateError('USER_NAME_IS_NULL'));
  if (
    !(data && data.userinfo && data.userinfo.email) ||
    data.userinfo.email.search('@') === -1
  )
    Errors.push(generateError('EMAIL_IS_NULL'));
  if (data && (data.game === null || data.game === undefined))
    Errors.push(generateError('GAME_IS_NULL'));
  if (data && (data.projecttype === null || data.projecttype === undefined))
    Errors.push(generateError('PROJECT_TYPE_IS_NULL'));
  if (data && (data.projecttitle === null || data.projecttype === undefined))
    Errors.push(generateError('PROJECT_TITLE_IS_NULL'));
  if (
    data &&
    (data.images === null ||
      data.images === undefined ||
      data.images.length === 0)
  )
    Errors.push(generateError('IMAGES_IS_INVALID'));
  if (data && (data.description === undefined || data.description === null))
    Errors.push(generateError('DESCRIPTION_IS_NULL'));
  return Errors;
};

const validatePost = async (data): Promise<Post> => {
  let Errors: Array<Error> = checkMandatoryFields(data);
  if (Errors.length > 0) throw Errors;
  //TODO: Validate toxicity for Project Mirrors and Download Links (Both Sources & URLS)
  let isToxic = await checkForToxicity([
    data.userinfo.username,
    data.description,
    data.projecttitle
  ]);
  if (isToxic) throw generateError('TOXICITY_DETECTED');
  let newPost: Post = new Posts({
    userinfo: data.userinfo,
    game: isValidGame(data.game),
    projecttype: isValidProjectType(data.projecttype),
    downloadmirrors:
      data.downloadmirrors === null
        ? []
        : data.downloadmirrors === undefined
        ? []
        : data.downloadmirrors,
    projectmirrors:
      data.projectmirrors === null
        ? []
        : data.projectmirrors === undefined
        ? []
        : data.projectmirrors,
    images: data.images,
    projecttitle: data.projecttitle,
    description: data.description
  });
  return newPost;
};

export default validatePost;
