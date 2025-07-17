import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedCakes from "@/components/FeaturedCakes";
import ProductShowcase from "@/components/ProductShowcase";
import TestimonialsSection from "@/components/TestimonialsSection";
import OffersSection from "@/components/OffersSection";
import SocialFeed from "@/components/SocialFeed";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FeaturedCakes />
      <ProductShowcase />
      <TestimonialsSection />
      <OffersSection />
      <SocialFeed />
      <Footer />
    </div>
  );
};

export default Index;
