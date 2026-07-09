import Hero from "@/components/modules/hero/Hero";
import HeroBackground from "@/components/modules/hero/HeroBackground";
import AboutSection from "@/components/modules/about/About";
import Experience from "@/components/modules/experience/Experience";
import Projects from "@/components/modules/projects/Projects";
import Contact from "@/components/modules/contact/Contact";
import Footer from "../footer/Footer";

export default function Main() {
  return (
    <>
      <Hero />
      <HeroBackground />
      <AboutSection />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
