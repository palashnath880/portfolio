import Image from "next/image";
import React from "react";
import { FaArrowRightLong, FaGithub, FaLink } from "react-icons/fa6";
import SectionHead from "./SectionHead";
import Link from "next/link";
import Masonry from "./Masonry";

const MasonryItem = ({ src }: { src: string }) => {
  return (
    <div className="w-full h-auto overflow-hidden break-inside-avoid shadow-md">
      <Image
        draggable={false}
        src={src}
        width={400}
        height={400}
        alt={src}
        className="w-full h-auto object-cover "
      />
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
      image: `/images/palashnath880.webp`,
    },
    {
      title: "Medicare",
      desc: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.`,
      live_link: "https://medicare.palashnath880.vercel.app/",
      code_link: "https://github.com/palashnath880/medicare",
      image: `/images/projects/project-2.webp`,
    },
    {
      title: "Medicare",
      desc: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.`,
      live_link: "",
      code_link: "",
      image: `/images/palashnath880.webp`,
    },
    {
      title: "Furniture",
      desc: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.`,
      live_link: "https://furniture.palashnath880.vercel.app/",
      code_link: "https://github.com/palashnath880/furniture",
      image: `/images/projects/project-1.webp`,
    },
    {
      title: "Medicare",
      desc: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.`,
      live_link: "https://medicare.palashnath880.vercel.app/",
      code_link: "https://github.com/palashnath880/medicare",
      image: `/images/palashnath880.webp`,
    },
    {
      title: "Medicare",
      desc: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.`,
      live_link: "",
      code_link: "",
      image: `/images/projects/project-1.webp`,
    },
    {
      title: "Furniture",
      desc: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.`,
      live_link: "https://furniture.palashnath880.vercel.app/",
      code_link: "https://github.com/palashnath880/furniture",
      image: `/images/projects/project-1.webp`,
    },
    {
      title: "Medicare",
      desc: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.`,
      live_link: "https://medicare.palashnath880.vercel.app/",
      code_link: "https://github.com/palashnath880/medicare",
      image: `/images/projects/project-2.webp`,
    },
    {
      title: "Medicare",
      desc: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.`,
      live_link: "",
      code_link: "",
      image: `/images/projects/project-1.webp`,
    },
    {
      title: "Furniture",
      desc: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.`,
      live_link: "https://furniture.palashnath880.vercel.app/",
      code_link: "https://github.com/palashnath880/furniture",
      image: `/images/projects/project-1.webp`,
    },
    {
      title: "Medicare",
      desc: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.`,
      live_link: "https://medicare.palashnath880.vercel.app/",
      code_link: "https://github.com/palashnath880/medicare",
      image: `/images/projects/project-2.webp`,
    },
    {
      title: "Medicare",
      desc: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.`,
      live_link: "",
      code_link: "",
      image: `/images/palashnath880.webp`,
    },
  ];
  const animateObj = {
    initial: { opacity: 0, transform: "translateY(20%)" },
    whileInView: { opacity: 1, transform: "translateY(0%)" },
  };

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
            renderItem={(item: any) => <MasonryItem src={item.image || ""} />}
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
