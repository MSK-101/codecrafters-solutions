import Link from "next/link";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Cookie <span className="text-gradient neon-text">Policy</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Learn how we use cookies and similar technologies to enhance your
              experience on our website.
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
                1. What Are Cookies?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Cookies are small text files that are placed on your device when
                you visit our website. They help us provide you with a better
                experience by remembering your preferences and analyzing how you
                use our site.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Cookies can be "session" cookies (which are deleted when you
                close your browser) or "persistent" cookies (which remain on
                your device for a set period of time).
              </p>
            </div>

            <div className="mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-white mb-6">
                2. How We Use Cookies
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-secondary space-y-2">
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

            <div className="mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-white mb-6">
                3. Types of Cookies We Use
              </h2>

              <h3 className="text-2xl font-semibold text-white mb-4">
                3.1 Essential Cookies
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                These cookies are essential for the operation of our website and
                cannot be disabled. They include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-secondary space-y-2">
                <li>Authentication cookies that keep you logged in</li>
                <li>Security cookies that protect against fraud</li>
                <li>
                  Load balancing cookies that ensure the website loads properly
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-white mb-4">
                3.2 Analytics Cookies
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                These cookies help us understand how visitors use our website by
                collecting and reporting information anonymously. They include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-secondary space-y-2">
                <li>
                  Google Analytics cookies that track page views and user
                  behavior
                </li>
                <li>
                  Performance monitoring cookies that help us identify and fix
                  issues
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-white mb-4">
                3.3 Functional Cookies
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                These cookies enhance the functionality and personalization of
                our website. They include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-secondary space-y-2">
                <li>Language preference cookies</li>
                <li>Theme and display preference cookies</li>
                <li>Form auto-fill cookies</li>
              </ul>
            </div>

            <div className="mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-white mb-6">
                4. Managing Your Cookie Preferences
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-secondary space-y-2">
                <li>
                  <strong>Browser Settings:</strong> Most browsers allow you to
                  control cookies through their settings
                </li>
                <li>
                  <strong>Cookie Consent:</strong> We provide a cookie consent
                  banner that allows you to choose which cookies to accept
                </li>
                <li>
                  <strong>Third-Party Opt-Out:</strong> You can opt out of
                  third-party cookies through their respective opt-out
                  mechanisms
                </li>
              </ul>
            </div>

            <div className="mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-white mb-6">
                5. Third-Party Cookies
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Some cookies on our website are set by third-party services,
                including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-secondary space-y-2">
                <li>Google Analytics for website analytics</li>
                <li>Social media platforms for sharing functionality</li>
                <li>Advertising networks for targeted advertising</li>
              </ul>
            </div>

            <div className="mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-white mb-6">
                6. Updates to This Policy
              </h2>
              <p className="text-text-secondary leading-relaxed">
                We may update this Cookie Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. We will notify you of any material changes
                by posting the updated policy on our website.
              </p>
            </div>

            <div className="mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-white mb-6">
                7. Contact Us
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you have any questions about our use of cookies, please
                contact us at:
              </p>
              <div className="bg-gray-900 p-6 rounded-lg">
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
