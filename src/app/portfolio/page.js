import React from "react";

import PinContainer from "@/components/PinContainer";
import styles from './Portfolio.module.css';

export default function PortfolioPage() {
  return (
    <div className={styles.wrapper}>
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
        index={0}
      >
        <div className={styles.content}>
          <h3 className={styles.header}>
            Aceternity UI
          </h3>
          <div>
            <span>
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className={styles.image} />
        </div>
      </PinContainer>
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
        index={1}
      >
        <div className={styles.content}>
          <h3 className={styles.header}>
            Aceternity UI
          </h3>
          <div>
            <span>
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className={styles.image} />
        </div>
      </PinContainer>
    </div>
  );
}
