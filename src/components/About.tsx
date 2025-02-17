"use client";

import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import img from "../../public/images/htm-css.jpg";

const About = () => {
  return (
    <section
      id="about"
      style={{
        backgroundImage: `url(${img.src})`,
        backgroundColor: `#00000095`,
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="container px-5 mx-auto">
        <div className="flex max-md:flex-col items-center justify-between">
          <div className="flex flex-col max-md:py-5 max-md:w-full max-lg:w-[400px] w-[545px]">
            <p className="text-sm text-secondary">
              Hello, {"I'm"} Palash Nath, a passionate web developer with a
              knack for turning ideas into digital realities. From pixel-perfect
              design to seamless functionality, I specialize in creating
              immersive and dynamic web experiences.
            </p>
            <a
              href="https://drive.google.com/file/d/1czP5xhlQSjDV8YeCGqxWfrm0TcqV-Ra1/view?usp=sharing"
              target="_blank"
              className="px-7 py-2.5 rounded-full bg-secondary text-sm mt-4 w-max cursor-pointer flex items-center gap-3"
            >
              Resume
              <FaArrowRight />
            </a>
          </div>
          <div className="pt-10 w-[300px]">
            <Image
              src={"/images/coder.png"}
              width={300}
              height={300}
              alt="Coder Thumbnail"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
