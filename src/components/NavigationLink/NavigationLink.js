'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

import styles from './NavigationLink.module.css';
import clsx from 'clsx';

function NavigationLink({ children, href }) {
  const pathname = usePathname();
  return <Link href={href} className={clsx(styles.wrapper, pathname === `/${href}` ? styles.active : '')}>
    <span className={styles.mainText}>{children}</span>
    <span className={styles.hoverdText}>{children}</span>
  </Link>;
}

export default NavigationLink;
