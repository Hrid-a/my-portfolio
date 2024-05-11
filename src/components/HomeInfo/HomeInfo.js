import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import Sparkles from '../Sparkles';
import styles from './HomeInfo.module.css';

function HomeInfo({ className }) {
  return <div className={clsx(styles.wrapper, className)}>
    <span>
      Welcome to my world
    </span>
    <h1 className={styles.heading}>
      <span>Hi, I am {' '}</span>

      <Sparkles>
        Ahmed HRID
      </Sparkles>
    </h1>

    <p className="">
      I&apos;m a full stack developer specialized in building dynamic web applications.
      Eager to contribute innovative solutions and collaborate on exciting projects.
      Let&apos;s create remarkable digital experiences together!
    </p>
    <Link href='/contact' className={styles.btn}>
      Let&apos;s talk
    </Link>
  </div>;
}

export default HomeInfo;
