"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 2000);
    const buttonTimer = setTimeout(() => setShowButton(true), 4000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <div className={styles.container}>
      {showText && (
        <h1 className={styles.title}>Convocamos você para a linha de frente ouça em primeira mão o som da guerra</h1>
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
