import Image from 'next/image'
import React from 'react'
import profile from '../../../public/about.png';

import styles from './about.module.css';
import { GitHub, Linkedin } from 'react-feather';
const AboutMe = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <h2>About me</h2>
                <section className={styles.content}>
                    <p>
                        <Image
                            src={profile}
                            className={styles.floated}
                            alt='the developer image'
                            width={500}
                            height={550}
                            placeholder='empty'
                        />

                        Hello! I&apos;m Ahmed Hrid, {new Date().getFullYear() - new Date("2000-01-01").getFullYear()}  years old a highly motivated and creative Full Stack Developer with a passion for building innovative web solutions. I am a recent graduate, equipped with the latest industry knowledge and seeking exciting opportunities to make a meaningful impact in the tech world.
                    </p>
                    <article>

                        <h3>Join Me!</h3>
                        <div className={styles.actions}>
                            <a
                                className={styles.btn}
                                href='https://github.com/Hrid-a' target='_blank'>
                                <GitHub size={24} />
                            </a>
                            <a

                                className={styles.btn}
                                href='https://www.linkedin.com/in/hrid-044895258' target='_blank'>
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </article>
                </section>
            </div>
        </>
    )
}

export default AboutMe