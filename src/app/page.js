import Image from "next/image";
import styles from "./homePage.module.css";
import HomeInfo from "@/components/HomeInfo";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <HomeInfo className={styles.desctiption} />
      <div className={styles.imageContainer}>
        <Image
          src="/banner.png"
          width={500}
          height={550}
          alt="Picture of the author"
        />

      </div>
    </div>);
}
