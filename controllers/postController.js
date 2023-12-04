// controllers/userController.js
const postModel = require('../models/post');

class PostController {
    async getAllUsers(req, res) {
        try {
            const posts = await postModel.findAll();
            res.json(posts);
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }

    async addPost(req, res) {
        try {
            const { post_link, description } = req.body;
            const newPost = await postModel.create({ post_link, description });
            res.json(newPost);
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }

    async updateUser(req, res) {
        try {
            const postId = req.params.id;
            const { post_link, description } = req.body;

            const [updatedRows] = await userModel.update({ post_link, description }, { where: { id: postId } });

            if (updatedRows === 0) {
                return res.status(404).send('User not found');
            }

            const updatedPost = await postModel.findByPk(postId);
            res.json(updatedPost);
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }

    async deleteUser(req, res) {
        try {
            const postId = req.params.id;

            const deletedPost = await userModel.destroy({ where: { id: postId } });

            if (deletedPost === 0) {
                return res.status(404).send('User not found');
            }

            res.send('User deleted successfully');
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }
}

module.exports = new PostController();
