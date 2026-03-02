/**
 * ALLEIN Privacy Policy Page — Dark Forge / Industrial Luxury
 * Comprehensive privacy policy with proper formatting.
 * Uses the user-provided privacy-policy.md content.
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Privacy() {
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
              Privacy Policy
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-[#888]">
              <span>Effective Date: February 24, 2026</span>
              <span className="text-[#333]">|</span>
              <span>Last Updated: February 24, 2026</span>
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
                  Welcome to ALLEIN ("we," "us," or "our"). We are committed to
                  protecting your privacy and handling your personal data with
                  transparency, integrity, and respect. This Privacy Policy describes
                  how we collect, use, store, and disclose your information when you
                  use the ALLEIN mobile application and any related services
                  (collectively, the "Services").
                </p>
                <p className="text-[#999] leading-relaxed">
                  This policy is designed to comply with the{" "}
                  <strong className="text-white">
                    General Data Protection Regulation (GDPR)
                  </strong>
                  , the{" "}
                  <strong className="text-white">
                    California Consumer Privacy Act (CCPA)
                  </strong>
                  , and{" "}
                  <strong className="text-white">
                    Apple's App Store Review Guidelines
                  </strong>
                  , including specific requirements for apps that integrate with Apple
                  HealthKit.
                </p>
                <p className="text-[#999] leading-relaxed">
                  By downloading or using our Services, you acknowledge that you have
                  read and understood this Privacy Policy.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 1 */}
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="font-[var(--font-display)] text-2xl font-semibold text-white">
                  1. Information We Collect
                </h2>
                <p className="text-[#999] leading-relaxed">
                  We collect information to provide and improve our Services. The
                  types of data we collect are described below.
                </p>

                <h3 className="font-[var(--font-display)] text-lg font-semibold text-[#D4AF37]">
                  1.1 Information You Provide Directly
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-[#1A1A1A]">
                        <th className="text-left py-3 pr-4 text-[#D4AF37] font-semibold">
                          Data Category
                        </th>
                        <th className="text-left py-3 text-[#D4AF37] font-semibold">
                          Examples
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-[#999]">
                      {[
                        ["Account Information", "Name, email address, password"],
                        [
                          "Profile Information",
                          "Profile photo, age, gender, height, weight",
                        ],
                        [
                          "Nutrition Logs",
                          "Meals, food items, calorie intake, macronutrients (protein, carbohydrates, fat), micronutrients (vitamins, minerals), water intake",
                        ],
                        [
                          "Workout Data",
                          "Exercise type, duration, sets, repetitions, weight lifted, rest periods, workout notes",
                        ],
                        [
                          "Biometric Data",
                          "Body weight, body fat percentage, body measurements (waist, chest, arms, etc.)",
                        ],
                        [
                          "Lifestyle & Habit Data",
                          "Custom habits, sleep logs, hydration logs, mindfulness check-ins, streak data",
                        ],
                        [
                          "Goal & Strategy Data",
                          "Fitness goals (weight loss, cut, bulk, maintain, hypertrophy), BMR/TDEE calculations, target calorie and macro splits",
                        ],
                      ].map(([cat, ex]) => (
                        <tr key={cat} className="border-b border-[#111]">
                          <td className="py-3 pr-4 font-medium text-white whitespace-nowrap">
                            {cat}
                          </td>
                          <td className="py-3">{ex}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 className="font-[var(--font-display)] text-lg font-semibold text-[#D4AF37]">
                  1.2 Information from Third-Party Integrations
                </h3>
                <p className="text-[#999] leading-relaxed">
                  <strong className="text-white">Apple HealthKit:</strong> With your
                  explicit permission, ALLEIN may read from and write to Apple Health.
                  The types of HealthKit data we may access include, but are not
                  limited to, steps, active energy burned, heart rate, sleep analysis,
                  body mass, and workout sessions. You may revoke this permission at
                  any time through your device's Privacy settings.
                </p>

                <h3 className="font-[var(--font-display)] text-lg font-semibold text-[#D4AF37]">
                  1.3 Automatically Collected Information
                </h3>
                <p className="text-[#999] leading-relaxed">
                  We may collect certain technical information automatically when you
                  use our Services, including device type, operating system version,
                  app version, and anonymized usage analytics. This information is
                  used solely to maintain and improve the performance and reliability
                  of the app.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 2 */}
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="font-[var(--font-display)] text-2xl font-semibold text-white">
                  2. How We Use Your Information
                </h2>
                <p className="text-[#999] leading-relaxed">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="space-y-2 text-[#999] leading-relaxed">
                  {[
                    "To create and manage your account and provide access to our Services.",
                    "To power AI-driven features, including the AI food logger, AI Program Builder, and personalized coaching recommendations.",
                    "To calculate health and fitness metrics, including Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE).",
                    "To track your progress and provide analytics, visualizations, and insights on your performance over time.",
                    "To build and display habit streaks and lifestyle tracking summaries.",
                    "To enable the Coach Dashboard, allowing personal trainers to manage client data with client consent.",
                    "To send service-related communications, such as notifications and support responses.",
                    "To ensure the security and integrity of our Services.",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-[#D4AF37] mt-1.5 flex-shrink-0">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[#999] leading-relaxed font-medium">
                  We will never use your health or fitness data for advertising,
                  behavioral profiling, or any purpose unrelated to providing the
                  Services you have requested.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 3 */}
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="font-[var(--font-display)] text-2xl font-semibold text-white">
                  3. Data Storage and Security
                </h2>
                <p className="text-[#999] leading-relaxed">
                  Your data is stored using a combination of{" "}
                  <strong className="text-white">
                    local storage on your device
                  </strong>{" "}
                  and{" "}
                  <strong className="text-white">
                    secure cloud-based infrastructure provided by Supabase
                  </strong>
                  . Supabase stores data in encrypted, access-controlled databases
                  hosted on industry-standard cloud infrastructure.
                </p>
                <p className="text-[#999] leading-relaxed">
                  We implement appropriate technical and organizational security
                  measures, including encryption in transit (TLS) and at rest, to
                  protect your Personal Data against unauthorized access, alteration,
                  disclosure, or destruction. However, no method of electronic storage
                  or transmission is 100% secure, and we cannot guarantee absolute
                  security.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 4 */}
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="font-[var(--font-display)] text-2xl font-semibold text-white">
                  4. Third-Party Services
                </h2>
                <p className="text-[#999] leading-relaxed">
                  We do not sell your personal data to third parties. We work with the
                  following third-party service providers, each of which is
                  contractually obligated to handle your data only as necessary to
                  perform their designated function:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-[#1A1A1A]">
                        <th className="text-left py-3 pr-4 text-[#D4AF37] font-semibold">
                          Service
                        </th>
                        <th className="text-left py-3 pr-4 text-[#D4AF37] font-semibold">
                          Purpose
                        </th>
                        <th className="text-left py-3 text-[#D4AF37] font-semibold">
                          Data Shared
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-[#999]">
                      {[
                        [
                          "Supabase",
                          "Backend database, authentication, and cloud storage",
                          "Account data, health and fitness logs",
                        ],
                        [
                          "Open Food Facts",
                          "Food database for nutrition logging",
                          "Food search queries (no personal data)",
                        ],
                        [
                          "USDA FoodData Central",
                          "Food database for nutrition logging",
                          "Food search queries (no personal data)",
                        ],
                        [
                          "OpenAI",
                          "Powers AI food logging, AI Program Builder, and coaching features",
                          "Meal descriptions, workout goals (no directly identifying data)",
                        ],
                        [
                          "Apple HealthKit",
                          "Two-way health data synchronization",
                          "Health metrics you explicitly authorize",
                        ],
                      ].map(([svc, purpose, data]) => (
                        <tr key={svc} className="border-b border-[#111]">
                          <td className="py-3 pr-4 font-medium text-white whitespace-nowrap">
                            {svc}
                          </td>
                          <td className="py-3 pr-4">{purpose}</td>
                          <td className="py-3">{data}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-[#999] leading-relaxed">
                  Data shared with OpenAI is transmitted solely to generate in-app
                  responses and is not used to train OpenAI's models. We do not share
                  your name, email address, or account credentials with OpenAI.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 5 */}
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="font-[var(--font-display)] text-2xl font-semibold text-white">
                  5. Apple HealthKit — Specific Disclosures
                </h2>
                <p className="text-[#999] leading-relaxed">
                  ALLEIN integrates with Apple HealthKit to provide a comprehensive
                  view of your health. Our use of HealthKit data is governed by the
                  following principles, in accordance with Apple's requirements:
                </p>
                <ul className="space-y-3 text-[#999] leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-[#D4AF37] mt-1.5 flex-shrink-0">•</span>
                    <span>
                      <strong className="text-white">Limited Use:</strong> ALLEIN uses
                      HealthKit data only to provide and improve health and fitness
                      features within the app. We do not use HealthKit data for
                      advertising, marketing, or any use-based data mining purposes.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#D4AF37] mt-1.5 flex-shrink-0">•</span>
                    <span>
                      <strong className="text-white">No Third-Party Sharing:</strong>{" "}
                      We will not share HealthKit data with third parties without your
                      explicit consent, except as required to provide the Services.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#D4AF37] mt-1.5 flex-shrink-0">•</span>
                    <span>
                      <strong className="text-white">No Research Use:</strong> We will
                      not use HealthKit data for medical research without your
                      separate, informed consent.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#D4AF37] mt-1.5 flex-shrink-0">•</span>
                    <span>
                      <strong className="text-white">User Control:</strong> You may
                      grant or revoke ALLEIN's access to Apple Health at any time by
                      navigating to Settings → Privacy & Security → Health on your iOS
                      device.
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Section 6 */}
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="font-[var(--font-display)] text-2xl font-semibold text-white">
                  6. Your Rights and Choices
                </h2>
                <p className="text-[#999] leading-relaxed">
                  You have meaningful control over your personal data. The following
                  rights are available to all users:
                </p>
                <ul className="space-y-3 text-[#999] leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-[#D4AF37] mt-1.5 flex-shrink-0">•</span>
                    <span>
                      <strong className="text-white">Access:</strong> You may view the
                      personal data associated with your account at any time through
                      the app's profile and settings screens.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#D4AF37] mt-1.5 flex-shrink-0">•</span>
                    <span>
                      <strong className="text-white">Correction:</strong> You may
                      update or correct your personal information directly within the
                      app.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#D4AF37] mt-1.5 flex-shrink-0">•</span>
                    <span>
                      <strong className="text-white">Data Export:</strong> You have the
                      right to request a copy of your personal data in a portable
                      format. To submit a data export request, contact us at the email
                      address below.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#D4AF37] mt-1.5 flex-shrink-0">•</span>
                    <span>
                      <strong className="text-white">Data Deletion:</strong> You may
                      delete your account and all associated data at any time from
                      within the app's settings. Account deletion is permanent and
                      irreversible. Upon deletion, your data will be removed from our
                      active systems within 30 days, subject to any legal retention
                      obligations.
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Section 7 */}
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="font-[var(--font-display)] text-2xl font-semibold text-white">
                  7. GDPR Compliance (European Economic Area)
                </h2>
                <p className="text-[#999] leading-relaxed">
                  If you are a resident of the European Economic Area (EEA), you have
                  the following rights under the General Data Protection Regulation
                  (GDPR):
                </p>
                <ul className="space-y-2 text-[#999] leading-relaxed">
                  {[
                    "Right of Access — the right to request a copy of the personal data we hold about you.",
                    "Right to Rectification — the right to request correction of inaccurate or incomplete data.",
                    'Right to Erasure ("Right to be Forgotten") — the right to request deletion of your personal data.',
                    "Right to Restrict Processing — the right to request that we limit how we use your data.",
                    "Right to Data Portability — the right to receive your data in a structured, machine-readable format.",
                    "Right to Object — the right to object to processing of your data in certain circumstances.",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-[#D4AF37] mt-1.5 flex-shrink-0">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[#999] leading-relaxed">
                  Our legal basis for processing your personal data is your{" "}
                  <strong className="text-white">consent</strong> (Article 6(1)(a)
                  GDPR), which you provide when you create an account and agree to
                  this policy. You may withdraw consent at any time by deleting your
                  account.
                </p>
                <p className="text-[#999] leading-relaxed">
                  To exercise any of these rights, please contact us at{" "}
                  <a
                    href="mailto:privacy@alleinfitness.app"
                    className="text-[#D4AF37] hover:underline"
                  >
                    privacy@alleinfitness.app
                  </a>
                  .
                </p>
              </div>
            </ScrollReveal>

            {/* Section 8 */}
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="font-[var(--font-display)] text-2xl font-semibold text-white">
                  8. CCPA Compliance (California Residents)
                </h2>
                <p className="text-[#999] leading-relaxed">
                  If you are a resident of California, you have the following rights
                  under the California Consumer Privacy Act (CCPA):
                </p>
                <ul className="space-y-2 text-[#999] leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-[#D4AF37] mt-1.5 flex-shrink-0">•</span>
                    <span>
                      <strong className="text-white">Right to Know:</strong> You have
                      the right to request disclosure of the categories and specific
                      pieces of personal information we have collected about you.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#D4AF37] mt-1.5 flex-shrink-0">•</span>
                    <span>
                      <strong className="text-white">Right to Delete:</strong> You
                      have the right to request deletion of your personal information,
                      subject to certain exceptions.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#D4AF37] mt-1.5 flex-shrink-0">•</span>
                    <span>
                      <strong className="text-white">
                        Right to Non-Discrimination:
                      </strong>{" "}
                      We will not discriminate against you for exercising any of your
                      CCPA rights.
                    </span>
                  </li>
                </ul>
                <p className="text-[#999] leading-relaxed">
                  ALLEIN does not sell personal information as defined under the CCPA.
                </p>
                <p className="text-[#999] leading-relaxed">
                  To submit a CCPA request, please contact us at{" "}
                  <a
                    href="mailto:privacy@alleinfitness.app"
                    className="text-[#D4AF37] hover:underline"
                  >
                    privacy@alleinfitness.app
                  </a>
                  .
                </p>
              </div>
            </ScrollReveal>

            {/* Section 9 */}
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="font-[var(--font-display)] text-2xl font-semibold text-white">
                  9. Children's Privacy
                </h2>
                <p className="text-[#999] leading-relaxed">
                  Our Services are not directed to children under the age of 16. We do
                  not knowingly collect personal information from children under 16. If
                  we become aware that we have inadvertently collected personal data
                  from a child under 16, we will take immediate steps to delete that
                  information from our systems. If you believe we may have collected
                  information from a child, please contact us immediately at{" "}
                  <a
                    href="mailto:privacy@alleinfitness.app"
                    className="text-[#D4AF37] hover:underline"
                  >
                    privacy@alleinfitness.app
                  </a>
                  .
                </p>
              </div>
            </ScrollReveal>

            {/* Section 10 */}
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="font-[var(--font-display)] text-2xl font-semibold text-white">
                  10. Changes to This Privacy Policy
                </h2>
                <p className="text-[#999] leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices, technology, legal requirements, or other
                  factors. When we make material changes, we will notify you by
                  updating the "Last Updated" date at the top of this policy and,
                  where appropriate, by sending an in-app notification. We encourage
                  you to review this policy periodically.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 11 */}
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="font-[var(--font-display)] text-2xl font-semibold text-white">
                  11. Contact Us
                </h2>
                <p className="text-[#999] leading-relaxed">
                  If you have any questions, concerns, or requests regarding this
                  Privacy Policy or our data practices, please contact us:
                </p>
                <div className="p-6 rounded-lg bg-[#0A0A0A] border border-[#1A1A1A]">
                  <p className="text-white font-semibold font-[var(--font-display)] text-lg mb-2">
                    ALLEIN
                  </p>
                  <p className="text-[#999]">
                    Email:{" "}
                    <a
                      href="mailto:privacy@alleinfitness.app"
                      className="text-[#D4AF37] hover:underline"
                    >
                      privacy@alleinfitness.app
                    </a>
                  </p>
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
