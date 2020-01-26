import { getPostsString } from '../types/Config';
import { PostQuery } from '../types/Post';

export const getPosts = (queryParams: Array<PostQuery>, page: number) => {
  let reqString = `${getPostsString}?${queryParams.map(
    query => query.Name + '=' + query.Param + '&'
  )}page=${page}`;
};
