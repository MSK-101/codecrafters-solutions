import Link from "next/link";

export default function Home() {
  const services = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Web Development",
      description:
        "Modern, responsive websites built with cutting-edge technologies",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Data Analytics",
      description: "Advanced analytics and business intelligence solutions",
    },
  ];

  const features = [
    "Custom software development",
    "24/7 technical support",
    "Agile development methodology",
    "Cutting-edge technology and innovation",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 grid-pattern opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="text-white">Code</span>
              <span className="text-gradient neon-text">Crafters</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Crafting Digital Excellence with{" "}
              <span className="text-gradient font-semibold">Innovation</span>{" "}
              and{" "}
              <span className="text-gradient font-semibold">Creativity</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                href="/contact"
                className="bg-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg hover-lift hover-glow transform transition-all duration-300 inline-block"
              >
                Start Your Project
              </Link>
              <Link
                href="/services"
                className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-500 hover:text-black transition-all duration-300 inline-block"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Floating Tech Icons */}
          <div className="absolute top-20 left-10 animate-float">
            <div className="w-16 h-16 bg-gradient rounded-full flex items-center justify-center opacity-20">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
          </div>
          <div
            className="absolute top-40 right-20 animate-float"
            style={{ animationDelay: "1s" }}
          >
            <div className="w-12 h-12 bg-gradient rounded-full flex items-center justify-center opacity-20">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
          <div
            className="absolute bottom-20 left-20 animate-float"
            style={{ animationDelay: "2s" }}
          >
            <div className="w-14 h-14 bg-gradient rounded-full flex items-center justify-center opacity-20">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6">
              Our <span className="text-gradient neon-text">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver cutting-edge solutions that transform businesses and
              drive innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-effect p-8 rounded-2xl hover-lift group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-5xl font-bold mb-8">
                Why Choose{" "}
                <span className="text-gradient neon-text">CodeCrafters</span>
              </h2>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="w-8 h-8 bg-gradient rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
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
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-lg group-hover:text-white transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="bg-gradient text-white px-6 py-3 rounded-lg font-semibold hover-lift hover-glow transform transition-all duration-300 inline-block"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="glass-effect p-8 rounded-2xl animate-pulse-glow">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Ready to Start?
                  </h3>
                  <p className="text-white/90 mb-6">
                    Let&apos;s discuss your project and turn your vision into
                    reality. Get in touch with us today for a free consultation.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <svg
                        className="w-5 h-5 text-white"
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
                      <span className="text-white">
                        Admin@codecrafters.world
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg
                        className="w-5 h-5 text-white"
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
                      <span className="text-white">+923154412344</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-up">
            Let&apos;s work together to bring your digital vision to life.
            Contact us today for a free consultation and discover how we can
            help you achieve your goals.
          </p>
          <Link
            href="/contact"
            className="bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg hover-lift hover-glow transform transition-all duration-300 inline-block animate-fade-in-up"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
