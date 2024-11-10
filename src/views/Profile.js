import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { getDoc, doc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import AttendeeNav from "../components/AttendeeNav";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const fetchUserDetails = async () => {
        try {
          const userRef = doc(db, "users", user.uid);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            setUserDetails(userSnap.data());
          } else {
            console.log("No user document found!");
          }
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      };

      fetchUserDetails();
      setLoading(false);
    }
  }, []);

  console.log(userDetails);

  return (
    <div>
      <div>
        <Sidebar />

        {loading ? (
          "Loading"
        ) : (
          <section className=" bg-[#1a1a1a] dark:bg-gray-900  ">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0  ml-0 md:ml-72 sm:72">
              <div className="w-full bg-black rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-100 md:text-2xl dark:text-white">
                    Your profile!
                  </h1>
                  <form className="space-y-4 md:space-y-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium dark:text-white text-gray-100"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder={userDetails?.email || "Loading"}
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium dark:text-white text-gray-100"
                      >
                        Password
                      </label>
                      <input
                        type="name"
                        name="name"
                        id="name"
                        placeholder={
                          userDetails && userDetails.name
                            ? `${userDetails.name.firstName} ${userDetails.name.lastName}`
                            : "Loading"
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                    </div>

                    <button
                      onClick={handleLogout}
                      className="bg-red-800 text-white p-2 mt-4 w-full rounded-lg"
                    >
                      Logout
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Profile;
