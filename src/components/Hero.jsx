'use client';

import imageOptimizer from '@/imageOptimizer';
import React, { useEffect, useLayoutEffect, useRef } from 'react';

const SVGImage = ({ logo, transform }) => {

    return <image
        href={imageOptimizer(`/images/${logo}`)}
        width="100"
        height="100"
        clipPath='url(#circleClip)'
        transform={transform}
    />
}


const Hero = () => {

    // 
    const svgRef = useRef();

    // logos array
    const logosArr = [
        {
            logo: 'node.png',
            transform: 'translate(0, -200) scale(0.5)',
        },
        {
            logo: 'mysql.png',
            transform: 'translate(150, -135) scale(0.5)',
        },
        {
            logo: 'mongodb.png',
            transform: 'translate(200, 0) scale(0.5)',
        },
        {
            logo: 'react.png',
            transform: 'translate(140, 135) scale(0.5)',
        },
        {
            logo: 'php.png',
            transform: 'translate(0, 200) scale(0.5)',
        },
        {
            logo: 'node.png',
            transform: 'translate(-140, 135) scale(0.5)',
        },
        {
            logo: 'mongodb.png',
            transform: 'translate(-200, 0) scale(0.5)',
        },
        {
            logo: 'mysql.png',
            transform: 'translate(-150, -135) scale(0.5)',
        },
    ];

    useEffect(() => {

        const svg = svgRef.current,
            svgViewBoxWidth = svg.viewBox.baseVal.width,
            svgViewBoxHeight = svg.viewBox.baseVal.height,
            logos = svg.querySelectorAll('g.animate_logo'),
            initTransformY = 0;

        // set init transform value
        for (let logo of logos) {

            const logoIndex = parseInt(logo.getAttribute('data-index')),
                innerImg = logo.querySelector('image'),
                innerImgWidth = parseInt(innerImg.getAttribute('width'));

            // switch (logoIndex) {
            //     case 1:
            //         logo.setAttribute('transform', `translate(${(svgViewBoxWidth / 2) - (innerImgWidth / 2)}, ${initTransformY})`);
            //         break;
            //     case 2:
            //         logo.setAttribute('transform', `translate(${(svgViewBoxWidth / 2) - (innerImgWidth / 2)}, ${initTransformY})`);
            //         break;
            //     case 3:
            //         logo.setAttribute('transform', `translate(${(svgViewBoxWidth / 2) - (innerImgWidth / 2)}, ${(svgViewBoxHeight / 2) - (innerImgWidth / 2)})`);
            //         break;
            //     default:
            //         break;
            // }


        }


    }, []);

    return (
        <section className='min-h-[95vh]'>
            <div className='w-full h-full py-20' style={{ backgroundImage: `linear-gradient(#00000085,#00000085), url(/images/next-coding.webp)` }}>
                <div className='container mx-auto px-5 w-full h-full'>
                    <div className='w-full h-full flex max-md:flex-col-reverse items-center gap-10'>
                        <div className='max-md:w-full w-1/2'>
                            <div className='flex flex-col gap-8 items-start max-sm:items-center'>
                                <p className='text-white max-sm:text-base text-xl max-md:text-center '>Crafting Digital Experiences, One Line of Code at a Time.</p>
                                <h2 className='text-5xl max-sm:text-3xl text-white max-md:text-center font-semibold leading-snug'>Hi, I&apos;m Palash, a Passionate <span className='text-gold opacity-90'>Web Developer.</span></h2>
                                <button className='text-gold font-medium border border-gold px-7 py-3 hover:bg-gold duration-200 hover:text-white'>Explore My Work</button>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <div className='max-md:scale-110'>
                                <svg className='w-full h-auto' viewBox='0 0 500 500' ref={svgRef}>

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
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Hero;
