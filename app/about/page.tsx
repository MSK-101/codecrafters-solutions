import Link from 'next/link';

export default function About() {
  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions that give our clients a competitive advantage.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in every project, ensuring that our deliverables exceed expectations.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and work closely with our clients to ensure their vision becomes reality.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices, building lasting relationships with our clients.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const achievements = [
    { number: '150+', label: 'Projects Delivered' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years of Excellence' },
    { number: '99%', label: 'Client Satisfaction' },
  ];

  const team = [
    {
      name: 'Ahmed Khan',
      role: 'CEO & Founder',
      description: 'Visionary leader with 10+ years in software development and business strategy.',
    },
    {
      name: 'Sarah Ahmed',
      role: 'CTO',
      description: 'Technology expert specializing in AI, cloud architecture, and scalable solutions.',
    },
    {
      name: 'Muhammad Ali',
      role: 'Lead Developer',
      description: 'Full-stack developer with expertise in modern web technologies and mobile development.',
    },
    {
      name: 'Fatima Zahra',
      role: 'UI/UX Designer',
      description: 'Creative designer focused on user experience and modern design principles.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            About <span className="text-gradient">Codecrafters</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are a passionate team of innovators, developers, and designers dedicated to transforming 
            businesses through cutting-edge technology solutions.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2019, Codecrafters Solutions began with a simple mission: to help businesses 
                navigate the digital landscape with innovative, reliable, and scalable technology solutions.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                What started as a small team of passionate developers has grown into a global company 
                serving clients across multiple industries. Our journey has been marked by continuous 
                learning, adaptation to emerging technologies, and an unwavering commitment to client success.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we stand as a trusted partner for businesses looking to leverage technology 
                to drive growth, improve efficiency, and create meaningful digital experiences for their customers.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-2xl">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses with innovative digital solutions that drive growth, 
                  enhance efficiency, and create lasting value in an ever-evolving technological landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape the way we work with our clients and partners.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-orange-500 mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-black mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Our <span className="text-gradient">Achievements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-gradient mb-2">{achievement.number}</div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our talented team of professionals brings together diverse expertise to deliver exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-black text-center mb-2">{member.name}</h3>
                <p className="text-orange-500 text-center font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-center leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let's discuss your project and see how our team can help bring your vision to life. 
            We're here to turn your ideas into powerful digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-block"
            >
              Get In Touch
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-500 transition-all duration-300 inline-block"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
