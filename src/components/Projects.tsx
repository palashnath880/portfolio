import Image from "next/image";
import React from "react";
import { FaArrowRightLong, FaGithub, FaLink, FaRegEye } from "react-icons/fa6";
import SectionHead from "./SectionHead";
import Link from "next/link";
import Masonry from "./Masonry";

const MasonryItem = ({
  src,
  title,
  github,
  link,
}: {
  src: string;
  title: string;
  github: string;
  link: string;
}) => {
  return (
    <div className="w-full h-auto overflow-hidden break-inside-avoid shadow-md relative group">
      <Image
        draggable={false}
        src={src}
        width={400}
        height={400}
        alt={src}
        className="w-full h-auto object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-35 grid place-items-center opacity-0 group-hover:opacity-100 transition-all">
        <div className="flex flex-col">
          <h1 className="text-3xl text-[#fff]">{title}</h1>
          <div className="flex gap-3 items-center mt-3">
            <a href={link} className="rounded-full" target="_blank">
              <button className="border-2 w-10 h-10 grid place-items-center rounded-full group hover:bg-black hover:border-black transition-all">
                <FaRegEye className="w-5 h-5 text-white" />
              </button>
            </a>
            <a href={github} className="rounded-full" target="_blank">
              <button className="border-2 w-10 h-10 grid place-items-center rounded-full group hover:bg-black hover:border-black transition-all">
                <FaGithub className="w-5 h-5 text-white" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const top3Project = [
    {
      title: "Furniture",
      desc: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.`,
      live_link: "https://furniture.palashnath880.vercel.app/",
      code_link: "https://github.com/palashnath880/furniture",
      image: `/images/furniture-short.png`,
      full_image: `/images/furniture.png`,
    },
    {
      title: "Medicare",
      desc: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.`,
      live_link: "https://medicare.palashnath880.vercel.app/",
      code_link: "https://github.com/palashnath880/medicare",
      image: `/images/medicare-short.png`,
      full_image: `/images/medicare.png`,
    },
    {
      title: "Aspire",
      desc: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.`,
      live_link: "https://aspire-palashnath.vercel.app/",
      code_link: "https://github.com/palashnath880/aspire",
      image: `/images/aspire-short.png`,
      full_image: `/images/aspire.png`,
    },
  ];

  return (
    <section id="project">
      <div className="container mx-auto px-5 max-md:pb-0 pt-20 pb-14">
        <SectionHead
          title="Projects"
          subtitle="Take a look at some of the projects I’ve worked on. They demonstrate my skills in web development, design, and problem-solving. Each project highlights a unique challenge and my approach to delivering exceptional results."
        />

        {/* masonry gallery */}
        <div className="mt-10">
          <Masonry
            gap={16}
            columnCount={3}
            items={top3Project}
            renderItem={(item: any) => (
              <MasonryItem
                src={item.image || ""}
                title={item.title}
                github={item.code_link}
                link={item.live_link}
              />
            )}
          />
        </div>

        <div className="flex justify-center">
          <Link
            href={"/projects"}
            className="flex items-center gap-2 hover:gap-3 duration-200 px-6 py-3 text-primary font-medium text-sm border border-primary mx-auto mt-16 rounded-full"
          >
            All Projects
            <FaArrowRightLong className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
