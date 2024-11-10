import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <header className="antialiased">
        <nav className="bg-gray-800 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex justify-start items-center">
              {/* Hamburger Button (Visible only on small screens) */}
              <button
                onClick={handleToggle}
                id="toggleSidebar"
                aria-expanded={sidebarOpen ? "true" : "false"}
                aria-controls="sidebar"
                className="p-2 mr-3 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h14M1 6h14M1 11h7"
                  />
                </svg>
              </button>

              {/* Logo and Title */}
              <a className="flex mr-4 text-gray-300">
                <Link to="/">
                  <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-500 to-orange-500">
                    partyrank
                  </span>
                </Link>
              </a>
            </div>

            {/* Large Nav (Visible only on larger screens) */}
            <div className="  items-center space-x-6 font-bold">
              <Link to="/" className="text-gray-300 hover:text-white">
                home🏠
              </Link>
              <Link to="/login" className="text-gray-300 hover:text-white">
                login🟩
              </Link>
              <Link to="/register" className="text-gray-300 hover:text-white">
                register🟦
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Sidebar (Visible only on small screens when open) */}
      {sidebarOpen && (
        <div
          id="sidebar"
          className="lg:hidden fixed top-[3.5rem] left-0 z-50 w-64 h-full bg-gray-800 text-white"
        >
          <ul>
            <li>
              <Link to="/" className="text-gray-300 hover:text-white">
                home🏠
              </Link>
              <Link to="/login" className="block py-2 px-4">
                login🟩
              </Link>
            </li>
            <li>
              <Link to="/register" className="block py-2 px-4">
                register🟦
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
