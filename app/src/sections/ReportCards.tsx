import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reports = [
  {
    title: "Frost Radar: Top IoT Innovators in Smart Building Sensors, 2025",
    image: "/images/report_frost_radar.jpg",
    link: "#",
  },
  {
    title: "Policy-Driven Development of Smart Buildings in Europe",
    image: "/images/report_europe.jpg",
    link: "#",
  },
];

export default function ReportCards() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".report-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pb-20 bg-white">
      <div className="container-main">
        <h3 className="text-caption text-center mb-8">
          Insightful Industry Reports to Guide Your Smart Building Strategy Worldwide
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
          {reports.map((report, i) => (
            <a
              key={i}
              href={report.link}
              className="report-card group block bg-white border border-[#e5e6eb] rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-[200px] overflow-hidden">
                <img
                  src={report.image}
                  alt={report.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h4 className="text-base font-semibold text-[#1d2129] group-hover:text-[#0052d9] transition-colors mb-3 leading-snug">
                  {report.title}
                </h4>
                <span className="text-sm text-[#0052d9] font-medium">
                  Download the Report →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
