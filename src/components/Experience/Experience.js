import React from "react";
import styles from "./Experience.module.css";

import htmlIcon from "./skills/html.jpg";
import cssIcon from "./skills/css.jpg";
import reactIcon from "./skills/react.jpg";
import nodeIcon from "./skills/node.jpg";
import graphqlIcon from "./skills/graphql.jpg";
import mongodbIcon from "./skills/mongodb.jpg";
import figmaIcon from "./skills/figma.jpg";
import googleIcon from "./history/google.png";
import microsoftIcon from "./history/microsoft.png";
import netflixIcon from "./history/netflix.png";
import Cicon from "./skills/C.png";
import Cppicon from "./skills/c++.png";
import javaicon from "./skills/java.png";
import psicon from "./skills/problem solving.png";

const MySkills = [
  {
    title: "HTML",
    icon: htmlIcon,
  },
  {
    title: "CSS",
    icon: cssIcon,
  },
  {
    title: "React",
    icon: reactIcon,
  },
  {
    title: "Node",
    icon: nodeIcon,
  },
  {
    title: "GraphQL",
    icon: graphqlIcon,
  },
  {
    title: "MongoDB",
    icon: mongodbIcon,
  },
  {
    title: "Figma",
    icon: figmaIcon,
  },
  {
    title: "C",
    icon: Cicon,
  },
  {
    title: "C++",
    icon: Cppicon,
  },
  {
    title: "Java",
    icon: javaicon,
  },
  {
    title: "Problem Solving",
    icon: psicon,
  },
];

const History = [
  {
    role: "Software Engineer",
    organisation: "Google",
    startDate: "Sept, 2022",
    endDate: "Present",
    experiences: ["Worked on Google Maps", "Reduced load times by 50%"],
    icons: googleIcon,
  },
  {
    role: "UI Designer",
    organisation: "Mirosoft",
    startDate: "Aug, 2021",
    endDate: "Aug, 2022",
    experiences: ["Worked on Windows 11", "Designed the control panel"],
    icons: microsoftIcon,
  },
  {
    role: "SWE Intern",
    organisation: "Netflix",
    startDate: "Apr, 2020",
    endDate: "Jun, 2020",
    experiences: ["Worked on component library", "Helped create UI components"],
    icons: netflixIcon,
  },
];

const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {MySkills.map((skill, id) => {
            return (
              <div className={styles.skill} key={id}>
                <div className={styles.Imagecontainer}>
                  <img src={skill.icon} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>

        <ul className={styles.history}>
          {History.map((historyitem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={historyitem.icons}
                  alt={`${historyitem.organisation} LOGO`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyitem.role} , ${historyitem.organisation}`}</h3>
                  <p>{`${historyitem.startDate}, ${historyitem.endDate}`}</p>
                  <ul>
                    {historyitem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
