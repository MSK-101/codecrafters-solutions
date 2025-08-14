import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Terms of <span className="text-gradient">Service</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Please read these terms carefully before using our services. They
            govern your use of our website and services.
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
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using the website and services of Codecrafters
                Solutions ("we," "our," or "us"), you accept and agree to be
                bound by the terms and provision of this agreement.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you do not agree to abide by the above, please do not use
                this service.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                2. Description of Service
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Codecrafters Solutions provides software development, web
                design, mobile app development, and AI solutions services. Our
                services include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Custom software development and consulting</li>
                <li>Website design and development</li>
                <li>Mobile application development</li>
                <li>AI and machine learning solutions</li>
                <li>Technical consulting and support</li>
                <li>Project management and delivery</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                3. User Responsibilities
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>
                  Provide accurate and complete information when requested
                </li>
                <li>Maintain the confidentiality of any account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not interfere with or disrupt our services</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                4. Intellectual Property Rights
              </h2>

              <h3 className="text-2xl font-semibold text-black mb-4">
                4.1 Our Rights
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content, features, and functionality on our website,
                including but not limited to text, graphics, logos, and
                software, are owned by Codecrafters Solutions and are protected
                by copyright, trademark, and other intellectual property laws.
              </p>

              <h3 className="text-2xl font-semibold text-black mb-4">
                4.2 Your Rights
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You retain ownership of any content you provide to us. By
                providing content, you grant us a non-exclusive, worldwide,
                royalty-free license to use, reproduce, and distribute such
                content in connection with our services.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                5. Payment Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Payment terms for our services are as follows:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>
                  Payment schedules will be agreed upon in individual project
                  contracts
                </li>
                <li>All payments are due according to the agreed schedule</li>
                <li>
                  Late payments may result in project delays or suspension
                </li>
                <li>All fees are non-refundable unless otherwise specified</li>
                <li>Prices are subject to change with prior notice</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                6. Project Terms
              </h2>

              <h3 className="text-2xl font-semibold text-black mb-4">
                6.1 Project Scope
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Project scope, deliverables, timelines, and costs will be
                defined in individual project agreements. Any changes to project
                scope may result in additional costs and timeline adjustments.
              </p>

              <h3 className="text-2xl font-semibold text-black mb-4">
                6.2 Deliverables
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We will deliver the agreed-upon deliverables according to the
                project timeline. Final deliverables will be provided upon full
                payment unless otherwise agreed.
              </p>

              <h3 className="text-2xl font-semibold text-black mb-4">
                6.3 Revisions
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We include a reasonable number of revisions in our project
                scope. Additional revisions may incur additional costs.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                7. Confidentiality
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We understand the importance of confidentiality and agree to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Keep all client information confidential</li>
                <li>Not disclose confidential information to third parties</li>
                <li>Use confidential information only for project purposes</li>
                <li>
                  Return or destroy confidential information upon project
                  completion
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                8. Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the maximum extent permitted by law, Codecrafters Solutions
                shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages, including but not limited to
                loss of profits, data, or use.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our total liability shall not exceed the amount paid by you for
                the specific service giving rise to the claim.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                9. Warranty and Disclaimer
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our services are provided "as is" without warranties of any
                kind, either express or implied. We do not warrant that our
                services will be uninterrupted or error-free.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                10. Termination
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Either party may terminate this agreement with written notice.
                Upon termination:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>
                  You will pay for all services rendered up to the termination
                  date
                </li>
                <li>We will deliver any completed work</li>
                <li>
                  Both parties will return or destroy confidential information
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                11. Governing Law
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These terms shall be governed by and construed in accordance
                with the laws of the jurisdiction where Codecrafters Solutions
                operates, without regard to its conflict of law provisions.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                12. Dispute Resolution
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Any disputes arising from these terms or our services shall be
                resolved through good faith negotiations. If negotiations fail,
                disputes may be resolved through mediation or arbitration as
                agreed by both parties.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                13. Changes to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to modify these terms at any time. Changes
                will be effective immediately upon posting on our website. Your
                continued use of our services constitutes acceptance of the
                modified terms.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                14. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please
                contact us:
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
                  <strong>Address:</strong> House No 961, Block R1, Johar Town,
                  Lahore, Pakistan
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
            Questions About Our Terms?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're here to help clarify any questions you may have about our
            terms of service. Don't hesitate to reach out to us.
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
