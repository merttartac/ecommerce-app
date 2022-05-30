const express = require('express');
const postsRouter = express.Router();
const postsController = require('../controllers/posts.controller');

//MIDDLEWARE FOR LOGGING
postsRouter.use((req, res, next) => {
    console.log('ip address: %o', req.ip);
    next();
})

postsRouter.get('/', postsController.getPosts);
postsRouter.get('/:postId', postsController.getPostById);
postsRouter.delete('/:postId', postsController.deletePostById)
postsRouter.patch('/:postId', postsController.updatePostById);
postsRouter.post('/', postsController.submitPost);

module.exports = postsRouter;