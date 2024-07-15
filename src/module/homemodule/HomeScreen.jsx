import React from "react";
import SocialMedia from "./component/SocialMedia";
import Profile from "./component/Profile";
import NavItems from "./component/NavItems";
import AboutMe from "../aboutmodule";
const HomeScreen = () => {
  return (
    <div className="home__main__container max-h-max md:h-[100vh]" id="home">
      <div className="text-center text-white font-bold text-xl md:text-2xl mt-4">
        Hello i am Yuvaraj 🙂
      </div>
      <div className="text-center text-white font-bold text-2xl md:text-4xl">
        Frontend Developer
      </div>

      <div className="grid grid-cols-4 gap-2 md:gap-4 items-center pt-2 md:pt-4">
        <NavItems/>
        <Profile />
        <SocialMedia />
      </div>
      
    </div>
  );
};

export default HomeScreen;
