'use client';
import React from 'react';
import { GitHub, Linkedin } from 'react-feather';
import { motion } from 'framer-motion';

import NavigationLink from '../NavigationLink';
import Modal from '../Modal';
import styles from './MobileMenu.module.css';
import Animate from '../Animate';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
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
        duration: 0.65,
        delay: 0.5 + (i * 0.1),
        ease: [.215, .61, .355, 1],
        opacity: { duration: 0.35 }
      }
    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] }
    }
  }

  return !isOpen ? null : (
    <Modal
      isOpen={isOpen}
      handleDismiss={onDismiss}
    >
      <div className={styles.content}>

        <nav className={styles.navigation}>
          <ul>
            <motion.li
              custom={0}
              variants={perspective}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <NavigationLink href='skills'>
                skills
              </NavigationLink>
            </motion.li>
            <motion.li
              custom={1}
              variants={perspective}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <NavigationLink href='about'>
                about
              </NavigationLink>
            </motion.li>
            <motion.li
              custom={2}
              variants={perspective}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <NavigationLink href='portfolio'>
                portfolio
              </NavigationLink>
            </motion.li>
            <motion.li
              custom={3}
              variants={perspective}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <NavigationLink href='blog'>
                blog
              </NavigationLink>
            </motion.li>
            <motion.li
              custom={4}
              variants={perspective}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <NavigationLink href='contact'>
                contact
              </NavigationLink>
            </motion.li>
          </ul>
        </nav>
        <footer className={styles.footer}>
          <Animate type={'slide'} direction={'top'}>
            <div className={styles.actions}>
              <a
                href='https://github.com/Hrid-a' target='_blank'>
                <GitHub size={24} />
                <VisuallyHidden>a git hub link to my github portfolio</VisuallyHidden>
              </a>
              <a
                href='https://www.linkedin.com/in/hrid-044895258' target='_blank'>
                <VisuallyHidden>a  linkdin lin to my Linkd in portfolio</VisuallyHidden>
                <Linkedin size={24} />
              </a>
            </div>
          </Animate>
        </footer>
      </div>
    </Modal>
  )
}




export default MobileMenu;
