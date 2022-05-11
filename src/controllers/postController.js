import Post from "../models/postModels.js";


/**
 * It gets all the posts from the database and sends them back to the client
 * @param req - The request object. This contains information about the HTTP request that raised the
 * event.
 * @param res - The response object that will be sent back to the client.
 */
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json({
      status: "success",
      data: {
        posts,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
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

/**
 * It finds a post by its id and returns it
 * @param req - The request object.
 * @param res - The response object.
 * @returns The post with the id that matches the id in the url.
 */

const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({
        status: "fail",
        message: "Post not found",
      });
    }
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


/**
 * We're using the findByIdAndUpdate method to find the post by its id and update it with the new data
 * that we're passing in the request body
 * @param req - The request object.
 * @param res - The response object that we will use to send back a response to the client.
 */
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

/**
 * It finds a post by its id and deletes it
 * @param req - The request object. This contains information about the HTTP request that raised the
 * event.
 * @param res - The response object that we will use to send back a response to the client.
 */
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

export { getAllPosts, createPost, getPostById, updatePost, deletePost };
