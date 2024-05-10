import React from 'react';

import styles from './HomeInfo.module.css';
import clsx from 'clsx';

function HomeInfo({ className }) {
  return <div className={clsx(styles.wrapper, className)}>
    <spn>Welcome to my world</spn>
    <h1 className={styles.heading}>
      <span>Hi, I am {' '}</span>
      Ahmed Hrid
    </h1>

    <p className="">
      I&apos;m a full stack developer specialized in building dynamic web applications.
      Eager to contribute innovative solutions and collaborate on exciting projects.
      Let&apos;s create remarkable digital experiences together!
    </p>
  </div>;
}

export default HomeInfo;
