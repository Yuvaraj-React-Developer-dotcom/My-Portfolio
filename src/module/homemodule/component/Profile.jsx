import React from "react";
import SvgReact from "../../../assets/icons/SvgReact";
import SvgRedux from "../../../assets/icons/SvgRedux";
import SvgTypeScript from "../../../assets/icons/SvgTypeScript";
import SvgHTML from "../../../assets/icons/SvgHTML";
import SvgCSS from "../../../assets/icons/SvgCSS";
import SvgJavaScript from "../../../assets/icons/SvgJavaScript";
import SvgAndroid from "../../../assets/icons/SvgAndroid";
import SvgIOS from "../../../assets/icons/SvgIOS";
const windowWidth = window.innerWidth * 0.4;
const IconWidth = window.innerWidth;
import img from "../../../assets/images/uv.png"

const Profile = () => {
  return (
    <div className="col-span-2 h-[100%] mt-4">
      <div className="h-[100%] flex flex-col items-center justify-center relative">
        <div className="absolute -z-[1]" style={{ width: windowWidth - 26, height: windowWidth - 26 }}>
          <img
            loading="lazy"
            src={img}
            alt=""
            className="h-[100%] rounded-full"
          />
        </div>
        <div
          className="rounded-full border-[#65B741] border-2 "
          style={{ width: windowWidth - 26, height: windowWidth - 26 }}
        >
          <div className="relative w-full h-full">
            <div className="react-spin absolute -top-[16px] -right-[16px] md:right-[16%] w-[44px] md:w-[64px]">
              <SvgReact />
            </div>
            <div className="absolute -top-[16px] left-0 md:left-[20%] animate-bounce w-6 h-6">
              <SvgRedux width={IconWidth < 640 ? "24" : "32"} />
            </div>
            <div className="absolute -left-[32px]  top-[25%] animate-bounce w-6 h-6">
              <SvgAndroid width={IconWidth < 640 ? "24" : "32"} />
            </div>
            <div className="absolute -left-[32px]  bottom-[25%] animate-bounce w-6 h-6">
              <SvgIOS width={IconWidth < 640 ? "24" : "32"} />
            </div>
            <div className="absolute -right-[32px]  top-[25%] animate-bounce w-6 h-6">
              <SvgTypeScript width={IconWidth < 640 ? "24" : "32"} />
            </div>
            <div className="absolute -right-[32px]  bottom-[25%] animate-bounce w-6 h-6">
              <SvgJavaScript width={IconWidth < 640 ? "24" : "32"} />
            </div>
            <div className="absolute -bottom-[16px] left-0 md:left-[20%] animate-bounce w-6 h-6">
              <SvgHTML width={IconWidth < 640 ? "24" : "32"} />
            </div>
            <div className="absolute -bottom-[16px]  right-0 md:right-[20%] animate-bounce w-6 h-6">
              <SvgCSS width={IconWidth < 640 ? "24" : "32"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
