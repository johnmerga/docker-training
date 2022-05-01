import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
  },
  body: {
    type: String,
    required: [true, "Please add some content"],
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
