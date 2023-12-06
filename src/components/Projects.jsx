import Image from 'next/image';
import React from 'react';
import { FaArrowRightLong, FaGithub, FaLink } from 'react-icons/fa6';

const Projects = () => {

    const top3Project = [
        {
            title: 'Medicare',
            desc: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.`,
            live_link: '',
            code_link: '',
            image: `/images/projects/project-1.webp`,
        },
        {
            title: 'Medicare',
            desc: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.`,
            live_link: '',
            code_link: '',
            image: `/images/projects/project-1.webp`,
        },
        {
            title: 'Medicare',
            desc: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.`,
            live_link: '',
            code_link: '',
            image: `/images/projects/project-1.webp`,
        },
    ];

    return (
        <section>
            <div className='container mx-auto px-5 max-md:pb-0 pt-20 pb-14'>
                <h1 className='text-4xl max-sm:text-3xl text-center font-semibold text-secondary'>Projects</h1>
                <div className='max-sm:mt-10 mt-20 grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 max-xl:gap-x-6 gap-10'>
                    {top3Project.map(({ content, image, title, desc, code_link, live_link }, index) => <div key={index} className=' duration-300 group cursor-pointer shadow-[0px_0px_40px_0px_#ffffff20] hover:shadow-[0px_0px_40px_0px_#ffffff50]'>
                        <div className='aspect-square w-full relative'>
                            <div className='overflow-hidden w-full h-full'>
                                <Image src={image} width={500} height={380} alt={title} className='w-full h-full object-cover' />
                            </div>
                            <div className='absolute top-0 left-0 w-full h-full px-5 py-5 grid place-items-center bg-black bg-opacity-60 opacity-0 duration-300 group-hover:opacity-100'>
                                <div className='flex flex-col items-center gap-3'>
                                    <h1 className='text-white font-bold text-2xl'>{title}</h1>
                                    <p className='text-white text-opacity-80'>{content}</p>
                                    <div className='flex items-center gap-3'>
                                        <a href={live_link} target='_blank' className='border-2 border-white w-10 aspect-square rounded-full grid place-items-center hover:bg-secondary hover:border-secondary text-white duration-200'><FaLink className='w-5 h-5' /></a>
                                        <a href={code_link} target='_blank' className='border-2 border-white w-10 aspect-square rounded-full grid place-items-center hover:bg-secondary hover:border-secondary text-white duration-200'><FaGithub className='w-5 h-5' /></a>
                                    </div>
                                    <button className='border-2 border-white hover:border-secondary text-white hover:bg-secondary duration-200 font-semibold px-6 py-2 text-sm mt-3'>Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>)}
                </div>
                <button className='flex items-center gap-2 hover:gap-3 duration-200 px-6 py-3 text-white font-medium text-sm border border-secondary mx-auto mt-16'>
                    All Project
                    <FaArrowRightLong className='w-4 h-4' />
                </button>
            </div>
        </section>
    );
}

export default Projects;
