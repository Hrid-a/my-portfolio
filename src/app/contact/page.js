import React from 'react';
import dynamic from 'next/dynamic'
import Animate from '@/components/Animate';

import styles from './contact.module.css';
const ContactForm = dynamic(() => import('@/components/ContactForm'))

const ContactPage = () => {


    return (
        <section className={styles.wrapper}>
            <Animate type={'slide'}>
                <h2 className={styles.heading}>Contact Me</h2>
                <p>
                    I would love to hear from you. Please fill in the form, and I&apos;ll get back to you as soon as possible.
                </p>
            </Animate>
            <Animate type={'slide'} direction={'top'}>
                <ContactForm />
            </Animate>
        </section>
    )
}

export default ContactPage