import Link from "next/link";
import React from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";


const Socials = () => {
  return (
    <ul className="flex justify-center items-center space-x-6 py-4">
      <li className="socials-item">
        <Link
          href="https://twitter.com/ray_abhrajit"
          aria-label="Twitter"
          rel="noopener noreferrer"
          target="_blank"
        >
          <RiTwitterXLine className="w-6 h-6" />
        </Link>
      </li>
      <li className="socials-item">
        <Link
          href="https://www.linkedin.com/in/abhrajitray77/"
          aria-label="LinkedIn"
          rel="noopener noreferrer"
          target="_blank"
        >
          <CiLinkedin className="w-6 h-6" />
        </Link>
      </li>
      <li className="socials-item">
        <Link
          href="https://github.com/abhrajitray77"
          aria-label="GitHub"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FiGithub className="w-6 h-6" />
        </Link>
      </li>
    </ul>
  );
};

export default Socials;
