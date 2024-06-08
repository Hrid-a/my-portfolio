"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

import styles from "./PinContainer.module.css";
import PinPerspective from "../PinPerspective";
import Link from "next/link";

const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
  index
}) => {
  const perspective = {
    initial: {
      opacity: 0,
      rotateX: 90,
      translateY: 80,
      translateX: -20,
    },
    enter: (i) => ({
      opacity: 1,
      rotateX: 0,
      translateY: 0,
      translateX: 0,
      transition: {
        type: "spring",
        stifness: 400,
        damping: 40 + i * 5,
      }
    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] }
    }
  }
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <motion.div
      className={clsx(
        styles.wrapper,
        containerClassName, 'pinContainer'
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      custom={index}
      variants={perspective}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Link href={href}
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className={styles.container}
      >
        <div
          style={{
            transform: transform,
          }}
          className={styles.decoration}
        >
          <div className={clsx(styles.content, className)}>{children}</div>
        </div>
      </Link>
      <PinPerspective title={title} href={href} />
    </motion.div>
  );
};
export default PinContainer;