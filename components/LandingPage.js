import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="LandingPage flex flex-col h-screen pt-[90px] sm:pt-0 sm:justify-center items-center">
      <div className="flex flex-col fade-in-bottom w-[300px] sm:w-[480px] lg:w-[550px] justify-center">
        <h1 className="font-quick font-semibold sm:font-normal uppercase text-md sm:font-reactive leading-tight text-6xl md:text-8xl">
          Hi, my name is Tom Rago
        </h1>
        <p className="font-alata text-xl md:text-2xl">
          I am a web developer and I specialize in front-end development.
        </p>

        <div className="flex justify-between items-center relative cursor-pointer">
          <div>
            <img
              className="w-[300px] relative right-10 bottom-5"
              src="/images/stroke.png"
              alt="paint-stroke"
            />
            <div className="absolute top-[16px] sm:top-[30px] left-[35px] sm:left-[65px] text-white font-alata">
              <Link href="#about">
                <h2 className="text-sm sm:text-lg">About Me</h2>
              </Link>
            </div>
          </div>

          <div className="mr-4 sm:mr-0">
            <Link href="https://www.linkedin.com/in/tom-rago-36496065/">
              <FaLinkedin className="text-3xl" />
            </Link>
          </div>

          <div>
            <Link href="https://github.com/tom318267">
              <FaGithub className="text-3xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
