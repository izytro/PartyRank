import React, { useContext } from "react";
import LoggedOutNav from "./components/LoggedOutNav";
import { AuthContext } from "./AuthContext";

const Home = () => {
  const { user, loading } = useContext(AuthContext);
  return (
    <div className="bg-[#1a1a1a] min-h-[100vh]">
      <LoggedOutNav />
      <section className="bg-[#1a1a1a] dark:bg-gray-900 flex items-center justify-center min-h-screen">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-500 to-orange-500">
            Welcome to Party Rank
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            This is the hub where you can party!
          </p>
        </div>
      </section>
    </div>
  );
};
export default Home;
