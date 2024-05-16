'use client';
import React from 'react';
import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";

import { schema } from '@/helpers/schema'
import styles from './ContactForm.module.css';

function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitted, isSubmitSuccessful, isSubmitting }, reset } = useForm(
    {
      defaultValues: {
        name: "",
        email: "",
        message: ""
      },
      resolver: zodResolver(schema)
    }
  );
  const formRef = React.useRef();

  const sendEmail = (data) => {
    console.log({ data });
    console.log({ isSubmitted, isSubmitSuccessful, isSubmitting })
    emailjs.sendForm(
      process.env.VITE_SERVICE_KEY,
      process.env.VITE_SERVICE_TEMPLATE,
      formRef.current,
      process.env.VITE_SERVICE_PASS
    )
      .then((result) => {
        console.log({ result });
        // toast.success("message recieved.Thank you! I'll be in touch with you shortly.");
        reset();
      }, () => {
        // toast.error("Sorry an error occured.Please try again.");
      });
  };

  return <form className={styles.form} ref={formRef} onSubmit={handleSubmit(sendEmail)}>
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
      disabled={isSubmitted}
    >
      Send Message
    </button>
  </form>;
}

export default ContactForm;
