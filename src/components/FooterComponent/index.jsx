import React from "react";
import SvgLinkedIn from "../../assets/icons/SvgLinkedIn";
import SvgGitHub from "../../assets/icons/SvgGitHub";
import SvgWhatspp from "../../assets/icons/SvgWhatspp";
import SvgEmail from "../../assets/icons/SvgEmail";
import CardComponent from '../CardComponent'

const FooterComponent = () => {
  return (
    <div className="mt-8 max-h-max text-white">
      <div className="flex flex-col gap-y-2 justify-center items-center">
        <div className="flex flex-row gap-x-2">
          <CardComponent>
            <a href="https://www.linkedin.com/in/yuvaraj-paramasivam-985429210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
              <div className="cursor-pointer p-1 md:p-4">
                <SvgLinkedIn />
              </div>
            </a>
          </CardComponent>
          <CardComponent>
            <a href="https://github.com/Yuvaraj-React-Developer-dotcom" target="_blank">
              <div className="cursor-pointer p-1 md:p-4">
                <SvgGitHub />
              </div>
            </a>
          </CardComponent>
          <CardComponent>
            <a href="https://api.whatsapp.com/send?phone=+91 9600449077" target="_blank">
              <div className="cursor-pointer p-1 md:p-4">
                <SvgWhatspp />
              </div>
            </a>
          </CardComponent>
          <CardComponent>
            <a href="mailto:yuvarajreact@gmail.com" target="_blank">
              <div className="cursor-pointer p-1 md:p-4">
                <SvgEmail />
              </div>
            </a>
          </CardComponent>
        </div>
        <div className="flex flex-row gap-x-2 text-white font-[500] text-[12px] md:text-xl lg:text-2xl">
          <CardComponent>
            <a href="#home">
              <div className="cursor-pointer uppercase p-[6px] md:p-4">Home</div>
            </a>
          </CardComponent>
          <CardComponent>
            <a href="#about">
              <div className="cursor-pointer uppercase p-[6px] md:p-4">
                About
              </div>
            </a>
          </CardComponent>
          <CardComponent>
            <a href="#services">
              <div className="cursor-pointer uppercase p-[6px] md:p-4">
                Services
              </div>
            </a>
          </CardComponent>
          <CardComponent>
            <a href="#resume">
              <div className="cursor-pointer uppercase p-[6px] md:p-4">
                CV Resume
              </div>
            </a>
          </CardComponent>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
