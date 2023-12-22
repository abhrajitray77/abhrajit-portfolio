import Link from "next/link";
import React from "react";

const DesktopNav = () => {
  return (
    <nav className="border-[1px] border-neutral-900 bg-neutral-100 py-4 px-10 lg:px-20">
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
  );
};

export default DesktopNav;
