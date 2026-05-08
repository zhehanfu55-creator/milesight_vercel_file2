import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "Why the LoRaWAN is chosen and how the technology empowers smart building applications?",
    a: "LoRaWAN is a physical proprietary radio communication technique. It is chosen for smart building applications due to its long-range coverage, low power consumption, cost-effectiveness, scalability, robustness, and strong security. It empowers smart buildings by enabling efficient energy management, environmental monitoring, asset tracking, predictive maintenance, enhanced security, optimized space utilization, early water leak detection, and improved fire safety. This leads to more efficient, safe, and sustainable building operations.",
  },
  {
    q: "What are the development trends of buildings and the value of Milesight?",
    a: "The current state of IoT smart buildings involves the integration of connected devices and systems that enhance building management and occupant experience. To further advance their development, Milesight can leverage IoT devices from nodes to connectivity to achieve high-quality intelligent processes. Additionally, Milesight's rapidly developing people sensing product series can make the intelligent outcomes of smart buildings more human-centric and better meet actual needs, thereby enhancing the feasibility and value presentation of projects.",
  },
  {
    q: "How do occupancy sensors enhance smart building operations?",
    a: "Occupancy sensors detect the presence and number of people in a space, providing real-time data that enables intelligent control of various building systems. For example, when occupancy levels rise, ventilation can be increased to maintain optimal air quality, while HVAC systems automatically adjust heating and cooling to ensure comfort and energy efficiency. In addition, lighting can be switched off in unoccupied areas, further reducing energy consumption. By linking occupancy data to air quality management, HVAC control, and lighting automation, buildings can operate more efficiently, lower operational costs, and create healthier, more comfortable environments for occupants.",
  },
  {
    q: "What are the main types of IoT smart building sensors, and what roles do they play?",
    a: "Modern smart buildings rely on a variety of IoT sensors to monitor and optimize their environments. Key types include: IAQ Sensor (Indoor Air Quality Sensor) — measures levels of pollutants, CO2, VOCs, and particulate matter; Thermostat — monitors and regulates temperature settings; People Counter — tracks the number of individuals entering or leaving a space; Occupancy Sensor — detects the presence or absence of people; Temperature & Humidity Sensor — monitors ambient conditions; Current Transformer — measures electrical current; Distance/Level Sensor — measures levels of liquids and solids; Leakage Sensor — identifies water leaks; IoT Controller — acts as a central hub for data collection and automation.",
  },
];

export default function FAQSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".faq-item", { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.08,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="faq" className="section-alt">
      <div className="container-main max-w-[900px]">
        <h2 className="text-heading-sm text-[32px] md:text-[40px] font-semibold text-center mb-12">
          FAQs on IoT Smart Building Solutions
        </h2>
        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="faq-item border-b border-[#e5e6eb] last:border-b-0"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="text-base font-medium text-[#1d2129] group-hover:text-[#0052d9] transition-colors pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-[#86909c] transition-transform duration-300 ${
                    openIdx === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIdx === i ? "max-h-[500px] pb-5" : "max-h-0"
                }`}
              >
                <p className="text-sm text-[#4e5969] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
