import React, { useState } from 'react';
import axios from 'axios';
import FoodCard from '../components/FoodCard';

const SearchByNutrient = () => {
  const [nutrient, setNutrient] = useState('');
  const [foods, setFoods] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/foods/nutrient/${nutrient}`);
      setFoods(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-800 min-h-screen text-white">
      <div className="container mx-auto py-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Search by Nutrient</h1>
        <div className="flex justify-center mb-6">
          <input
            type="text"
            value={nutrient}
            onChange={(e) => setNutrient(e.target.value)}
            placeholder="Enter nutrient"
            className="p-2 border border-gray-600 rounded-lg bg-gray-700 text-white"
          />
          <button onClick={handleSearch} className="ml-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg">
            Search
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foods.map(food => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchByNutrient;
