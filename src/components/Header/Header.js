'use client';
import React from 'react';
import { createPortal } from "react-dom";
import {
  Menu,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';
import styles from './Header.module.css';
import NavigationLink from '../NavigationLink';
import MobileMenu from '../MobileMenu';
import Link from 'next/link';
import DarkModeBtn from '../DarkModeBtn';

function Header({ initialTheme }) {
  const [isMobileMenuShown, setIsMobileMenuShown] = React.useState(false);
  return (
    <>
      <header className={styles.wrapper}>
        <div className={styles.logo}>
          <Link href="/">
            A
            <span>H</span>
          </Link>
        </div>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <NavigationLink href='skills'>
                skills
              </NavigationLink>
            </li>
            <li>
              <NavigationLink href='about'>
                about
              </NavigationLink>
            </li>
            <li>
              <NavigationLink href='portfolio'>
                portfolio
              </NavigationLink>
            </li>
            <li>
              <NavigationLink href='blog'>
                blog
              </NavigationLink>
            </li>
            <li>
              <NavigationLink href='contact'>
                contact
              </NavigationLink>
            </li>
          </ul>
        </nav>
        <div className={styles.actions}>
          <DarkModeBtn initialTheme={initialTheme} />
          <button
            onClick={() => setIsMobileMenuShown(true)}
            className={styles.menu}
          >
            <Menu />
          </button>
        </div>
      </header>
      <MobileMenu isOpen={isMobileMenuShown} onDismiss={() => setIsMobileMenuShown(false)} />
    </>
  )
}

export default Header;
