import React from "react";

import styles from "./About.module.css";
import Cursor from '/assets/about/cursorIcon.png';
import server from '/assets/about/serverIcon.png';
import uiIcon from '/assets/about/uiIcon.png';
import image from '/assets/hero/herobg.png';

export const About = () => {
  return (
    <div style={{ backgroundImage:`url(${image})`}}>
      <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img src={Cursor} alt="Cursor icon" />
              <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>
                  I'm a frontend developer with experience in building responsive
                  and optimized sites
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={server} alt="Server icon" />
              <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>
                  I have experience developing fast and optimised back-end systems
                  and APIs
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={uiIcon} alt="UI icon" />
              <div className={styles.aboutItemText}>
                <h3>UI Designer</h3>
                <p>
                  I have designed multiple landing pages and have created design
                  systems as well
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};