'use client'

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { FaDownload } from 'react-icons/fa6';
import { motion } from 'framer-motion';


const SkillItem = ({ percent, text, duration, delay }) => {

    // states
    const [count, setCount] = useState(0);
    const svgRef = useRef();

    // calculation
    const dasharray = 2 * 3.14 * 190;
    const offset = dasharray * ((100 - count) / 100);

    useEffect(() => {

        let interval;
        let countIndex = 0;

        let interSection = new IntersectionObserver(entries => {
            entries.forEach(ele => {

                if (ele.isIntersecting && !countIndex) {
                    interval = setInterval(() => {
                        countIndex++;
                        setCount(countIndex);
                        if (countIndex === percent) {
                            clearInterval(interval);
                            countIndex = 0;
                        }
                    }, (duration / percent));
                } else {
                    interval && clearInterval(interval);
                    countIndex = 0;
                }

            });
        });

        interSection.observe(svgRef.current);

        return () => interval && clearInterval(interval);

    }, [percent, duration]);

    return <motion.div initial={{ opacity: 0, transform: 'translateY(50%)' }} whileInView={{ opacity: 1, transform: 'translateY(0%)' }} transition={{ delay, duration: 0.2 }} >
        <svg ref={svgRef} className='w-full h-auto' viewBox='0 0 400 400' style={{ transform: 'rotate(-90deg)' }}>
            <circle cx="200" cy="200" r="185" fill="none" stroke="#ffffff75" strokeWidth={30} />
            <circle cx="200" cy="200" r="185" fill="none" stroke="#ffffff" strokeWidth={30} strokeLinecap='round' strokeDasharray={dasharray} strokeDashoffset={offset} />
            <g style={{ transform: `translate(185px, 200px) rotate(90deg)` }}>
                <text fontSize={40} textAnchor='middle' fill='white' fontWeight={600} style={{ transform: 'translateY(-25px)' }} >{count}%</text>
                <text fontSize={35} textAnchor='middle' fill='white' fontWeight={600} style={{ transform: 'translateY(25px)' }}>{text}</text>
            </g>
        </svg>
    </motion.div>;
}

const About = () => {

    const animate = {
        initial: { opacity: 0, transform: "translateY(50%)" },
        whileInView: { opacity: 1, transform: "translateY(0%)" },
    };

    return (
        <section>
            <div className='container mx-auto px-5 max-md:pb-0 py-20'>
                <div className='flex items-center max-md:flex-col-reverse max-md:gap-10 gap-20'>
                    <div className='max-md:w-full w-1/2'>
                        <div className='flex flex-col gap-5 items-start'>
                            <motion.h1 {...animate} className='text-4xl max-sm:text-3xl font-semibold text-gold leading-snug'>Welcome to Palash&apos;s <span className='text-secondary'>Web Development</span> World!</motion.h1>
                            <motion.p {...animate} transition={{ delay: 0.2 }} className='text-base text-gold'>Hello, I&apos;m Palash Nath, a passionate web developer with a knack for turning ideas into digital realities. From pixel-perfect design to seamless functionality, I specialize in creating immersive and dynamic web experiences.</motion.p>
                            <motion.button {...animate} transition={{ delay: 0.3 }} className='text-gold font-medium border border-gold px-7 py-3 hover:bg-gold duration-200 hover:text-white flex items-center gap-3'>
                                <span>Download Resume</span>
                                <FaDownload className='w-5 h-5' />
                            </motion.button>
                        </div>
                    </div>
                    <div className='max-md:w-full w-1/2'>
                        <motion.div {...animate} transition={{ type: 'spring', }} className='w-full max-w-md ml-auto aspect-[15/16] overflow-hidden rounded-xl shadow-[4px_10px_20px_-5px_#BFA181]'>
                            <Image src='/images/palashnath880.webp' alt='Palash Nath' width={400} height={400} className='w-full h-full object-cover' />
                        </motion.div>
                    </div>
                </div>
                <div className='mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-8 xl:gap-5'>
                    <SkillItem
                        percent={90}
                        text={'React JS'}
                        duration={1000}
                        delay={0.1}
                    />
                    <SkillItem
                        percent={80}
                        text={'Next JS'}
                        duration={1000}
                        delay={0.2}
                    />
                    <SkillItem
                        percent={80}
                        text={'Tailwind CSS'}
                        duration={1000}
                        delay={0.3}
                    />
                    <SkillItem
                        percent={70}
                        text={'MUI'}
                        duration={1000}
                        delay={0.4}
                    />
                    <SkillItem
                        percent={60}
                        text={'Node JS'}
                        duration={1000}
                        delay={0.5}
                    />
                    <SkillItem
                        percent={80}
                        text={'Express JS'}
                        duration={1000}
                        delay={0.6}
                    />
                    <SkillItem
                        percent={65}
                        text={'MySQL'}
                        duration={1000}
                        delay={0.7}
                    />
                    <SkillItem
                        percent={60}
                        text={'MongoDB'}
                        duration={1000}
                        delay={0.8}
                    />
                </div>
            </div>
        </section>
    );
}

export default About;
