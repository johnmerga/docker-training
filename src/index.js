//import libraries
import express from "express";
import bodyParser from "body-parser";


// local imports
import "./db/connectMongo.js";
import {router as postRouter} from "./routers/postRouter.js";






const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/api/v1/posts", postRouter);

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
