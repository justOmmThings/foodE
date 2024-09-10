const Food = require('../models/Food');

exports.getAllFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.json({ message: 'success', data: foods });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.findFoodsByNutrient = async (req, res) => {
  const { nutrient } = req.params;
  try {
    const foods = await Food.find({ major_nutrients: { "$regex": nutrient, "$options": "i" } });
    res.json({ message: 'success', data: foods });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.findFoodsByCaloriesRange = async (req, res) => {
  const { min, max } = req.query;
  const newMin = parseInt(min);
  const newMax = parseInt(max);
  if (!min || !max || isNaN(min) || isNaN(max)) {
    return res.status(400).json({ error: 'Min and max calories are required and must be valid numbers' });
  }
  try {
    const foods = await Food.find({
      calories: { "$gte": newMin, "$lte": newMax }
    });
    console.log(foods);
    
    res.json({ message: 'success', data: foods });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.findFoodsByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const foods = await Food.find({ category: { "$regex": category, "$options": "i" } });
    res.json({ message: 'success', data: foods });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};