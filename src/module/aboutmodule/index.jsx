import React from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

const AboutMeScreen = () => {
  return (
    <div className="mt-4 max-h-max md:h-[100vh]" id="about">
      <div className="grid grid-cols-2 gap-2 md:gap-4 items-center pt-2 md:pt-4 h-full">
        <div className="col-span-2 md:col-span-1 flex justify-center h-full"><LeftSide /></div>
        <div className="col-span-2 md:col-span-1 flex justify-center h-full overflow-hidden"><RightSide /></div>
      </div>
    </div>
  );
};

export default AboutMeScreen;
