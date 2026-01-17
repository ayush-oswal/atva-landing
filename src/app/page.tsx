import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Onboarding from "@/components/Onboarding";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Work from "@/components/Work";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <Process />
      <Onboarding />
      <Stats />
      <About />
      <Work />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
