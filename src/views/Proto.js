import React, { useState } from "react";
import ProtoSideBar from "./ProtoSideBar";

const Proto = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("Live");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter); // Update the active filter state
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <ProtoSideBar />
      {/* Main Content */}
      <div
        className="flex-1 bg-[#1a1a1a] min-h-screen p-10"
        style={{ marginLeft: "16rem", borderLeft: "1px solid #222" }}
      >
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search for parties, events, or users..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full p-3 text-white bg-[#1c1c30] rounded-lg focus:outline-none placeholder-gray-500 shadow-md transition-all duration-200 ease-in"
            style={{
              border: "2px solid transparent", // Transparent initial border
              background: "#1c1c30", // Input field background color
              transition: "border 0.3s ease-in-out", // Transition for smooth border change
            }}
            onFocus={(e) => {
              // Apply the gradient border when focused
              e.target.style.border = "3px solid transparent"; // Ensure no visible border
              e.target.style.borderImage =
                "linear-gradient(45deg, #ff007f, #00ffff)"; // Gradient from hot pink to cyan
              e.target.style.borderImageSlice = 1; // Ensure the gradient covers the border
            }}
            onBlur={(e) => {
              // Reset to initial state when focus is lost
              e.target.style.border = "2px solid transparent"; // Transparent border when blurred
              e.target.style.borderImage = "none"; // Remove the gradient border
            }}
          />
        </div>

        <div className="mb-4 flex space-x-4">
          <button
            className={`px-6 py-2 text-white rounded-lg transition-all duration-200 ease-in-out ${
              activeFilter === "Live"
                ? "bg-gradient-to-r from-[#ff007f] to-[#00ffff]"
                : "bg-[#2c2c3f]"
            }`}
            onClick={() => handleFilterClick("Live")}
          >
            Live
          </button>
        </div>

        {/* Content Area */}
        <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-500 to-orange-500 mb-20">
          partyrank
        </span>
        {/* Add additional content here */}
      </div>
    </div>
  );
};

export default Proto;
