import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import SubNavTabs from "./sections/SubNavTabs";
import IntroSection from "./sections/IntroSection";
import ReportCards from "./sections/ReportCards";
import EmpowerSection from "./sections/EmpowerSection";
import SolutionFacility from "./sections/SolutionFacility";
import SolutionEnergy from "./sections/SolutionEnergy";
import SolutionSpace from "./sections/SolutionSpace";
import PeopleSensing from "./sections/PeopleSensing";
import WirelessIntegration from "./sections/WirelessIntegration";
import FESPlus from "./sections/FESPlus";
import Certifications from "./sections/Certifications";
import Benefits from "./sections/Benefits";
import SuccessStories from "./sections/SuccessStories";
import IBoxKit from "./sections/IBoxKit";
import VerticalSolutions from "./sections/VerticalSolutions";
import RelatedResources from "./sections/RelatedResources";
import FAQSection from "./sections/FAQSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf as any);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <SubNavTabs />
      <IntroSection />
      <ReportCards />
      <EmpowerSection />
      <SolutionFacility />
      <SolutionEnergy />
      <SolutionSpace />
      <PeopleSensing />
      <WirelessIntegration />
      <FESPlus />
      <Certifications />
      <Benefits />
      <SuccessStories />
      <IBoxKit />
      <VerticalSolutions />
      <RelatedResources />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
