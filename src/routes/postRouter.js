import express from "express";
// import Post from "../models/post";
import {
  getAllPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
} from "../controllers/postController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

//endpoint: /api/v1/posts
router
  .route("/")
  .get(authMiddleware, getAllPosts)
  .post(authMiddleware, createPost);

// endpoint: /api/v1/posts/:id
router
  .route("/:id")
  .get(authMiddleware, getPostById)
  .patch(authMiddleware, updatePost)
  .delete(authMiddleware, deletePost);

export { router };
