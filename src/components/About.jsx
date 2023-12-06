import Image from 'next/image';
import React from 'react';
import { FaDownload } from 'react-icons/fa6';

const About = () => {
    return (
        <section>
            <div className='container mx-auto px-5 max-md:pb-0 py-20'>
                <div className='flex items-center max-md:flex-col-reverse max-md:gap-10 gap-20'>
                    <div className='max-md:w-full w-1/2'>
                        <div className='flex flex-col gap-5 items-start'>
                            <h4 className='text-4xl max-sm:text-3xl font-semibold text-gold leading-snug'>Welcome to Palash&apos;s <span className='text-secondary'>Web Development</span> World!</h4>
                            <p className='text-base text-gold'>Hello, I&apos;m Palash Nath, a passionate web developer with a knack for turning ideas into digital realities. From pixel-perfect design to seamless functionality, I specialize in creating immersive and dynamic web experiences.</p>
                            <button className='text-gold font-medium border border-gold px-7 py-3 hover:bg-gold duration-200 hover:text-white flex items-center gap-3'>
                                <span>Download Resume</span>
                                <FaDownload className='w-5 h-5' />
                            </button>
                        </div>
                    </div>
                    <div className='max-md:w-full w-1/2'>
                        <div className='w-full max-w-md ml-auto aspect-[15/16] overflow-hidden rounded-xl shadow-[4px_10px_20px_-5px_#BFA181]'>
                            <Image src='/images/palashnath880.webp' alt='Palash Nath' width={400} height={400} className='w-full h-full object-cover' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
