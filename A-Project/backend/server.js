import 'express-async-errors';
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import "dotenv/config";

// Routers
import jobRouter from './routes/jobRouter.js';
import authRouter from './routes/authRouter.js';
// Middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';

// Init Express
const app = express();

if(process.env.NODE_ENV === 'DEVELOPMENT'){
    app.use(morgan("dev"));
}

app.use(express.json());

app.get('/', (req,res) => {
    res.send('Hello world');
});

// JOBS API
app.use('/api/jobs',jobRouter);
// AUTH API
app.use('/api/auth', authRouter);

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