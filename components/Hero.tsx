import Image from "next/image";
import React from "react";
import propic from "@/public/assets/noBgPic.png";
import { socialLinks } from "@/app/lib/socialsData";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Socials from "./Socials";

const Hero = () => {
  return (
    <div
      className=" border-[1px] border-neutral-900 bg-neutral-100 p-1 lg:p-2
    "
    >
      <div className="flex flex-col md:flex-row border-[1px] border-neutral-500">
        {/* left */}
        <div className="flex w-full border-r-[1px] border-neutral-500 flex-col">
          <div className="px-4 py-2 border-b-[1px] border-neutral-500">
            <h1 className="flex flex-col text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase font-extrabold">
              <span>Abhrajit</span>
              <span>Ray</span>
            </h1>
          </div>

          <div className="px-4 py-2 border-b-[1px] border-neutral-500 bg-[#96B6C5]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase text-neutral-200 font-extralight">
              Developer
            </h2>
          </div>
          {/*desc */}
          <div className="hidden flex-1 md:block text-base md:text-md leading-5 w-[95%] p-4
          space-y-1 ">
            <p>
              I&apos;m a Full Stack developer who specializes in creating fast
              and scalable websites with responsive design and great UI.
            </p>
            <p>
              I use Next.js, React, and Tailwind CSS, along with technologies
              like Firebase, Supabase, Appwrite and MongoDB. I&apos;m exploring
              some AI/ML and a bit of DevOps as well.
            </p>
            <p>👋 Let&apos;s connect and work on something cool together!</p>
          </div>
          {/* socials */}
          <div>
            <Socials />
          </div>
        </div>

        {/* right */}
        <div className=" md:w-[90%] flex flex-col justify-center items-center">
          <div className="relative h-full flex">
            <div
              className="absolute w-10 h-[90%] bg-[#A7D397] -top-24
            right-40 rotate-[70deg] z-40"
            ></div>
            <div
              className="absolute w-20 h-[90%] bg-[#A7D397] opacity-40 bottom-0
            right-28 z"
            ></div>

            <Image
              src={propic}
              alt="proPic"
              width={800}
              height={800}
              className="w-[400px] self-end"
            />
          </div>

          <div className="self-start w-full border-t-[1px] border-neutral-500 px-4 py-2 bg-[#96B6C5]">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl uppercase text-neutral-200  
            font-extralight"
            >
              Technical Writer
            </h2>
          </div>
          {/*desc */}
          <p className="md:hidden text-base md:text-md leading-5 w-[95%] p-4">
            I&apos;m a Full Stack developer who specializes in creating fast and
            scalable websites with responsive design and great UI. I use
            Next.js, React, and Tailwind CSS, along with technologies like
            Firebase, Supabase, Appwrite and MongoDB. I&apos;m exploring some
            AI/ML and a bit of Azure DevOps as well. Let&apos;s connect and work
            on something cool together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
