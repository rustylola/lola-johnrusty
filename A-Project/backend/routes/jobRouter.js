import { Router } from 'express';

const router = Router();

import {getAllJobs, getJob, createJob, updateJob, deleteJob} from '../controllers/jobController.js';

// traditional way
// router.get('/', getAllJobs);
// router.post('/', createJob);

// Alternative way
router.route('/').get(getAllJobs).post(createJob);
router.route('/:id').get(getJob).patch(updateJob).delete(deleteJob);

export default router;
