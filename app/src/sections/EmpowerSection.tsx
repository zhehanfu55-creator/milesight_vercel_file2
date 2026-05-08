import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function EmpowerSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".empower-content",
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="integration" className="section-alt">
      <div className="container-main">
        <div className="empower-content max-w-[800px] mx-auto text-center">
          <h2 className="text-heading-sm text-[32px] md:text-[40px] font-semibold mb-6">
            How to Empower Smart Buildings through the Power of IoT Innovations
          </h2>
          <p className="text-body">
            The smart building market is rapidly expanding, driven by automation
            and IoT technologies. To maximize value, smart buildings are
            increasingly designed around human experiences, making people-centric
            innovation and people-sensing solutions essential.
          </p>
        </div>
      </div>
    </section>
  );
}
