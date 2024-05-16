import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import Sparkles from '../Sparkles';
import styles from './HomeInfo.module.css';
import Animate from '../Animate';

function HomeInfo({ className }) {


  return <div className={clsx(styles.wrapper, className)}>
    <Animate type='fade'>
      <span>
        Welcome to my world
      </span>
      <h1 className={styles.heading}>
        <span>Hi, I am {' '}</span>

        <Sparkles>
          Ahmed
        </Sparkles>
        <span className={styles.name}> {' '}HRID</span>
      </h1>
    </Animate>
    <Animate type={'slide'}>
      <p className="">
        I&apos;m a full stack developer specialized in building dynamic web applications.
        Eager to contribute innovative solutions and collaborate on exciting projects.
        Let&apos;s create remarkable digital experiences together!
      </p>
    </Animate>
    <Animate type={'slide'} direction={'top'}>
      <Link href='/contact' className={styles.btn}>
        Let&apos;s talk
      </Link>
    </Animate>
  </div>;
}

export default HomeInfo;
