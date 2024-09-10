import React from 'react';

const FoodCard = ({ food }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg text-dark">
      <h2 className="text-xl font-semibold mb-2">{food.name}</h2>
      <p><strong>Category:</strong> {food.category}</p>
      <p><strong>Calories:</strong> {food.calories} kcal</p>
      <p><strong>Protein:</strong> {food.protein} g</p>
      <p><strong>Carbs:</strong> {food.carbs} g</p>
      <p><strong>Fat:</strong> {food.fat} g</p>
      <p><strong>Major Nutrients:</strong> {food.major_nutrients}</p>
    </div>
  );
};

export default FoodCard;
