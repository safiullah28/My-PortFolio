import React,{useState} from "react";
import styles from "./Navbar.module.css";
import close from './nav/closeIcon.png';
import menuIcon from './nav/menuIcon.png';
const Navbar = () => {
  const [menuOpen,setMenuopen]=useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">PortFolio</a>
      <div className={styles.menu}>
        <img src={menuOpen ? close : menuIcon} alt="menu-button" className={styles.menuBtn} onClick={()=>{setMenuopen(!menuOpen)}}/>
        <ul className={`${styles.menuitems} ${menuOpen && styles.menuOpen}`} onClick={()=>{setMenuopen(false)}}>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
