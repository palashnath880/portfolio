import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <section>
            <div className='container mx-auto px-5 py-20'>
                <div className='flex items-center gap-20'>
                    <div className='w-1/2'>
                        <div className='flex flex-col gap-5 items-start'>
                            <h4 className='text-4xl font-semibold text-gold leading-snug'>Welcome to Palash&apos;s <span className='text-secondary'>Web Development</span> World!</h4>
                            <p className='text-base text-gold'>Hello, I&apos;m Palash Nath, a passionate web developer with a knack for turning ideas into digital realities. From pixel-perfect design to seamless functionality, I specialize in creating immersive and dynamic web experiences.</p>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <div className='w-full aspect-video overflow-hidden rounded-xl'>
                            <Image src='/images/programmer-image.jpg' alt='Palash Nath' width={400} height={400} className='w-full h-full object-cover' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
