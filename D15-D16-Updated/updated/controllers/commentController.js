import Comment from '../models/Comment.js';
import Blog from '../models/Blog.js';

// Add a Comment
const addComment = async (req, res) => {
    // TODO: Implement the functionality to add a comment to a blog post
    console.log('add');
    try {
        const { blogId } = req.params;
        const { text } = req.body;
        // Check if blog exist at the moment
        const blog = await Blog.findById(blogId);
        if (!blog) return res.status(404).json({ error: 'Blog not found' });
        
        const comment = await Comment.create({ text, blog: blogId, user: req.user._id });
        res.status(200).json({message:"Comment Added Successfully", comment});

    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get Comments for a Blog
const getCommentsByBlog = async (req, res) => {
    // TODO: Implement the functionality to retrieve comments for a specific blog post
    console.log('get');
    try {
        const { blogId } = req.params;
        
        const blog = await Blog.findById(blogId);
        if (!blog) return res.status(404).json({ error: 'Blog not found' });

        const comment = await Comment.find({blog: blogId});

        res.status(200).json({message:"Success",blog,comment});
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete a Comment
const deleteComment = async (req, res) => {
    // TODO: Implement the functionality to delete a specific comment
    console.log('delete');
    try {
        const { blogId, id } = req.params;
        
         // Check if blog exist at the moment
        const blog = await Blog.findById({_id:blogId});
        if (!blog) return res.status(404).json({ error: 'Blog not found' });

         // Check if comment exist at the moment
        const comment = await Comment.findById({_id:id,blog:blogId});
        if (!comment) return res.status(404).json({ error: 'Comment not found' });
        
        await comment.deleteOne();
        res.status(200).json({message: "Delete Successfully", comment});
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

export { addComment, getCommentsByBlog, deleteComment };