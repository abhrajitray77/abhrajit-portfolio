import React from "react";
import DesktopNav from "./Navigation/DesktopNav";

const Header = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="hidden md:block px-10 pt-6 lg:pt-8">
        <DesktopNav />
      </div>
    </div>
  );
};

export default Header;
