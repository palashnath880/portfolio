import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
    return <>
        <Hero />
        <About />
        <Skills />
        <Contact />
        <ToastContainer />
    </>
}