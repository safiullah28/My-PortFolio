import React from "react";
import styles from "./Hero.module.css";
import heroimg from "./hero/heroimg4.png";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi I am Safiullah</h1>
        <p className={styles.description}>
          I am a front-end developer with 2 years of experience using React.
          React out if you'd like to learn more{" "}
        </p>
        <a href="mailto:safiullah424@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src={heroimg} alt="Hero" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
