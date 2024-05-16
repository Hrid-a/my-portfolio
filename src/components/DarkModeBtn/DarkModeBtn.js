'use client';
import React from 'react';
import {
  Moon,
  Sun
} from 'react-feather';
import Cookies from 'js-cookie';
import { motion } from 'framer-motion';

import VisuallyHidden from '../VisuallyHidden';
import { DARK_TOKENS, LIGHT_TOKENS } from '@/constant';

function DarkModeBtn({ initialTheme }) {
  const [theme, setTheme] = React.useState(initialTheme);
  const handleToggleTheme = () => {

    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme);
    Cookies.set('theme-color', newTheme, { expires: 10000 });
    const newTokens = newTheme === 'light' ? LIGHT_TOKENS : DARK_TOKENS;

    const root = document.documentElement;
    root.setAttribute('data-color-theme', newTheme);

    Object.entries(newTokens).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });


  };
  return <motion.button
    key={theme}
    animate={{ rotate: 360 }}
    transition={{
      type: 'spring',
      stiffness: 400,
      damping: 45,
    }}
    onClick={handleToggleTheme}
  >
    <VisuallyHidden>
      {theme === 'light' ? 'switch to dark mode' : 'switch to light mode'}
    </VisuallyHidden>
    {
      theme === 'light' ? <Sun size={24} /> :
        <Moon size={24} color='white' />
    }
  </motion.button>;
}

export default DarkModeBtn;
