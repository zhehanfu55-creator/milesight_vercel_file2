import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({
    email: "",
    company: "",
    country: "",
    phone: "",
    message: "",
    interest: "",
    code: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".contact-content", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section-light">
      <div className="container-main">
        <div className="contact-content grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-heading-sm text-[32px] md:text-[40px] font-semibold mb-4">
              Get In Touch About Your IoT Smart Building Project
            </h2>
            <p className="text-body mb-8">
              Fill out the form and our team will get back to you within 24 hours to discuss your smart building project needs.
            </p>
            <div className="hidden lg:block">
              <img
                src="/images/asset_8.png"
                alt="Smart Building Integration"
                className="w-full rounded-xl opacity-80"
              />
            </div>
          </div>

          <form
            className="bg-[#f2f3f5] rounded-xl p-8 space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[#1d2129] mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-[#e5e6eb] rounded-lg text-sm focus:outline-none focus:border-[#0052d9] focus:ring-1 focus:ring-[#0052d9] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1d2129] mb-1.5">
                  Company *
                </label>
                <input
                  type="text"
                  required
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-[#e5e6eb] rounded-lg text-sm focus:outline-none focus:border-[#0052d9] focus:ring-1 focus:ring-[#0052d9] transition-colors"
                  placeholder="Company name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[#1d2129] mb-1.5">
                  Country *
                </label>
                <select
                  value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-[#e5e6eb] rounded-lg text-sm focus:outline-none focus:border-[#0052d9] focus:ring-1 focus:ring-[#0052d9] transition-colors"
                >
                  <option value="">Select country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="de">Germany</option>
                  <option value="fr">France</option>
                  <option value="au">Australia</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1d2129] mb-1.5">
                  Phone
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-[#e5e6eb] rounded-lg text-sm focus:outline-none focus:border-[#0052d9] focus:ring-1 focus:ring-[#0052d9] transition-colors"
                  placeholder="+1 234 567 890"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1d2129] mb-1.5">
                Message
              </label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 bg-white border border-[#e5e6eb] rounded-lg text-sm focus:outline-none focus:border-[#0052d9] focus:ring-1 focus:ring-[#0052d9] transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1d2129] mb-1.5">
                Which area are you interested in?
              </label>
              <select
                value={form.interest}
                onChange={(e) => setForm({ ...form, interest: e.target.value })}
                className="w-full px-4 py-2.5 bg-white border border-[#e5e6eb] rounded-lg text-sm focus:outline-none focus:border-[#0052d9] focus:ring-1 focus:ring-[#0052d9] transition-colors"
              >
                <option value="">Select an option</option>
                <option value="facility">Facility Management</option>
                <option value="energy">Energy Management</option>
                <option value="space">Space Management</option>
                <option value="people">People Sensing</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-end">
              <div>
                <label className="block text-sm font-medium text-[#1d2129] mb-1.5">
                  Verification Code
                </label>
                <input
                  type="text"
                  value={form.code}
                  onChange={(e) => setForm({ ...form, code: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-[#e5e6eb] rounded-lg text-sm focus:outline-none focus:border-[#0052d9] focus:ring-1 focus:ring-[#0052d9] transition-colors"
                  placeholder="Enter code"
                />
              </div>
              <div className="text-sm font-mono text-[#86909c] bg-white px-4 py-2.5 rounded-lg border border-[#e5e6eb] text-center tracking-widest select-none">
                k7c9
              </div>
            </div>

            <button type="submit" className="btn-primary w-full">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
