"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const serviceId = process.env.NEXT_PUBLIC_YOUR_SERVICE_ID || "";
  const templateId = process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID || "";
  const publicKey = process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY || "";


  const sendEmail = (e: any) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          serviceId,
          templateId,
          form.current,
          {
            publicKey: publicKey,
          }
        )
        .then(
          () => {
            toast.success('Message sent successfully!', {
              style: {
                background: '#0a0a0a',
                color: '#fff',
                border: '1px solid #2a2a2a'
              },
              iconTheme: {
                primary: '#8b5cf6',
                secondary: '#0a0a0a'
              }
            });
            form.current && form.current.reset();
          },
          (error) => {
            console.error("EmailJS error:", error); 
            toast.error('Failed to send message. Please try again.', {
              style: {
                background: '#0a0a0a',
                color: '#fff',
                border: '1px solid #2a2a2a'
              },
              iconTheme: {
                primary: '#ef4444',
                secondary: '#0a0a0a'
              }
            });
          },
        );
    }
  };

  return (
    <div id='contact' className='flex flex-col items-center justify-center py-20 px-4 max-w-8xl relative'>
      <Toaster position="bottom-right" />

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <h1 className='text-4xl md:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 text-center'>
        Get In Touch
      </h1>

      <div className='flex justify-center w-full'>
        <div
          className='w-full max-w-2xl md:max-w-3xl bg-[#0a0a0a]/50 backdrop-blur-sm p-10 rounded-2xl border border-[#2a2a2a]/50 hover:border-purple-500/50 transition-all duration-300'
        >
          <form ref={form} onSubmit={sendEmail} className='space-y-6'>
            <div>
              <input
                type='text'
                name='from_name'
                className='w-full bg-[#1a1a1a]/50 border border-[#2a2a2a]/50 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors'
                placeholder='Your Name'
                required
              />
            </div>

            <div>
              <input
                type='email'
                name='from_email'
                className='w-full bg-[#1a1a1a]/50 border border-[#2a2a2a]/50 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors'
                placeholder='Your Email'
                required
              />
            </div>

            <div>
              <textarea
                name='message'
                rows={8}
                className='w-full bg-[#1a1a1a]/50 border border-[#2a2a2a]/50 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none'
                placeholder='Your Message'
                required
              ></textarea>
            </div>

            <button
              type='submit'
              className='w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:opacity-90 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2'
            >
              <span>Send Message</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
