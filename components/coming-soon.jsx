"use client";

import React from 'react';
import Image from 'next/image';
import styles from './coming-soon.module.css';

export const ComingSoon = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image 
            src="/images/logo.png" 
            alt="Logo" 
            width={400}
            height={400}
            className={styles.logo}
          />
        </div>
        <h1 className={styles.title}>Tervetuloa Portfoliollemme</h1>
        <p className={styles.subtitle}>Art Bachmann - AI Automaatio Asiantuntija</p>
        <div className={styles.description}>
          Tulevassa ohjelmassa esittelemme monipuolisia projekteja, jotka korostavat AI-automaatioosaamistani ja kehitystäni. Odotettavissa ovat edistyneet chatbotit, automatisoidut ratkaisut ja innovatiiviset integraatiot, jotka tuovat lisäarvoa asiakkaillemme. Portfoliomme heijastaa kykyäni yhdistää ohjelmointitaitoja ja moderneja työkaluja luodakseni tehokkaita ja räätälöityjä ratkaisuja. Pysy kuulolla ja tutustu tuleviin projekteihimme, jotka muokkaavat tulevaisuuden työprosesseja.
        </div>
      </div>
      {[...Array(20)].map((_, index) => (
        <div 
          key={index} 
          className={styles.floatingBubble}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  );
};