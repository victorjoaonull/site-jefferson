import { HeroSection } from "@/components/hero-section"
import { StorySection } from "@/components/story-section"
import { FacesSection } from "@/components/faces-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <StorySection />
      <FacesSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
