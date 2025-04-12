import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        {/* As próximas sections entrarão aqui */}
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}