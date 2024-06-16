import React from "react";
import styles from "./Contacts.module.css";
import emailIcon from "./contact/emailIcon.png";
import githubIcon from "./contact/githubIcon.png";
import linkedIcon from "./contact/linkedinIcon.png";
const Contacts = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email Icon" />
          <a href="mailto:safiullah424@gmail.com">safiullah424@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={linkedIcon} alt="LinkedIn Icon" />
          <a href="https://www.linkedin.com/in/safi-ullah-43180b252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            linkedin.com/safiullah
          </a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="GitHub Icon" />
          <a href="https://github.com/dashboard">github.com/safiullah28</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contacts;
