import { Router } from 'express';

const router = Router();

import {getAllJobs, getJob, createJob, updateJob, deleteJob} from '../controllers/jobController.js';
import { validateJobInput, validateIdParam } from '../middleware/validationMiddleware.js';

// traditional way
// router.get('/', getAllJobs);
// router.post('/', createJob);

// Alternative way
router.route('/').get(getAllJobs).post(validateJobInput, createJob);
router.route('/:id')
    .get(validateIdParam, getJob)
    .patch(validateIdParam, validateJobInput, updateJob)
    .delete(validateIdParam, deleteJob);

export default router;
