import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const verticals = [
  {
    label: "People Counting",
    title: "People Counting",
    desc: "People counting solution uses advanced technology to turn foot traffic into actionable insights, helping businesses optimize operations and boost profitability across various sectors.",
    image: "/images/asset_7.png",
  },
  {
    label: "Space Occupancy",
    title: "Space Occupancy",
    desc: "Monitor real-time space occupancy to optimize workspace utilization, reduce costs, and enhance employee experience with data-driven decisions.",
    image: "/images/asset_6.png",
  },
  {
    label: "Indoor Air Quality Monitoring",
    title: "Indoor Air Quality",
    desc: "Continuously monitor indoor air quality parameters including CO2, PM2.5, temperature, and humidity to ensure a healthy and productive environment.",
    image: "/images/asset_4.png",
  },
  {
    label: "HVAC Management",
    title: "HVAC Management",
    desc: "Intelligent HVAC control based on occupancy, environmental conditions, and energy demand to maximize comfort while minimizing energy consumption.",
    image: "/images/asset_5.png",
  },
  {
    label: "Water Management",
    title: "Water Management",
    desc: "Smart water monitoring and leak detection systems to prevent damage, reduce waste, and ensure efficient water usage throughout your facility.",
    image: "/images/asset_4.png",
  },
  {
    label: "Smart Office",
    title: "Smart Office",
    desc: "Transform your workplace with IoT-enabled smart office solutions that enhance productivity, comfort, and resource efficiency.",
    image: "/images/asset_6.png",
  },
  {
    label: "Smart Restroom",
    title: "Smart Restroom",
    desc: "Automated restroom monitoring for supplies, cleaning schedules, and occupancy to improve hygiene standards and user satisfaction.",
    image: "/images/asset_4.png",
  },
];

export default function VerticalSolutions() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".vs-content", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section-alt">
      <div className="container-main">
        <h2 className="text-heading-sm text-[32px] md:text-[40px] font-semibold text-center mb-12 vs-content">
          Wireless Vertical Solutions for Specialized Building Applications
        </h2>
        <div className="vs-content grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          {/* Tab List */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
            {verticals.map((v, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`text-left px-4 py-3 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  active === i
                    ? "bg-[#0052d9] text-white"
                    : "bg-white text-[#4e5969] hover:bg-[#e5e6eb]"
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl p-8 border border-[#e5e6eb]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-[#1d2129] mb-4">
                  {verticals[active].title}
                </h3>
                <p className="text-body mb-6">{verticals[active].desc}</p>
                <button className="btn-outline">Explore the Solution</button>
              </div>
              <div className="transition-opacity duration-300">
                <img
                  src={verticals[active].image}
                  alt={verticals[active].title}
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
