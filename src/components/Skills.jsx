'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {

    const data = [
        {
            image: '/images/front-end.jpg',
            title: 'Front-end Development',
            content: `Transforming designs into responsive and user-friendly websites using HTML, CSS, and JavaScript.`
        },
        {
            image: '/images/back-end.jpg',
            title: 'Back-end Development',
            content: `Building robust and scalable server-side applications with languages like Node.js and Python.`
        },
        {
            image: '/images/framework.jpg',
            title: 'Frameworks',
            content: `Proficient in React.js and Express.js for efficient front-end and back-end development.`
        },
        {
            image: '/images/database-management.webp',
            title: 'Database Management',
            content: `Experience with MongoDB, MySQL, and Firebase for data storage and retrieval.`
        },
    ];

    return (
        <section>
            <div className='container mx-auto px-5 max-md:pb-0 py-20'>
                <h1 className='text-4xl max-sm:text-3xl text-center font-semibold text-secondary'>Skills and Expertise</h1>
                <div className='max-sm:mt-10 mt-20 grid max-lg:grid-cols-1 grid-cols-2 max-xl:gap-x-6 gap-10'>
                    {data.map(({ content, image, title }, index) => <motion.div initial={{ opacity: 0, transform: 'translateY(50%)' }} whileInView={{ opacity: 1, transform: 'translateY(0%)' }} transition={{ delay: 0.1 * (index + 1) }} key={index} className=' duration-300 hover:shadow-2xl cursor-pointer shadow-white'>
                        <div className='flex max-sm:flex-col'>
                            <div className='overflow-hidden aspect-square sm:w-56'>
                                <Image src={image} width={500} height={380} alt={title} className='w-full h-full object-cover' />
                            </div>
                            <div className='max-sm:w-full sm:flex-1 sm:px-5 py-5 flex flex-col items-start gap-3'>
                                <h1 className='text-secondary font-bold text-2xl'>{title}</h1>
                                <p className='text-white text-opacity-80'>{content}</p>
                                <button className='border-2 border-secondary text-secondary font-semibold px-6 py-2 text-sm mt-3'>Learn More</button>
                            </div>
                        </div>
                    </motion.div>)}
                </div>
            </div>
        </section>
    );
}

export default Skills;
