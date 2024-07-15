import React from "react";
import CardComponent from "../../../components/cardComponent";
import SvgHome from "../../../assets/icons/SvgHome";
import SvgAbout from "../../../assets/icons/SvgAbout";
import SvgService from "../../../assets/icons/SvgService";
import SvgResume from "../../../assets/icons/SvgResume";
const NavItems = () => {
  return (
    <div className="text-white">
      <div className="flex justify-center">
        <div className="flex flex-col gap-y-1">
          <CardComponent>
            <a href="#home">
              <div className="cursor-pointer flex items-center relative p-1 md:p-4">
                <SvgHome />
              </div>
            </a>
          </CardComponent>
          <CardComponent>
            <a href="#about">
              <div className="cursor-pointer flex items-center relative p-1 md:p-4">
                <SvgAbout />
              </div>
            </a>
          </CardComponent>
          <CardComponent>
            <a href="#services">
              <div className="cursor-pointer flex items-center relative p-1 md:p-4">
                <SvgService />
              </div>
            </a>
          </CardComponent>
          <CardComponent>
            <a href="#resume">
              <div className="cursor-pointer flex items-center relative p-1 md:p-4">
                <SvgResume />
              </div>
            </a>
          </CardComponent>
        </div>
      </div>
    </div>
  );
};

export default NavItems;
