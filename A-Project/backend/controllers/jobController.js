import Job from '../models/jobModel.js';
import { StatusCodes } from 'http-status-codes';
import { NotFoundError } from '../errors/customErrors.js';

// Get Jobs
export const getAllJobs = async (req,res) => {
    const jobs = await Job.find({});
    res.status(StatusCodes.OK).json({jobs});
};

// Create Jobs
export const createJob = async (req,res) => {
    const dataBody = req.body;
    const job = await Job.create(dataBody);
    res.status(StatusCodes.CREATED).json({ message:"Job Created Successfully",job });
};

// Get Job
export const getJob = async (req, res) => {
    const {id} = req.params;
    const job = await Job.findById(id);
    console.log(job);
    if(!job) throw new NotFoundError(`Job ID:${id} does not exist`);
    res.status(StatusCodes.OK).json({job});
};

// Update Job
export const updateJob = async (req, res) => {   
    const {id} = req.params;
    const updatedJob = await Job.findByIdAndUpdate(id,req.body, {
        new: true,
    });
    console.log(updateJob);
    if(!updatedJob) throw new NotFoundError(`Job ID:${id} does not exist`);

    res.status(StatusCodes.OK).json({message: "Job Modified Successfully.",job: updatedJob});
};

// Delete Job
export const deleteJob = async (req, res) => {
    const {id} = req.params;
    const removedJob = await Job.findByIdAndDelete(id);
    console.log(removedJob);
    if(!removedJob) throw new NotFoundError(`Job ID:${id} does not exist`);
   
    res.status(StatusCodes.OK).json({message: "Job Deleted.", job: removedJob});
};