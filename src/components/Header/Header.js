import React from 'react';
import {
  Menu,
  Moon,
  Sun
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';
import styles from './Header.module.css';
import NavigationLink from '../NavigationLink';

function Header({ theme }) {

  return <header className={styles.wrapper}>
    <div className={styles.logo}>
      <a href="/">
        A
        <span>H</span>
      </a>
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
      <button>
        <VisuallyHidden>
          {theme === 'light' ? 'switch to dark mode' : 'switch to light mode'}
        </VisuallyHidden>
        {
          theme === 'light' ? <Sun size={24} /> :
            <Moon size={24} />
        }
      </button>
      <button className={styles.menu}>
        <Menu />
      </button>
    </div>
  </header>;
}

export default Header;
