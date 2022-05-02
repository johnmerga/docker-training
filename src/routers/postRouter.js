import express from "express";
// import Post from "../models/post";
import {
  getAllPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
} from "../controllers/postController.js";

const router = express.Router();

//endpoint: /api/v1/posts
router
.route("/")
.get(getAllPosts)
.post(createPost);

// endpoint: /api/v1/posts/:id
router
.route('/:id')
.get(getPostById)
.patch(updatePost)
.delete(deletePost);

export { router };
