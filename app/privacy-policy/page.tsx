import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-gray-600">
                <strong>Last updated:</strong>{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Codecrafters Solutions ("we," "our," or "us") is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website or use our services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our website and services, you consent to the data
                practices described in this policy. If you do not agree with our
                policies and practices, please do not use our services.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                2. Information We Collect
              </h2>

              <h3 className="text-2xl font-semibold text-black mb-4">
                2.1 Personal Information
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide
                to us, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>
                  Name and contact information (email address, phone number)
                </li>
                <li>Company name and job title</li>
                <li>Project requirements and specifications</li>
                <li>Communication preferences</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-2xl font-semibold text-black mb-4">
                2.2 Automatically Collected Information
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you visit our website, we automatically collect certain
                information, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website</li>
                <li>Device information</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect for various purposes,
                including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Providing and maintaining our services</li>
                <li>Communicating with you about our services</li>
                <li>Responding to your inquiries and requests</li>
                <li>Improving our website and services</li>
                <li>Analyzing usage patterns and trends</li>
                <li>Preventing fraud and ensuring security</li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except in the
                following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>
                  <strong>Service Providers:</strong> We may share information
                  with trusted third-party service providers who assist us in
                  operating our website and providing services
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose
                  information if required by law or in response to valid legal
                  requests
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger,
                  acquisition, or sale of assets, your information may be
                  transferred
                </li>
                <li>
                  <strong>Protection of Rights:</strong> We may disclose
                  information to protect our rights, property, or safety
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                5. Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no
                method of transmission over the internet or electronic storage
                is 100% secure.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                6. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your
                experience on our website. You can control cookie settings
                through your browser preferences.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                7. Your Rights and Choices
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have certain rights regarding your personal information,
                including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>
                  The right to access and receive a copy of your personal
                  information
                </li>
                <li>
                  The right to correct inaccurate or incomplete information
                </li>
                <li>The right to delete your personal information</li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                8. Children's Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not intended for children under the age of 13.
                We do not knowingly collect personal information from children
                under 13. If you believe we have collected information from a
                child under 13, please contact us immediately.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                9. International Data Transfers
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Your information may be transferred to and processed in
                countries other than your own. We ensure that such transfers
                comply with applicable data protection laws and implement
                appropriate safeguards.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                10. Changes to This Policy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new policy on this page
                and updating the "Last updated" date.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                11. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:Admin@codecrafters.world"
                    className="text-orange-500 hover:text-orange-600"
                  >
                    Admin@codecrafters.world
                  </a>
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+923154412344"
                    className="text-orange-500 hover:text-orange-600"
                  >
                    +923154412344
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>Address:</strong> Codecrafters Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Questions About Our Privacy Policy?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're committed to transparency and protecting your privacy. If you
            have any questions or concerns, please don't hesitate to reach out
            to us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:Admin@codecrafters.world"
              className="bg-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-block"
            >
              Contact Us
            </a>
            <Link
              href="/"
              className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-500 hover:text-white transition-all duration-300 inline-block"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
