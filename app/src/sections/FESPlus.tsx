import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play, FileText } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function FESPlus() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".fes-content", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section-alt">
      <div className="container-main">
        <div className="fes-content grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-heading-sm text-[32px] md:text-[40px] font-semibold mb-6">
              Profitable Smart Building With Milesight FES Plus Solutions
            </h2>
            <p className="text-body mb-4">
              Ranked as a top IoT innovator in smart building sensors for 2025, Milesight delivers advanced solutions for intelligent buildings. Access our full range of resources and connect directly with our IoT experts to transform your building with cutting-edge technology.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Industry Reports",
                "FES Plus Solution Materials",
                "Smart Building Use Cases",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-[#4e5969]">
                  <FileText size={14} className="text-[#0052d9]" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="btn-primary">Get Access to All Materials</button>
          </div>
          <div className="relative group cursor-pointer">
            <img
              src="/images/asset_9.png"
              alt="FES Plus Solutions Video"
              className="w-full rounded-xl"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-xl group-hover:bg-black/30 transition-colors">
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play size={24} className="text-[#0052d9] ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
