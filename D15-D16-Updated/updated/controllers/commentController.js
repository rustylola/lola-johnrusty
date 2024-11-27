import Comment from '../models/Comment.js';
import Blog from '../models/Blog.js';

// Add a Comment
const addComment = async (req, res) => {
    // TODO: Implement the functionality to add a comment to a blog post
    console.log('add');
};

// Get Comments for a Blog
const getCommentsByBlog = async (req, res) => {
    // TODO: Implement the functionality to retrieve comments for a specific blog post
    console.log('get');
};

// Delete a Comment
const deleteComment = async (req, res) => {
    // TODO: Implement the functionality to delete a specific comment
    console.log('delete');
};

export { addComment, getCommentsByBlog, deleteComment };