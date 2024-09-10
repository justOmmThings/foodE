import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-dark text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="text-2xl font-bold">Food Finder</div>
        <div className="space-x-4">
          <Link to="/search-category" className="hover:text-gray-400">Search by Category</Link>
          <Link to="/search-nutrient" className="hover:text-gray-400">Search by Nutrient</Link>
          <Link to="/search-calories" className="hover:text-gray-400">Search by Calories</Link>
          <Link to="/home" className="hover:text-gray-400">Home</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
