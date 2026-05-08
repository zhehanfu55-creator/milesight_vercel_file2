import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Play } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  "HVAC System Performance Monitoring",
  "Circuit Operational Status Monitoring",
  "Unified Lighting Control",
  "Centralized HVAC Control",
  "Remote Meter Reading",
  "Water Supply Control",
  "Restroom Cleaning Schedule Management",
  "Restroom Supplies Management",
  "Facility Utilization Management",
];

export default function SolutionFacility() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".facility-text",
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 75%" },
        }
      );
      gsap.fromTo(
        ".facility-img",
        { opacity: 0, x: 40 },
        {
          opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 75%" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="benefits" className="section-light">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="facility-text">
            <h3 className="text-heading-sm text-[24px] md:text-[28px] font-semibold mb-4">
              Integrated Facility Management, for Seamless Building Operations
              and Asset Protection
            </h3>
            <p className="text-body mb-6">
              Facility management integrates protection, efficient operations,
              and smart upgrades into buildings. IoT Facility Management
              solutions monitor building assets such as HVAC systems, electrical
              circuits, meters, and water supply to enhance asset safety and
              lifespan while reducing manual inspections and improving
              efficiency.
            </p>
            <ul className="space-y-3 mb-8">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-[#0052d9] flex items-center justify-center">
                    <Check size={12} className="text-white" />
                  </span>
                  <span className="text-sm text-[#4e5969]">{f}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <button className="btn-outline">
                Facility Management Solution
              </button>
              <button className="flex items-center gap-2 text-[#0052d9] font-medium hover:underline">
                <Play size={16} /> Watch Video
              </button>
            </div>
          </div>
          <div className="facility-img">
            <img
              src="/images/asset_4.png"
              alt="Facility Management 3D Illustration"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
