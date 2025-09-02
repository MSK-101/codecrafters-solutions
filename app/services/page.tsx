import Link from "next/link";

export default function Services() {
  const services = [
    {
      id: "web-development",
      title: "Web Development",
      subtitle: "Modern Web Solutions",
      description:
        "We build robust, scalable, and innovative web applications tailored to your specific business needs.",
      icon: (
        <svg
          className="w-12 h-12"
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
      features: [
        "Custom Web Applications",
        "E-commerce Solutions",
        "API Development & Integration",
        "Database Design & Management",
        "Cloud-Native Solutions",
        "Performance Optimization",
      ],
      technologies: ["React", "Next.js", "Node.js", "Python", "AWS", "Azure"],
      benefits: [
        "Scalable architecture that grows with your business",
        "Secure and compliant solutions",
        "Performance optimization and monitoring",
        "Ongoing maintenance and support",
      ],
    },
    {
      id: "mobile-apps",
      title: "Mobile Apps",
      subtitle: "Native & Cross-Platform Apps",
      description:
        "We develop high-performance mobile applications for iOS and Android platforms.",
      icon: (
        <svg
          className="w-12 h-12"
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
      features: [
        "Native iOS Development",
        "Native Android Development",
        "Cross-Platform Solutions",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      benefits: [
        "Native performance and user experience",
        "Cross-platform compatibility",
        "App store optimization and marketing",
        "Real-time updates and notifications",
      ],
    },
    {
      id: "cloud-solutions",
      title: "Cloud Solutions",
      subtitle: "Scalable Cloud Infrastructure",
      description:
        "We help businesses leverage cloud technology to scale efficiently and reduce operational costs.",
      icon: (
        <svg
          className="w-12 h-12"
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
      features: [
        "Cloud Migration",
        "Infrastructure as Code",
        "Container Orchestration",
        "Serverless Architecture",
        "Cloud Security",
        "Cost Optimization",
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
      benefits: [
        "Scalable and flexible infrastructure",
        "Reduced operational costs",
        "Enhanced security and compliance",
        "24/7 monitoring and support",
      ],
    },
    {
      id: "data-analytics",
      title: "Data Analytics",
      subtitle: "Business Intelligence Solutions",
      description:
        "We transform raw data into actionable insights to drive informed business decisions.",
      icon: (
        <svg
          className="w-12 h-12"
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
      features: [
        "Data Visualization",
        "Predictive Analytics",
        "Business Intelligence Dashboards",
        "Data Warehousing",
        "Machine Learning Models",
        "Real-time Analytics",
      ],
      technologies: ["Python", "R", "Tableau", "Power BI", "TensorFlow"],
      benefits: [
        "Data-driven decision making",
        "Predictive insights and forecasting",
        "Real-time monitoring and alerts",
        "Custom dashboards and reports",
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We start by understanding your business needs, goals, and requirements to create a comprehensive project plan.",
    },
    {
      step: "02",
      title: "Design & Architecture",
      description:
        "Our team designs the solution architecture and creates detailed technical specifications and wireframes.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "We develop your solution using agile methodology with continuous testing and quality assurance.",
    },
    {
      step: "04",
      title: "Deployment & Support",
      description:
        "We deploy your solution and provide ongoing support, maintenance, and optimization services.",
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
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed mb-12">
              We offer comprehensive digital solutions to help your business
              thrive in the modern digital landscape. From web development to
              cloud solutions, we&apos;ve got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="card-modern p-8 hover-tilt group animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-primary mb-6 group-hover:scale-105 transition-transform duration-300">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h2>
                <p className="text-primary font-semibold mb-4">
                  {service.subtitle}
                </p>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Benefits
                  </h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-6 h-6 bg-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg
                            className="w-3 h-3 text-white"
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
                        <span className="text-text-secondary">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-24 lg:py-32 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-gradient neon-text">Process</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project
              delivery and client satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 bg-gradient rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-white">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-cta relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in-up">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-up">
            Let&apos;s discuss your project requirements and find the perfect
            solution for your business needs.
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover-lift transition-all duration-300 inline-block animate-fade-in-up"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
