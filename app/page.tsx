import AppNavbar from "@/components/AppNavbar";
import AppFooter from "@/components/AppFooter";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import GallerySection from "@/components/GallerySection";
import StatsBar from "@/components/StatsBar";
import TestimonialTeam from "@/components/TestimonialTeam";
import ReservationSection from "@/components/ReservationSection";

export default function Home() {
  return (
    <>
      <AppNavbar />
      <main>
        <div id="beranda">
          <HeroCarousel />
        </div>
        <StatsBar />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <TestimonialTeam />
        <ReservationSection />
      </main>
      <AppFooter />
    </>
  );
}
