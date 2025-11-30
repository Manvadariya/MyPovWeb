import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import MemoriesSection from "@/components/MemoriesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="font-outfit text-gray-900 bg-white selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <Hero />
      <FeatureSection />
      <MemoriesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
