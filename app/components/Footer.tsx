import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Cookie Policy", href: "/cookie-policy" },
    ],
    services: [
      { name: "Web Development", href: "/services#web-development" },
      { name: "Mobile Apps", href: "/services#mobile-apps" },
      { name: "Cloud Solutions", href: "/services#cloud-solutions" },
      { name: "Data Analytics", href: "/services#data-analytics" },
    ],
  };

  return (
    <footer className="bg-background-secondary border-t-[0.5px] border-gray-500">
      <div className="container-modern">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  CodeCrafters
                </span>
                <span className="text-xs text-secondary block -mt-1">
                  SOLUTIONS
                </span>
              </div>
            </div>
            <p className="text-text-secondary mb-6 leading-relaxed max-w-md">
              Your global partner for turning ideas into powerful digital
              experiences. We specialize in software development, web design,
              mobile app creation, and cutting-edge AI solutions.
            </p>

            {/* Social Links */}
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-primary transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-4 mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-primary transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-4 mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <a
                  href="mailto:Admin@codecrafters.world"
                  className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm"
                >
                  Admin@codecrafters.world
                </a>
              </div>

              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <a
                  href="tel:+923154412344"
                  className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm"
                >
                  +923154412344
                </a>
              </div>

              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span className="text-text-secondary text-sm">
                  House No 961, Block R1
                  <br />
                  Johar Town, Lahore
                  <br />
                  Pakistan
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t-[0.5px] border-gray-500 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-muted text-sm">
              © {currentYear} CodeCrafters Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-text-muted hover:text-primary transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
