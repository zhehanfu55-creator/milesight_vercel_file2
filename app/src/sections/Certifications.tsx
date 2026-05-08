import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  { name: "LoRaWAN", abbr: "LoRaWAN" },
  { name: "WELL Building Standard", abbr: "WELL" },
  { name: "BREEAM", abbr: "BREEAM" },
  { name: "LEED", abbr: "LEED" },
  { name: "Red Dot Award", abbr: "Red Dot" },
  { name: "iF Design Award", abbr: "iF" },
];

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".cert-item", { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.05,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="certification" className="section-light">
      <div className="container-main">
        <h2 className="text-heading-sm text-[32px] md:text-[40px] font-semibold text-center mb-4">
          Achieve Building Based Certifications with Ease
        </h2>
        <p className="text-body text-center max-w-[600px] mx-auto mb-12">
          Leverage IoT innovations to achieve building certifications such as LEED and WELL, enhancing energy performance, indoor air quality, and operational sustainability.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="cert-item flex flex-col items-center gap-3 p-6 bg-[#f2f3f5] rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group cursor-default"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-lg font-bold text-[#86909c] group-hover:text-[#0052d9] transition-colors shadow-sm">
                {cert.abbr.slice(0, 2).toUpperCase()}
              </div>
              <span className="text-xs font-medium text-[#4e5969] text-center leading-tight">
                {cert.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
