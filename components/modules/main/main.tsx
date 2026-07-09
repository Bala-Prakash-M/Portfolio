"use client";

import Hero from "@/components/modules/hero/Hero";
import HeroBackground from "@/components/modules/hero/HeroBackground";
import HeroBackgroundMobile from "../hero/MobileBlob";
import AboutSection from "@/components/modules/about/About";
import Experience from "@/components/modules/experience/Experience";
import Projects from "@/components/modules/projects/Projects";
import Contact from "@/components/modules/contact/Contact";
import Footer from "../footer/Footer";

export default function Main() {
  
  // Unified anchor execution handler
  const handleScrollToSection = (item: string) => {
    if (item === "Resume") {
      window.open(
        "https://drive.google.com/file/d/1uxNhwvUL6Ciuckfxo6otROKxmIfInv1z/view?usp=drive_link",
        "_blank",
      );
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
      {/* BACKGROUND CORNER: Persistently sits on the bottom layer plane (z-0) */}
      <div className="block md:hidden">
        <HeroBackgroundMobile />
      </div>
      
      <div className="hidden md:block">
        <HeroBackground />
      </div>

      {/* CONTENT CORNER: 
          Forcing relative z-10 stops hardware-accelerated fixed backgrounds 
          from clipping or swallowing your section elements during viewport scrolls.
      */}
      <div className="relative z-10 w-full">
        {/* Pass the controller into Hero where your navbar menu lives */}
        <Hero onNavigate={handleScrollToSection} />

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
      </div>
    </>
  );
}