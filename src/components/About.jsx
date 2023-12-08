'use client'

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { FaDownload } from 'react-icons/fa6';


const SkillItem = ({ percent, text, duration }) => {

    // states
    const [count, setCount] = useState(0);
    const svgRef = useRef();

    // calculation
    const dasharray = 2 * 3.14 * 190;
    const offset = dasharray * ((100 - count) / 100);

    useEffect(() => {

        let interval;
        let countIndex = 0;

        const countDown = setInterval(() => {
            countIndex++;
            setCount(countIndex);
            if (countIndex === percent) {
                clearInterval(interval);
                countIndex = 0;
            }
        }, (duration / percent));

        let interSection = new IntersectionObserver(entries => {
            entries.forEach(ele => {

                if (ele.isIntersecting && !interval) {
                    interval = countDown;
                } else {
                    interval && clearInterval(interval);
                    countIndex = 0;
                }
            });
        });

        interSection.observe(svgRef.current);

        return () => interval && clearInterval(interval);

    }, [percent, duration]);

    return <svg ref={svgRef} className='w-full h-auto' viewBox='0 0 400 400' style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="200" cy="200" r="185" fill="none" stroke="#ffffff75" strokeWidth={30} />
        <circle cx="200" cy="200" r="185" fill="none" stroke="#ffffff" strokeWidth={30} strokeLinecap='round' strokeDasharray={dasharray} strokeDashoffset={offset} />
        <g style={{ transform: `translate(185px, 200px) rotate(90deg)` }}>
            <text fontSize={40} textAnchor='middle' fill='white' fontWeight={600} style={{ transform: 'translateY(-25px)' }} >{count}%</text>
            <text fontSize={35} textAnchor='middle' fill='white' fontWeight={600} style={{ transform: 'translateY(25px)' }}>{text}</text>
        </g>
    </svg>;
}

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
                <div className='mt-16 grid grid-cols-6 gap-5'>
                    <div>
                        <SkillItem
                            percent={50}
                            text={'Node JS'}
                            duration={1000}
                        />
                    </div>
                    <div>
                        <SkillItem
                            percent={90}
                            text={'React JS'}
                            duration={1000}
                        />
                    </div>
                    <div>
                        <SkillItem
                            percent={80}
                            text={'Next JS'}
                            duration={1000}
                        />
                    </div>
                    <div>
                        <SkillItem
                            percent={30}
                            text={'Tailwind CSS'}
                            duration={1000}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
