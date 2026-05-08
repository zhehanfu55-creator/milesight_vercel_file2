import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tabs = ["IAQ Kit", "Laboratory", "Classroom", "Museum"];

export default function IBoxKit() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".ibox-content", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section-light">
      <div className="container-main">
        <div className="ibox-content text-center">
          <h2 className="text-heading-sm text-[32px] md:text-[40px] font-semibold mb-4">
            Quick Start The Differentiated Smart Building with the iBox Kit
          </h2>
          <p className="text-body max-w-[700px] mx-auto mb-10">
            Quickly launch building applications with the iBox Kit. This all-in-one solution covers building, office, restroom, and air quality applications, offering an unparalleled quick start experience.
          </p>

          <div className="max-w-[700px] mx-auto mb-8">
            <img
              src="/images/ibox_kit.jpg"
              alt="Milesight iBox Kit"
              className="w-full rounded-xl shadow-lg"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {tabs.map((tab, i) => (
              <button
                key={i}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  i === 0
                    ? "bg-[#0052d9] text-white"
                    : "bg-[#f2f3f5] text-[#4e5969] hover:bg-[#e5e6eb]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
