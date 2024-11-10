// import React, { useEffect, useState } from "react";
// import AttendeeNav from "../components/AttendeeNav";
// import { db, auth } from "../firebase";
// import { getDocs, collection } from "firebase/firestore";
// import Sidebar from "../components/Sidebar";
// import SearchBar from "../components/SearchBar";
// import {
//   updateDoc,
//   arrayUnion,
//   doc,
//   increment,
//   getDoc,
//   arrayRemove,
// } from "firebase/firestore";

// const formatMonthDate = (dateString) => {
//   const date = new Date(dateString);
//   const month = date.getMonth() + 1;
//   const day = date.getDate();
//   return `${month}/${day}`;
// };

// const Parties = () => {
//   const [data, setData] = useState([]);
//   const [originalData, setOriginalData] = useState(data);
//   const [userId, setUserId] = useState("");
//   const [liked, setLiked] = useState([]);
//   const [likesCount, setLikesCount] = useState({});

// useEffect(() => {
//   const unsubscribe = auth.onAuthStateChanged(async (user) => {
//     if (user) {
//       const userId = user.uid;
//       setUserId(userId);

//       try {
//         const userRef = doc(db, "users", userId);
//         const userDoc = await getDoc(userRef);

//         if (userDoc.exists()) {
//           const userData = userDoc.data();
//           setLiked(userData.liked || []);
//         } else {
//           console.log("No user document found");
//           setLiked([]);
//         }
//       } catch (error) {
//         console.error("Error fetching liked posts: ", error);
//       }
//     } else {
//       setUserId(null);
//       setLiked([]);
//     }
//   });

//   return unsubscribe;
// }, []);

// const handleLike = async (partyId) => {
//   try {
//     const partyRef = doc(db, "parties", partyId);
//     const userRef = doc(db, "users", userId);

//     const partyDoc = await getDoc(partyRef);

//     if (partyDoc.exists()) {
//       const partyData = partyDoc.data();
//       const alreadyLiked = partyData.likedUsers?.includes(userId);

//       if (alreadyLiked) {
//         await updateDoc(partyRef, {
//           Likes: increment(-1),
//           likedUsers: arrayRemove(userId),
//         });

//         await updateDoc(userRef, {
//           liked: arrayRemove(partyId),
//         });

//         setLikesCount((prevLikes) => ({
//           ...prevLikes,
//           [partyId]: prevLikes[partyId] - 1,
//         }));

//         console.log("Like removed");
//       } else {
//         await updateDoc(partyRef, {
//           Likes: increment(1),
//           likedUsers: arrayUnion(userId),
//         });

//         await updateDoc(userRef, {
//           liked: arrayUnion(partyId),
//         });

//         setLikesCount((prevLikes) => ({
//           ...prevLikes,
//           [partyId]: (prevLikes[partyId] || 0) + 1,
//         }));

//         console.log("Like added");
//       }
//     } else {
//       console.error("Party document does not exist");
//     }
//   } catch (error) {
//     console.error("Error updating like: ", error);
//   }
// };

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const partiesCollectionRef = collection(db, "parties");
//       const querySnapshot = await getDocs(partiesCollectionRef);

//       const partiesData = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));

//       setData(partiesData);
//       setOriginalData(partiesData);

//       // Initialize the likes count based on fetched data
//       const initialLikes = {};
//       partiesData.forEach((party) => {
//         initialLikes[party.id] = party.Likes || 0;
//       });
//       setLikesCount(initialLikes);
//     } catch (error) {
//       console.error("Error fetching data: ", error);
//     }
//   };

//   fetchData();
// }, []);

//   return (
//     <div className="bg-[#1a1a1a] min-h-[200vh] text-white">
//       <Sidebar />

//       <section
//         style={{
//           borderLeft: "1px solid #4b5563",
//           height: "100vw",
//         }}
//         className="bg-[#1a1a1a] dark:bg-gray-900 ml-0 md:ml-72 sm:72"
//       >
//         <SearchBar originalData={originalData} setData={setData} data={data} />
//         <div className="py-8 px-4 mx-auto  lg:py-16 lg:px-6 max-w-full">
//           <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 sm:grid-cols-1 max-w-[70rem] mx-auto">
//             {data.map((party) => (
//               <div
//                 key={party.id}
//                 className="relative items-center bg-black rounded-lg shadow sm:flex sm:flex-col lg:flex-row dark:bg-gray-800 dark:border-gray-700 overflow-hidden"
//               >
//                 {/* Image Section */}
//                 <div className="w-full sm:h-48 lg:w-[14rem] lg:h-[14rem] sm:object-cover sm:rounded-none sm:rounded-t-lg lg:rounded-l-lg">
//                   <img
//                     className="w-full h-full object-cover rounded-lg sm:rounded-t-lg lg:rounded-l-lg"
//                     src={party.Poster}
//                     alt={party.Name}
//                   />
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-5 relative z-10 flex flex-col space-y-3 lg:w-2/3">
//                   <h3 className="text-xl font-bold tracking-tight text-gray-100 dark:text-white">
//                     <a href="#">{party.Name}</a>
//                   </h3>
//                   <div className="flex flex-row  rounded-r-lg">
//                     <button
//                       onClick={() => handleLike(party.id)}
//                       className="flex mx-2"
//                     >
//                       {liked.includes(party.id) ? (
//                         <svg
//                           width="20px"
//                           height="20px"
//                           viewBox="0 -5.37 77.646 77.646"
//                         >
//                           {/* Filled Heart SVG */}
//                           <defs>
//                             <linearGradient
//                               id="linear-gradient"
//                               x1="1.044"
//                               y1="0.005"
//                               x2="0.413"
//                               y2="0.749"
//                               gradientUnits="objectBoundingBox"
//                             >
//                               <stop offset="0" stop-color="#ff7471" />
//                               <stop offset="1" stop-color="#ff5245" />
//                             </linearGradient>
//                           </defs>
//                           <g
//                             id="heart_red"
//                             data-name="heart red"
//                             transform="translate(-263.982 -435.283)"
//                           >
//                             <g id="Group_25" data-name="Group 25">
//                               <path
//                                 id="Path_69"
//                                 data-name="Path 69"
//                                 d="M302.81,446.03c-.059-.106-.128-.2-.187-.307.059.1.128.2.187.307Z"
//                                 fill="none"
//                               />
//                               <path
//                                 id="Path_70"
//                                 data-name="Path 70"
//                                 d="M341.628,456.395l-.025-.006c.006-.142.025-.279.025-.431a20.662,20.662,0,0,0-37.039-12.611.171.171,0,0,0-.024-.007,2.169,2.169,0,0,1-3.54-.046l-.035.008a20.657,20.657,0,0,0-37,12.656c0,.147.018.282.018.424l-.029.013s0,.5.1,1.413a20.552,20.552,0,0,0,.6,3.364c1.608,6.945,6.938,20.286,24.659,32.122,10.242,6.879,12.73,8.743,13.383,8.867.031.006.048.033.083.033s.058-.033.094-.043c.7-.162,3.265-2.071,13.359-8.857,16.931-11.313,22.555-24,24.428-31.163a20.743,20.743,0,0,0,.854-4.546C341.623,456.824,341.628,456.395,341.628,456.395ZM302.81,446.03h0c-.059-.1-.128-.2-.187-.307C302.682,445.825,302.751,445.924,302.81,446.03Z"
//                                 fill="#d32f2f"
//                               />
//                             </g>
//                           </g>
//                         </svg>
//                       ) : (
//                         <svg
//                           width="20px"
//                           height="20px"
//                           viewBox="0 -5.37 77.646 77.646"
//                         >
//                           {/* Empty Heart SVG */}
//                           <path
//                             d="M41.698 4.888a10.84 10.84 0 0 0-7.594 3.309C31.039 8.698 27.59 4.892 23.101 4.888c-3.37-.004-6.77 2.298-8.273 5.446-.923 1.95-1.019 4.276-.17 6.17 0 0 7.327 12.728 16.467 17.486 0 0 3.122 2.201 4.848 1.05 2.104-1.438 2.236-3.956 4.198-4.156.902-.221.654-3.607 1.27-3.706 3.11-.254 4.06-1.487 5.355 3.3.902-.395-.02 1.732.334 1.676 1.773-.206 5.287-.206 8.165-5.56 3.618-.401 7.041-4.57 7.41-7.632 0 0-.05-.231-5.194-2.364-5.877-1.19-3.582 5.322-6.52 3.84"
//                             fill="#cccccc"
//                           />
//                         </svg>
//                       )}
//                     </button>
//                     <p>{likesCount[party.id] || 0}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Parties;

import React, { useEffect, useState } from "react";
import AttendeeNav from "../components/AttendeeNav";
import { db, auth } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import {
  updateDoc,
  arrayUnion,
  doc,
  increment,
  getDoc,
  arrayRemove,
} from "firebase/firestore";
const formatMonthDate = (dateString) => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}/${day}`;
};

const Parties = () => {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState(data);
  const [userId, setUserId] = useState("");
  const [liked, setLiked] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userId = user.uid;
        setUserId(userId);

        try {
          const userRef = doc(db, "users", userId);
          const userDoc = await getDoc(userRef);

          if (userDoc.exists()) {
            const userData = userDoc.data();
            setLiked(userData.liked || []);
          } else {
            console.log("No user document found");
            setLiked([]);
          }
        } catch (error) {
          console.error("Error fetching liked posts: ", error);
        }
      } else {
        setUserId(null);
        setLiked([]);
      }
    });

    return unsubscribe;
  }, []);

  const handleLike = async (partyId) => {
    try {
      const partyRef = doc(db, "parties", partyId);
      const userRef = doc(db, "users", userId);

      const partyDoc = await getDoc(partyRef);

      if (partyDoc.exists()) {
        const partyData = partyDoc.data();
        const alreadyLiked = partyData.likedUsers?.includes(userId);

        if (alreadyLiked) {
          await updateDoc(partyRef, {
            Likes: increment(-1),
            likedUsers: arrayRemove(userId),
          });

          await updateDoc(userRef, {
            liked: arrayRemove(partyId),
          });

          console.log("Like removed");
        } else {
          await updateDoc(partyRef, {
            Likes: increment(1),
            likedUsers: arrayUnion(userId),
          });

          await updateDoc(userRef, {
            liked: arrayUnion(partyId),
          });

          console.log("Like added");
        }
      } else {
        console.error("Party document does not exist");
      }
    } catch (error) {
      console.error("Error updating like: ", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const partiesCollectionRef = collection(db, "parties");
        const querySnapshot = await getDocs(partiesCollectionRef);

        const partiesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setData(partiesData);
        setOriginalData(partiesData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#1a1a1a] min-h-[200vh] text-white">
      <Sidebar />

      <section
        style={{
          borderLeft: "1px solid #4b5563",
          height: "100vw",
        }}
        className="bg-[#1a1a1a] dark:bg-gray-900 ml-0 md:ml-72 sm:72"
      >
        <SearchBar
          originalData={originalData}
          setData={setData}
          data={data}
          styleInput={`w-full p-3 text-white bg-[#1c1c30] rounded-lg focus:outline-none placeholder-gray-500 shadow-md transition-all duration-200 ease-in`}
        />
        <div className="py-8 px-4 mx-auto  lg:py-16 lg:px-6 max-w-full">
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 sm:grid-cols-1 max-w-[70rem] mx-auto">
            {data.map((data) => (
              <div
                key={data.id}
                className="relative items-center bg-black rounded-lg shadow sm:flex sm:flex-col lg:flex-row dark:bg-gray-800 dark:border-gray-700 overflow-hidden"
              >
                {/* Image Section */}
                <div className="w-full sm:h-48 lg:w-[14rem] lg:h-[14rem] sm:object-cover sm:rounded-none sm:rounded-t-lg lg:rounded-l-lg">
                  <img
                    className="w-full h-full object-cover rounded-lg sm:rounded-t-lg lg:rounded-l-lg"
                    src={data.Poster}
                    alt={data.Name}
                  />
                </div>
                {/* Content Section */}
                <div className="p-5 relative z-10 flex flex-col space-y-3 lg:w-2/3">
                  <h3 className="text-xl font-bold tracking-tight text-gray-100 dark:text-white">
                    <a href="#">{data.Name}</a>
                  </h3>
                  <div className="flex flex-row  rounded-r-lg">
                    <button
                      onClick={() => handleLike(data.id)}
                      className="flex mx-2"
                    >
                      {liked.includes(data.id) ? (
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 -5.37 77.646 77.646"
                        >
                          <defs>
                            <linearGradient
                              id="linear-gradient"
                              x1="1.044"
                              y1="0.005"
                              x2="0.413"
                              y2="0.749"
                              gradientUnits="objectBoundingBox"
                            >
                              <stop offset="0" stop-color="#ff7471" />
                              <stop offset="1" stop-color="#ff5245" />
                            </linearGradient>
                          </defs>
                          <g
                            id="heart_red"
                            data-name="heart red"
                            transform="translate(-263.982 -435.283)"
                          >
                            <g id="Group_25" data-name="Group 25">
                              <path
                                id="Path_69"
                                data-name="Path 69"
                                d="M302.81,446.03c-.059-.106-.128-.2-.187-.307.059.1.128.2.187.307Z"
                                fill="none"
                              />
                              <path
                                id="Path_70"
                                data-name="Path 70"
                                d="M341.628,456.395l-.025-.006c.006-.142.025-.279.025-.431a20.662,20.662,0,0,0-37.039-12.611.171.171,0,0,0-.024-.007,2.169,2.169,0,0,1-3.54-.046l-.035.008a20.657,20.657,0,0,0-37,12.656c0,.147.018.282.018.424l-.029.013s0,.5.1,1.413a20.552,20.552,0,0,0,.6,3.364c1.608,6.945,6.938,20.286,24.659,32.122,10.242,6.879,12.73,8.743,13.383,8.867.031.006.048.033.083.033s.058-.033.094-.043c.7-.162,3.265-2.071,13.359-8.857,16.931-11.313,22.555-24,24.428-31.163a20.743,20.743,0,0,0,.854-4.546C341.623,456.824,341.628,456.395,341.628,456.395ZM302.81,446.03h0c-.059-.1-.128-.2-.187-.307C302.682,445.825,302.751,445.924,302.81,446.03Z"
                                fill="#ff5245"
                              />
                            </g>
                            <path
                              id="Path_71"
                              data-name="Path 71"
                              d="M295.337,474.437c-5.407-20.228,1.411-28.894,5-31.889a20.747,20.747,0,0,0-6.426-5.077c-6.5-1.416-15.583.295-21.458,16.921-1,3.4-1.458,11.938-.492,22.426a65.334,65.334,0,0,0,17.38,16.476c10.242,6.879,12.73,8.743,13.383,8.867.031.006.048.033.083.033s.058-.033.094-.043a2.946,2.946,0,0,0,.76-.373C301.6,496.005,298.749,487.182,295.337,474.437Z"
                              fill="url(#linear-gradient)"
                            />
                          </g>
                        </svg>
                      ) : (
                        <svg
                          fill="red"
                          height="20px"
                          weight="20px"
                          version="1.1"
                          id="Layer_1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 122.88 109.57"
                          style={{ enableBackground: "new 0 0 122.88 109.57" }}
                        >
                          <g>
                            <path d="M65.46,19.57c-0.68,0.72-1.36,1.45-2.2,2.32l-2.31,2.41l-2.4-2.33c-0.71-0.69-1.43-1.4-2.13-2.09 c-7.42-7.3-13.01-12.8-24.52-12.95c-0.45-0.01-0.93,0-1.43,0.02c-6.44,0.23-12.38,2.6-16.72,6.65c-4.28,4-7.01,9.67-7.1,16.57 c-0.01,0.43,0,0.88,0.02,1.37c0.69,19.27,19.13,36.08,34.42,50.01c2.95,2.69,5.78,5.27,8.49,7.88l11.26,10.85l14.15-14.04 c2.28-2.26,4.86-4.73,7.62-7.37c4.69-4.5,9.91-9.49,14.77-14.52c3.49-3.61,6.8-7.24,9.61-10.73c2.76-3.42,5.02-6.67,6.47-9.57 c2.38-4.76,3.13-9.52,2.62-13.97c-0.5-4.39-2.23-8.49-4.82-11.99c-2.63-3.55-6.13-6.49-10.14-8.5C96.5,7.29,91.21,6.2,85.8,6.82 C76.47,7.9,71.5,13.17,65.46,19.57L65.46,19.57z M60.77,14.85C67.67,7.54,73.4,1.55,85.04,0.22c6.72-0.77,13.3,0.57,19.03,3.45 c4.95,2.48,9.27,6.1,12.51,10.47c3.27,4.42,5.46,9.61,6.1,15.19c0.65,5.66-0.29,11.69-3.3,17.69c-1.7,3.39-4.22,7.03-7.23,10.76 c-2.95,3.66-6.39,7.44-10,11.17C97.2,74.08,91.94,79.12,87.2,83.66c-2.77,2.65-5.36,5.13-7.54,7.29L63.2,107.28l-2.31,2.29 l-2.34-2.25l-13.6-13.1c-2.49-2.39-5.37-5.02-8.36-7.75C20.38,71.68,0.81,53.85,0.02,31.77C0,31.23,0,30.67,0,30.09 c0.12-8.86,3.66-16.18,9.21-21.36c5.5-5.13,12.97-8.13,21.01-8.42c0.55-0.02,1.13-0.03,1.74-0.02C46,0.48,52.42,6.63,60.77,14.85 L60.77,14.85z" />
                          </g>
                        </svg>
                      )}

                      <span className="text-white text-sm mx-1">
                        {data.Likes || 0}
                      </span>
                    </button>

                    <div className="flex mx-2 ">
                      <svg
                        fill="#00BAE5"
                        height="20px"
                        weight="20px"
                        id="Layer_1"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                      >
                        <path d="m7.5,13c2.481,0,4.5-2.019,4.5-4.5s-2.019-4.5-4.5-4.5-4.5,2.019-4.5,4.5,2.019,4.5,4.5,4.5Zm0-8c1.93,0,3.5,1.57,3.5,3.5s-1.57,3.5-3.5,3.5-3.5-1.57-3.5-3.5,1.57-3.5,3.5-3.5Zm7.5,17.5v1c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-1c0-3.584-2.916-6.5-6.5-6.5s-6.5,2.916-6.5,6.5v1c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-1c0-4.136,3.364-7.5,7.5-7.5s7.5,3.364,7.5,7.5Zm9-4.637v.637c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-.637c0-3.233-2.63-5.863-5.863-5.863-1.357,0-2.485.307-3.351.91-.228.158-.539.103-.696-.124s-.103-.538.124-.696c1.037-.724,2.357-1.09,3.923-1.09,3.784,0,6.863,3.079,6.863,6.863Zm-6.5-8.863c2.481,0,4.5-2.019,4.5-4.5S19.981,0,17.5,0s-4.5,2.019-4.5,4.5,2.019,4.5,4.5,4.5Zm0-8c1.93,0,3.5,1.57,3.5,3.5s-1.57,3.5-3.5,3.5-3.5-1.57-3.5-3.5,1.57-3.5,3.5-3.5Z" />
                      </svg>

                      <span className="text-white text-sm mx-1">
                        {data.Ratio || 0}
                      </span>
                    </div>
                  </div>
                  <span className="text-gray-300 dark:text-gray-400">
                    {data.Host}
                  </span>
                  <p className="font-light text-gray-300 dark:text-gray-400 truncate">
                    {data.Phrase}
                  </p>

                  {/* Info List */}
                  <ul className="flex flex-wrap space-x-4 sm:space-x-2">
                    <li className="bg-[#111827] px-3 py-2 rounded-lg text-white">
                      <a
                        href="#"
                        className="text-gray-300 dark:hover:text-white flex justify-center items-center"
                      >
                        <svg
                          fill="#fdf8f5"
                          version="1.1"
                          id="Capa_1"
                          width="13px"
                          height="13px"
                          viewBox="0 0 395.71 395.71"
                          className="mr-2"
                        >
                          <g>
                            <path
                              d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
		                            c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
		                            C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
		                            c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"
                            />
                          </g>
                        </svg>
                        <span className="text-sm">Amherst, MA</span>
                      </a>
                    </li>
                    <li className="bg-[#111827] px-3 py-1 rounded-lg text-white">
                      <a
                        href="#"
                        className="text-gray-300 dark:hover:text-white text-sm"
                      >
                        {data.Time}
                      </a>
                    </li>
                    <li className="bg-[#111827] px-3 py-1 rounded-lg text-white">
                      <a
                        href="#"
                        className="text-gray-300 dark:hover:text-white text-sm"
                      >
                        {formatMonthDate(data.Date)}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Parties;
