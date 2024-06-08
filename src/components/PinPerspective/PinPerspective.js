import { motion } from 'framer-motion'
import React from 'react';

import styles from './PinPerspective.module.css';

const PinPerspective = ({
  title,
  href,
}) => {
  return (
    <motion.div className={`${styles.wrapper} perspective--wrapper`}>
      <div>
        <div className={styles.container}>
          <a
            href={href}
            target={"_blank"}
            className={styles.link}
          >
            <span>
              {title}
            </span>

            <span></span>
          </a>
        </div>

        <div
          className={styles.pinWrapper}
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}

        >
          <>
            <motion.div
              className={styles.pinItem}
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
            ></motion.div>
            <motion.div
              className={styles.pinItem}
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
            ></motion.div>
            <motion.div
              className={styles.pinItem}
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
            ></motion.div>/
          </>
        </div>

        <>
          <motion.div className={`${styles.pin} pin`} />
          <motion.div className={`${styles.pin} pin`} />
          <motion.div className={styles.line} />
          <motion.div className={styles.line} />
        </>
      </div>
    </motion.div>
  );
};

export default PinPerspective;
