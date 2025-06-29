import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden flex flex-col lg:justify-between items-center lg:min-h-screen">
      {/* Background layer */}
      <div className="absolute inset-0 bg-stone-900"></div>

      {/* Name heading */}
      <h3 className="relative z-20 text-center font-bold text-gray-50 pt-12 lg:pt-20 text-5xl  lg:text-[100px] xl:text-[150px]  select-none">
        Marwan Ahmed
      </h3>

      {/* Animated title */}
      <h5 className="relative z-20 text-center text-gray-300 text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto px-4">
        <TypeAnimation
          sequence={[
            " ",
            1000,
            "MERN ",
            1000,
            "MERN Stack",
            2000,
            "MERN Stack Developer",
            8000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ display: "inline-block" }}
        />
      </h5>
      <p className="relative z-30 text-white text-4xl flex justify-center gap-4">
        <a target="_blank" href="https://github.com/Marwan90679">
          <FaGithub />
        </a>{" "}
        <a
          href="https://x.com/marwanedyes"
          target="_blank"
          aria-label="X/Twitter"
        >
          <FaXTwitter className="text-3xl sm:text-4xl" />
        </a>
      </p>
      {/* Image container */}
      <div className="relative z-10 w-full max-w-6xl flex justify-center items-center h-[250px] md:h-[300px] lg:h-[400px] xl:h-[500px] mt-8 lg:mt-12">
        <div className="hidden sm:block absolute left-4 lg:left-4 xl:left-8 top-1/4 md:top-1/3 transform -translate-y-1/2 z-20 w-32 md:w-40 text-right">
          <p className="text-xs md:text-sm lg:text-xl text-gray-400 font-mono italic rotate-[-10deg]">
            "Coding by daylight"
          </p>
          <div className="h-px w-12 md:w-16 bg-gray-600 mr-auto mt-1"></div>
        </div>

        {/* Image holder */}
        <div className="relative w-full h-full bg-gradient-to-r from-stone-700 to-stone-800 rounded-t-full overflow-hidden">
          <div className="absolute z-20 top-12 md:top-6 lg:top-8 left-1/2 transform -translate-x-1/2 bg-stone-900/80 backdrop-blur-sm rounded-full px-3 md:px-6 py-2 border border-stone-600">
            <h3 className="text-xs md:text-lg lg:text-xl text-gray-300 font-medium whitespace-nowrap">
              I Make Cool Stuff. What's Your Superpower?
            </h3>
          </div>

          <img
            className="select-none absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3 w-full md:w-100 lg:w-[800px]  object-contain"
            src="https://i.ibb.co/tGk2hXm/Adobe-Express-file.png"
            alt="Marwan Ahmed"
          />
        </div>
        <div className="hidden sm:block absolute right-0 lg:right-4 xl:right-8 top-1/4 md:top-1/3 transform -translate-y-1/2 z-20 w-32 md:w-40 text-left">
          <p className="text-xs lg:text-xl md:text-sm text-gray-400 font-mono italic rotate-[10deg]">
            "Debugging by moonlight"
          </p>
          <div className="h-px w-12 md:w-16 bg-gray-600 ml-auto mt-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
