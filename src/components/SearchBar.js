// import React from "react";

// const SearchBar = () => {
//   return (
//     <div>
//       <div className="pt-8 mx-[3.15rem] relative">
//         <input
//           type="text"
//           placeholder="Search for parties, events, or users..."
//           className="w-full p-3 text-white bg-[#1c1c30] rounded-lg focus:outline-none placeholder-gray-500 shadow-md transition-all duration-200 ease-in"
//           style={{
//             border: "2px solid transparent",
//             background: "#1c1c30",
//             transition: "border 0.3s ease-in-out",
//           }}
//           onFocus={(e) => {
//             e.target.style.border = "1px solid transparent";
//             e.target.style.borderImage =
//               "linear-gradient(45deg, #ff007f, #00ffff)";
//             e.target.style.borderImageSlice = 1;
//           }}
//           onBlur={(e) => {
//             // Reset to initial state when focus is lost
//             e.target.style.border = "1px solid transparent";
//             e.target.style.borderImage = "none";
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default SearchBar;

import React, { useState, useEffect } from "react";

const SearchBar = ({ originalData, setData, styleInput }) => {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (searchValue.trim() === "") {
      // If the search value is empty, restore the original data
      setData(originalData);
      return;
    }

    const lowerSearchValue = searchValue.toLowerCase();

    // Filter the data based on the new search criteria
    const filteredData = originalData.filter((item) => {
      const dateMatch = item.Date?.toLowerCase().includes(lowerSearchValue);
      const hostMatch = item.Host?.toLowerCase().includes(lowerSearchValue);
      const nameMatch = item.Name?.toLowerCase().includes(lowerSearchValue);
      const priceMatch = item.Price?.toString().includes(searchValue); // Convert price to string for comparison
      const ratioMatch = item.Ratio?.toLowerCase().includes(lowerSearchValue);
      const timeMatch = item.Time?.toLowerCase().includes(lowerSearchValue);

      // Return true if any of the criteria match
      return (
        dateMatch ||
        hostMatch ||
        nameMatch ||
        priceMatch ||
        ratioMatch ||
        timeMatch
      );
    });

    // If there are matches, show filtered data, otherwise show the original data
    if (filteredData.length > 0) {
      setData(filteredData);
    } else {
      // If no matches are found, reset the data to the original data
      setData(originalData);
    }
  }, [searchValue, originalData, setData]); // Dependencies include searchValue, originalData, and setData

  return (
    <div>
      <div className="pt-8 mx-[3.15rem] relative">
        <input
          type="text"
          placeholder="Search for anything"
          className={`${styleInput}`}
          // className="w-full p-3 text-white bg-[#1c1c30] rounded-lg focus:outline-none placeholder-gray-500 shadow-md transition-all duration-200 ease-in"
          style={{
            border: "2px solid transparent",
            background: "#1c1c30",
            transition: "border 0.3s ease-in-out",
          }}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)} // Update search value
          onFocus={(e) => {
            e.target.style.border = "1px solid transparent";
            e.target.style.borderImage =
              "linear-gradient(45deg, #ff007f, #00ffff)";
            e.target.style.borderImageSlice = 1;
          }}
          onBlur={(e) => {
            // Reset border on blur
            e.target.style.border = "1px solid transparent";
            e.target.style.borderImage = "none";
          }}
        />
        {searchValue.trim() !== "" && (
          <button
            type="button"
            className="text-white absolute right-1 bottom-1 bg-red-700 font-medium rounded-lg text-sm px-2 py-1"
            onClick={() => {
              setSearchValue(""); // Reset search value
              setData(originalData); // Restore the original data
            }}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
