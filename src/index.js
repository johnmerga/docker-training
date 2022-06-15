//import libraries
import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import Redis from "ioredis";
import connectRedis from "connect-redis";
import cors from "cors";
console.log(process.env.MONGODB_URI);
// local imports
import "./db/connectMongo.js";
import { router as postRouter } from "./routes/postRouter.js";
import { router as authRouter } from "./routes/userRoutes.js";

let RedisStore = connectRedis(session);
let redisClient = new Redis({
  host: process.env.REDIS_URL,
  port: process.env.REDIS_PORT,
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
// telling express to trust whatever our nginx server is adding onto those headers
app.enable("trust proxy");
/* Setting up the session middleware. */
app.use(
  session({
    store: new RedisStore({
      client: redisClient,
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      resave: false,
      saveUninitialized: false,
      httpOnly: true, // javascript can't access it
      maxAge: 300000,
    },
  })
);

app.use(bodyParser.json());

//routers
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/users", authRouter);
app.use("/api/v1/", (req, res, next) => {
    res.send("You are not supposed to be here");
  });

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
