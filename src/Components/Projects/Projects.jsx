import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard"; // Ensure this path is correct

const Projects = () => {

  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    setLoading(true);
    fetch('./projects.json')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching projects:", error);
        setLoading(false);
      });
  }, []);

  const handleToggleProject = (projectId) => {
    setExpandedProjectId(prevId => (prevId === projectId ? null : projectId));
  };

  if (loading) {
    return (
      <section className="font-rubik w-11/12 md:w-3/4 lg:w-2/3 mx-auto py-20 min-h-screen flex justify-center items-center text-xl text-stone-700">
        Loading projects...
      </section>
    );
  }

  return (
    <section name='projects' className="font-rubik w-11/12 md:w-3/4 lg:w-2/3 mx-auto lg:mb-48 min-h-screen ">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="font-extrabold text-4xl sm:text-5xl md:text-6xl pt-8 text-stone-900 mb-4">
          My Projects
        </h2>
        <p className="text-stone-600 lg:w-3/4 mx-auto ">
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
          <ProjectCard
            project={project}
            key={project.id}         
            isExpanded={expandedProjectId === project.id}
            onToggle={handleToggleProject}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
