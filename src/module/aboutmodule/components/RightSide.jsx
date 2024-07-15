import React from "react";
import CardComponent from "../../../components/cardComponent";
import { skillsets } from "./skills.mock";

const RightSide = () => {
  return (
    <div className="h-full overflow-auto">
      <div className="text-xl md:text-2xl text-white">My Skills</div>
      <div className="text-white font-bold text-xl md:text-2xl mt-4">
        <div className="flex flex-row flex-wrap gap-1">
          {skillsets?.map((item, index) => {
            return (
              <CardComponent>
                <div key={index} className="cursor-pointer p-1 md:p-4">{item?.key}</div>
              </CardComponent>
            )
          })}

        </div>
      </div>
    </div>
  );
};

export default RightSide;
