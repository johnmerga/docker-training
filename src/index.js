// write basic express server   //
import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World! from Docker and it works.");
});

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
