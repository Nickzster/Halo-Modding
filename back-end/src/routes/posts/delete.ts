import express from "express";

const router: express.Router = express.Router();

//Desc: Just to test the endpoint
router.get("/test", (req: express.Request, res: express.Response) => {
  res.send(`<h1>Hello, from Posts!</h1>`);
});

export { router };
