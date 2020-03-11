import express from "express";
/* Routes */
import { router as Posts } from "./posts";
import { router as Users } from "./users";
// import { router as Users } from "./users";
const router: express.Router = express.Router();

router.use("/posts", Posts);
router.use("/users", Users);
// router.use("/users", Users);

export default router;
