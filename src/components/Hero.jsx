import React from 'react';

const Hero = () => {
    return (
        <section className='h-[95vh]'>
            <div className='w-full h-full pt-20' style={{ backgroundImage: `linear-gradient(#00000085,#00000085), url(/images/next-coding.webp)` }}>
                <div className='container mx-auto px-5 w-full h-full'>
                    <div className='w-full h-full flex max-md:flex-col items-center gap-10'>
                        <div className='max-md:w-full w-1/2'>
                            <div className='flex flex-col gap-8 items-start max-sm:items-center'>
                                <p className='text-white max-sm:text-base text-xl max-md:text-center '>Crafting Digital Experiences, One Line of Code at a Time.</p>
                                <h2 className='text-5xl max-sm:text-3xl text-white max-md:text-center font-semibold leading-snug'>Hi, I&apos;m Palash, a Passionate <span className='text-gold opacity-90'>Web Developer.</span></h2>
                                <button className='text-gold font-medium border border-gold px-7 py-3 hover:bg-gold duration-200 hover:text-white'>Explore My Work</button>
                            </div>
                        </div>
                        <div className='w-1/2'>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
