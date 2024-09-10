import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FoodCard from '../components/FoodCard';

const Home = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/foods');
        setFoods(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFoods();
  }, []);

  return (
    <div className="bg-gray-800 min-h-screen text-white">
      <div className="container mx-auto py-6">
        <h1 className="text-4xl font-bold mb-6 text-center">All Foods</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foods.map(food => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
