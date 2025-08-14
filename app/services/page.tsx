import Link from "next/link";

export default function Services() {
  const services = [
    {
      id: "software-development",
      title: "Software Development",
      subtitle: "Custom Software Solutions",
      description:
        "We build robust, scalable, and innovative software solutions tailored to your specific business needs.",
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
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      features: [
        "Custom Web Applications",
        "Enterprise Software Systems",
        "API Development & Integration",
        "Database Design & Management",
        "Cloud-Native Solutions",
        "Legacy System Modernization",
      ],
      technologies: ["React", "Node.js", "Python", "Java", "AWS", "Azure"],
      benefits: [
        "Scalable architecture that grows with your business",
        "Secure and compliant solutions",
        "Performance optimization and monitoring",
        "Ongoing maintenance and support",
      ],
    },
    {
      id: "web-design",
      title: "Web Design",
      subtitle: "Beautiful & Responsive Websites",
      description:
        "We create stunning, user-friendly websites that engage your audience and drive conversions.",
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
        "Responsive Web Design",
        "E-commerce Solutions",
        "Content Management Systems",
        "SEO Optimization",
        "Performance Optimization",
        "User Experience Design",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "WordPress",
        "Shopify",
        "Next.js",
      ],
      benefits: [
        "Mobile-first responsive design",
        "Fast loading and optimized performance",
        "SEO-friendly structure and content",
        "Intuitive user interface and experience",
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
      technologies: [
        "React Native",
        "Flutter",
        "Swift",
        "Kotlin",
        "Firebase",
        "AWS",
      ],
      benefits: [
        "Native performance and user experience",
        "Cross-platform compatibility",
        "App store optimization and marketing",
        "Real-time updates and notifications",
      ],
    },
    {
      id: "ai-solutions",
      title: "AI Solutions",
      subtitle: "Intelligent Automation",
      description:
        "We leverage cutting-edge AI and machine learning to automate and optimize your business processes.",
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
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "Chatbots & Virtual Assistants",
        "Process Automation",
      ],
      technologies: [
        "TensorFlow",
        "PyTorch",
        "OpenAI",
        "Azure AI",
        "AWS ML",
        "Python",
      ],
      benefits: [
        "Automated decision-making processes",
        "Enhanced customer experience",
        "Improved operational efficiency",
        "Data-driven insights and analytics",
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We start by understanding your business goals, requirements, and target audience to create a comprehensive project plan.",
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description:
        "Our design team creates wireframes, mockups, and prototypes to visualize the solution before development begins.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "We build your solution using best practices, with continuous testing and quality assurance throughout the process.",
    },
    {
      step: "04",
      title: "Deployment & Support",
      description:
        "We deploy your solution and provide ongoing support, maintenance, and updates to ensure optimal performance.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive digital solutions to help your business
            thrive in the modern digital landscape. From custom software
            development to cutting-edge AI solutions, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              What We <span className="text-gradient">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive range of services is designed to meet all your
              digital transformation needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                id={service.id}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="text-orange-500 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-black mb-2">
                  {service.title}
                </h3>
                <p className="text-orange-500 font-medium mb-4">
                  {service.subtitle}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-black mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-gray-600 text-sm flex items-center"
                        >
                          <svg
                            className="w-4 h-4 text-orange-500 mr-2"
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
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Service <span className="text-gradient">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our services can transform your business and drive
              growth.
            </p>
          </div>
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="text-orange-500 mb-4">{service.icon}</div>
                    <h3 className="text-3xl font-bold text-black mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div>
                      <h4 className="font-semibold text-black mb-3">
                        Key Benefits:
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li
                            key={idx}
                            className="text-gray-600 flex items-start"
                          >
                            <svg
                              className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0"
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
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-xl">
                    <h4 className="text-white text-xl font-semibold mb-4">
                      Why Choose This Service?
                    </h4>
                    <ul className="space-y-3">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-white/90 flex items-center"
                        >
                          <svg
                            className="w-4 h-4 text-white mr-3"
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
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project
              delivery and client satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-xl font-bold">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let's discuss your project requirements and find the perfect
            solution for your business needs. Our team is ready to help you
            achieve your digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-block"
            >
              Start Your Project
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-500 transition-all duration-300 inline-block"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
