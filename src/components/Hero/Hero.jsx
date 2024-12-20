import React from "react";
import styles from "./Hero.module.css";


import heroIcon from '/assets/hero/heroImage.png';
import image from '/assets/hero/herobg.png';

export const Hero = () => {
  return (
    <div style={{ backgroundImage:`url(${image})`}}>
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.headertitle}>Computer Engineering @ UWaterloo</h1>
          <h1 className={styles.subtitle}>Hello 👋</h1>
          <h1 className={styles.title}> I am Julia.</h1>
          <p className={styles.description}>
            engineer ∙ developer ∙ innovator
          </p>
          <a href="mailto:jparkhyun334@gmail.com" className={styles.contactBtn}>
            Get in touch &#8594;
          </a>
        </div>
        <img
          src={heroIcon}
          alt="Hero image of me"
          className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </section>
    </div>
  );
};