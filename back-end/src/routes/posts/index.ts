import express from "express";
import { router as GetPosts } from "./read";
import { router as AddPosts } from "./create-update";

const router: express.Router = express.Router();
//Gets posts from specified game
router.use(GetPosts);

//Desc: Adds a post to the database.
//Params in the request specify which cluster to save the post to.
router.use(AddPosts);

export { router };
