import React from 'react';
import { FaEnvelope, FaFacebookF, FaGithub, FaGlobe, FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa6';

const Contact = () => {
    return (
        <section>
            <div className='container mx-auto px-5 py-20'>
                <h1 className='text-4xl text-center font-bold text-secondary'>Contact</h1>
                <div className='mt-20 flex gap-20'>
                    <div className='w-1/2'>
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
                                            <div className='flex items-center gap-8 text-white mt-5'>
                                                <a className='duration-300 hover:scale-125' target='_blank' href='https://www.facebook.com/palashnath880'><FaFacebookF className='w-5 h-5' /></a>
                                                <a className='duration-300 hover:scale-125' target='_blank' href='https://www.linkedin.com/in/palashnath880/'><FaLinkedin className='w-5 h-5' /></a>
                                                <a className='duration-300 hover:scale-125' target='_blank' href='https://www.instagram.com/palashnath880/'><FaGithub className='w-5 h-5' /></a>
                                                <a className='duration-300 hover:scale-125' target='_blank' href='https://www.github.com/palashnath880/'><FaInstagram className='w-5 h-5' /></a>
                                            </div>
                                        </span>
                                    </p>
                                </li>
                            </ul>
                            {/* <p className='text-white font-medium leading-relaxed'>Feel free to reach out via <a href='mailto:palashnath880@gmail.com' className='text-gold'>palashnath880@gmail.com</a> to start a conversation about your next web development venture.</p> */}

                        </div>
                    </div>
                    <div className='w-1/2'>
                        <div className='p'>
                            <form>
                                <div className='flex flex-col gap-6'>
                                    <div className='flex flex-col gap-3'>
                                        <input placeholder='Name' name='name' type='text' className='bg-transparent border-secondary border-2 outline-none rounded-lg px-4 py-3 text-white font-medium' />
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <input placeholder='Email' name='email' type='email' className='bg-transparent border-secondary border-2 outline-none rounded-lg px-4 py-3 text-white font-medium' />
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <input placeholder='Subject' name='subject' type='text' className='bg-transparent border-secondary border-2 outline-none rounded-lg px-4 py-3 text-white font-medium' />
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <textarea
                                            placeholder='Message'
                                            className='bg-transparent border-secondary border-2 outline-none rounded-lg px-4 py-3 text-white font-medium h-52 resize-none'
                                        >
                                        </textarea>
                                    </div>
                                    <div>
                                        <button type='submit' className='rounded-full outline-none px-10 py-3 border-2 border-secondary text-secondary font-medium'>
                                            Send
                                        </button>
                                    </div>
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
