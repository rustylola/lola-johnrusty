import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import Hotel from "../models/Hotel.js"; // Import the Hotel model
import verifyToken from "../middleware/auth.js"; // Ensure this middleware is implemented

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer configuration for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB file size limit
  },
});

const router = express.Router();

// Route to create a hotel
router.post(
  "/",
  verifyToken, // Middleware to verify authentication
  upload.array("imageFiles", 6), // Limit to 6 image files
  async (req, res) => {
    try {
      const imageFiles = req.files;
      const newHotel = req.body;

      // Upload images to Cloudinary
      const uploadPromises = imageFiles.map(async (image) => {
        const b64 = Buffer.from(image.buffer).toString("base64");
        const dataURI = `data:${image.mimetype};base64,${b64}`;
        const result = await cloudinary.uploader.upload(dataURI);
        return result.url;
      });

      const imageUrls = await Promise.all(uploadPromises);

      // Add additional hotel details
      newHotel.imageUrls = imageUrls;
      newHotel.lastUpdated = new Date();
      newHotel.userId = req.userId;

      // Save hotel to the database
      const hotel = new Hotel(newHotel);
      await hotel.save();

      res.status(201).json(hotel);
    } catch (error) {
      console.error("Error creating hotel:", error);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

export default router;
