const ITEMS_PER_FETCH = 5;
import Posts from "../models/Posts";
import { Post } from "../types/Post";
import { generateError } from "../util/generateError";
import { Query } from "../types/Queries";
import { Error } from "../types/Error";
import debug from "../util/debug";

//extracts an email out of a post
const stripEmail = (post: Post) => {
  if (post && post.userinfo && post.userinfo.email) post.userinfo.email = "";
  return post;
};

export const saveNewPost = async (req): Promise<Post> => {
  try {
    let newPost: Post = new Posts({
      userinfo: req.body.userinfo,
      game: req.body.game,
      projecttype: req.body.projecttype,
      downloadmirrors:
        req.body.downloadmirrors === null
          ? []
          : req.body.downloadmirrors === undefined
          ? []
          : req.body.downloadmirrors,
      projectmirrors:
        req.body.projectmirrors === null
          ? []
          : req.body.projectmirrors === undefined
          ? []
          : req.body.projectmirrors,
      images: req.body.images,
      projecttitle: req.body.projecttitle,
      description: req.body.description
    });
    await newPost.save();
    return stripEmail(newPost);
  } catch (err) {
    throw err;
  }
};

//Supported queries: Game, Project Type, Username
export const getPostsByQuery = async (reqQueries): Promise<Post[] | Error> => {
  try {
    let queries: Array<Query> = [];
    for (let queryType in reqQueries) {
      queries.push({ key: queryType, value: reqQueries[queryType] });
    }
    console.log("QUERIES", queries);
    let page: number = parseInt(queries.pop().value, 10);
    let searchParam = {};
    if (!page) return generateError("PAGE_REQUIRED");
    if (queries.length > 0)
      queries.map(query => {
        if (query.key === "username")
          searchParam["userinfo.username"] = query.value;
        else searchParam[query.key] = query.value;
      });
    debug(searchParam);
    let post: Array<Post> = await Posts.find(searchParam)
      .sort({ date: -1 })
      .skip((page - 1) * ITEMS_PER_FETCH)
      .limit(ITEMS_PER_FETCH);
    if (post.length === 0) return generateError("REACHED_BOTTOM");
    post.map(p => stripEmail(p));
    return post;
  } catch (err) {
    debug("# # # THROWN IN getPostsByQuery: ", err);
    return generateError("CANNOT_FIND_POSTS");
  }
};
export const getPostByID = async (id: string): Promise<Post | Error> => {
  try {
    let post: Post = await Posts.findOne({ _id: id });
    return stripEmail(post);
  } catch (err) {
    debug(err);
    return generateError("CANNOT_FIND_POST_BY_ID");
  }
};
