import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Zap, Users, LayoutDashboard, ShieldCheck, Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: Building2,
    title: "Efficient Facility Management",
    desc: "Enable efficient equipment monitoring and control to avoid manual checks, improve accuracy, enhance efficiency, and extend facility lifespan.",
  },
  {
    icon: Zap,
    title: "Optimal Energy Efficiency",
    desc: "Minimize energy waste and boost efficiency through real-time monitoring and automated adjustments of HVAC, lighting, and other building systems.",
  },
  {
    icon: Users,
    title: "Improved Comfort & Productivity",
    desc: "Enhance occupant comfort and productivity by dynamically adjusting temperature, lighting, and air quality based on occupancy patterns and environmental data.",
  },
  {
    icon: LayoutDashboard,
    title: "Optimal Resource & Space Utilization",
    desc: "Help organizations get the most out of their spaces and resources through intelligent allocation and monitoring, reducing waste.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Funding Support",
    desc: "Help organizations align with international and national regulations, streamline reporting, and become eligible for government funding opportunities.",
  },
  {
    icon: Heart,
    title: "Smart Care & Safety",
    desc: "Enhance building and occupant safety by monitoring for incidents such as leaks, unexpected door or window openings, fire safety equipment status, and the status of vulnerable groups.",
  },
];

export default function Benefits() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".benefit-card", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section-dark">
      <div className="container-main">
        <p className="text-caption text-center text-[#86909c] mb-3">
          Comprehensive IoT Building Solutions
        </p>
        <h2 className="text-heading-sm text-[32px] md:text-[40px] font-semibold text-center text-white mb-12">
          Maximizing Efficiency, Comfort, and Value
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="benefit-card p-6 rounded-xl bg-[#2a2f38] border border-[#3a3f48] hover:border-[#0052d9] transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-[#0052d9]/20 flex items-center justify-center mb-4">
                <b.icon size={24} className="text-[#0052d9]" />
              </div>
              <h4 className="text-white text-lg font-semibold mb-2">
                {b.title}
              </h4>
              <p className="text-[#86909c] text-sm leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
