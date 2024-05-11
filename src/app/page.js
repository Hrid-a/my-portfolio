import Image from "next/image";
import styles from "./homePage.module.css";
import HomeInfo from "@/components/HomeInfo";
import profile from "../../public/banner.png";
export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <div></div>
        <Image
          src={profile}
          width={500}
          height={550}
          alt="Picture of the author"
          placeholder="blur"
        />
      </div>
      <HomeInfo className={styles.desctiption} />
    </div>);
}
