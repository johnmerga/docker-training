// write basic express server   //
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB: ", err.message);
  });
app.get("/", (req, res) => {
  res.send("Hello World! from Docker and it works.");
});

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
