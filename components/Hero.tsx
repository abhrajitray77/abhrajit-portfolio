import Image from "next/image";
import React from "react";
import propic from "@/public/assets/noBgPic.png";
import Socials from "./Socials";
import RightSide from "./RightSide";

const Hero = () => {
  return (
    <div className="flex">
      <div
        className=" border-[1px] border-neutral-900 bg-neutral-100 p-1 lg:p-2
    "
      >
        <div className="flex flex-col md:flex-row border-[1px] border-neutral-500">
          {/* left */}
          <div className="flex w-full border-r-[1px] border-neutral-500 flex-col">
            <div className="px-4 py-2 border-b-[1px] border-neutral-500">
              <h1
                className="flex flex-col text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase font-extrabold
            md:mx-auto md:w-fit"
              >
                Abhrajit Ray
              </h1>
            </div>

            <div className="px-4 py-2 border-b-[1px] border-neutral-500 bg-[#96B6C5]">
              <h2
                className="text-4xl md:text-5xl lg:text-6xl uppercase text-neutral-200 font-extralight
            md:text-center"
              >
                Developer
              </h2>
            </div>
            {/*desc */}
            <div
              className="hidden flex-1 md:block text-base lg:text-md leading-5 lg:w-[95%] p-4 lg:px-4 
              lg:pt-4 lg:pb-10 space-y-1 "
            >
              <p>
                I&apos;m a Full Stack developer who specializes in creating fast
                and scalable websites with responsive design and great UI.
              </p>
              <p>
                I use Next.js, React, and Tailwind CSS, along with technologies
                like Firebase, Supabase, Appwrite and MongoDB. I&apos;m
                exploring some AI/ML and a bit of DevOps as well.
              </p>
              <p>👋 Let&apos;s connect and work on something cool together!</p>
            </div>
            {/* socials */}
            <div className="hidden md:block">
              <Socials />
            </div>
          </div>

          {/* right */}
          <div className=" md:w-[90%] flex flex-col justify-center items-center">
            <div className="relative h-full flex">
              <Image
                src={propic}
                alt="proPic"
                width={800}
                height={800}
                priority={true}
                className="w-[400px] self-end"
              />
            </div>

            <div className="self-start w-full border-t-[1px] border-neutral-500 px-4 py-2 bg-[#96B6C5]">
              <h2
                className="text-2xl md:text-3xl lg:text-4xl uppercase text-neutral-200  
            font-extralight md:text-center"
              >
                Technical Writer
              </h2>
            </div>
            {/*Mobile desc */}
            <div
              className="md:hidden flex-1 text-base leading-5 p-4
          space-y-1 "
            >
              <p>
                I&apos;m a Full Stack developer who specializes in creating fast
                and scalable websites with responsive design and great UI.
              </p>
              <p>
                I use Next.js, React, and Tailwind CSS, along with technologies
                like Firebase, Supabase, Appwrite and MongoDB. I&apos;m
                exploring some AI/ML and a bit of DevOps as well.
              </p>
              <p>👋 Let&apos;s connect and work on something cool together!</p>
            </div>
            {/* socials */}
            <div className="md:hidden">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      {/* right side panel */}
      <div className="hidden md:block">
        <RightSide />
      </div>
    </div>
  );
};

export default Hero;
