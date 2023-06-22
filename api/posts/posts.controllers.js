const Post = require("../../models/Post");

exports.fetchPost = async (postId, next) => {
  try {
    const foundPost = await Post.findById(postId);
    return foundPost;
  } catch (error) {
    return next(error);
  }
};

exports.postsCreate = async (req, res, next) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    return next(error);
  }
};

exports.postsDelete = async (req, res, next) => {
  try {
    await req.post.deleteOne();
    return res.status(204).end();
  } catch (error) {
    return next(error);
  }
};

exports.postsUpdate = async (req, res, next) => {
  try {
    await req.post.updateOne(req.body);
    res.status(204).end();
  } catch (error) {
    return next(error);
  }
};

exports.postsGet = async (req, res, next) => {
  try {
    const posts = await Post.find().select("-__v");
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.postGet = async (req, res, next) => {
  try {
    return res.status(200).json(req.post);
  } catch (error) {
    return next(error);
  }
};
