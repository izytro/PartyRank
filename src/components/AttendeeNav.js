// import React from "react";
// import { Link } from "react-router-dom";
// const AttendeeNav = () => {
//   return (
//     <div>
//       <div>
//         <header className="antialiased">
//           <nav className="bg-gray-900 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
//             <div className="flex flex-wrap justify-between items-center">
//               <div className="flex justify-start items-center">
//                 <button
//                   id="toggleSidebar"
//                   aria-expanded="true"
//                   aria-controls="sidebar"
//                   className="hidden p-2 mr-3 text-gray-600 rounded cursor-pointer lg:inline hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
//                 >
//                   <svg
//                     className="w-5 h-5"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 16 12"
//                   >
//                     {" "}
//                     <path
//                       stroke="currentColor"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       stroke-width="2"
//                       d="M1 1h14M1 6h14M1 11h7"
//                     />{" "}
//                   </svg>
//                 </button>
//                 <button
//                   aria-expanded="true"
//                   aria-controls="sidebar"
//                   className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//                 >
//                   <svg
//                     className="w-[18px] h-[18px]"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 17 14"
//                   >
//                     <path
//                       stroke="currentColor"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       stroke-width="2"
//                       d="M1 1h15M1 7h15M1 13h15"
//                     />
//                   </svg>
//                   <span className="sr-only">Toggle sidebar</span>
//                 </button>
//                 <Link to="/parties ">
//                   <span className=" text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-500 to-orange-500">
//                     partyrank
//                   </span>
//                 </Link>
//                 <form
//                   action="#"
//                   method="GET"
//                   className="hidden lg:block lg:pl-2"
//                 >
//                   <div className="w-[20rem]">
//                     <input
//                       type="text"
//                       placeholder="Search for parties, events, or users..."
//                       className="w-full p-3 text-white bg-[#1c1c30] rounded-lg focus:outline-none placeholder-gray-500 shadow-md transition-all duration-200 ease-in"
//                       style={{
//                         border: "2px solid transparent", // Transparent initial border
//                         background: "#1c1c30", // Input field background color
//                         transition: "border 0.3s ease-in-out", // Transition for smooth border change
//                       }}
//                       onFocus={(e) => {
//                         // Apply the gradient border when focused
//                         e.target.style.border = "1px solid transparent"; // Ensure no visible border
//                         e.target.style.borderImage =
//                           "linear-gradient(45deg, #ff007f, #00ffff)"; // Gradient from hot pink to cyan
//                         e.target.style.borderImageSlice = 1; // Ensure the gradient covers the border
//                       }}
//                       onBlur={(e) => {
//                         // Reset to initial state when focus is lost
//                         e.target.style.border = "1px solid transparent"; // Transparent border when blurred
//                         e.target.style.borderImage = "none"; // Remove the gradient border
//                       }}
//                     />
//                   </div>
//                 </form>
//               </div>
//               <div className="flex items-center lg:order-2">
//                 <Link to="/createParty">
//                   <button
//                     type="button"
//                     className="hidden sm:inline-flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
//                   >
//                     <svg
//                       aria-hidden="true"
//                       className="mr-1 -ml-1 w-5 h-5"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fill-rule="evenodd"
//                         d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
//                         clip-rule="evenodd"
//                       ></path>
//                     </svg>{" "}
//                     New party
//                   </button>
//                 </Link>

//                 <Link to="/parties">
//                   <button
//                     type="button"
//                     className="hidden sm:inline-flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
//                   >
//                     Parties
//                   </button>
//                 </Link>
//                 <button
//                   id="toggleSidebarMobileSearch"
//                   type="button"
//                   className="p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//                 >
//                   <span className="sr-only">Search</span>

//                   <svg
//                     className="w-4 h-4"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 20 20"
//                   >
//                     <path
//                       stroke="currentColor"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       stroke-width="2"
//                       d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                     />
//                   </svg>
//                 </button>

//                 <button
//                   type="button"
//                   className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
//                   id="user-menu-button"
//                   aria-expanded="false"
//                   data-dropdown-toggle="dropdown"
//                 >
//                   <span className="sr-only">Open user menu</span>
//                   <Link to="/profile">
//                     <img
//                       className="w-8 h-8 rounded-full"
//                       src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
//                       alt="user photo"
//                     />
//                   </Link>
//                 </button>

//                 <div
//                   className="hidden z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
//                   id="dropdown"
//                 >
//                   <div className="py-3 px-4">
//                     <span className="block text-sm font-semibold text-gray-900 dark:text-white">
//                       Neil sims
//                     </span>
//                     <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
//                       name@flowbite.com
//                     </span>
//                   </div>
//                   <ul
//                     className="py-1 text-gray-500 dark:text-gray-400"
//                     aria-labelledby="dropdown"
//                   >
//                     <li>
//                       <a
//                         href="#"
//                         className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
//                       >
//                         My profile
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#"
//                         className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
//                       >
//                         Account settings
//                       </a>
//                     </li>
//                   </ul>
//                   <ul
//                     className="py-1 text-gray-500 dark:text-gray-400"
//                     aria-labelledby="dropdown"
//                   >
//                     <li>
//                       <a
//                         href="#"
//                         className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         <svg
//                           className="mr-2 w-4 h-4 text-gray-400"
//                           aria-hidden="true"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="currentColor"
//                           viewBox="0 0 20 18"
//                         >
//                           <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
//                         </svg>
//                         My likes
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#"
//                         className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         <svg
//                           className="mr-2 w-4 h-4 text-gray-400"
//                           aria-hidden="true"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="currentColor"
//                           viewBox="0 0 20 20"
//                         >
//                           {" "}
//                           <path d="m1.56 6.245 8 3.924a1 1 0 0 0 .88 0l8-3.924a1 1 0 0 0 0-1.8l-8-3.925a1 1 0 0 0-.88 0l-8 3.925a1 1 0 0 0 0 1.8Z" />{" "}
//                           <path d="M18 8.376a1 1 0 0 0-1 1v.163l-7 3.434-7-3.434v-.163a1 1 0 0 0-2 0v.786a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.786a1 1 0 0 0-1-1Z" />{" "}
//                           <path d="M17.993 13.191a1 1 0 0 0-1 1v.163l-7 3.435-7-3.435v-.163a1 1 0 1 0-2 0v.787a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.787a1 1 0 0 0-1-1Z" />{" "}
//                         </svg>
//                         Collections
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#"
//                         className="flex justify-between items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         <span className="flex items-center">
//                           <svg
//                             className="mr-2 w-4 h-4 text-primary-600 dark:text-primary-500"
//                             aria-hidden="true"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="currentColor"
//                             viewBox="0 0 20 20"
//                           >
//                             <path d="m7.164 3.805-4.475.38L.327 6.546a1.114 1.114 0 0 0 .63 1.89l3.2.375 3.007-5.006ZM11.092 15.9l.472 3.14a1.114 1.114 0 0 0 1.89.63l2.36-2.362.38-4.475-5.102 3.067Zm8.617-14.283A1.613 1.613 0 0 0 18.383.291c-1.913-.33-5.811-.736-7.556 1.01-1.98 1.98-6.172 9.491-7.477 11.869a1.1 1.1 0 0 0 .193 1.316l.986.985.985.986a1.1 1.1 0 0 0 1.316.193c2.378-1.3 9.889-5.5 11.869-7.477 1.746-1.745 1.34-5.643 1.01-7.556Zm-3.873 6.268a2.63 2.63 0 1 1-3.72-3.72 2.63 2.63 0 0 1 3.72 3.72Z" />
//                           </svg>
//                           Pro version
//                         </span>
//                         <svg
//                           className="w-2.5 h-2.5 text-gray-400"
//                           aria-hidden="true"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 6 10"
//                         >
//                           <path
//                             stroke="currentColor"
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                             stroke-width="2"
//                             d="m1 9 4-4-4-4"
//                           />
//                         </svg>
//                       </a>
//                     </li>
//                   </ul>
//                   <ul
//                     className="py-1 text-gray-500 dark:text-gray-400"
//                     aria-labelledby="dropdown"
//                   >
//                     <li>
//                       <a
//                         href="#"
//                         className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Sign out
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </nav>
//         </header>
//       </div>
//     </div>
//   );
// };
// export default AttendeeNav;
import React from "react";
import { Link } from "react-router-dom";

const AttendeeNav = () => {
  return (
    <div>
      <div>
        <header className="antialiased">
          <nav className="bg-gray-900 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex justify-start items-center">
                <button
                  id="toggleSidebar"
                  aria-expanded="true"
                  aria-controls="sidebar"
                  className="hidden p-2 mr-3 text-gray-600 rounded cursor-pointer lg:inline hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
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
                <button
                  aria-expanded="true"
                  aria-controls="sidebar"
                  className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <svg
                    className="w-[18px] h-[18px]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                  <span className="sr-only">Toggle sidebar</span>
                </button>
                <Link to="/parties ">
                  <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-500 to-orange-500">
                    partyrank
                  </span>
                </Link>
                <form
                  action="#"
                  method="GET"
                  className="hidden lg:block lg:pl-2"
                >
                  <div className="w-[20rem]">
                    <input
                      type="text"
                      placeholder="Search for parties, events, or users..."
                      className="w-full p-3 text-white bg-[#1c1c30] rounded-lg focus:outline-none placeholder-gray-500 shadow-md transition-all duration-200 ease-in"
                      style={{
                        border: "2px solid transparent", // Transparent initial border
                        background: "#1c1c30", // Input field background color
                        transition: "border 0.3s ease-in-out", // Transition for smooth border change
                      }}
                      onFocus={(e) => {
                        // Apply the gradient border when focused
                        e.target.style.border = "1px solid transparent"; // Ensure no visible border
                        e.target.style.borderImage =
                          "linear-gradient(45deg, #ff007f, #00ffff)"; // Gradient from hot pink to cyan
                        e.target.style.borderImageSlice = 1; // Ensure the gradient covers the border
                      }}
                      onBlur={(e) => {
                        // Reset to initial state when focus is lost
                        e.target.style.border = "1px solid transparent"; // Transparent border when blurred
                        e.target.style.borderImage = "none"; // Remove the gradient border
                      }}
                    />
                  </div>
                </form>
              </div>
              <div className="flex items-center lg:order-2">
                <Link to="/createParty">
                  <button
                    type="button"
                    className=" sm:inline-flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                  >
                    <div className="inline-flex items-center translate-y-[0.01rem]">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clipRule="evenodd"
                        ></path>
                      </svg>{" "}
                      New party
                    </div>
                  </button>
                </Link>

                <Link to="/parties">
                  <button
                    type="button"
                    className=" sm:inline-flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                  >
                    Parties
                  </button>
                </Link>

                <button
                  type="button"
                  className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  id="user-menu-button"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown"
                >
                  <span className="sr-only">Open user menu</span>
                  <Link to="/profile">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </Link>
                </button>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default AttendeeNav;
