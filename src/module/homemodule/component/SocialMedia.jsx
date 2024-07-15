import React from "react";
import CardComponent from "../../../components/cardComponent";
import SvgLinkedIn from "../../../assets/icons/SvgLinkedIn";
import SvgGitHub from "../../../assets/icons/SvgGitHub";
import SvgWhatspp from "../../../assets/icons/SvgWhatspp";
import SvgEmail from "../../../assets/icons/SvgEmail";
const SocialMedia = () => {
  return (
    <div className="text-white">
      <div className="flex justify-center">
        <div className="flex flex-col gap-y-1">
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
            <a href="https://api.whatsapp.com/send?phone=9600449077" target="_blank">
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
      </div>
    </div>
  );
};

export default SocialMedia;
