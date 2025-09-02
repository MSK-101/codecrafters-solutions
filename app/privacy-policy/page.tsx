import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Privacy <span className="text-gradient neon-text">Policy</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8 animate-fade-in-up">
              <p className="text-text-muted">
                <strong>Last updated:</strong>{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            <div className="mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-white mb-6">
                1. Introduction
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Codecrafters Solutions ("we," "our," or "us") is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website or use our services.
              </p>
              <p className="text-text-secondary leading-relaxed">
                By using our website and services, you consent to the data
                practices described in this policy. If you do not agree with our
                policies and practices, please do not use our services.
              </p>
            </div>

            <div className="mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-white mb-6">
                2. Information We Collect
              </h2>

              <h3 className="text-2xl font-semibold text-white mb-4">
                2.1 Personal Information
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide
                to us, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-secondary space-y-2">
                <li>
                  Name and contact information (email address, phone number)
                </li>
                <li>Company name and job title</li>
                <li>Project requirements and specifications</li>
                <li>Communication preferences</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-2xl font-semibold text-white mb-4">
                2.2 Automatically Collected Information
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When you visit our website, we automatically collect certain
                information, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-secondary space-y-2">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website</li>
                <li>Device information</li>
              </ul>
            </div>

            <div className="mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-white mb-6">
                3. How We Use Your Information
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We use the information we collect for various purposes,
                including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-secondary space-y-2">
                <li>Providing and maintaining our services</li>
                <li>Communicating with you about our services</li>
                <li>Responding to your inquiries and support requests</li>
                <li>Improving our website and services</li>
                <li>Analyzing usage patterns and trends</li>
                <li>Ensuring security and preventing fraud</li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>

            <div className="mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-white mb-6">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except in the
                following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-secondary space-y-2">
                <li>
                  With service providers who assist us in operating our website
                  and providing services
                </li>
                <li>To comply with legal requirements or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </div>

            <div className="mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-white mb-6">
                5. Data Security
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no
                method of transmission over the internet or electronic storage
                is 100% secure.
              </p>
            </div>

            <div className="mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-white mb-6">
                6. Your Rights
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-secondary space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge a complaint with supervisory authorities</li>
              </ul>
            </div>

            <div className="mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-white mb-6">
                7. Cookies and Tracking Technologies
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your
                experience on our website. You can control cookie settings
                through your browser preferences.
              </p>
            </div>

            <div className="mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-white mb-6">
                8. Changes to This Policy
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new policy on this page
                and updating the "Last updated" date.
              </p>
            </div>

            <div className="mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-white mb-6">
                9. Contact Us
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <div className="card-modern p-6 rounded-lg">
                <p className="text-text-secondary mb-2">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:Admin@codecrafters.world"
                    className="text-primary hover:text-orange-400 transition-colors"
                  >
                    Admin@codecrafters.world
                  </a>
                </p>
                <p className="text-text-secondary mb-2">
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+923154412344"
                    className="text-primary hover:text-orange-400 transition-colors"
                  >
                    +923154412344
                  </a>
                </p>
                <p className="text-text-secondary">
                  <strong>Address:</strong> House No 961, Block R1, Johar Town,
                  Lahore, Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
