import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WirelessIntegration() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".wireless-item", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section-light">
      <div className="container-main">
        <h2 className="text-heading-sm text-[32px] md:text-[40px] font-semibold text-center mb-12">
          Wireless Integrating with Building Management System
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="wireless-item">
            <h4 className="text-lg font-semibold text-[#1d2129] mb-3">
              Wireless Sensors for Building Management System
            </h4>
            <p className="text-body">
              By utilizing advanced LoRaWAN technology, data from various sensors and devices can be collected and transmitted without the need for extensive wiring. This wireless approach not only simplifies installation and reduces maintenance costs, but also ensures reliable, scalable connectivity across your entire facility.
            </p>
          </div>
          <div className="wireless-item">
            <h4 className="text-lg font-semibold text-[#1d2129] mb-3">
              Seamless Integration with Building Management System
            </h4>
            <p className="text-body">
              Our wireless building management system solution enables real-time data to be seamlessly integrated into your existing Building Management System (BMS). Achieve comprehensive, real-time visibility and control over building operations—empowering smarter, more efficient management.
            </p>
          </div>
        </div>
        <div className="wireless-item flex flex-wrap justify-center items-center gap-8 py-6">
          {["LoRaWAN", "BACnet", "AWS", "Microsoft Azure", "MQTT", "HTTP", "Modbus"].map(
            (partner, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-[#f2f3f5] rounded text-sm font-medium text-[#4e5969] hover:bg-[#e5e6eb] transition-colors"
              >
                {partner}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
