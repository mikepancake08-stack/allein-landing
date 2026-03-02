/**
 * ALLEIN Terms of Service Page — Dark Forge / Industrial Luxury
 * Comprehensive terms of service with proper formatting.
 * Designed for App Store / Play Store compliance.
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Terms() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="text-xs font-semibold text-[#D4AF37] tracking-[0.3em] uppercase">
              Legal
            </span>
            <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl font-bold text-white mt-4 mb-4">
              Terms of Service
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-[#888]">
              <span>Effective Date: March 1, 2026</span>
              <span className="text-[#333]">|</span>
              <span>Last Updated: March 1, 2026</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gold divider */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-[#D4AF37]/30 via-[#D4AF37]/10 to-transparent" />
      </div>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-custom space-y-12">
            {/* Introduction */}
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="font-[var(--font-display)] text-2xl font-semibold text-white">
                  Introduction
                </h2>
                <p className="text-[#999] leading-relaxed">
                  Welcome to ALLEIN ("we," "us," or "our"). These Terms of Service
                  ("Terms") govern your access to and use of the ALLEIN mobile
                  application and any related services, features, content, and
                  functionality (collectively, the "Services"). By downloading,
                  installing, or using our Services, you agree to be bound by these
                  Terms. If you do not agree to these Terms, you must not access or
                  use the Services.
                </p>
                <p className="text-[#999] leading-relaxed">
                  ALLEIN is operated by ALLEIN Fitness ("Company"). These Terms
                  constitute a legally binding agreement between you and the Company.
                  Please read them carefully before using the Services.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 1 */}
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="font-[var(--font-display)] text-2xl font-semibold text-white">
                  1. Eligibility
                </h2>
                <p className="text-[#999] leading-relaxed">
                  You must be at least 13 years of age to use the Services. If you are
                  between the ages of 13 and 18 (or the age of legal majority in your
                  jurisdiction), you may only use the Services with the consent and
                  supervision of a parent or legal guardian who agrees to be bound by
                  these Terms. By using the Services, you represent and warrant that you
                  meet these eligibility requirements.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 2 */}
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="font-[var(--font-display)] text-2xl font-semibold text-white">
                  2. User Accounts and Responsibilities
                </h2>
                <p className="text-[#999] leading-relaxed">
                  To access certain features of the Services, you may be required to
                  create an account. When creating an account, you agree to:
                </p>
                <ul className="space-y-2 text-[#999] leading-relaxed">
                  {[
                    "Provide accurate, current, and complete information during the registration process.",
                    "Maintain and promptly update your account information to keep it accurate, current, and complete.",
                    "Maintain the security and confidentiality of your login credentials and not share your account with any third party.",
                    "Accept responsibility for all activities that occur under your account.",
                    "Notify us immediately at support@alleinfitness.app if you suspect any unauthorized use of your account.",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-[#D4AF37] mt-1.5 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[#999] leading-relaxed">
                  We reserve the right to suspend or terminate your account at any time
                  if we reasonably believe that you have violated these Terms, engaged
                  in fraudulent or illegal activity, or otherwise misused the Services.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 3 */}
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="font-[var(--font-display)] text-2xl font-semibold text-white">
                  3. Use of the Services
                </h2>

                <h3 className="font-[var(--font-display)] text-lg font-semibold text-[#D4AF37]">
                  3.1 Permitted Use
                </h3>
                <p className="text-[#999] leading-relaxed">
                  ALLEIN grants you a limited, non-exclusive, non-transferable, and
                  revocable license to use the Services for your personal,
                  non-commercial fitness and health tracking purposes, subject to these
                  Terms.
                </p>

                <h3 className="font-[var(--font-display)] text-lg font-semibold text-[#D4AF37]">
                  3.2 Prohibited Conduct
                </h3>
                <p className="text-[#999] leading-relaxed">
                  You agree not to:
                </p>
                <ul className="space-y-2 text-[#999] leading-relaxed">
                  {[
                    "Use the Services for any unlawful purpose or in violation of any applicable laws or regulations.",
                    "Reverse engineer, decompile, disassemble, or attempt to derive the source code of the application.",
                    "Interfere with, disrupt, or place an undue burden on the Services or the networks or servers connected to the Services.",
                    "Attempt to gain unauthorized access to any portion of the Services, other user accounts, or any systems or networks connected to the Services.",
                    "Use the Services to transmit any viruses, malware, or other harmful code.",
                    "Scrape, harvest, or collect information about other users without their consent.",
                    "Use the Services to send unsolicited communications, promotions, or advertisements.",
                    "Impersonate any person or entity, or falsely state or misrepresent your affiliation with a person or entity.",
                    "Use the Coach Dashboard or community features to provide medical advice or act as a licensed healthcare provider unless you hold the appropriate credentials.",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-[#D4AF37] mt-1.5 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Section 4 */}
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="font-[var(--font-display)] text-2xl font-semibold text-white">
                  4. Subscription and Payment Terms
                </h2>

                <h3 className="font-[var(--font-display)] text-lg font-semibold text-[#D4AF37]">
                  4.1 Free Tier
                </h3>
                <p className="text-[#999] leading-relaxed">
                  ALLEIN offers a free tier that provides access to core features of the
                  Services, including basic workout tracking, nutrition logging, and
                  habit tracking. The free tier is subject to certain feature limitations
                  as described within the application.
                </p>

                <h3 className="font-[var(--font-display)] text-lg font-semibold text-[#D4AF37]">
                  4.2 ALLEIN Pro (Paid Subscription)
                </h3>
                <p className="text-[#999] leading-relaxed">
                  ALLEIN Pro is a premium subscription tier that unlocks advanced
                  features, including but not limited to: AI-powered food logging, the
                  AI Program Builder, advanced analytics and insights, the Coach
                  Dashboard, and priority support. Subscription pricing and features are
                  described within the application and may be updated from time to time.
                </p>

                <h3 className="font-[var(--font-display)] text-lg font-semibold text-[#D4AF37]">
                  4.3 Billing and Renewal
                </h3>
                <p className="text-[#999] leading-relaxed">
                  ALLEIN Pro subscriptions are billed on a recurring basis (monthly or
                  annually, depending on the plan you select) through the Apple App
                  Store or Google Play Store. Your subscription will automatically renew
                  at the end of each billing period unless you cancel it at least 24
                  hours before the end of the current period. You can manage and cancel
                  your subscription through your App Store or Google Play account
                  settings.
                </p>

                <h3 className="font-[var(--font-display)] text-lg font-semibold text-[#D4AF37]">
                  4.4 Refunds
                </h3>
                <p className="text-[#999] leading-relaxed">
                  All payments are processed through the Apple App Store or Google Play
                  Store. Refund requests are subject to the respective platform's refund
                  policies. We do not directly process payments or issue refunds. If you
                  believe you are entitled to a refund, please contact Apple or Google
                  directly, or reach out to us at{" "}
                  <a
                    href="mailto:support@alleinfitness.app"
                    className="text-[#D4AF37] hover:underline"
                  >
                    support@alleinfitness.app
                  </a>{" "}
                  for assistance.
                </p>

                <h3 className="font-[var(--font-display)] text-lg font-semibold text-[#D4AF37]">
                  4.5 Price Changes
                </h3>
                <p className="text-[#999] leading-relaxed">
                  We reserve the right to change subscription pricing at any time. If we
                  change the price of a subscription, we will provide you with
                  reasonable advance notice. Your continued use of the Services after the
                  price change takes effect constitutes your agreement to pay the updated
                  price.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 5 */}
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="font-[var(--font-display)] text-2xl font-semibold text-white">
                  5. Intellectual Property
                </h2>

                <h3 className="font-[var(--font-display)] text-lg font-semibold text-[#D4AF37]">
                  5.1 Our Intellectual Property
                </h3>
                <p className="text-[#999] leading-relaxed">
                  The Services and all content, features, and functionality thereof —
                  including but not limited to the ALLEIN name, logo, design, text,
                  graphics, software, algorithms, AI models, data compilations, and user
                  interface — are owned by or licensed to ALLEIN Fitness and are
                  protected by United States and international copyright, trademark,
                  patent, trade secret, and other intellectual property or proprietary
                  rights laws.
                </p>

                <h3 className="font-[var(--font-display)] text-lg font-semibold text-[#D4AF37]">
                  5.2 Your Content
                </h3>
                <p className="text-[#999] leading-relaxed">
                  You retain ownership of any content you submit, post, or display
                  through the Services (e.g., workout logs, nutrition data, community
                  programs). By submitting content, you grant us a worldwide,
                  non-exclusive, royalty-free license to use, reproduce, modify, and
                  display such content solely for the purpose of operating and improving
                  the Services. For community-shared programs, you grant other users a
                  non-exclusive license to use and follow such programs within the
                  application.
                </p>

                <h3 className="font-[var(--font-display)] text-lg font-semibold text-[#D4AF37]">
                  5.3 Feedback
                </h3>
                <p className="text-[#999] leading-relaxed">
                  If you provide us with any feedback, suggestions, or ideas regarding
                  the Services ("Feedback"), you acknowledge that we may use such
                  Feedback without restriction and without any obligation to compensate
                  you.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 6 */}
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="font-[var(--font-display)] text-2xl font-semibold text-white">
                  6. Health and Fitness Disclaimer
                </h2>
                <p className="text-[#999] leading-relaxed">
                  The Services are intended for general fitness and wellness tracking
                  purposes only.{" "}
                  <strong className="text-white">
                    ALLEIN is not a medical device and does not provide medical advice,
                    diagnosis, or treatment.
                  </strong>{" "}
                  The information provided through the Services — including AI-generated
                  recommendations, workout plans, nutrition data, BMR/TDEE calculations,
                  and health metrics — is for informational purposes only and should not
                  be considered a substitute for professional medical advice.
                </p>
                <p className="text-[#999] leading-relaxed">
                  You should always consult with a qualified healthcare professional
                  before beginning any new exercise program, making changes to your diet,
                  or if you have any concerns about your health. You use the Services and
                  rely on any information provided through the Services at your own risk.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 7 */}
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="font-[var(--font-display)] text-2xl font-semibold text-white">
                  7. Third-Party Services and Integrations
                </h2>
                <p className="text-[#999] leading-relaxed">
                  The Services may integrate with or contain links to third-party
                  services, including but not limited to Apple HealthKit, Open Food
                  Facts, and the USDA FoodData Central database. These third-party
                  services are governed by their own terms of service and privacy
                  policies. We are not responsible for the content, accuracy, or
                  practices of any third-party services. Your use of such third-party
                  services is at your own risk.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 8 */}
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="font-[var(--font-display)] text-2xl font-semibold text-white">
                  8. Limitation of Liability
                </h2>
                <p className="text-[#999] leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL
                  ALLEIN FITNESS, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR
                  AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                  CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS
                  OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING
                  OUT OF OR IN CONNECTION WITH:
                </p>
                <ul className="space-y-2 text-[#999] leading-relaxed">
                  {[
                    "Your access to, use of, or inability to access or use the Services.",
                    "Any conduct or content of any third party on the Services.",
                    "Any content obtained from the Services, including AI-generated recommendations.",
                    "Unauthorized access, use, or alteration of your transmissions or content.",
                    "Any injuries, health issues, or adverse outcomes resulting from following workout plans, nutrition recommendations, or other information provided through the Services.",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-[#D4AF37] mt-1.5 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[#999] leading-relaxed">
                  IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING
                  OUT OF OR RELATING TO THESE TERMS OR THE SERVICES EXCEED THE AMOUNT
                  YOU HAVE PAID US IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING
                  RISE TO THE LIABILITY, OR ONE HUNDRED U.S. DOLLARS ($100), WHICHEVER
                  IS GREATER.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 9 */}
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="font-[var(--font-display)] text-2xl font-semibold text-white">
                  9. Disclaimer of Warranties
                </h2>
                <p className="text-[#999] leading-relaxed">
                  THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS
                  WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING
                  BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR
                  A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT
                  THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF
                  VIRUSES OR OTHER HARMFUL COMPONENTS. WE DO NOT WARRANT THE ACCURACY,
                  COMPLETENESS, OR RELIABILITY OF ANY CONTENT PROVIDED THROUGH THE
                  SERVICES, INCLUDING AI-GENERATED CONTENT AND NUTRITIONAL DATA.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 10 */}
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="font-[var(--font-display)] text-2xl font-semibold text-white">
                  10. Indemnification
                </h2>
                <p className="text-[#999] leading-relaxed">
                  You agree to indemnify, defend, and hold harmless ALLEIN Fitness, its
                  officers, directors, employees, agents, and affiliates from and against
                  any and all claims, liabilities, damages, losses, costs, and expenses
                  (including reasonable attorneys' fees) arising out of or in connection
                  with: (a) your use of the Services; (b) your violation of these Terms;
                  (c) your violation of any rights of another party; or (d) any content
                  you submit, post, or display through the Services.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 11 */}
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="font-[var(--font-display)] text-2xl font-semibold text-white">
                  11. Termination
                </h2>
                <p className="text-[#999] leading-relaxed">
                  You may terminate your account and stop using the Services at any time
                  by deleting your account through the application settings or by
                  contacting us at{" "}
                  <a
                    href="mailto:support@alleinfitness.app"
                    className="text-[#D4AF37] hover:underline"
                  >
                    support@alleinfitness.app
                  </a>
                  .
                </p>
                <p className="text-[#999] leading-relaxed">
                  We may suspend or terminate your access to the Services at any time,
                  with or without cause and with or without notice, including but not
                  limited to if we reasonably believe that you have violated these Terms.
                  Upon termination, your right to use the Services will immediately
                  cease.
                </p>
                <p className="text-[#999] leading-relaxed">
                  Upon termination, we will delete or anonymize your personal data in
                  accordance with our{" "}
                  <a
                    href="#/privacy"
                    className="text-[#D4AF37] hover:underline"
                  >
                    Privacy Policy
                  </a>
                  , except where we are required to retain certain data by law or for
                  legitimate business purposes. Any provisions of these Terms that by
                  their nature should survive termination shall survive, including but
                  not limited to ownership provisions, warranty disclaimers, indemnity,
                  and limitations of liability.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 12 */}
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="font-[var(--font-display)] text-2xl font-semibold text-white">
                  12. Privacy and Data Protection
                </h2>
                <p className="text-[#999] leading-relaxed">
                  Your privacy is important to us. Our collection, use, and disclosure
                  of your personal information is governed by our{" "}
                  <a
                    href="#/privacy"
                    className="text-[#D4AF37] hover:underline"
                  >
                    Privacy Policy
                  </a>
                  , which is incorporated into these Terms by reference. By using the
                  Services, you consent to the collection and use of your information as
                  described in the Privacy Policy.
                </p>

                <h3 className="font-[var(--font-display)] text-lg font-semibold text-[#D4AF37]">
                  12.1 GDPR Compliance (European Economic Area)
                </h3>
                <p className="text-[#999] leading-relaxed">
                  If you are located in the European Economic Area (EEA), United
                  Kingdom, or Switzerland, you have certain rights under the General
                  Data Protection Regulation (GDPR), including the right to access,
                  rectify, erase, restrict processing of, and port your personal data,
                  as well as the right to object to processing and to withdraw consent.
                  For more information on how to exercise these rights, please refer to
                  our Privacy Policy or contact us at{" "}
                  <a
                    href="mailto:support@alleinfitness.app"
                    className="text-[#D4AF37] hover:underline"
                  >
                    support@alleinfitness.app
                  </a>
                  .
                </p>

                <h3 className="font-[var(--font-display)] text-lg font-semibold text-[#D4AF37]">
                  12.2 CCPA Compliance (California Residents)
                </h3>
                <p className="text-[#999] leading-relaxed">
                  If you are a California resident, you have certain rights under the
                  California Consumer Privacy Act (CCPA), including the right to know
                  what personal information we collect, the right to request deletion of
                  your personal information, and the right to opt out of the sale of
                  your personal information. We do not sell your personal information.
                  For more information on how to exercise your CCPA rights, please refer
                  to our Privacy Policy or contact us at{" "}
                  <a
                    href="mailto:support@alleinfitness.app"
                    className="text-[#D4AF37] hover:underline"
                  >
                    support@alleinfitness.app
                  </a>
                  .
                </p>
              </div>
            </ScrollReveal>

            {/* Section 13 */}
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="font-[var(--font-display)] text-2xl font-semibold text-white">
                  13. Governing Law and Dispute Resolution
                </h2>
                <p className="text-[#999] leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the
                  laws of the United States and the State of Arizona, without regard to
                  its conflict of law provisions. Any disputes arising out of or
                  relating to these Terms or the Services shall be resolved through
                  binding arbitration in accordance with the rules of the American
                  Arbitration Association, except that either party may seek injunctive
                  or other equitable relief in any court of competent jurisdiction.
                </p>
                <p className="text-[#999] leading-relaxed">
                  YOU AND ALLEIN FITNESS AGREE THAT EACH MAY BRING CLAIMS AGAINST THE
                  OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF
                  OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 14 */}
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="font-[var(--font-display)] text-2xl font-semibold text-white">
                  14. Changes to These Terms
                </h2>
                <p className="text-[#999] leading-relaxed">
                  We reserve the right to modify or replace these Terms at any time. If
                  we make material changes, we will provide notice through the
                  application or by other means. Your continued use of the Services
                  after any such changes constitutes your acceptance of the new Terms.
                  We encourage you to review these Terms periodically for any changes.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 15 */}
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="font-[var(--font-display)] text-2xl font-semibold text-white">
                  15. Severability
                </h2>
                <p className="text-[#999] leading-relaxed">
                  If any provision of these Terms is held to be invalid or
                  unenforceable, such provision shall be struck and the remaining
                  provisions shall be enforced to the fullest extent under law.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 16 */}
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="font-[var(--font-display)] text-2xl font-semibold text-white">
                  16. Entire Agreement
                </h2>
                <p className="text-[#999] leading-relaxed">
                  These Terms, together with our Privacy Policy, constitute the entire
                  agreement between you and ALLEIN Fitness regarding the use of the
                  Services and supersede all prior and contemporaneous agreements,
                  proposals, or representations, written or oral, concerning the subject
                  matter hereof.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 17 */}
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="font-[var(--font-display)] text-2xl font-semibold text-white">
                  17. Contact Information
                </h2>
                <p className="text-[#999] leading-relaxed">
                  If you have any questions, concerns, or requests regarding these Terms
                  of Service, please contact us:
                </p>
                <div className="p-6 rounded-lg bg-[#0A0A0A] border border-[#1A1A1A]">
                  <div className="space-y-3">
                    <p className="text-white font-semibold font-[var(--font-display)]">
                      ALLEIN Fitness
                    </p>
                    <p className="text-[#999]">
                      Email:{" "}
                      <a
                        href="mailto:support@alleinfitness.app"
                        className="text-[#D4AF37] hover:underline"
                      >
                        support@alleinfitness.app
                      </a>
                    </p>
                    <p className="text-[#999]">
                      Website:{" "}
                      <a
                        href="https://alleinfitness.app"
                        className="text-[#D4AF37] hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        alleinfitness.app
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
