import express from "express";
import router from "./routes";
import { connectDB } from "./config/db";
import cors from "cors";
const app: express.Application = express();

var corsOptions = {
  origin: "https://halomodding.org",
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log("Server Running!"));
connectDB();
