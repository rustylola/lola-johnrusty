import express from 'express';
import { addComment, getCommentsByBlog, deleteComment} from '../controllers/commentController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/:blogId', authMiddleware, addComment);
router.get('/:blogId', getCommentsByBlog);

export default router;
