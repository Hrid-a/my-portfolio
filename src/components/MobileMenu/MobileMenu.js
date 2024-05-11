import React from 'react';
import NavigationLink from '../NavigationLink';
import Modal from '../Modal';
import styles from './MobileMenu.module.css';

const MobileMenu = ({ isOpen, onDismiss }) => {


  return !isOpen ? null : (
    <Modal
      isOpen={isOpen}
      handleDismiss={onDismiss}
    >
      <div className={styles.content}>

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
        <footer className={styles.footer}>
          <p>this will be a small footer</p>
        </footer>
      </div>
    </Modal>
  )
}




export default MobileMenu;
