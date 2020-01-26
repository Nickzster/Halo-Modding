const ITEMS_PER_FETCH = 5;
import Posts from '../models/Posts';
import { Post } from '../types/Post';
import { generateError } from '../util/generateError';
import validatePost from '../middleware/validators/ValidatePost';
import { Query } from '../types/Queries';
import { Error } from '../types/Error';
import debug from '../util/debug';

const stripEmail = (post: Post) => {
  if (post && post.userinfo && post.userinfo.email) post.userinfo.email = '';
  return post;
};

export const saveNewPost = async (body): Promise<Post> => {
  try {
    let newPost: Post = await validatePost(body);
    await newPost.save();
    return stripEmail(newPost);
  } catch (err) {
    throw err;
  }
};

export const getPostsByQuery = async (
  reqQueries
): Promise<Array<Post> | Error> => {
  try {
    let queries: Array<Query> = [];
    for (let queryType in reqQueries) {
      queries.push({ key: queryType, value: reqQueries[queryType] });
    }
    console.log('QUERIES', queries);
    let page: number = parseInt(queries.pop().value, 10);
    if (!page) return generateError('PAGE_REQUIRED');
    if (queries.length === 0) return generateError('NO_SPECIFIED_PARAMETERS');
    let searchParam = {};
    queries.map(query => (searchParam[query.key] = query.value));
    debug(searchParam);
    let post: Array<Post> = await Posts.find(searchParam)
      .skip((page - 1) * ITEMS_PER_FETCH)
      .limit(ITEMS_PER_FETCH);
    if (post.length === 0) return generateError('REACHED_BOTTOM');
    post.map(p => stripEmail(p));
    return post;
  } catch (err) {
    debug('# # # THROWN IN getPostsByQuery: ', err);
    return generateError('CANNOT_FIND_POSTS');
  }
};

export const getPostByID = async (id: string): Promise<Post | Error> => {
  try {
    let post: Post = await Posts.findOne({ _id: id });
    return stripEmail(post);
  } catch (err) {
    debug(err);
    return generateError('CANNOT_FIND_POST_BY_ID');
  }
};
