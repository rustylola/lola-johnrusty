import express from 'express';
import { createBlog, getBlogs, getBlogById, updateBlog, deleteBlog} from '../controllers/blogController.js';
import { addComment, getCommentsByBlog, deleteComment} from '../controllers/commentController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Routes
router.post('/', authMiddleware, createBlog);
router.get('/', getBlogs);
router.get('/:id', getBlogById);
router.put('/:id', authMiddleware, updateBlog);
router.delete('/:id', authMiddleware, deleteBlog);

// Delete blogs with comment
router.delete('/:blogId/comments/:id', authMiddleware, deleteComment);

export default router;
