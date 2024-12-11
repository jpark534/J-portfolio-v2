import React from "react";
import styles from "./Hero.module.css";


import heroIcon from '/assets/hero/heroImage.png';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 classname={styles.title}>Hi, I'm Julia</h1>
        <p classname={styles.description}>I'm a full stack developer</p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>Contact Me!</a>
      </div>
      <img 
        src={heroIcon} 
        alt="Hero Image of Me" 
        className={styles.heroImg} 
      />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>

    </section>
  );
};