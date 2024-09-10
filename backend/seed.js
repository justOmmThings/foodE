const mongoose = require('mongoose');
const Food = require('./models/Food');
const connectToDatabase = require('./db');

const foods = [
    // Vegetarian Dishes
    {
      name: "Dal Tadka",
      category: "Vegetarian",
      calories: 180,
      protein: 9.1,
      carbs: 24.0,
      fat: 5.5,
      major_nutrients: "Protein, Fiber, Iron"
    },
    {
      name: "Palak Paneer",
      category: "Vegetarian",
      calories: 240,
      protein: 11.0,
      carbs: 8.0,
      fat: 18.0,
      major_nutrients: "Calcium, Protein, Iron"
    },
    {
      name: "Roti",
      category: "Vegetarian",
      calories: 120,
      protein: 3.0,
      carbs: 24.0,
      fat: 1.5,
      major_nutrients: "Carbohydrates, Fiber"
    },
    {
      name: "Paneer Butter Masala",
      category: "Vegetarian",
      calories: 300,
      protein: 10.0,
      carbs: 15.0,
      fat: 25.0,
      major_nutrients: "Protein, Calcium"
    },
    {
      name: "Chole Bhature",
      category: "Vegetarian",
      calories: 450,
      protein: 12.0,
      carbs: 50.0,
      fat: 20.0,
      major_nutrients: "Protein, Carbohydrates, Fiber"
    },
    {
      name: "Aloo Paratha",
      category: "Vegetarian",
      calories: 210,
      protein: 4.0,
      carbs: 35.0,
      fat: 6.0,
      major_nutrients: "Carbohydrates, Fiber"
    },
    {
      name: "Idli",
      category: "Vegetarian",
      calories: 58,
      protein: 2.0,
      carbs: 12.0,
      fat: 0.5,
      major_nutrients: "Carbohydrates, Protein"
    },
    {
      name: "Dosa",
      category: "Vegetarian",
      calories: 133,
      protein: 3.9,
      carbs: 18.5,
      fat: 5.1,
      major_nutrients: "Carbohydrates, Protein"
    },
    {
      name: "Pav Bhaji",
      category: "Snacks",
      calories: 285,
      protein: 7.0,
      carbs: 40.0,
      fat: 10.0,
      major_nutrients: "Carbohydrates, Vitamin C, Fiber"
    },
    {
      name: "Masala Dosa",
      category: "Vegetarian",
      calories: 206,
      protein: 4.0,
      carbs: 30.0,
      fat: 8.0,
      major_nutrients: "Carbohydrates, Protein"
    },
    {
      name: "Aloo Gobi",
      category: "Vegetarian",
      calories: 120,
      protein: 3.4,
      carbs: 12.4,
      fat: 7.2,
      major_nutrients: "Vitamin C, Fiber"
    },
    {
      name: "Vegetable Biryani",
      category: "Vegetarian",
      calories: 198,
      protein: 5.0,
      carbs: 33.0,
      fat: 5.0,
      major_nutrients: "Carbohydrates, Vitamin C, Fiber"
    },
    {
      name: "Rajma",
      category: "Vegetarian",
      calories: 230,
      protein: 10.0,
      carbs: 34.0,
      fat: 6.0,
      major_nutrients: "Protein, Fiber, Iron"
    },
    {
      name: "Baingan Bharta",
      category: "Vegetarian",
      calories: 102,
      protein: 3.5,
      carbs: 8.7,
      fat: 6.4,
      major_nutrients: "Fiber, Vitamin C"
    },
    {
      name: "Chana Masala",
      category: "Vegetarian",
      calories: 210,
      protein: 10.0,
      carbs: 35.0,
      fat: 6.0,
      major_nutrients: "Protein, Fiber, Iron"
    },
    {
      name: "Mutter Paneer",
      category: "Vegetarian",
      calories: 230,
      protein: 12.0,
      carbs: 15.0,
      fat: 16.0,
      major_nutrients: "Protein, Calcium, Iron"
    },
    {
      name: "Khichdi",
      category: "Vegetarian",
      calories: 150,
      protein: 6.0,
      carbs: 28.0,
      fat: 2.5,
      major_nutrients: "Carbohydrates, Protein, Fiber"
    },
    {
      name: "Saag Paneer",
      category: "Vegetarian",
      calories: 280,
      protein: 12.0,
      carbs: 14.0,
      fat: 18.0,
      major_nutrients: "Iron, Protein, Calcium"
    },
  
    // Non-Vegetarian Dishes
    {
      name: "Butter Chicken",
      category: "Non-Vegetarian",
      calories: 490,
      protein: 28.2,
      carbs: 12.0,
      fat: 37.0,
      major_nutrients: "Protein, Fat"
    },
    {
      name: "Chicken Biryani",
      category: "Non-Vegetarian",
      calories: 350,
      protein: 20.0,
      carbs: 40.0,
      fat: 12.0,
      major_nutrients: "Protein, Carbohydrates"
    },
    {
      name: "Chicken Tikka Masala",
      category: "Non-Vegetarian",
      calories: 460,
      protein: 27.0,
      carbs: 15.0,
      fat: 35.0,
      major_nutrients: "Protein, Fat"
    },
    {
      name: "Fish Curry",
      category: "Non-Vegetarian",
      calories: 250,
      protein: 20.0,
      carbs: 8.0,
      fat: 15.0,
      major_nutrients: "Omega-3, Protein"
    },
    {
      name: "Mutton Curry",
      category: "Non-Vegetarian",
      calories: 320,
      protein: 25.0,
      carbs: 10.0,
      fat: 20.0,
      major_nutrients: "Protein, Iron, Fat"
    },
    {
      name: "Egg Curry",
      category: "Non-Vegetarian",
      calories: 225,
      protein: 15.0,
      carbs: 10.0,
      fat: 15.0,
      major_nutrients: "Protein, Fat"
    },
    {
      name: "Prawn Masala",
      category: "Non-Vegetarian",
      calories: 280,
      protein: 20.0,
      carbs: 8.0,
      fat: 18.0,
      major_nutrients: "Protein, Omega-3"
    },
    {
      name: "Tandoori Chicken",
      category: "Non-Vegetarian",
      calories: 250,
      protein: 27.0,
      carbs: 5.0,
      fat: 12.0,
      major_nutrients: "Protein"
    },
    {
      name: "Keema",
      category: "Non-Vegetarian",
      calories: 340,
      protein: 25.0,
      carbs: 10.0,
      fat: 25.0,
      major_nutrients: "Protein, Fat"
    },
    {
      name: "Goat Biryani",
      category: "Non-Vegetarian",
      calories: 390,
      protein: 22.0,
      carbs: 45.0,
      fat: 15.0,
      major_nutrients: "Protein, Iron"
    },
    {
      name: "Mutton Biryani",
      category: "Non-Vegetarian",
      calories: 370,
      protein: 23.0,
      carbs: 42.0,
      fat: 15.0,
      major_nutrients: "Protein, Carbohydrates"
    },
    {
      name: "Fish Fry",
      category: "Non-Vegetarian",
      calories: 280,
      protein: 22.0,
      carbs: 10.0,
      fat: 18.0,
      major_nutrients: "Protein, Omega-3"
    },
  
    // Snacks & Street Foods
    {
      name: "Samosa",
      category: "Snacks",
      calories: 262,
      protein: 6.0,
      carbs: 32.0,
      fat: 12.0,
      major_nutrients: "Carbohydrates, Fat"
    },
    {
      name: "Vada Pav",
      category: "Snacks",
      calories: 290,
      protein: 6.0,
      carbs: 40.0,
      fat: 12.0,
      major_nutrients: "Carbohydrates, Fat"
    },
    {
      name: "Pakora",
      category: "Snacks",
      calories: 260,
      protein: 8.0,
      carbs: 30.0,
      fat: 12.0,
      major_nutrients: "Carbohydrates, Fat, Protein"
    },
    {
      name: "Pani Puri",
      category: "Snacks",
      calories: 200,
      protein: 4.0,
      carbs: 30.0,
      fat: 5.0,
      major_nutrients: "Carbohydrates"
    },
    {
      name: "Dhokla",
      category: "Snacks",
      calories: 150,
      protein: 8.0,
      carbs: 30.0,
      fat: 2.0,
      major_nutrients: "Protein, Carbohydrates"
    },
    {
      name: "Bhel Puri",
      category: "Snacks",
      calories: 180,
      protein: 4.0,
      carbs: 40.0,
      fat: 5.0,
      major_nutrients: "Carbohydrates, Fiber"
    },
  
    // Desserts
    {
      name: "Gulab Jamun",
      category: "Dessert",
      calories: 150,
      protein: 2.0,
      carbs: 25.0,
      fat: 6.0,
      major_nutrients: "Carbohydrates, Sugar"
    },
    {
      name: "Jalebi",
      category: "Dessert",
      calories: 110,
      protein: 0.2,
      carbs: 25.0,
      fat: 5.0,
      major_nutrients: "Carbohydrates, Sugar"
    },
    {
      name: "Rasgulla",
      category: "Dessert",
      calories: 90,
      protein: 2.0,
      carbs: 18.0,
      fat: 0.5,
      major_nutrients: "Carbohydrates"
    },
    {
      name: "Kheer",
      category: "Dessert",
      calories: 180,
      protein: 4.0,
      carbs: 30.0,
      fat: 6.0,
      major_nutrients: "Carbohydrates, Fat"
    },
    {
      name: "Halwa",
      category: "Dessert",
      calories: 240,
      protein: 3.0,
      carbs: 45.0,
      fat: 8.0,
      major_nutrients: "Carbohydrates, Fat"
    }
  ];  

const seedDatabase = async () => {
  await connectToDatabase();
  await Food.deleteMany(); // Clear the collection
  await Food.insertMany(foods); // Insert new data
  console.log('Database seeded successfully');
  mongoose.connection.close();
};

seedDatabase().catch(console.error);