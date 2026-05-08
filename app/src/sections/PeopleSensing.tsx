import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: "🏢", label: "Building" },
  { icon: "🏨", label: "Hotel" },
  { icon: "🛒", label: "Retail" },
  { icon: "🎓", label: "University" },
  { icon: "✈️", label: "Airport" },
  { icon: "🏛️", label: "Museum" },
];

export default function PeopleSensing() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".people-text", { opacity: 0, x: -40 }, {
        opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
      gsap.fromTo(".people-img", { opacity: 0, x: 40 }, {
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
          <div className="people-text">
            <h3 className="text-heading-sm text-[24px] md:text-[28px] font-semibold mb-4">
              People Sensing: Driving Smart Building and Beyond Applications
            </h3>
            <p className="text-body mb-6">
              People Sensing can effectively provide data related to people and integrate with the three main application areas of smart building management: facility and security management, energy management, and building infrastructure management. By combining different solutions, it enhances the operational efficiency and value of buildings.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {features.map((f, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-[#e5e6eb] rounded-lg text-sm text-[#4e5969]"
                >
                  <span>{f.icon}</span>
                  {f.label}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="btn-outline">
                People Counting Solution
              </button>
              <button className="btn-outline">
                Space Occupancy Solution
              </button>
            </div>
          </div>
          <div className="people-img">
            <img
              src="/images/asset_7.png"
              alt="People Sensing Building Illustration"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
