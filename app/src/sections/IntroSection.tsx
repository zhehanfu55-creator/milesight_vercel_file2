import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IntroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".intro-content",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="application" className="section-light">
      <div className="container-main">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-[#86909c]">
            <li>
              <a href="/" className="hover:text-[#0052d9] transition-colors">
                Home
              </a>
            </li>
            <li>&gt;</li>
            <li>
              <a href="#" className="hover:text-[#0052d9] transition-colors">
                Solution
              </a>
            </li>
            <li>&gt;</li>
            <li className="text-[#4e5969]">Smart Building</li>
          </ol>
        </nav>

        <div className="intro-content max-w-[800px] mx-auto text-center">
          <h2 className="text-heading-sm text-[32px] md:text-[40px] font-semibold mb-6">
            Building the Future with IoT Smart Building Solutions
          </h2>
          <p className="text-body">
            Traditional building management systems often result in high
            maintenance costs, inefficient operations, and unnecessary energy
            consumption. Smart buildings, on the other hand, uses advanced
            technologies to connect, collect, and analyze data to automatically
            and remotely control building operations.
          </p>
          <p className="text-body mt-4">
            In smart buildings, IoT solutions, including sensors, controllers,
            and gateways, enable real-time monitoring and automation to improve
            efficiency, comfort, and safety. Milesight delivers comprehensive
            wireless IoT solutions for smart buildings, enabling real-time
            people sensing, optimized resource allocation, and efficient
            facility management, unlocking new levels of building intelligence.
          </p>
        </div>
      </div>
    </section>
  );
}
