const ITEMS_PER_FETCH = 5;
import Posts from '../models/Posts';
import { Post } from '../types/Post';
import { generateError } from '../util/generateError';
import { Error } from '../types/Error';
import { formatGame, formatProjectType } from '../util/textFormat';

//TODO: Figure out how to mend parameters Game and Project Type so that we can reduce duplicate code
export const getPostsByParamType = async (
  param: string,
  page: number
): Promise<Array<Post> | Error> => {
  let searchParam;
  if (formatGame(param) !== 'INVALID_GAME')
    searchParam = { Game: formatGame(param) };
  else if (formatProjectType(param) !== 'INVALID_PROJECT_TYPE')
    searchParam = { ProjectType: formatProjectType(param) };
  else throw generateError('INVALID_PARAM');
  console.log(searchParam);
  try {
    let post = await Posts.find(searchParam)
      .skip((page - 1) * ITEMS_PER_FETCH)
      .limit(ITEMS_PER_FETCH);
    if (post.length === 0) return generateError('REACHED_BOTTOM');
    return post;
  } catch (err) {
    return generateError('CANNOT_FIND_POSTS');
  }
};

export const getPostByID = async (id: string): Promise<Post | Error> => {
  try {
    return await Posts.findOne({ _id: id });
  } catch (err) {
    console.log(err);
    return generateError('CANNOT_FIND_POST_BY_ID');
  }
};
