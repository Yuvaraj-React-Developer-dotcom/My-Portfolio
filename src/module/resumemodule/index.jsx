import React from "react";
import Education from "./Components/Education";
import Experience from "./Components/Experience";

const ResumeScreen = () => {
  return (
    <div className="mt-4 max-h-max md:h-[100vh] text-white" id="resume">
      <div className="text-xl md:text-2xl">My CV Resume 👨‍⚖️</div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="col-span-2 md:col-span-1">
          <div className="text-xl md:text-2xl">Education</div>
          <Education />
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="text-xl md:text-2xl">Experience</div>
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default ResumeScreen;
