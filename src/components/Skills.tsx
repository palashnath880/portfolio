import React from "react";
import SectionHead from "./SectionHead";

const Skills = () => {
  const data = [
    {
      image: "/images/front-end.jpg",
      title: "Front-end Development",
      content: `Transforming designs into responsive and user-friendly websites using HTML, CSS, and JavaScript.`,
      items: [
        "HTML5, CSS3, JavaScript (ES6+), jQuery",
        "React.js, Next.js",
        "Tailwind CSS, Bootstrap, Material-UI, Daisy UI",
      ],
    },
    {
      image: "/images/back-end.jpg",
      title: "Back-end Development",
      content: `Building robust and scalable server-side applications with languages like Node.js and Python.`,
      items: ["Node.js, Express.js", "RESTful APIs, GraphQL"],
    },
    {
      image: "/images/database-management.webp",
      title: "Database Management",
      content: `Experience with MongoDB, MySQL, and Firebase for data storage and retrieval.`,
      items: ["MySQL", "MongoDB"],
    },
    {
      image: "/images/database-management.webp",
      title: "CMS Development",
      content: `Experience with MongoDB, MySQL, and Firebase for data storage and retrieval.`,
      items: ["WordPress"],
    },
  ];

  return (
    <section id="expertise">
      <div className="container mx-auto px-5 max-md:pb-0 py-10">
        <SectionHead
          title="Skills & Expertise"
          subtitle="What I Bring to the Table"
        />
        <div className="mt-10 flex flex-col gap-5">
          {data.map(({ content, items, title }, index) => (
            <div
              className="flex items-start max-sm:gap-3 gap-5 group"
              key={index}
            >
              <span className="text-2xl w-12 h-12 grid place-items-center bg-[#fafdff] rounded-full shadow-lg">
                0{index + 1}
              </span>
              <div className="px-3 sm:px-5 py-5 flex flex-col items-start gap-1 bg-[#fafdff] w-5/6">
                <h1 className="text-primary font-medium text-xl">{title}</h1>
                {/* <p className="text-primary text-opacity-60 text-sm">
                  {content}
                </p> */}
                {Array.isArray(items) && (
                  <ul className="mt-3 pl-5 text-sm list-disc space-y-2">
                    {items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
