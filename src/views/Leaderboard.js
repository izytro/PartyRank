import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

import { db, auth } from "../firebase";
import { getDoc, doc, collection, getDocs } from "firebase/firestore";
import SearchBar from "../components/SearchBar";

const Leaderboard = () => {
  const [data, setData] = useState([]);
  const [originalData, setOrginalData] = useState([]);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const partiesCollectionRef = collection(db, "parties");
        const querySnapshot = await getDocs(partiesCollectionRef);

        const partiesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const sortedData = partiesData.sort((a, b) => b.Likes - a.Likes);
        console.log(sortedData);
        setData(sortedData);
        setOrginalData(sortedData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  console.log(data);
  return (
    <div className="bg-[#1a1a1a] min-h-[100vh] text-white">
      <Sidebar />
      <section className="bg-[#1a1a1a] dark:bg-gray-900 p-3 sm:p-5 mml-0 md:ml-72 sm:72 ">
        <SearchBar
          data={data}
          setData={setData}
          originalData={originalData}
          styleInput={`w-full p-3 text-white bg-[#1c1c30] rounded-t-lg focus:outline-none placeholder-gray-500 shadow-md transition-all duration-200 ease-in`}
        />
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
          <div className="bg-black dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-1/2">
                <form className="flex items-center">
                  <label for="simple-search" className="sr-only">
                    Search
                  </label>
                </form>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      Rank
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Host
                    </th>
                  </tr>
                </thead>
                <tbody className="rounded-lg">
                  {data.map((dataItem, index) => (
                    <tr
                      key={index}
                      className="border-b dark:border-gray-700 hover:bg-gray-900"
                    >
                      <th
                        scope="row"
                        className="px-4 py-3 font-medium text-gray-300 whitespace-nowrap dark:text-white"
                      >
                        {index + 1}
                      </th>
                      <td className="px-4 py-3 text-gray-300 ">
                        {dataItem.Name}
                      </td>
                      <td className="px-4 py-3 text-gray-300 ">
                        {dataItem.Host}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leaderboard;
