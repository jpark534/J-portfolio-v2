import React from "react";

import styles from "./ProjectCard.module.css";
import img from "/assets/projects/WeAttire.png";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={(imageSrc, import.meta.url)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        {/* <a href={demo} className={styles.link}>
          Demo
        </a> */}
        <a href={source} target="_blank" className={styles.link}>
          github &nbsp; 🖥
        </a>
      </div>
    </div>
  );
};