const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

router.get('/', foodController.getAllFoods);
router.get('/nutrient/:nutrient', foodController.findFoodsByNutrient);
router.get('/calories', foodController.findFoodsByCaloriesRange);
router.get('/category/:category', foodController.findFoodsByCategory);

module.exports = router;