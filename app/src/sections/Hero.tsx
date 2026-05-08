import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text entrance animation
      const tl = gsap.timeline({ delay: 0.3 });
      tl.fromTo(
        ".hero-label",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      )
        .fromTo(
          ".hero-title-line",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 },
          "-=0.3"
        )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        )
        .fromTo(
          ".hero-reports",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        );

      // Fade out on scroll
      if (canvasRef.current) {
        gsap.to(canvasRef.current, {
          opacity: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "50% top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen pt-16 overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      {/* Canvas / Visual Panel */}
      <div
        ref={canvasRef}
        className="hero-canvas-fallback absolute right-0 top-16 w-[45vw] h-[calc(100vh-64px)] hidden lg:block"
        style={{
          borderRadius: "12px 0 0 12px",
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Text Content */}
      <div
        ref={textRef}
        className="relative z-10 container-main flex items-center min-h-[calc(100vh-64px)]"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.9) 70%, transparent 100%)",
        }}
      >
        <div className="max-w-[600px] py-20">
          <p className="hero-label text-caption mb-4 opacity-0">
            SMART BUILDING SOLUTIONS
          </p>

          <h1 className="text-heading text-[48px] md:text-[56px] lg:text-[64px] font-bold mb-6">
            <span className="hero-title-line block opacity-0">
              Redefine IoT Smart Building
            </span>
            <span className="hero-title-line block opacity-0">
              Solutions in{" "}
              <span className="text-[#0052d9]">FES Plus</span>
            </span>
          </h1>

          <p className="hero-subtitle text-body text-lg mb-8 max-w-[520px] opacity-0">
            People Sensing Driven Facility Management, Energy Management, and
            Space Management Solutions
          </p>

          <div className="hero-cta mb-10 opacity-0">
            <button className="btn-primary">Get My Project Consultation</button>
          </div>

          {/* Report Cards */}
          <div className="hero-reports flex flex-col sm:flex-row gap-4 opacity-0">
            <a
              href="#"
              className="flex items-center gap-3 p-3 bg-white border border-[#e5e6eb] rounded-lg hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <img
                src="/images/report_frost_radar.jpg"
                alt="Frost Radar Report"
                className="w-16 h-20 object-cover rounded"
              />
              <div>
                <p className="text-xs text-[#86909c] mb-1">Industry Report</p>
                <p className="text-sm font-medium text-[#1d2129] group-hover:text-[#0052d9] transition-colors leading-tight">
                  Frost Radar: Top IoT Innovators in Smart Building Sensors,
                  2025
                </p>
                <span className="text-xs text-[#0052d9] font-medium mt-1 inline-block">
                  Download the Report →
                </span>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 p-3 bg-white border border-[#e5e6eb] rounded-lg hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <img
                src="/images/report_europe.jpg"
                alt="Europe Policy Report"
                className="w-16 h-20 object-cover rounded"
              />
              <div>
                <p className="text-xs text-[#86909c] mb-1">Industry Report</p>
                <p className="text-sm font-medium text-[#1d2129] group-hover:text-[#0052d9] transition-colors leading-tight">
                  Policy-Driven Development of Smart Buildings in Europe
                </p>
                <span className="text-xs text-[#0052d9] font-medium mt-1 inline-block">
                  Download the Report →
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Fallback Visual */}
      <div className="lg:hidden hero-canvas-fallback h-[40vh] mx-6 rounded-xl mb-8" />
    </section>
  );
}
