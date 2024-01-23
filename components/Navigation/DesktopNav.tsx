import Link from "next/link";
import React from "react";
import ThemeButton from "../ThemeButton";

const DesktopNav = () => {
  return (
    <div className="flex">
      <nav className="w-full border-[1px] border-neutral-900 bg-neutral-100 py-4 px-10 lg:px-20">
        <ul className="flex justify-between space-x-10 uppercase">
          <li className="nav-item">
            <Link href="/">Me</Link>
          </li>
          <li className="nav-item">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="nav-item">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="nav-item">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="flex-1 border-[1px] border-neutral-900 bg-neutral-100 p-2">
        <ThemeButton />
      </div>
    </div>
  );
};

export default DesktopNav;
