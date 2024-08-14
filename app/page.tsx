import Navbar from "@/components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import About from "@/components/About.jsx";
import Skills from "@/components/Skills.jsx";

export default function Home() {
  return (
    <main className="text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </main>
  );
}
