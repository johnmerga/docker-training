import express from "express";
// import Post from "../models/post";
import {
  getAllPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
} from "../controllers/postController";

const router = express.Router();

//endpoint: /api/v1/posts
router
    .route("/")
    .get(getAllPosts)
    .post(createPost);
router
    .route("/:id")
    .get(getPostById)
    .patch(updatePost)
    .delete(deletePost);

module.exports = router;
