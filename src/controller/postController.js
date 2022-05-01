import Post from "../models/postModels";

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json({
      status: "success",
      results: posts.length,
      data: {
        posts,
      },
    });
  } catch (e) {
    res.status(500).json({ status: "failed" });
  }
};

//get post by id
const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (e) {
    res.status(500).json({ status: "failed" });
  }
};

// create post
const createPost = async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        post: newPost,
      },
    });
  } catch (e) {
    res.status(500).json({ status: "failed" });
  }
};

// update post
const updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.json({
      status: "success",
      data: {
        post: updatedPost,
      },
    });
  } catch (e) {
    res.status(500).json({ status: "failed" });
  }
};

// delete post
const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (e) {
    res.status(500).json({ status: "failed" });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  deletePost,
  updatePost,
};
