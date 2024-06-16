import React from "react";
import styles from "./Project.module.css";
import projectIcon from "./projects/project.png";
import ProjectCard from "./ProjectCard";

const myProjects = [
  {
    title: "Mini E-Commerce Store",
    url: projectIcon,
    description:
      "A React-based weather application providing real-time weather updates and forecasts based on user-selected locations",
    skills: ["React", "Axios"],
    demo: "https://ministoreproj.netlify.app",
    source: "https://github.com/safiullah28/E-commerce",
  },
  {
    title: "Calculator",
    url: projectIcon,
    description:
      "A React-based calculator application designed to perform basic arithmetic operations with a user-friendly interface.",
    skills: ["React"],
    demo: "https://calculateapplication.netlify.app",
    source: "https://github.com/safiullah28/Calculator",
  },
  {
    title: "To Do List",
    url: projectIcon,
    description:
      "A React-based to-do list application allowing users to manage tasks efficiently with features for adding and removing items.",
    skills: ["React"],
    demo: "https://dailytaskapps.netlify.app",
    source: "https://github.com/safiullah28/To-Do-List",
  },
  {
    title: "Weather App",
    url: projectIcon,
    description:
      "A React-based weather application providing real-time weather updates and forecasts based on user-selected locations",
    skills: ["React", "Axios"],
    demo: "https://applweather.netlify.app",
    source: "https://github.com/safiullah28/Weather-App-React",
  },
  {
    title: "Record Keeping",
    url: projectIcon,
    description:
      "A React-based record-keeping application designed to efficiently store various types of emails or name entries.",
    skills: ["React"],
    demo: "https://recordkeepingsytem.netlify.app",
    source: "https://github.com/safiullah28/Record-Keeping-System",
  },
];

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {myProjects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
