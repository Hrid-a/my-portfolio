import Image from "next/image";
import styles from "./homePage.module.css";
import HomeInfo from "@/components/HomeInfo";
import profile from "../../public/banner.png";
import Animate from "@/components/Animate";
export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Animate type={'fade'}>
        <div className={styles.imageContainer}>
          <div></div>
          <Image
            src={profile}
            width={500}
            height={550}
            alt="Picture of the author"
            placeholder='empty'
          />
        </div>
      </Animate>
      <HomeInfo className={styles.desctiption} />
    </div>);
}
