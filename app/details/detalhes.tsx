"use client";
import styles from './styles/Home.module.css';

export default function Detalhes() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <h2>Endereço: Rua Kamikaze 06</h2>
        <p>Data e Hora: 25 de Novembro, 20h</p>
      </div>
    </div>
  );
}
