import Link from "next/link";

export default function Contact() {
  const contactInfo = [
    {
      title: "Email Us",
      description: "Send us an email for any inquiries or project discussions.",
      value: "Admin@codecrafters.world",
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
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      link: "mailto:Admin@codecrafters.world",
    },
    {
      title: "Call Us",
      description: "Speak directly with our team for immediate assistance.",
      value: "+923154412344",
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
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      link: "tel:+923154412344",
    },
    {
      title: "Business Hours",
      description: "We&apos;re available during these hours for consultations.",
      value: "Mon - Fri: 9:00 AM - 6:00 PM",
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Visit Us",
      description:
        "Our office location for in-person meetings and consultations.",
      value: "House No 961, Block R1, Johar Town, Lahore, Pakistan",
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
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];

  const services = [
    {
      title: "Web Development",
      description: "Modern, responsive websites and web applications",
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
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications",
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
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment",
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
    },
    {
      title: "Data Analytics",
      description: "Advanced analytics and business intelligence",
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
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:pb-48 lg:pt-96 pt-54">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="relative z-10 container-modern">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-12">
              Ready to start your next project? We&apos;re here to help you
              bring your digital vision to life. Contact us today for a free
              consultation and discover how we can transform your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-24 lg:py-32 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-gradient neon-text">Services</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              We offer comprehensive digital solutions to help your business
              thrive in the modern digital landscape.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card-modern p-6 hover-scale group animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-primary mb-4 group-hover:scale-105 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">
              Contact{" "}
              <span className="text-gradient neon-text">Information</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Reach out to us through any of these channels. We&apos;re here to
              help you succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="card-modern p-8 hover-tilt group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-4 group-hover:scale-105 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                  {info.title}
                </h3>
                <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                  {info.description}
                </p>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-primary font-semibold hover:text-secondary transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-white font-semibold">{info.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold mb-6">
                Let&apos;s Start Your{" "}
                <span className="text-gradient neon-text">Project</span>
              </h2>
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                Ready to transform your business with cutting-edge technology?
                Fill out the form and we&apos;ll get back to you within 24
                hours.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient rounded-full flex items-center justify-center flex-shrink-0">
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
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Free Consultation
                    </h3>
                    <p className="text-text-secondary">
                      Get a free 30-minute consultation to discuss your project
                      requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient rounded-full flex items-center justify-center flex-shrink-0">
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
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Custom Quote
                    </h3>
                    <p className="text-text-secondary">
                      Receive a detailed project quote tailored to your specific
                      needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient rounded-full flex items-center justify-center flex-shrink-0">
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
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Project Timeline
                    </h3>
                    <p className="text-text-secondary">
                      Get a clear timeline for your project development and
                      delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="card-modern p-8 animate-pulse-glow">
                <h3 className="text-2xl font-bold text-white mb-6 text-gradient">
                  Send us a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="input-modern"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="input-modern"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 backdrop-blur-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 backdrop-blur-sm"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Service Interest
                    </label>
                    <select className="input-modern w-full">
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-apps">Mobile Apps</option>
                      <option value="cloud-solutions">Cloud Solutions</option>
                      <option value="data-analytics">Data Analytics</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="input-modern w-full"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-primary py-3 px-6 font-semibold"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
