import Image from "next/image";
import styles from "../styles/Detalhes.module.css";

export default function Detalhes() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <Image
        src="/background_normal.PNG"
        alt="Imagem central"
        className={styles.centeredImage}
        width={300}
        height={300}
      />
      <p className={styles.addressText}>endereço: Rua kamikaze 00</p>
    </div>
  );
}
