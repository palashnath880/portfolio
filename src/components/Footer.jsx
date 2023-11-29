import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className='bg-primary'>
            <div className='container mx-auto px-5 py-5'>
                <div className='flex justify-between items-center'>
                    <p className='text-sm font-medium text-white'>Copyright by Palash Nath</p>
                    <div className='flex items-center gap-8 text-white'>
                        <a className='duration-300 hover:scale-125' target='_blank' href='https://www.facebook.com/palashnath880'><FaFacebookF className='w-5 h-5' /></a>
                        <a className='duration-300 hover:scale-125' target='_blank' href='https://www.linkedin.com/in/palashnath880/'><FaLinkedin className='w-5 h-5' /></a>
                        <a className='duration-300 hover:scale-125' target='_blank' href='https://www.instagram.com/palashnath880/'><FaGithub className='w-5 h-5' /></a>
                        <a className='duration-300 hover:scale-125' target='_blank' href='https://www.github.com/palashnath880/'><FaInstagram className='w-5 h-5' /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
