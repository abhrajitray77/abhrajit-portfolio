import React from "react";

const SideStrips = () => {
  return (
    <div className="flex flex-col my-10 h-[90%] md:w-4 lg:w-6 mx-2 relative">
      <div className="flex flex-col justify-between h-full space-y-1">
        <div className="flex flex-col space-y-1">
          <span className="bg-neutral-500 w-full h-4"></span>
          <span className="bg-neutral-500 w-full h-3"></span>
          <span className="bg-neutral-500 w-full h-2"></span>
          <span className="bg-neutral-500 w-full h-1"></span>
          <span className="bg-neutral-500 w-full h-[2px]"></span>
        </div>
        <span className="flex-1 bg-neutral-400 w-full h-full"></span>
        <div className="flex flex-col space-y-1 rotate-180">
          <span className="bg-neutral-500 w-full h-4"></span>
          <span className="bg-neutral-500 w-full h-3"></span>
          <span className="bg-neutral-500 w-full h-2"></span>
          <span className="bg-neutral-500 w-full h-1"></span>
          <span className="bg-neutral-500 w-full h-[2px]"></span>
        </div>
      </div>
    </div>
  );
};

export default SideStrips;
