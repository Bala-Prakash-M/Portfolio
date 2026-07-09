"use client";

import Hero from "@/components/modules/hero/Hero";
import HeroBackground from "@/components/modules/hero/HeroBackground";
import HeroBackgroundMobile from "../hero/MobileBlob";
import AboutSection from "@/components/modules/about/About";
import Experience from "@/components/modules/experience/Experience";
import Projects from "@/components/modules/projects/Projects";
import Contact from "@/components/modules/contact/Contact";
import Footer from "../footer/Footer";
import { useScreenSize } from "@/components/shared/hooks/useScreenSize";

export default function Main() {
  const { isMobile } = useScreenSize();

  // Unified anchor execution handler
  const handleScrollToSection = (item: string) => {
    if (item === "Resume") {
      window.open(
        "https://drive.google.com/file/d/1uxNhwvUL6Ciuckfxo6otROKxmIfInv1z/view?usp=drive_link",
        "_blank",
      ); // Change to your actual file route
      return;
    }

    const sectionId = item.toLowerCase();
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* Pass the controller into Hero where your navbar menu lives */}
      <Hero onNavigate={handleScrollToSection} />

      <div className="block md:hidden">
        <HeroBackgroundMobile />
      </div>
      
      <div className="hidden md:block">
        <HeroBackground />
      </div>

      {/* Anchor targets wrapping your sectional modules */}
      <div id="about">
        <AboutSection />
      </div>

      <div id="experience">
        <Experience />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </>
  );
}
