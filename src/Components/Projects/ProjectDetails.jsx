import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { TbArrowUpRight } from "react-icons/tb";

const ProjectDetails = ({ project, onClose }) => {

  // close on Esc
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4 font-rubik"
      onClick={onClose}                 // click backdrop to close
    >
      <div
        onClick={(e) => e.stopPropagation()} // keep clicks inside
        className="relative bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl
                   p-6 sm:p-8 md:p-10 max-w-4xl w-full max-h-[90vh] overflow-y-auto
                   transform scale-95 transition-all duration-300 ease-out"
      >
        {/* close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-700 hover:text-stone-900
                     text-3xl font-bold px-2  rounded-full bg-stone-200/50 hover:bg-stone-300
                     transition-colors"
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-3">
          {project.projectDetails.name}
        </h1>
        <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
          {project.projectDetails.category}
        </span>

        {/* image */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg border border-stone-200">
          <img
            src={project.img}
            alt={project.projectDetails.name}
            className="select-none w-full h-auto max-h-[500px] object-contain rounded-xl"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://placehold.co/800x450/ccc/white?text=${project.projectDetails.name.replace(/\s/g, "+")}+Image`;
            }}
          />
        </div>

        {/* overview */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-stone-800 mb-4">Overview</h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed whitespace-pre-line">
            {project.projectDetails.description}
          </p>
        </div>

        {/* tech */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-stone-800 mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.projectDetails.technologies.map((tech, i) => (
              <span key={i} className="px-4 py-2 bg-stone-700 text-white rounded-full text-sm font-medium shadow-sm">
                {tech}
              </span>
            ))}
            {project.projectDetails.otherTechnologies?.length > 0 && (
              <>
                <h3 className="w-full text-lg sm:text-xl font-semibold text-stone-600 mt-6 mb-2">
                  Additional Libraries & Tools:
                </h3>
                {project.projectDetails.otherTechnologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1.5 bg-stone-300 text-stone-800 rounded-full text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </>
            )}
          </div>
        </div>

        {project.projectDetails.challenges && (
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-stone-800 mb-4">Challenges & Learnings</h2>
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed whitespace-pre-line">
              {project.projectDetails.challenges}
            </p>
          </div>
        )}

        {project.projectDetails.plans && (
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-stone-800 mb-4">Future Plans</h2>
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed whitespace-pre-line">
              {project.projectDetails.plans}
            </p>
          </div>
        )}

        {/* links */}
        <div className="flex flex-wrap gap-4 mt-6">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-stone-700 to-stone-800 text-white font-medium rounded-lg shadow-md
                         hover:from-stone-800 hover:to-stone-900 transition-all duration-300 transform hover:scale-105"
            >
              <TbArrowUpRight className="text-xl" /> Live Demo
            </a>
          )}

          {typeof project.githubLink === "string" ? (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 text-white font-medium rounded-lg shadow-md
                         hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              <FaGithub className="text-xl" /> View Code
            </a>
          ) : (
            <>
              {project.githubLink.client && (
                <a
                  href={project.githubLink.client}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 text-white font-medium rounded-lg shadow-md
                             hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                >
                  <FaGithub className="text-xl" /> Client Code
                </a>
              )}
              {project.githubLink.backend && (
                <a
                  href={project.githubLink.backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 text-white font-medium rounded-lg shadow-md
                             hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                >
                  <FaGithub className="text-xl" /> Backend Code
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
