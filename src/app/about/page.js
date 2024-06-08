import Image from 'next/image'
import React from 'react'
import profile from '../../../public/about.png';

import styles from './about.module.css';
import { GitHub, Linkedin } from 'react-feather';
import Animate from '@/components/Animate';
import VisuallyHidden from '@/components/VisuallyHidden';
const AboutMe = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <Animate type={'slide'}>
                    <h2>About me</h2>
                </Animate>
                <section className={styles.content}>
                    <Animate type={'slide'}>
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
                    </Animate>
                    <article>
                        <Animate type={'fade'}>
                            <h3>Join Me!</h3>
                        </Animate>
                        <Animate type={'slide'} direction={'top'}>

                            <div className={styles.actions}>
                                <a
                                    className={styles.btn}
                                    href='https://github.com/Hrid-a' target='_blank'>
                                    <GitHub size={24} />
                                    <VisuallyHidden>a git hub link to my github portfolio</VisuallyHidden>
                                </a>
                                <a
                                    className={styles.btn}
                                    href='https://www.linkedin.com/in/hrid-044895258' target='_blank'>
                                    <VisuallyHidden>a  linkdin lin to my Linkd in portfolio</VisuallyHidden>
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </Animate>
                    </article>
                </section>
            </div>
        </>
    )
}

export default AboutMe