require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./db');
const foodRoutes = require('./routes/foodRoutes');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectToDatabase();

// Routes
app.use('/api/foods', foodRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});