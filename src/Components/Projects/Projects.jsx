import React, { useState } from "react";

import ProjectCard from "./ProjectCard";


const Projects = () => {
 const [projects,setProjects]=useState([])
 fetch('./projects.json')
 .then(res=>res.json())
 .then(data=>setProjects(data))

  return (
    <section name='projects' className="font-rubik w-11/12 md:w-3/4 lg:w-2/3 mx-auto lg:py-12 min-h-screen">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="font-extrabold text-4xl sm:text-5xl md:text-6xl pt-8 text-stone-900 mb-4">
          My Projects
        </h2>
        <p className="text-stone-600 lg:w-3/4  mx-auto ">
          Since beginning my journey in programming, I've actively engaged in
          building a diverse range of projects. These endeavors span from
          fundamental landing pages to comprehensive, fully functional web
          applications, each developed independently to hone my skills. Below,
          you'll find a selection of my latest works, showcasing my practical
          application of modern web technologies.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-8">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id}></ProjectCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;
