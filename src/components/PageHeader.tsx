import React from "react";
import img from "../../public/images/projects/projecs-header.jpg";

export default function PageHeader() {
  return (
    <section
      className="py-10"
      style={{
        backgroundImage: `url(${img.src})`,
        backgroundColor: `#00000095`,
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-secondary">Projects</h1>
        <p className="text-lg text-secondary text">Lorem ipsum</p>
      </div>
    </section>
  );
}
