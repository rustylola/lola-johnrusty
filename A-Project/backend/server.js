import 'express-async-errors';
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import { body, validationResult } from 'express-validator';
import "dotenv/config";

// Routers
import jobRouter from './routes/jobRouter.js';

// Middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';

// Init Express
const app = express();

if(process.env.NODE_ENV === 'DEVELOPMENT'){
    app.use(morgan("dev"));
}

app.use(express.json());

app.post('/api/test', 
    // Using Express validator
    [body('name')
        .notEmpty().withMessage('Name is required.')
        .isLength({min:50}).withMessage('Name must be at least 50 Characters.')], (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            const errorMessages = errors.array().map((error) => error.msg);
            return res.status(400).json({errors: errorMessages});
        }
        next();
    },
    (req,res) => {
    const {name} = req.body;
    res.json({message: `hello ${name}`});
});

app.get('/', (req,res) => {
    res.send('Hello world');
});

// JOBS API
app.use('/api/jobs',jobRouter);

// Resource not found middleware
app.use('*', (req,res) =>{
    res.status(404).json({message: "Not Found"});
});

// Error Middleware
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 510
// Connect to MongoDB
try {
    await mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));
    mongoose.connect(process.env.MONGO_URI)
    

    app.listen(port, () => {
        console.log(`Server running on Port:${port} ...`);
    });
} catch (error) {
    console.log(error);
    process.exit(1);
}