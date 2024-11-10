// import React from "react";
// import { Link } from "react-router-dom";
// import homeIcon from "../assets/home.svg";
// import trophyIcon from "../assets/trophy.svg";
// import userIcon from "../assets/user.svg";
// import addIcon from "../assets/add.svg";
// const Sidebar = () => {
//   return (
//     <div>
//       <button
//         data-drawer-target="default-sidebar"
//         data-drawer-toggle="default-sidebar"
//         aria-controls="default-sidebar"
//         type="button"
//         className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//       >
//         <span className="sr-only">Open sidebar</span>
//         <svg
//           className="w-6 h-6"
//           aria-hidden="true"
//           fill="currentColor"
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             clipRule="evenodd"
//             fillRule="evenodd"
//             d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
//           ></path>
//         </svg>
//       </button>

//       <aside
//         id="default-sidebar"
//         className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
//         aria-label="Sidenav"
//       >
//         <div className="overflow-y-auto py-5  px-3 h-full bg-[#1a1a1a]  dark:bg-gray-800 dark:border-gray-700">
//           <div className="flex  ml-2">
//             <Link to="/" className="mb-8">
//               <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-500 to-orange-500">
//                 partyrank
//               </span>
//             </Link>
//           </div>
//           <ul className="space-y-2">
//             <li>
//               <Link to="/parties" className="">
//                 <div className="hover:bg-black flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group">
//                   <img src={homeIcon} alt="Home" className="w-7 h-7 invert" />
//                   <span className="text-m group-hover:opacity-100 text-gray-300 ml-4">
//                     Parties
//                   </span>
//                 </div>
//               </Link>
//             </li>

//             <li>
//               <Link to="/createParty" className="">
//                 <div className="hover:bg-black flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group">
//                   <img src={addIcon} alt="Create" className="w-7 h-7 invert" />
//                   <span className="text-m group-hover:opacity-100 text-gray-300 ml-4">
//                     Create party
//                   </span>
//                 </div>
//               </Link>
//             </li>
//             <li>
//               <Link to="/leaderboard" className="">
//                 <div className="hover:bg-black flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group">
//                   <img
//                     src={trophyIcon}
//                     alt="Leaderboard"
//                     className="w-7 h-7 invert"
//                   />{" "}
//                   <span className="text-m group-hover:opacity-100 text-gray-300 ml-4">
//                     Leaderboard
//                   </span>
//                 </div>
//               </Link>
//             </li>

//             <li>
//               <Link to="/profile" className="">
//                 <div className="hover:bg-black flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group">
//                   <img
//                     src={userIcon}
//                     alt="Profile"
//                     className="w-7 h-7 invert"
//                   />

//                   <span className="text-m group-hover:opacity-100 text-gray-300 ml-4">
//                     Profile
//                   </span>
//                 </div>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </aside>
//     </div>
//   );
// };
// export default Sidebar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import homeIcon from "../assets/home.svg";
import trophyIcon from "../assets/trophy.svg";
import userIcon from "../assets/user.svg";
import addIcon from "../assets/add.svg";

const Sidebar = () => {
  // State to manage sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Button to toggle sidebar */}
      <button
        onClick={toggleSidebar}
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform 
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0`} // Ensures sidebar is always visible on 'md' screens and up
        aria-label="Sidenav"
      >
        <div className="overflow-y-auto py-5 px-5 h-full bg-[#1a1a1a] dark:bg-red-900 dark:border-gray-700">
          {/* Close button on mobile view */}
          <button
            onClick={toggleSidebar}
            type="button"
            className="sm:hidden absolute top-7 right-4 text-gray-100 hover:text-gray-400 "
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-8 h-8"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M6.293 4.293a1 1 0 011.414 0L10 6.586l2.293-2.293a1 1 0 111.414 1.414L11.414 8l2.293 2.293a1 1 0 01-1.414 1.414L10 9.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 8 6.293 5.707a1 1 0 010-1.414z"
              ></path>
            </svg>
          </button>

          <div className="flex ml-2">
            <Link to="/" className="mb-8">
              <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-500 to-orange-500">
                partyrank
              </span>
            </Link>
          </div>
          <ul className="space-y-2">
            <li>
              <Link to="/parties" className="">
                <div className="hover:bg-black flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group">
                  <img src={homeIcon} alt="Home" className="w-7 h-7 invert" />
                  <span className="text-m group-hover:opacity-100 text-gray-300 ml-4">
                    Parties
                  </span>
                </div>
              </Link>
            </li>

            <li>
              <Link to="/createParty" className="">
                <div className="hover:bg-black flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group">
                  <img src={addIcon} alt="Create" className="w-7 h-7 invert" />
                  <span className="text-m group-hover:opacity-100 text-gray-300 ml-4">
                    Create party
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/leaderboard" className="">
                <div className="hover:bg-black flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group">
                  <img
                    src={trophyIcon}
                    alt="Leaderboard"
                    className="w-7 h-7 invert"
                  />
                  <span className="text-m group-hover:opacity-100 text-gray-300 ml-4">
                    Leaderboard
                  </span>
                </div>
              </Link>
            </li>

            <li>
              <Link to="/profile" className="">
                <div className="hover:bg-black flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group">
                  <img
                    src={userIcon}
                    alt="Profile"
                    className="w-7 h-7 invert"
                  />
                  <span className="text-m group-hover:opacity-100 text-gray-300 ml-4">
                    Profile
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
