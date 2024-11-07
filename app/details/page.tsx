import Image from 'next/image';
import styles from '../styles/Detalhes.module.css';

export default function Detalhes() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <Image
        src="/kamikaze_album_normal.png"
        alt="Imagem central"
        className={styles.centeredImage}
        width={300}
        height={300}
        priority 
      />
      <p className={styles.addressText}>endereço: Rua kamikaze 00</p>
    </div>
  );
}
