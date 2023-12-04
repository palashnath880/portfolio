
import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className='bg-primary'>
            <div className='container mx-auto px-5 py-10 border-t border-secondary'>
                <div className='flex flex-col items-center gap-8'>
                    <p className='text-base font-medium text-white'>Copyright by Palash Nath</p>
                    <div className='flex items-center gap-8 text-white'>
                        <a className='duration-300 hover:scale-125' target='_blank' href='https://www.facebook.com/palashnath880'><FaFacebookF className='w-5 h-5' /></a>
                        <a className='duration-300 hover:scale-125' target='_blank' href='https://www.linkedin.com/in/palashnath880/'><FaLinkedin className='w-5 h-5' /></a>
                        <a className='duration-300 hover:scale-125' target='_blank' href='https://www.instagram.com/palashnath880/'><FaGithub className='w-5 h-5' /></a>
                        <a className='duration-300 hover:scale-125' target='_blank' href='https://www.github.com/palashnath880/'><FaInstagram className='w-5 h-5' /></a>
                    </div>
                </div>
            </div>

            {/* whatsapp chat */}
            <a href={`https://wa.me/+8801304780828?text=${encodeURIComponent('Hello Palash!')}`} target='_blank' className='group hover:bg-secondary shadow-[0px_3px_20px_0px_#ffffffba] w-fit h-12 cursor-pointer duration-200 overflow-hidden rounded-full bg-white flex items-center fixed bottom-5 right-5'>
                <div className='max-w-0 group-hover:max-w-xl overflow-hidden duration-300 group-hover:text-white'>
                    <p className='pl-4 pr-2 text-sm font-semibold whitespace-nowrap'>Connect on Whatsapp</p>
                </div>
                <div className='h-full aspect-square overflow-hidden bg-transparent text-[#25D366] group-hover:text-white duration-200 grid place-items-center'>
                    <FaWhatsapp className='w-8 h-8' />
                </div>
            </a>

        </footer>
    );
}

export default Footer;
