"use client";

import React, { useState, useEffect } from 'react';
import styles from './coming-soon.module.css';

export const ComingSoon = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % 100);
    }, 50);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div 
        className={styles.background}
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 80%)`
        }}
      />
      <div className={styles.content}>
        <img src="/images/logo.png" alt="Logo" className={styles.logo} />
        <h1 className={styles.title}>Ohjelma on valmisteilla</h1>
        <p className={styles.subtitle}>Pysy kuulolla, tulossa pian!</p>
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: `${count}%` }} />
        </div>
        <p className={styles.loadingText}>Lataaminen... {count}%</p>
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