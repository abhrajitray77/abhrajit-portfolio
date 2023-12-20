import React from "react";

const Hero = () => {
  return (
    <div
      className=" border-[1px] border-neutral-900 bg-neutral-100 p-1 lg:p-2
    "
    >
      <div className="flex w-[50%] border-[1px] border-neutral-500">
        {/* left */}
        <div className="flex flex-col">
          <div className="px-4 py-2 border-b-[1px] border-neutral-500">
            <h1 className="flex flex-col text-5xl md:text-6xl lg:text-8xl uppercase font-extrabold">
              <span>Abhrajit</span>
              <span>Ray</span>
            </h1>
          </div>

          <div className="px-4 py-2 border-b-[1px] border-neutral-500 bg-neutral-800">
            <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase text-neutral-200 font-extralight">Developer</h2>
          </div>
          {/*desc */}
          <p className="text-base md:text-md leading-5 w-[95%] p-4 ">
            I&apos;m a Full Stack developer who specializes in creating fast and
            scalable websites with responsive design and great UI. I use
            Next.js, React, and Tailwind CSS, along with technologies like
            Firebase, Supabase, Appwrite and MongoDB. I&apos;m exploring some AI/Ml
            and a bit of Azure DevOps as well. Let&apos;s connect and work on
            something cool together!
          </p>
        </div>

        {/* right */}
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
