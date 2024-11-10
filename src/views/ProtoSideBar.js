import React from "react";
import { Link } from "react-router-dom";
import homeIcon from "../assets/home.svg";
import trophyIcon from "../assets/trophy.svg";
import userIcon from "../assets/user.svg";
import addIcon from "../assets/add.svg";

const ProtoSideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-[#1a1a1a] text-white ">
      <div className="flex flex-col items-start py-12 px-12 space-y-8">
        <Link to="/" className="mb-8">
          <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-500 to-orange-500">
            partyrank
          </span>
        </Link>

        {/* Sidebar Links */}
        <div className="space-y-8">
          <Link to="/" className="flex items-center space-x-4 group">
            <img src={homeIcon} alt="Home" className="w-7 h-7 invert" />
            <span className="text-m group-hover:opacity-100">Home</span>
          </Link>

          <Link to="/leaderboard" className="flex items-center space-x-4 group">
            <img
              src={trophyIcon}
              alt="Leaderboard"
              className="w-7 h-7 invert"
            />
            <span className="text-m hover">Leaderboard</span>
          </Link>

          <Link to="/createparty" className="flex items-center space-x-4 group">
            <img src={addIcon} alt="Create" className="w-7 h-7 invert" />
            <span className="text-m group-hover:opacity-100">Create</span>
          </Link>

          <Link to="/profile" className="flex items-center space-x-4 group">
            <img src={userIcon} alt="Profile" className="w-7 h-7 invert" />
            <span className="text-m group-hover:opacity-100">Profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProtoSideBar;
