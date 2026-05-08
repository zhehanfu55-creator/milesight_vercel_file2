import { useEffect, useRef, useState } from "react";
import { Globe, ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  const navLinks = [
    { label: "IoT Products", hasDropdown: false },
    { label: "AI Cameras", hasDropdown: false },
    { label: "Solutions", hasDropdown: true },
    { label: "Success Stories", hasDropdown: false, action: () => scrollToSection("case") },
    { label: "Support", hasDropdown: true },
    { label: "Partners", hasDropdown: true },
    { label: "Company", hasDropdown: true },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-[100] h-16 flex items-center transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
      style={{
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #e5e6eb",
      }}
    >
      <div className="container-main w-full flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="6" fill="#0052d9" />
            <path d="M8 22V12L12 18L16 12V22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 12V22" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="20" cy="9" r="1.5" fill="white" />
          </svg>
          <span className="text-xl font-bold text-[#1d2129]">Milesight</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={link.action || undefined}
              className="flex items-center gap-1 px-3 py-2 text-[15px] font-medium text-[#1d2129] hover:text-[#0052d9] transition-colors rounded"
            >
              {link.label}
              {link.hasDropdown && <ChevronDown size={14} />}
            </button>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="p-2 text-[#4e5969] hover:text-[#1d2129] transition-colors">
            <Globe size={20} />
          </button>
          <button className="px-5 py-2 text-sm font-medium text-white bg-[#0052d9] rounded hover:bg-[#003bb3] transition-colors">
            Contact
          </button>
          <button className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-[#1d2129] border border-[#e5e6eb] rounded hover:border-[#0052d9] hover:text-[#0052d9] transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
              <polygon points="6,4.5 11.5,8 6,11.5" fill="currentColor" />
            </svg>
            Online Demo
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-[#1d2129]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white border-b border-[#e5e6eb] shadow-lg">
          <div className="container-main py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={link.action || undefined}
                className="flex items-center justify-between px-4 py-3 text-[15px] font-medium text-[#1d2129] hover:bg-[#f2f3f5] rounded"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={14} />}
              </button>
            ))}
            <div className="flex gap-3 pt-4 border-t border-[#e5e6eb]">
              <button className="flex-1 px-5 py-2.5 text-sm font-medium text-white bg-[#0052d9] rounded">
                Contact
              </button>
              <button className="flex-1 px-5 py-2.5 text-sm font-medium text-[#1d2129] border border-[#e5e6eb] rounded">
                Online Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
