import Navbar from "@/components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import About from "@/components/About.jsx";
import Skills from "@/components/Skills.jsx";
import Projects from "@/components/Projects.jsx";
import Contact from "@/components/Contact.jsx";
import Footer from "@/components/Footer.jsx";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
