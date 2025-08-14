import Link from "next/link";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Cookie <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Learn how we use cookies and similar technologies to enhance your
            experience on our website.
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
                1. What Are Cookies?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookies are small text files that are placed on your device when
                you visit our website. They help us provide you with a better
                experience by remembering your preferences and analyzing how you
                use our site.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Cookies can be "session" cookies (which are deleted when you
                close your browser) or "persistent" cookies (which remain on
                your device for a set period of time).
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                2. How We Use Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>
                  <strong>Essential Cookies:</strong> These cookies are
                  necessary for the website to function properly
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> These cookies help us
                  understand how visitors interact with our website
                </li>
                <li>
                  <strong>Functional Cookies:</strong> These cookies remember
                  your preferences and settings
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> These cookies are used to
                  deliver relevant advertisements
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                3. Types of Cookies We Use
              </h2>

              <h3 className="text-2xl font-semibold text-black mb-4">
                3.1 Essential Cookies
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies are essential for the operation of our website and
                cannot be disabled. They include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Authentication cookies that keep you logged in</li>
                <li>Security cookies that protect against fraud</li>
                <li>
                  Load balancing cookies that ensure the website loads properly
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-black mb-4">
                3.2 Analytics Cookies
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies help us understand how visitors use our website by
                collecting and reporting information anonymously. They include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>
                  Google Analytics cookies that track page views and user
                  behavior
                </li>
                <li>
                  Performance monitoring cookies that help us identify and fix
                  issues
                </li>
                <li>
                  User experience cookies that help us improve our website
                  design
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-black mb-4">
                3.3 Functional Cookies
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies enable enhanced functionality and personalization.
                They include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Language preference cookies</li>
                <li>Theme and layout preference cookies</li>
                <li>Form auto-fill cookies</li>
              </ul>

              <h3 className="text-2xl font-semibold text-black mb-4">
                3.4 Marketing Cookies
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies are used to track visitors across websites to
                display relevant advertisements. They include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Social media cookies for sharing content</li>
                <li>Advertising cookies for targeted marketing</li>
                <li>Retargeting cookies for showing relevant ads</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                4. Third-Party Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may use third-party services that place cookies on your
                device. These services include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>
                  <strong>Google Analytics:</strong> For website analytics and
                  performance monitoring
                </li>
                <li>
                  <strong>Social Media Platforms:</strong> For social sharing
                  and integration features
                </li>
                <li>
                  <strong>Advertising Networks:</strong> For displaying relevant
                  advertisements
                </li>
                <li>
                  <strong>Content Delivery Networks:</strong> For faster website
                  loading
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                These third-party services have their own privacy policies and
                cookie practices. We encourage you to review their policies.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                5. Managing Your Cookie Preferences
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have several options for managing cookies:
              </p>

              <h3 className="text-2xl font-semibold text-black mb-4">
                5.1 Browser Settings
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most web browsers allow you to control cookies through their
                settings. You can:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Block all cookies</li>
                <li>Allow only essential cookies</li>
                <li>Delete existing cookies</li>
                <li>Set preferences for specific websites</li>
              </ul>

              <h3 className="text-2xl font-semibold text-black mb-4">
                5.2 Cookie Consent
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you first visit our website, you'll see a cookie consent
                banner. You can:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Accept all cookies</li>
                <li>Reject non-essential cookies</li>
                <li>Customize your preferences</li>
                <li>Change your preferences at any time</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                6. Impact of Disabling Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you choose to disable cookies, please be aware that:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Some website features may not work properly</li>
                <li>Your preferences may not be saved</li>
                <li>You may need to re-enter information repeatedly</li>
                <li>Some content may not be personalized</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                7. Cookie Retention
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Different types of cookies have different retention periods:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>
                  <strong>Session Cookies:</strong> Deleted when you close your
                  browser
                </li>
                <li>
                  <strong>Persistent Cookies:</strong> Remain for a set period
                  (usually 1-2 years)
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Typically retained for 26
                  months
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> Usually retained for 13
                  months
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                8. Updates to This Policy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Cookie Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We will notify you of any material changes by posting the
                updated policy on our website and updating the "Last updated"
                date.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                9. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about our use of cookies or this
                Cookie Policy, please contact us:
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
            Questions About Our Cookie Policy?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're committed to transparency about how we use cookies. If you
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
