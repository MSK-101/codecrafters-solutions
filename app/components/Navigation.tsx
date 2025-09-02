"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "nav-modern shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-modern">
        <div className="flex justify-between items-center h-20">
          {/* New Modern Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              {/* Logo Icon */}
              <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center logo-glow">
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
              {/* Logo Glow Effect */}
              <div className="absolute inset-0 w-10 h-10 gradient-primary rounded-xl opacity-20 blur-sm group-hover:opacity-40 transition-opacity"></div>
            </div>

            {/* Brand Text */}
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300">
                CodeCrafters
              </span>
              <span className="text-xs text-secondary font-medium -mt-1">
                SOLUTIONS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-link ${pathname === item.href ? "active" : ""}`}
              >
                {item.name}
              </Link>
            ))}

            {/* CTA Button */}
            <Link href="/contact" className="btn-primary ml-4">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-primary focus:outline-none transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className="card-modern mt-4 p-4 border-t border-border">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`nav-link block w-full text-left ${
                      pathname === item.href ? "active" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-border mt-4">
                  <Link
                    href="/contact"
                    className="btn-primary w-full text-center block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
