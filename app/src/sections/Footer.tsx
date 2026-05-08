const footerColumns = [
  {
    title: "Products",
    links: [
      "Video Surveillance",
      "Intelligent Traffic Cameras",
      "Solar-powered Cameras",
      "LoRaWAN Sensors",
      "LoRaWAN Gateways",
      "IoT Controllers",
      "5G & Cellular Products",
    ],
  },
  {
    title: "CCTV Solutions",
    links: [
      "Mobile Surveillance Units",
      "Traffic Enforcement Solution",
      "Speed Enforcement",
      "Road Traffic Management",
      "Smart Parking",
      "Construction Site Solution",
      "Retail Video Surveillance",
    ],
  },
  {
    title: "IoT Solutions",
    links: [
      "Smart Building",
      "People Counting",
      "Smart Water",
      "Smart Office",
      "HVAC Management",
      "Indoor Air Quality",
      "Smart Agriculture",
    ],
  },
  {
    title: "Resources",
    links: [
      "Technical Support",
      "Document Center",
      "Firmware & SDK",
      "Software & Platform",
      "Marketing Collateral",
      "Training & Webinar",
    ],
  },
  {
    title: "Company",
    links: [
      "About Milesight",
      "Success Stories",
      "Contact Us",
      "Sustainability",
      "Trust Center",
      "Legal",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1d2129] pt-16 pb-8">
      <div className="container-main">
        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {footerColumns.map((col, i) => (
            <div key={i}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      className="text-[13px] text-[#86909c] hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-[#3a3f48] pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h4 className="text-sm font-semibold text-white mb-1">
                Make Sensing Matter
              </h4>
              <p className="text-xs text-[#86909c]">
                Subscribe to our newsletter for the latest updates
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2.5 bg-[#2a2f38] border border-[#3a3f48] rounded-lg text-sm text-white placeholder:text-[#86909c] focus:outline-none focus:border-[#0052d9]"
              />
              <button className="px-5 py-2.5 bg-[#0052d9] text-white text-sm font-medium rounded-lg hover:bg-[#003bb3] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#3a3f48] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-xs text-[#86909c]">
            <span>Copyright 2026 Milesight. All Rights Reserved.</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>

          <div className="flex items-center gap-4">
            {["LinkedIn", "Twitter", "YouTube", "Facebook"].map((social, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full bg-[#2a2f38] flex items-center justify-center text-[#86909c] hover:text-white hover:bg-[#3a3f48] transition-colors"
                title={social}
              >
                <span className="text-xs font-bold">
                  {social[0]}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
