// app.js
const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models/index');
const postController = require('./controllers/postController');
const commentController = require('./controllers/commentController')
const Post = require('./models/post');
const Comment = require('./models/commentModel')

Comment.belongsTo(Post);
Post.hasMany(Comment)

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static('views'));

// Routes
app.get('/api/get-posts', postController.getAllUsers);
app.post('/api/add_post', postController.addPost);
app.get('/api/get_comment/:id', commentController.getAllComments);
app.post('/api/add_comment/:id', commentController.addComment);
// app.put('/api/users/:id', userController.updateUser);
// app.delete('/api/users/:id', userController.deleteUser);

// Sync Sequelize models with the database
sequelize
    // .sync({ force: true })
    .sync()
    // .then(() => {
    //     return Post.create({
    //         post_link: 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png', description: 'this is geeksforgeeks images'
    //     });
    // })
    // .then(() => {
    //     return Comment.create({ comment_description: 'mudasir is a good boy', postId: 1 });
    // })
    .then(() => {
        // Start the server after syncing models
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch(err => console.error('Error syncing models:', err));
