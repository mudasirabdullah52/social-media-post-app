// controllers/userController.js
const commentModel = require('../models/commentModel');

class CommentController {
    async getAllComments(req, res) {
        try {
            const comments = await commentModel.findAll({ where: { postId: req.params.id } });
            res.json(comments);
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }

    async addComment(req, res) {
        try {
            const postId = req.params.id;
            const { comment_description } = req.body;
            const newPost = await commentModel.create({ comment_description, postId });
            res.json(newPost);
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }




}

module.exports = new CommentController();
