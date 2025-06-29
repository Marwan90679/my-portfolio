import React from "react";

const AboutMe = () => {
  return (
    
 <section className="relative min-h-screen">
       <div className="absolute inset-0 bg-white/40"></div>
       <div className=" font-rubik w-11/12 md:w-3/4 lg:w-2/3 mx-auto  flex flex-col justify-center py-4 lg:py-12 ">
           
      <div className="flex justify-center lg:mb-8">
        <h3 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-stone-900 py-8">
          About Me
        </h3>
      </div>

     
      <div className="border-4 border-gray-500 border-dashed space-y-6 md:space-y-8 p-6 sm:p-8 md:p-10 rounded-2xl  backdrop-blur-sm shadow-lg">
        {/* First Paragraph: Introduction */}
        <div className="text-center font-bold">
          <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed">
            <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-stone-900">
              Hey, I'm Marwan Ahmed !
            </span>{" "}
            A 17-year-old MERN stack developer with a passion for real
            problem-solving and diving deep into technology. I've been
            fascinated by tech since I was 13 or 14, and finally got my own PC
            in December 2024 (better late than never!). Currently balancing
            college life with coding adventures, I'm always hungry to learn new
            technologies and push my skills further.
          </p>
        </div>

        {/* Hobbies Section */}
        <div className="text-center">
          <h5 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
            When I'm not coding, you'll find me:
          </h5>
         
          <ul className="list-none space-y-2 text-left mx-auto max-w-sm md:max-w-md">
            <li className="flex items-center pl-4 py-2 pr-2 rounded-md text-gray-800 text-base sm:text-lg transition-all duration-300 hover:bg-[#FFE7D6]">
              <span className="w-2 h-2 rounded-full bg-stone-500 mr-3 flex-shrink-0"></span>{" "}
              <span>Actually reading books (no, really!)</span>
            </li>
            <li className="flex items-center pl-4 py-2 pr-2 rounded-md text-gray-800 text-base sm:text-lg transition-all duration-300 hover:bg-[#FFE7D6]">
              <span className="w-2 h-2 rounded-full bg-stone-500 mr-3 flex-shrink-0"></span>
              <span>Taking long walks to clear my head</span>
            </li>
            <li className="flex items-center pl-4 py-2 pr-2 rounded-md text-gray-800 text-base sm:text-lg transition-all duration-300 hover:bg-[#FFE7D6]">
              <span className="w-2 h-2 rounded-full bg-stone-500 mr-3 flex-shrink-0"></span>
              <span>Geeking out over pre-medieval and medieval history</span>
            </li>
            <li className="flex items-center pl-4 py-2 pr-2 rounded-md text-gray-800 text-base sm:text-lg transition-all duration-300 hover:bg-[#FFE7D6]">
              <span className="w-2 h-2 rounded-full bg-stone-500 mr-3 flex-shrink-0"></span>
              <span>Analyzing geopolitics and current affairs</span>
            </li>
            <li className="flex items-center pl-4 py-2 pr-2 rounded-md text-gray-800 text-base sm:text-lg transition-all duration-300 hover:bg-[#FFE7D6]">
              <span className="w-2 h-2 rounded-full bg-stone-500 mr-3 flex-shrink-0"></span>
              <span>
                Exploring hardware tech (no expertise yet, but it's just so
                cool!)
              </span>
            </li>
          </ul>
        </div>

        {/* Concluding Paragraph */}
        <p className="text-center text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed mt-6">
          I dream big, work hard, and - God willing - I'll reach those heights.
          The journey's just beginning!
        </p>
      </div>
    </div>
 </section>
  );
};

export default AboutMe;
