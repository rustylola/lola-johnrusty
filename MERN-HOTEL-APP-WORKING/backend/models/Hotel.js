import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    description: { type: String, required: true },
    imageUrls: [{ type: String, required: true }],
    lastUpdated: { type: Date, default: Date.now },
    pricePerNight: { type: Number, required: true },
    starRating: { type: Number, required: true, min: 1, max: 5 }
});

const Hotel = mongoose.model('Hotel', hotelSchema);

export default Hotel;
