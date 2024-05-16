import React from 'react'

import styles from './skills.module.css';
import Animate from '@/components/Animate';
import Skills from '@/components/Skills';

const MySkills = () => {
    return (
        <div className={styles.wrapper}>
            <Animate type={'slide'}>
                <h2 className={styles.heading}>skills & tools</h2>
                <p>the skills, tools and technologies I used to bring products to life.</p>
            </Animate>
            <Skills />
        </div>
    )
}

export default MySkills