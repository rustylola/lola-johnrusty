import { StatusCodes } from "http-status-codes";
import Job from "../models/jobModel.js";
import User from "../models/userModel.js";

export const getCurrentUser = async (req, res) => {
    res.staus(StatusCodes.OK).json({message:'Get user'});
};

export const getApplicationStats = async (req, res) => {
    res.staus(StatusCodes.OK).json({message:'Get stats'});
};

export const updateUser = async (req, res) => {
    res.staus(StatusCodes.OK).json({message:'Update user'});
};