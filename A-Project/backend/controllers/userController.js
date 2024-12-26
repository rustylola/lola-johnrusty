import { StatusCodes } from "http-status-codes";
import Job from "../models/jobModel.js";
import User from "../models/userModel.js";

export const getCurrentUser = async (req, res) => {
    const user = await User.findOne({ _id:req.user.userId });
    const userWithoutPassword = user.toJSON();
    res.status(StatusCodes.OK).json({user: userWithoutPassword});
};

export const updateUser = async (req, res) => {
    const obj = {...req.body};
    // remove password upon update
    delete obj.password;
    const updatedUser = await User.findByIdAndUpdate(req.user.userId, obj);
    res.status(StatusCodes.OK).json({message:'User updated.'});
};

export const getApplicationStats = async (req, res) => {
    const users = await User.countDocuments();
    const jobs = await Job.countDocuments();

    res.status(StatusCodes.OK).json({users, jobs});
};

