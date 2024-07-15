import React from "react";
import Cards from "./components/Cards";
import { servicemock } from "./service.mock";
const ServiceScreen = () => {
  return (
    <div className="mt-4 max-h-max md:h-[100vh] text-white" id="services">
      <div className="text-xl md:text-2xl">My Best Services 😎</div>
      <div className="mt-4 overflow-x-scroll scroll-snap-container">
      <div className="flex flex-nowrap w-max gap-x-8 mb-4">
        {servicemock?.map((item, index) => {
          return <Cards service={item} key={index}/>;
        })}
      </div>
      </div>
    </div>
  );
};

export default ServiceScreen;
