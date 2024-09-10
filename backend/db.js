require('dotenv').config();
const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI; 

const connectToDatabase = async () => {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB via Mongoose');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectToDatabase;