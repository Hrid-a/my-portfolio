import React from 'react';
import Styles from './Footer.module.css';

function Footer() {
  return <div className={Styles.wrapper}>
    <p>&copy; 2024 <cite>Ahmed Hrid</cite>.</p>
    <address>Agadir, Morocco</address>
  </div>;
}

export default Footer;
