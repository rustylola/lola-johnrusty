import express from 'express'
import cors from 'cors'
import "dotenv/config";
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js'
import myHotelRoutes from './routes/myHotelRoutes.js'
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from 'cloudinary'

// cloudinary.config({
//   cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
//   api_key:process.envCLOUDINARY_API_KEY,
//   api_secret:process.envCLOUDINARY_API_SECRET,
// })

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

mongoose.connect(process.env.MONGO_URI)


const app = express();

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use("/api/my-hotels", myHotelRoutes);


app.listen(3000, () => {
  console.log("server running on localhost 3000")
})