import Link from 'next/link';
import React from 'react';

import styles from './NavigationLink.module.css';

function NavigationLink({ children, href }) {

  return <Link href={href} className={styles.wrapper}>
    <span className={styles.mainText}>{children}</span>
    <span className={styles.hoverdText}>{children}</span>

  </Link>;
}

export default NavigationLink;
