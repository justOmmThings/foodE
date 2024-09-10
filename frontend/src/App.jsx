import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import SearchByCategory from "./pages/SearchByCategory";
import SearchByNutrient from "./pages/SearchByNutrient";
import SearchByCalories from "./pages/SearchByCalories";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // Toggle for mobile menu
  const activeClass = "text-gray-400";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="bg-gray-800 p-4 shadow-lg relative z-20">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Food Finder</h1>
          <button
            className="block lg:hidden text-white"
            onClick={toggleMenu}
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex space-y-4 lg:space-y-0 lg:space-x-4 absolute lg:static bg-gray-800 lg:bg-transparent left-0 top-full w-full lg:w-auto lg:flex-row lg:items-center z-20`}
          >
            <li>
              <Link
                to="/"
                className={`block py-2 px-4 hover:text-gray-400 transition-colors duration-300 ${
                  location.pathname === "/" ? activeClass : ""
                }`}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/category"
                className={`block py-2 px-4 hover:text-gray-400 transition-colors duration-300 ${
                  location.pathname === "/category" ? activeClass : ""
                }`}
                onClick={closeMenu}
              >
                Search by Category
              </Link>
            </li>
            <li>
              <Link
                to="/nutrients"
                className={`block py-2 px-4 hover:text-gray-400 transition-colors duration-300 ${
                  location.pathname === "/nutrients" ? activeClass : ""
                }`}
                onClick={closeMenu}
              >
                Search by Nutrients
              </Link>
            </li>
            <li>
              <Link
                to="/calories"
                className={`block py-2 px-4 hover:text-gray-400 transition-colors duration-300 ${
                  location.pathname === "/calories" ? activeClass : ""
                }`}
                onClick={closeMenu}
              >
                Search by Calories
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={closeMenu} // Clicking on the overlay closes the menu
        ></div>
      )}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
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
