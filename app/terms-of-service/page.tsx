import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Terms of <span className="text-gradient neon-text">Service</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our services. They
              govern your use of our website and services.
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
                1. Acceptance of Terms
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                By accessing and using the Codecrafters Solutions website and
                services, you accept and agree to be bound by the terms and
                provision of this agreement.
              </p>
              <p className="text-text-secondary leading-relaxed">
                If you do not agree to abide by the above, please do not use
                this service.
              </p>
            </div>

            <div className="mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-white mb-6">
                2. Use License
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the
                materials (information or software) on Codecrafters Solutions's
                website for personal, non-commercial transitory viewing only.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                This is the grant of a license, not a transfer of title, and
                under this license you may not:
              </p>
              <ul className="list-disc pl-6 mb-6 text-text-secondary space-y-2">
                <li>modify or copy the materials</li>
                <li>
                  use the materials for any commercial purpose or for any public
                  display (commercial or non-commercial)
                </li>
                <li>
                  attempt to decompile or reverse engineer any software
                  contained on Codecrafters Solutions's website
                </li>
                <li>
                  remove any copyright or other proprietary notations from the
                  materials
                </li>
                <li>
                  transfer the materials to another person or "mirror" the
                  materials on any other server
                </li>
              </ul>
            </div>

            <div className="mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-white mb-6">
                3. Disclaimer
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                The materials on Codecrafters Solutions's website are provided
                on an 'as is' basis. Codecrafters Solutions makes no warranties,
                expressed or implied, and hereby disclaims and negates all other
                warranties including without limitation, implied warranties or
                conditions of merchantability, fitness for a particular purpose,
                or non-infringement of intellectual property or other violation
                of rights.
              </p>
            </div>

            <div className="mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-white mb-6">
                4. Limitations
              </h2>
              <p className="text-text-secondary leading-relaxed">
                In no event shall Codecrafters Solutions or its suppliers be
                liable for any damages (including, without limitation, damages
                for loss of data or profit, or due to business interruption)
                arising out of the use or inability to use the materials on
                Codecrafters Solutions's website, even if Codecrafters Solutions
                or a Codecrafters Solutions authorized representative has been
                notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            <div className="mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-white mb-6">
                5. Accuracy of Materials
              </h2>
              <p className="text-text-secondary leading-relaxed">
                The materials appearing on Codecrafters Solutions's website
                could include technical, typographical, or photographic errors.
                Codecrafters Solutions does not warrant that any of the
                materials on its website are accurate, complete or current.
                Codecrafters Solutions may make changes to the materials
                contained on its website at any time without notice.
              </p>
            </div>

            <div className="mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-white mb-6">6. Links</h2>
              <p className="text-text-secondary leading-relaxed">
                Codecrafters Solutions has not reviewed all of the sites linked
                to its website and is not responsible for the contents of any
                such linked site. The inclusion of any link does not imply
                endorsement by Codecrafters Solutions of the site. Use of any
                such linked website is at the user's own risk.
              </p>
            </div>

            <div className="mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-white mb-6">
                7. Modifications
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Codecrafters Solutions may revise these terms of service for its
                website at any time without notice. By using this website you
                are agreeing to be bound by the then current version of these
                Terms of Service.
              </p>
            </div>

            <div className="mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-white mb-6">
                8. Governing Law
              </h2>
              <p className="text-text-secondary leading-relaxed">
                These terms and conditions are governed by and construed in
                accordance with the laws and you irrevocably submit to the
                exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            <div className="mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-white mb-6">
                9. Contact Information
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please
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
