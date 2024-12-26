import { body, param, validationResult } from 'express-validator';
import { BadRequestError, NotFoundError } from '../errors/customErrors.js';
import { JOB_STATUS, JOB_TYPE } from '../utils/constants.js';
import Job from '../models/jobModel.js';
import mongoose from 'mongoose';

const withValidationErrors = (validateValues) => {
    return [
        validateValues, 
        (req, res, next) => {
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                const errorMessages = errors.array().map((error) => error.msg);
                if(errorMessages[0].startsWith('Job ID:')){
                    throw new NotFoundError(errorMessages);
                }
                throw new BadRequestError(errorMessages);
            }
            next();
        },
    ];
}

export const validateJobInput = withValidationErrors([
    body('company')
        .notEmpty().withMessage('Company is required.'),
    body('position')
        .notEmpty().withMessage('Position is required.'),
    body('jobLocation')
        .notEmpty().withMessage('Job Location is required.'),
    body('jobStatus')
        .isIn(Object.values(JOB_STATUS)).withMessage("Invalid status."),
    body('jobType')
        .isIn(Object.values(JOB_TYPE)).withMessage("Invalid type."),
]);

export const validateIdParam = withValidationErrors([
    // must be match on routes
    param('id').custom(async (value) => {
        const isValid = mongoose.Types.ObjectId.isValid(value);
        if(!isValid) throw new BadRequestError('Invalid MongoDB ID');

        const job = await Job.findById(value);
        if(!job) throw new NotFoundError(`Job ID:${value} does not exist`);
    })
]);