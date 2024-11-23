const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Express app
const app = express();
const port = process.env.PORT || 3000;


// Connect to MongoDB
const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI); 
        console.log('Connected to MongoDB');       
    } catch (error) {
        console.log('Error connecting to MongoDB', error);
    }
}

// Start the server
app.listen(port, ()=> {
    console.log(`Server is running in port ${port}`);
    connectToDatabase();
});
