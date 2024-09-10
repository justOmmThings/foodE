import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import SearchByCategory from "./pages/SearchByCategory";
import SearchByNutrient from "./pages/SearchByNutrient";
import SearchByCalories from "./pages/SearchByCalories";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <nav className="bg-gray-800 p-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Food Finder</h1>
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="/"
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/category"
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  Search by Category
                </Link>
              </li>
              <li>
                <Link
                  to="/nutrients"
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  Search by Nutrients
                </Link>
              </li>
              <li>
                <Link
                  to="/calories"
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  Search by Calories
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<SearchByCategory />} />
            <Route path="/nutrients" element={<SearchByNutrient />} />
            <Route path="/calories" element={<SearchByCalories />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
