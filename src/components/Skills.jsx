import Image from 'next/image';
import React from 'react';

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
            <div className='container mx-auto px-5 py-20'>
                <h1 className='text-4xl text-center font-semibold text-secondary'>Skills and Expertise</h1>
                <div className='mt-20 grid grid-cols-2 gap-10'>
                    {data.map(({ content, image, title }, index) => <div key={index} className=' duration-300 hover:shadow-2xl cursor-pointer shadow-white'>
                        <div className='flex'>
                            <div className='overflow-hidden aspect-square w-56'>
                                <Image src={image} width={500} height={380} alt={title} className='w-full h-full object-cover' />
                            </div>
                            <div className='flex-1 px-5 py-5 flex flex-col items-start gap-3'>
                                <h1 className='text-secondary font-bold text-2xl'>{title}</h1>
                                <p className='text-white text-opacity-80'>{content}</p>
                                <button className='border-2 border-secondary text-secondary font-semibold px-6 py-2 text-sm mt-3'>Learn More</button>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </section>
    );
}

export default Skills;
