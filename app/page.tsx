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
      color: "from-purple-500 to-blue-500",
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
      color: "from-cyan-500 to-teal-500",
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
            d="M13 10V3L4 14h7v7l9-11h-7"
          />
        </svg>
      ),
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment",
      color: "from-violet-500 to-purple-500",
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
      color: "from-emerald-500 to-cyan-500",
    },
  ];

  const features = [
    {
      title: "Lightning Fast",
      description: "Optimized performance for the best user experience",
      icon: "⚡",
    },
    {
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime guarantee",
      icon: "🔒",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance",
      icon: "🚀",
    },
    {
      title: "Scalable Solutions",
      description: "Built to grow with your business needs",
      icon: "📈",
    },
  ];

  const stats = [
    { number: "150+", label: "Projects Delivered", icon: "🎯" },
    { number: "50+", label: "Happy Clients", icon: "😊" },
    { number: "5+", label: "Years Experience", icon: "⭐" },
    { number: "99%", label: "Success Rate", icon: "🏆" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content:
        "CodeCrafters transformed our vision into a stunning web application. Their attention to detail and technical expertise is unmatched.",
      avatar: "SJ",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Founder, DataFlow",
      content:
        "Working with CodeCrafters was a game-changer. They delivered our mobile app ahead of schedule and exceeded all expectations.",
      avatar: "MC",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "CTO, CloudSync",
      content:
        "The team's expertise in cloud solutions helped us scale efficiently. Their ongoing support has been invaluable to our growth.",
      avatar: "ER",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="relative z-10 container-modern text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-shadow">
              <span className="text-white">Code</span>
              <span className="text-gradient">Crafters</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-4xl mx-auto">
              Transforming ideas into powerful digital solutions with
              <span className="text-gradient font-semibold">
                {" "}
                innovation
              </span>{" "}
              and
              <span className="text-gradient font-semibold"> expertise</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary hover-lift">
                Start Your Project
              </Link>
              <Link href="/services" className="btn-secondary hover-lift">
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse-slow">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-modern">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-modern p-6 hover-lift">
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-text-secondary font-medium text-sm">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-modern">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              We deliver cutting-edge solutions that transform businesses and
              drive innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card-elevated p-8 hover-lift group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-105 transition-transform`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-gradient transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-modern">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-gradient">Us</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              We combine technical expertise with creative innovation to deliver
              exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-modern p-8 hover-lift group animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-gradient transition-colors">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-modern">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients
              have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-elevated p-8 hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-secondary mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-secondary text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-cta">
        <div className="container-modern text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-up">
            Let's work together to bring your digital vision to life. Contact us
            today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover-lift transition-all duration-300"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="btn-secondary border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
