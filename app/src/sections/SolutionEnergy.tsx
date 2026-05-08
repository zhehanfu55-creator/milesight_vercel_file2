import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Play } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  "HVAC Automation Adjustment",
  "Real-Time Local HVAC Interaction",
  "Smart Lighting Control",
  "Remote Energy Strategy Optimization",
  "Data-Driven Energy Strategy Optimization",
];

export default function SolutionEnergy() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".energy-img", { opacity: 0, x: -40 }, {
        opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
      gsap.fromTo(".energy-text", { opacity: 0, x: 40 }, {
        opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section-alt">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="energy-img order-2 lg:order-1">
            <img
              src="/images/asset_5.png"
              alt="Energy Management 3D Illustration"
              className="w-full rounded-xl"
            />
          </div>
          <div className="energy-text order-1 lg:order-2">
            <h3 className="text-heading-sm text-[24px] md:text-[28px] font-semibold mb-4">
              Intelligent Energy Management for Sustainable and Profitable
              Buildings
            </h3>
            <p className="text-body mb-6">
              IoT enables precise energy monitoring and smart control, allowing
              buildings to reduce costs, optimize power systems, and meet
              sustainability goals. These solutions also optimize equipment and
              space utilization for better control and higher operational
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
                Energy Management Solution
              </button>
              <button className="flex items-center gap-2 text-[#0052d9] font-medium hover:underline">
                <Play size={16} /> Watch Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
