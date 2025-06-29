import React from "react";
import { TbBrandFramerMotion } from "react-icons/tb";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiReactquery,
  SiRedux,
  SiGreensock,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiJsonwebtokens,
  SiAxios,
  SiReactrouter,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
  const skillsData = [
    { id: 1, name: "HTML", icon: FaHtml5, color: "#E34F26" },
    { id: 2, name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
    { id: 3, name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
    { id: 4, name: "React JS", icon: FaReact, color: "#61DAFB" },
    { id: 10, name: "Node JS", icon: FaNodeJs, color: "#339933" },
    { id: 9, name: "Express JS", icon: SiExpress, color: "#F7F7F7" },
    { id: 11, name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { id: 13, name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { id: 14, name: "Git", icon: FaGitAlt, color: "#F05032" },
    { id: 15, name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
    { id: 16, name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { id: 12, name: "React Router", icon: SiReactrouter, color: "#CA4245" },
  ];

  return (
    <section name='skills' className="bg-stone-900 lg:py-12 lg:h-screen">
      <div className="w-11/12 md:w-3/4 lg:w-2/3 mx-auto  flex flex-col">
        <div className="text-center">
          <h3 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-50  pt-12 pb-4">
            Skills
          </h3>
          <p className="text-gray-300 lg:w-3/4 mx-auto">
            My journey as a MERN stack developer is constantly evolving, and
            this section showcases the technical proficiencies and specific
            technologies I've cultivated. These are the tools and languages I
            apply daily to solve complex problems and build innovative
            solutions, with an eagerness to expand my toolkit further.
          </p>
        </div>

        <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-8 mt-8">
          {skillsData.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.id}
                className=" flex flex-col items-center p-4 bg-stone-800 rounded-lg hover:bg-stone-700 transition-colors duration-300 group"
              >
                <Icon
                  className="text-4xl mb-2 lg:text-6xl"
                  style={{ color: skill.color }}
                  aria-label={skill.name}
                />
                <span className="text-sm sm:text-base font-medium text-gray-200 group-hover:text-white">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
