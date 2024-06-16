import React from "react";
import styles from "./About.module.css";
import AboutImg from "./about/aboutImage.png";
import CursorIcon from "./about/cursorIcon.png";
import ServerIcon from "./about/serverIcon.png";
import UiIcon from "./about/uiIcon.png";
import psicon from "./about/problem solving.png";
const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={AboutImg}
          alt="Me sitting with the laptop"
          className={styles.aboutImg}
        />
      </div>
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <img src={CursorIcon} alt="Cursor Icon" />
          <div className={styles.aboutItemText}>
            <h3>Front End Developer</h3>
            <p>
              I am a frontend developer with expereince in buliding responsive
              and optimized sites
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={ServerIcon} alt="Server Icon" />
          <div className={styles.aboutItemText}>
            <h3>Back End Developer</h3>
            <p>I have experience developing fast and optimised APIs</p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={UiIcon} alt="UI Icon" />
          <div className={styles.aboutItemText}>
            <h3>UI Design</h3>
            <p>I have design multiple landing pages and have systems as well</p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={psicon} alt="Problem Solving Icon" />
          <div className={styles.aboutItemText}>
            <h3>Problem Solving</h3>
            <p>
              I possess strong problem-solving abilities, adept at tackling
              challenges with innovative solutions.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default About;
