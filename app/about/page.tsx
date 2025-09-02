import Link from "next/link";

export default function About() {
  const values = [
    {
      title: "Innovation",
      description:
        "We constantly push the boundaries of technology to deliver cutting-edge solutions that give our clients a competitive advantage.",
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
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Excellence",
      description:
        "We maintain the highest standards of quality in every project, ensuring that our deliverables exceed expectations.",
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
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and work closely with our clients to ensure their vision becomes reality.",
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Integrity",
      description:
        "We conduct business with honesty, transparency, and ethical practices, building lasting relationships with our clients.",
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ];

  const achievements = [
    { number: "150+", label: "Projects Delivered" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years of Excellence" },
    { number: "99%", label: "Client Satisfaction" },
  ];

  const team = [
    {
      name: "Muhammad Subhan",
      role: "CEO & Founder",
      description:
        "Visionary leader with 10+ years in software development and business strategy.",
    },
    {
      name: "Muhammad Hammad",
      role: "CTO",
      description:
        "Technology expert specializing in AI, cloud architecture, and scalable solutions.",
    },
    {
      name: "Muhammad Hashim",
      role: "Admin",
      description:
        "Admin focused on managing the company's operations and ensuring smooth workflow.",
    },
    {
      name: "Minahil Javed",
      role: "Lead QA",
      description:
        "Quality Assurance Tester focused on user experience and modern UX principles.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:pb-72 lg:pt-96 pt-54">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="relative z-10 container-modern">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              About <span className="text-gradient">CodeCrafters</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed mb-12">
              We are a passionate team of innovators, creators, and
              problem-solvers dedicated to transforming ideas into powerful
              digital solutions that drive business growth and success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="text-gradient neon-text">Mission</span>
              </h2>
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                To empower businesses with innovative technology solutions that
                drive growth, efficiency, and competitive advantage. We believe
                that every great idea deserves to be brought to life with
                excellence and precision.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                Our commitment to quality, innovation, and client success has
                made us a trusted partner for businesses worldwide, helping them
                navigate the digital landscape with confidence and achieve their
                goals.
              </p>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="border-gradient-modern animate-pulse-glow">
                <div className="gradient-cta p-8 rounded-xl relative overflow-hidden">
                  <div className="absolute inset-0 gradient-primary-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Why Choose Us?
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-3">
                        <div className="w-6 h-6 gradient-primary rounded-full flex items-center justify-center">
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
                        <span className="text-white">
                          Expert team with proven track record
                        </span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-6 h-6 gradient-primary rounded-full flex items-center justify-center">
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
                        <span className="text-white">
                          Cutting-edge technology stack
                        </span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-6 h-6 gradient-primary rounded-full flex items-center justify-center">
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
                        <span className="text-white">
                          24/7 support and maintenance
                        </span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-6 h-6 gradient-primary rounded-full flex items-center justify-center">
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
                        <span className="text-white">
                          Agile development methodology
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-24 lg:py-32 gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-gradient neon-text">Values</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              The principles that guide our work and relationships with clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="card-modern p-8 hover-tilt group animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-primary mb-6 group-hover:scale-105 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-gradient neon-text">Achievements</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client
              satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl font-bold text-gradient mb-2">
                  {achievement.number}
                </div>
                <div className="text-text-secondary font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-24 lg:py-32 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">
              Meet Our <span className="text-gradient neon-text">Team</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Our talented team of professionals brings together diverse
              expertise to deliver exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="card-modern p-8 hover-scale group animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white text-center mb-2 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary text-center font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-text-secondary text-center leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-cta relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in-up">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-up">
            Let&apos;s discuss your project and see how our team can help bring
            your vision to life. We&apos;re here to turn your ideas into
            powerful digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover-lift transition-all duration-300"
            >
              Get In Touch
            </Link>
            <Link
              href="/services"
              className="btn-secondary px-8 py-4 text-lg inline-block"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
