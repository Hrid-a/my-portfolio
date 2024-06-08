'use client';
import React from 'react';
import { motion } from 'framer-motion';

function Animate({ direction, type, children }) {
  const translateFrom = direction === 'top' ? { y: '1000%' } : { x: '-100%' }
  const translateTo = direction === 'top' ? { y: 0 } : { x: 0 }
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  const item = {
    visible: { opacity: 1, ...translateTo },
    hidden: { opacity: 0, ...translateFrom },
  }

  return <motion.div
    initial="hidden"
    animate="visible"
    variants={type === 'fade' ? list : item}
    transition={{
      type: 'spring',
      stiffness: 400,
      damping: 70,
    }}
  >
    {children}
  </motion.div>;
}



export default Animate;
