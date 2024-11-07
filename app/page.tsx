"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './styles/Home.module.css';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function Home() {
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 1000);
    const buttonTimer = setTimeout(() => setShowButton(true), 1000);

    if (window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID, {
        page_path: '/home', 
      });
    }

    return () => {
      clearTimeout(textTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <div className={styles.container}>
      {showText && (
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            Convocamos você para a linha de frente ouça em primeira mão o som da guerra
          </h1>
        </div>
      )}
      {showButton && (
        <div className={styles.buttonContainer}>
          <Link href="/details" className={styles.fadeInButton}>
            Entrar
          </Link>
        </div>
      )}
    </div>
  );
}
