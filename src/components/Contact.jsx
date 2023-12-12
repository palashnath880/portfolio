'use client';

import React, { useState } from 'react';
import { FaEnvelope, FaFacebookF, FaGithub, FaGlobe, FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Contact = () => {

    // states
    const [inputData, setInputData] = useState({ name: '', email: '', subject: '', message: '' });
    const [submitting, setSubmitting] = useState(false);

    // framer motion animation
    const animate = {
        initial: { opacity: 0, transform: 'translateY(50%)' },
        whileInView: { opacity: 1, transform: 'translateY(0%)' },
    };

    // send query
    const sendQuery = async (e) => {
        e.preventDefault();

        const toastId = toast.loading("Sending...", {
            className: '!bg-secondary !text-sm !text-white !font-light',
            theme: 'dark'
        });

        try {
            setSubmitting(true);

            const res = await fetch('/api/contact-query', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputData),
            });

            if (res.ok) {
                await res.json();
                setInputData({ name: '', email: '', subject: '', message: '' });
                toast.success("Your query sent successfully. I'll contact you soon", {
                    icon: false,
                    className: '!bg-secondary !text-sm !text-white !font-light',
                    theme: 'dark'
                });
            }

        } catch (err) {
            console.error(err);
        } finally {
            toast.dismiss(toastId); // close pending toast
            setSubmitting(false);
        }
    }

    return (
        <section id='contact'>
            <div className='container mx-auto px-5 py-20'>
                <h1 className='text-4xl max-sm:text-3xl text-center font-bold text-secondary'>Contact</h1>
                <div className='mt-20 flex max-sm:flex-col max-md:gap-x-5 max-lg:gap-10 gap-20'>
                    <div className='w-full sm:w-1/2'>
                        <div className='flex flex-col items-start w-3/4'>
                            <h4 className='text-xl text-white font-bold'>Get In Touch</h4>
                            <ul className='mt-7 space-y-5'>
                                <li>
                                    <a href='mailto:palashnath880@gmail.com' className='text-white flex gap-3 items-center'>
                                        <FaEnvelope className='w-4 h-4' />
                                        palashnath880@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <a href='tel:+8801304780828' className='text-white flex gap-3 items-center'>
                                        <FaPhone className='w-4 h-4' />
                                        +8801304780828
                                    </a>
                                </li>
                                <li>
                                    <p className='text-white flex gap-3 items-start'>
                                        <FaGlobe className='w-4 h-4 mt-1' />
                                        <span>
                                            Connect on Social Media
                                            <span className='flex items-center gap-8 text-white mt-5'>
                                                <a className='duration-300 hover:scale-125' target='_blank' href='https://www.facebook.com/palashnath880'><FaFacebookF className='w-5 h-5' /></a>
                                                <a className='duration-300 hover:scale-125' target='_blank' href='https://www.linkedin.com/in/palashnath880/'><FaLinkedin className='w-5 h-5' /></a>
                                                <a className='duration-300 hover:scale-125' target='_blank' href='https://www.instagram.com/palashnath880/'><FaGithub className='w-5 h-5' /></a>
                                                <a className='duration-300 hover:scale-125' target='_blank' href='https://www.github.com/palashnath880/'><FaInstagram className='w-5 h-5' /></a>
                                            </span>
                                        </span>
                                    </p>
                                </li>
                            </ul>
                            {/* <p className='text-white font-medium leading-relaxed'>Feel free to reach out via <a href='mailto:palashnath880@gmail.com' className='text-gold'>palashnath880@gmail.com</a> to start a conversation about your next web development venture.</p> */}

                        </div>
                    </div>
                    <div className='w-full sm:w-1/2'>
                        <div className='p'>
                            <form onSubmit={sendQuery}>
                                <div className='flex flex-col gap-6'>
                                    <motion.div {...animate} className='flex flex-col gap-3'>
                                        <input onChange={(e) => setInputData({ ...inputData, [e.target.name]: e.target.value })} value={inputData.name} placeholder='Name' name='name' type='text' className='bg-transparent border-secondary border-2 outline-none rounded-lg px-4 py-3 text-white font-medium' />
                                    </motion.div>
                                    <motion.div {...animate} transition={{ delay: 0.2 }} className='flex flex-col gap-3'>
                                        <input onChange={(e) => setInputData({ ...inputData, [e.target.name]: e.target.value })} value={inputData.email} placeholder='Email' name='email' type='email' className='bg-transparent border-secondary border-2 outline-none rounded-lg px-4 py-3 text-white font-medium' />
                                    </motion.div>
                                    <motion.div {...animate} transition={{ delay: 0.3 }} className='flex flex-col gap-3'>
                                        <input onChange={(e) => setInputData({ ...inputData, [e.target.name]: e.target.value })} value={inputData.subject} placeholder='Subject' name='subject' type='text' className='bg-transparent border-secondary border-2 outline-none rounded-lg px-4 py-3 text-white font-medium' />
                                    </motion.div>
                                    <motion.div {...animate} transition={{ delay: 0.4 }} className='flex flex-col gap-3'>
                                        <textarea
                                            value={inputData.message}
                                            onChange={(e) => setInputData({ ...inputData, ['message']: e.target.value })}
                                            placeholder='Message'
                                            className='bg-transparent border-secondary border-2 outline-none rounded-lg px-4 py-3 text-white font-medium h-52 resize-none'
                                        >
                                        </textarea>
                                    </motion.div>
                                    <motion.div {...animate} transition={{ delay: 0.5 }} >
                                        <button disabled={submitting} type='submit' className='rounded-full outline-none px-10 py-3 border-2 border-secondary text-secondary font-medium disabled:opacity-60'>
                                            {submitting ? 'Sending ...' : 'Send'}
                                        </button>
                                    </motion.div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
