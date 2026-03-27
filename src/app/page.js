import HeroSection from "@/components/HeroSection";
import AboutPreview from "@/components/AboutPreview";
import ProjectsPreview from "@/components/ProjectsPreview";
import BlogsPreview from "@/components/BlogsPreview";
import ContactPreview from "@/components/ContactPreview";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ProjectsPreview />
      <BlogsPreview />
      <ContactPreview />
    </>
  );
}
