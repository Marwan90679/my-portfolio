import React, { useState } from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { TbArrowUpRight } from "react-icons/tb";
import ProjectDetails from "./ProjectDetails"; 
import { FaGithub } from "react-icons/fa";


const ProjectCard = ({ project, isExpanded, onToggle }) => {
  const [open, setOpen] = useState(false); 

  return (
    <>
      <div
        key={project.id}
        className={`group border-t border-stone-300 pt-8 pb-6 px-4 transition-all duration-300 rounded-lg
          ${isExpanded ? "bg-stone-100" : ""} lg:hover:bg-stone-100`}
        onClick={() =>
         
          onToggle(project.id)
        }
      >
        {/* header */}
        <div className="cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
          <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-stone-900">
            {project.projectDetails.name}
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-stone-600 text-sm px-3 py-1 border border-stone-300 rounded-full mt-2 md:mt-0">
              {project.projectDetails.category}
            </span>  
            <span className=" text-stone-500 ">
              {isExpanded ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
            </span>
          </div>
        </div>

       
        <div
          className={`${
            isExpanded ? "block" : "hidden"
          } 
            transition-all duration-300 overflow-hidden mt-6`}
        >
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2 rounded-lg shadow-lg">
              <img
                src={project.img}
                alt={project.projectDetails.name}
                className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-lg"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/600x400/ccc/white?text=${project.projectDetails.name.replace(/\s/g, '+')}+Image`;
                }}
              />
            </div>

            <div className="lg:w-1/2">
              <p className="text-stone-600 mb-6">
                {project.projectDetails.description.split(" ").length > 30
                  ? project.projectDetails.description
                      .split(" ")
                      .slice(0, 30)
                      .join(" ") + "..."
                  : project.projectDetails.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-stone-500 mb-2">Built With:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.projectDetails.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-stone-200 text-stone-700 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.projectDetails.otherTechnologies && project.projectDetails.otherTechnologies.length > 0 && (
                    project.projectDetails.otherTechnologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-stone-200 text-stone-700 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))
                  )}
                </div>
              </div>

              {/* open modal */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(true);
                }}
                className="arrow flex items-center gap-1 border rounded-2xl px-3 py-1 hover:bg-gray-200
                           text-neutral-700 hover:text-neutral-800"
              >
                <span className='hover:rotate-359 duration-1000'> <TbArrowUpRight /></span> View Full Details
              </button>
              {project.githubLink && (
                <a
                  href='https://github.com/Marwan90679'
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" flex justify-center border rounded-2xl  py-1 hover:bg-gray-200
                             w-20 px-4 text-center my-3"
                >
                 
                  <FaGithub size={20}/>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      
      {open && (
        <ProjectDetails
          project={project}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;
