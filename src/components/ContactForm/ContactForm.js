'use client';
import React from 'react';
import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toaster, toast } from 'sonner';


import { schema } from '@/helpers/schema'
import styles from './ContactForm.module.css';

function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm(
    {
      defaultValues: {
        name: "",
        email: "",
        message: ""
      },
      resolver: zodResolver(schema)
    }
  );
  const [loading, setLoading] = React.useState(false);
  const formRef = React.useRef();

  const sendEmail = (data) => {
    setLoading(true);
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_KEY,
      blockHeadless: true,
      blockList: {
        list: ['foo@emailjs.com', 'bar@emailjs.com'],
        watchVariable: 'userEmail',
      },
    });

    emailjs.send(process.env.NEXT_PUBLIC_SERVICE_KEY, process.env.NEXT_PUBLIC_SERVICE_TEMPLATE, data).then(
      () => {
        setLoading(false);
        toast.success("Email sent successfully.Thank you! I'll be in touch with you shortly.");
        reset();
      },
      () => {
        setLoading(false);
        toast.error('Failed to send email. Please try again later.');
      },
    );
  };

  return <form className={styles.form} ref={formRef} onSubmit={handleSubmit(sendEmail)}>
    <Toaster richColors position="top-center" toastOptions={{
      className: `${styles.toast}`,
    }} />
    <input
      type="text" {...register("name")}
      placeholder="Ahmed Hrid"
      className={errors.name && styles.borderRed}
    />
    {errors.name ? <span className={styles.error}>{errors.name.message}</span> : null}
    <input
      type="email"
      {...register("email")}
      placeholder="Ahmedhridw@gmail.com"
      className={errors.email && styles.borderRed} />
    {errors.email ? <span className={styles.error}>{errors.email.message}</span> : null}

    <textarea
      name="message"
      {...register("message")}
      className={errors.message && styles.borderRed}
      placeholder="Leave a comment or inquiry"
      cols="20" rows="3"></textarea>
    {errors.message ? <span className={styles.error}>{errors.message.message}</span> : null}
    <button
      type="submit"
      className={styles.btn}
      disabled={loading}
      style={{ pointerEvents: loading ? 'none' : 'auto', cursor: loading ? 'not-allowed' : 'pointer' }}
    >
      Send Message
    </button>
  </form>;
}

export default ContactForm;
