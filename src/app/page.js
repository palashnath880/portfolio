import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
    return <>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <ToastContainer />
    </>
}