'use client';

import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const SVGImage = ({ logo, transform }) => {

    return <image
        href={(`/images/${logo}`)}
        width="100"
        height="100"
        clipPath='url(#circleClip)'
        transform={transform}
    />
}


const Hero = () => {

    // logos array
    const logosArr = [
        {
            logo: 'node.webp',
            transform: 'translate(0, -200) scale(0.5)',
        },
        {
            logo: 'mysql.webp',
            transform: 'translate(150, -135) scale(0.5)',
        },
        {
            logo: 'mongodb.webp',
            transform: 'translate(200, 0) scale(0.5)',
        },
        {
            logo: 'react.webp',
            transform: 'translate(140, 135) scale(0.5)',
        },
        {
            logo: 'php.webp',
            transform: 'translate(0, 200) scale(0.5)',
        },
        {
            logo: 'node.webp',
            transform: 'translate(-140, 135) scale(0.5)',
        },
        {
            logo: 'mongodb.webp',
            transform: 'translate(-200, 0) scale(0.5)',
        },
        {
            logo: 'mysql.webp',
            transform: 'translate(-150, -135) scale(0.5)',
        },
    ];

    return (
        <section className='min-h-[95vh]' id="home">
            <div className='w-full h-full py-20' style={{ backgroundImage: `linear-gradient(#00000085,#00000085), url(/images/next-coding.webp)` }}>
                <div className='container mx-auto px-5 w-full h-full'>
                    <div className='w-full h-full flex max-md:flex-col-reverse items-center gap-10'>
                        <div className='max-md:w-full w-1/2'>
                            <div className='flex flex-col gap-8 items-start max-sm:items-center'>
                                <motion.p initial={{ transform: 'translateY(50%)', opacity: 0, }} whileInView={{ opacity: 1, transform: 'translateY(0)' }} className='text-white max-sm:text-base text-xl max-md:text-center '>Crafting Digital Experiences, One Line of Code at a Time.</motion.p>
                                <motion.h2 initial={{ transform: 'translateY(50%)', opacity: 0, }} whileInView={{ opacity: 1, transform: 'translateY(0)' }} transition={{ delay: 0.3 }} className='text-5xl max-sm:text-3xl text-white max-md:text-center font-semibold leading-snug'>Hi, I&apos;m Palash, a Passionate <span className='text-gold opacity-90'>Web Developer.</span></motion.h2>
                                <motion.a href='#project' initial={{ transform: 'translateY(50%)', opacity: 0, }} whileInView={{ opacity: 1, transform: 'translateY(0)' }} transition={{ delay: 0.5 }} className='text-gold font-medium border border-gold px-7 py-3 hover:bg-gold duration-200 hover:text-white'>Explore My Work</motion.a>
                            </div>
                        </div>
                        <motion.div initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} className='w-full md:w-1/2'>
                            <div className='max-md:scale-110'>
                                <svg className='w-full h-auto' viewBox='0 0 500 500'>

                                    {/* circle clip path */}
                                    <defs>
                                        <clipPath id="circleClip">
                                            <circle cx="50" cy="50" r="50" />
                                        </clipPath>
                                    </defs>

                                    {/* <rect x="50" y="50" width="100" height="100" fill="red" /> <g clipPath="url(#circleClip)"></g> */}

                                    {/* middle circle  */}
                                    <circle cx="250" cy="250" r="100" fill='#ffffff' strokeWidth={10} stroke='#BFA181' />
                                    <text x={250} y={245} textAnchor='middle' fontSize={32} fontWeight={700} fill='#BFA181'>Web</text>
                                    <text x={250} y={275} textAnchor='middle' fontSize={26} fontWeight={700} fill='#BFA181'>Development</text>

                                    {/* linear gradient */}
                                    <defs>
                                        <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#2E3192">
                                                {/* <animate attributeName="stop-color" to="#1BFFFF" dur="2s" repeatCount="indefinite" /> */}
                                            </stop>
                                            <stop offset="100%" stopColor="#1BFFFF">
                                                {/* <animate attributeName="stop-color" to="#2E3192" dur="2s" repeatCount="indefinite" /> */}
                                            </stop>
                                        </linearGradient>
                                    </defs>
                                    <circle cx="250" cy="250" r="200" fill='none' strokeWidth={2} stroke='url(#grad1)' gradientTransform="rotate(45)">
                                        {/* <animateTransform
                                            attributeName="gradientTransform"
                                            type="rotate"
                                            from="0 50 50"
                                            to="360 50 50"
                                            dur="2s"
                                            repeatCount="indefinite"
                                        /> */}
                                        {/* <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1s" repeatCount="indefinite" /> */}

                                        {/* <animate attributeName="stroke-opacity" from="1" to="0.5" dur="1s" repeatCount="indefinite" /> */}

                                    </circle>

                                    <defs>
                                        <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#1BFFFF" />
                                            <stop offset="100%" stopColor="#2E3192" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="250" cy="250" r="150" fill='none' strokeWidth={2} stroke='url(#grad2)' gradientTransform="rotate(45)" />

                                    <g transform='translate(225, 225)'>
                                        {logosArr.map((logo, index) => <SVGImage {...logo} key={index} />)}
                                    </g>


                                    {/* <g transform="translate(250, 250) rotate(0)">

                                        <image href="/images/projects/project-1.webp" width="100" height="100" clipPath='url(#circleClip)' />
                                        <image href="/images/projects/project-1.webp" width="100" height="100" clipPath='url(#circleClip)' />
                                        <image href="/images/projects/project-1.webp" width="100" height="100" clipPath='url(#circleClip)' />
                                    </g> */}

                                    {/* middle image clip start */}

                                    {/* middle image clip start */}

                                    {/* middle image */}
                                    {/* <image preserveAspectRatio='xMidYMid meet' href="/images/palashnath880.webp" x="50" y="50" width="100" height="100" clip-path="url(#middleImage)" /> */}
                                </svg>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Hero;
