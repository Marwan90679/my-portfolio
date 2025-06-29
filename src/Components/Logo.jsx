import React from "react";
import { TbArrowDownRight } from "react-icons/tb";

const Logo = () => {
  return (
    <div className="flex items-start gap-1">
      <h3 className="koulen lg:text-3xl select-none">MARWAN AHMED</h3>
      <span className="-ml-1 -mt-1 md:mt-0 rotate-270 text-lg md:text-3xl">
        <TbArrowDownRight />
      </span>
    </div>
  );
};

export default Logo;
