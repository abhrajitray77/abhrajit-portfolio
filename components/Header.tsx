import React from "react";
import DesktopNav from "./Navigation/DesktopNav";

const Header = () => {
  return (
    <header className="max-w-7xl mx-auto">
      <div className="hidden md:block md:px-4 lg:px-8 pt-6 lg:pt-8">
        <DesktopNav />
      </div>
    </header>
  );
};

export default Header;
