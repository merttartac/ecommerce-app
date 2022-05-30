const Post = require('../models/Post');

//GET ALL POSTS
const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.json({ message: error })
    }
};

//GET SPECIFIC POST
const getPostById = async (req, res) => {
    try {
        const removedPost = await Post.findById(req.params.postId);
        res.json(removedPost);
    } catch (error) {
        res.json({ message: error })
    }
};

//DELETE SPECIFIC POST
const deletePostById = async (req, res) => {
    try {
        const post = await Post.remove({ _id: req.params.postId });
        res.json(post);
    } catch (error) {
        res.json({ message: error })
    }
};

//UPDATE SPECIFIC POST
const updatePostById = async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId },
            {
                $set: {
                    title: req.body.title,
                    description: req.body.description
                }
            })
        res.json(updatedPost);
    } catch (error) {
        res.json({ message: error })
    }
};

//SUBMIT NEW POST
const submitPost = async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save()
        res.json(savedPost);
    } catch (error) {
        res.json({ message: error })
    }
};

module.exports = {
    getPosts,
    getPostById,
    deletePostById,
    updatePostById,
    submitPost
};