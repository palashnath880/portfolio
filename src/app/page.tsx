import dynamic from "next/dynamic";
const About = dynamic(() => import("../components/About"));
const Contact = dynamic(() => import("../components/Contact"));
const Hero = dynamic(() => import("../components/Hero"));
const Projects = dynamic(() => import("../components/Projects"));
const Skills = dynamic(() => import("../components/Skills"));
const Resume = dynamic(() => import("../components/Resume"), { ssr: false });
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <Suspense>
        <Hero />
      </Suspense>

      <Suspense>
        <About />
      </Suspense>
      <Suspense>
        <Resume />
      </Suspense>
      <Skills />
      <Suspense>
        <Projects />
      </Suspense>
      <Suspense>
        <Contact />
      </Suspense>
      <ToastContainer position="top-center" />
    </>
  );
}
