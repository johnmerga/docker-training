import express from "express";
import bodyParser from "body-parser";
import "./db/connectMongo";

import { mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB: ", err.message);
  });


const postsRouter = require("./routers/posts");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/api/v1/posts", postsRouter);

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
