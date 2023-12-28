"use client"
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form && form.current) {
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
        .then((result: { text: any; }) => {
          console.log(result.text);
        })
        .catch((error: { text: any; }) => {
          console.log(error.text);
        });
    }
  };

  return (
    <div className='bg-black'>
    <form ref={form} onSubmit={sendEmail}>
      <label className='text-gray-200'>
        Name
        <input type="text" name="user_name" />
      </label>
      <label className='text-gray-200'>
        Email
        <input type="email" name="user_email" />
      </label>
      <label className='text-gray-200'>
        Message
        <textarea name="message" />
      </label>
      <input type="submit" value="Send" className='text-gray-200'/>
    </form>
    </div>
  );
};

export default ContactForm;