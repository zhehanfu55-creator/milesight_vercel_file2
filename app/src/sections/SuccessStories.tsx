import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "216,801", label: "Products Deployed" },
  { value: "111+", label: "Countries Covered" },
  { value: "826", label: "Projects Deployed" },
  { value: "227%", label: "Growth Rate (2021-2024)" },
];

const cases = [
  {
    image: "/images/case_building.jpg",
    category: "Energy Management",
    title: "Canada Commercial Building Energy Management",
  },
  {
    image: "/images/case_hotel.jpg",
    category: "Energy Management",
    title: "Dubai Hotel HVAC and Energy Saving",
  },
  {
    image: "/images/case_office.jpg",
    category: "Space Management",
    title: "Switzerland Office Smart Cleaning",
  },
  {
    image: "/images/case_retail.jpg",
    category: "People Counting",
    title: "European Retail People Counting",
  },
  {
    image: "/images/case_historic.jpg",
    category: "Water Management",
    title: "Italy Residential Building Water and Energy Consumption Monitoring",
  },
];

export default function SuccessStories() {
  const ref = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  const scroll = (dir: number) => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      checkScroll();
    }
    return () => el?.removeEventListener("scroll", checkScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".stat-item", { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
      gsap.fromTo(".case-card", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="case" className="section-alt">
      <div className="container-main">
        <h2 className="text-heading-sm text-[32px] md:text-[40px] font-semibold text-center mb-8">
          Success Stories in People Sensing Driven Building
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((s, i) => (
            <div key={i} className="stat-item text-center p-6 bg-white rounded-xl">
              <div className="text-[28px] md:text-[36px] font-bold text-[#1d2129] mb-1">
                {s.value}
              </div>
              <div className="text-sm text-[#86909c]">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none" }}
          >
            {cases.map((c, i) => (
              <a
                key={i}
                href="#"
                className="case-card snap-start shrink-0 w-[300px] md:w-[340px] bg-white rounded-xl overflow-hidden border border-[#e5e6eb] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="h-[190px] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-[#0052d9] bg-[#0052d9]/10 px-2 py-1 rounded mb-2 inline-block">
                    {c.category}
                  </span>
                  <h4 className="text-sm font-semibold text-[#1d2129] group-hover:text-[#0052d9] transition-colors leading-snug">
                    {c.title}
                  </h4>
                </div>
              </a>
            ))}
          </div>

          {/* Arrows */}
          {canScrollLeft && (
            <button
              onClick={() => scroll(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-[#1d2129] hover:text-[#0052d9] transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-[#1d2129] hover:text-[#0052d9] transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
