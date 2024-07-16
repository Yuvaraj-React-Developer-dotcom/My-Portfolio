import React from "react";
import CardComponent from "../../../components/CardComponent";
const windowWidth = window.innerWidth - 32;
const windowHeight = window.innerHeight;
console.log(windowWidth, "find windowWidth");
const Cards = ({ service, key }) => {
  return (
    <div
      key={key}
      className="snap-center"
      style={{
        width:
          windowWidth < 640
            ? windowWidth
            : windowWidth < 768
              ? windowWidth / 2
              : windowWidth > 1024
                ? windowWidth / 3
                : windowWidth / 4,
        height: windowHeight - windowHeight / 2,
      }}
    >
      <CardComponent>
        <div className="p-1 md:p-4 h-full overflow-auto">
          <div className="">{service?.key}</div>
          <div className="mt-4">{service?.caption}</div>
        </div>
      </CardComponent>
    </div>
  );
};

export default Cards;
