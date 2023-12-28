"use client"
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Toaster, toast} from 'sonner';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form && form.current) {
      emailjs.sendForm('service_2svnepu', 'template_vmeyoep', form.current, 'N27zaoCMdknIVor8g')
        .then((result: { text: any; }) => {
            toast(<div>Thanks for contacting! Your message has been sent.</div>); 
          console.log(result.text);
          if (form && form.current) {
            form.current.reset(); // Reset the form after successful submission
          }
        })
        .catch((error: { text: any; }) => {
            toast(<div>An error occurred while sending your message.</div>); // Show error message using toaster
            e.preventDefault
        });
    }
    
  };

  return (
    <div className='h-[20%] px-[5%] z-[20] isolate flex flex-col  py-[5%]'>
        <h1 className="text-[40px]  text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-9">Contact Me</h1>
    <div className='flex flex-col md:flex-row gap-9 justify-evenly items-center' id='contact'>
        <div className='md:w-[40%] w-[80%] flex flex-col'>
            <p className='text-gray-200 text-[24px]'>&quot;Have a thrilling project on your mind? Let&apos;s turn it into reality together!</p>
            <br></br>
            <p className='text-gray-200 text-[22px]'>I&apos;m passionate about diving into fresh concepts and bringing them to life. If you&apos;re looking for someone enthusiastic to collaborate on your project, I&apos;m all ears! Don&apos;t hesitate to reach out; I&apos;d love to explore your ideas and discuss how we can make them flourish.&quot;</p>
        </div>
        <div className='py-[25px] px-[3%] border-[2px] border-[#2A0E61] h-[550px] w-[80%] md:w-[40%] rounded-2xl'>
    <form ref={form} onSubmit={sendEmail} >
        <ul className='flex flex-col gap-8'>
       <li className='flex flex-col'>    
      <label className='text-gray-200'>
        Name
      </label>
      <input type="text" name="from_name" className='w-full rounded-2xl h-[50px] p-2' placeholder='name' maxLength={30}  required />
      </li> 
      <li className='flex flex-col'> 
      <label className='text-gray-200'>
        Email
      </label>
      <input type="email" name="from_email"  className='w-full rounded-2xl h-[50px] p-2' placeholder='email' required/>
      </li> 
      <li className='flex flex-col'> 
      <label className='text-gray-200'>
        Message
      </label>
      <textarea name="message"  className='w-full rounded-2xl md:h-[200px] h-[150px] p-2' placeholder='message' maxLength={500} required/>
      </li> 
      <li className='text-right'> 
        <button className='p-3 w-[150px] border border-[#2A0E61] button-primary  rounded-2xl'>
      <input type="submit" value="Send" className='text-gray-200'/>
      </button>
      </li> 
      </ul>
    </form>
    </div>
    </div>
    <Toaster closeButton />
    </div>
  );
};

export default ContactForm;