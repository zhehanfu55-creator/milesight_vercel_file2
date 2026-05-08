import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const resources = [
  {
    image: "/images/resource_1.jpg",
    tag: "Blog",
    title: "Check out IoT Smart Building Sensors in Milesight",
  },
  {
    image: "/images/resource_2.jpg",
    tag: "Solution",
    title: "Get a Brief Idea about Smart Building Solution",
  },
  {
    image: "/images/resource_3.jpg",
    tag: "Solution",
    title: "People Sensing in Smart Buildings",
  },
];

export default function RelatedResources() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".resource-card", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.15,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="related-solutions" className="section-light">
      <div className="container-main">
        <h2 className="text-heading-sm text-[32px] md:text-[40px] font-semibold text-center mb-12">
          Related Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((r, i) => (
            <a
              key={i}
              href="#"
              className="resource-card group block bg-white border border-[#e5e6eb] rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-[200px] overflow-hidden">
                <img
                  src={r.image}
                  alt={r.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-medium text-[#0052d9] bg-[#0052d9]/10 px-2 py-1 rounded mb-3 inline-block">
                  {r.tag}
                </span>
                <h4 className="text-base font-semibold text-[#1d2129] group-hover:text-[#0052d9] transition-colors leading-snug mb-3">
                  {r.title}
                </h4>
                <span className="inline-flex items-center gap-1 text-sm text-[#0052d9] font-medium">
                  Read More <ArrowRight size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
