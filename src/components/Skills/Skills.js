'use client';
import React from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import { skills } from '@/constant';
import Icon from '../Icon';

import styles from './skills.module.css';

function Skills() {
  const id = React.useId();
  return <LayoutGroup>

    <div className={styles.wrapper}>
      <ul>
        {skills.map((skill, index) => {
          const layoutId = `${id}-${index}`
          return <motion.li
            layoutId={layoutId}
            key={layoutId}
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 40 + index * 5,
            }}
          >
            <Icon icon={skill} title={skill} />
          </motion.li>
        })}
      </ul>
    </div>;
  </LayoutGroup>
}

export default Skills;
