import { useEffect, useRef, useState } from "react";

const tabs = [
  { label: "Application", target: "application" },
  { label: "Integration", target: "integration" },
  { label: "Material", target: "material" },
  { label: "Certification", target: "certification" },
  { label: "Benefits", target: "benefits" },
  { label: "Case", target: "case" },
  { label: "Related Solutions", target: "related-solutions" },
  { label: "FAQ", target: "faq" },
];

export default function SubNavTabs() {
  const [activeTab, setActiveTab] = useState("Application");
  const [stuck, setStuck] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setStuck(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-64px 0px 0px 0px" }
    );

    const sentinel = document.createElement("div");
    sentinel.style.position = "absolute";
    sentinel.style.top = "0";
    sentinel.style.height = "1px";
    barRef.current?.parentElement?.prepend(sentinel);

    if (sentinel) observer.observe(sentinel);

    return () => {
      observer.disconnect();
      sentinel.remove();
    };
  }, []);

  const handleClick = (target: string) => {
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveTab(tabs.find((t) => t.target === target)?.label || "");
    }
  };

  return (
    <div
      ref={barRef}
      className={`sticky top-16 z-50 bg-white border-b border-[#e5e6eb] transition-shadow duration-300 ${
        stuck ? "shadow-sm" : ""
      }`}
    >
      <div className="container-main">
        <div className="flex gap-0 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => handleClick(tab.target)}
              className={`shrink-0 px-5 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab.label
                  ? "text-[#0052d9] border-[#0052d9]"
                  : "text-[#4e5969] border-transparent hover:text-[#1d2129]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
