import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";

const terms = [
  {
    title: "1. Acceptance and scope",
    content: [
      "These Website Terms (\"Terms\") govern your use of alleinfitness.com and the free information, Self-Check, inquiry tools, and other website content provided by ALLEIN Fitness (\"ALLEIN,\" \"we,\" \"us,\" or \"our\"). By using the website, you agree to these Terms. If you do not agree, do not use the website.",
      "Paid coaching is governed by a separate coaching agreement presented before purchase or enrollment. If that agreement conflicts with these Website Terms regarding paid coaching, the coaching agreement controls.",
    ],
  },
  {
    title: "2. Eligibility",
    content: [
      "The website is intended for adults. You must be at least 18 to purchase or apply for coaching on your own behalf. A minor athlete may participate only under a separate arrangement authorized by a parent or legal guardian.",
    ],
  },
  {
    title: "3. Fitness education—not medical care",
    content: [
      "Website content and the Capability Self-Check are provided for general fitness education and self-reflection. They are not medical advice, diagnosis, physical therapy, rehabilitation, mental-health care, or emergency guidance, and they do not create a healthcare-provider relationship.",
      "Consult an appropriate licensed healthcare professional before beginning or changing exercise when you have symptoms, an injury, a medical condition, pregnancy, concerns about your readiness, or instructions from a clinician. Stop exercising and seek appropriate help if you experience warning signs such as chest pain, fainting, severe shortness of breath, or sudden significant pain.",
    ],
  },
  {
    title: "4. Self-Check limitations",
    content: [
      "The Self-Check is a subjective reflection tool. Its score and suggested priority are not a validated clinical test, diagnosis, risk prediction, guarantee of performance, or determination that an exercise is safe for you. Results depend on the information and ratings you provide.",
    ],
  },
  {
    title: "5. No guaranteed results",
    content: [
      "Fitness results vary based on many factors, including starting point, health, consistency, effort, recovery, nutrition, environment, and adherence. ALLEIN does not promise a specific physical, medical, athletic, aesthetic, or financial outcome. Examples and educational statements are not guarantees that you will experience the same result.",
    ],
  },
  {
    title: "6. Responsible use",
    bullets: [
      "Use the website only for lawful personal purposes.",
      "Do not attempt to disrupt, compromise, scrape, reverse engineer, or gain unauthorized access to the website or its supporting systems.",
      "Do not misrepresent your identity, submit another person’s information without permission, or use the site to distribute harmful material.",
      "Use your own judgment and an appropriate environment when choosing whether to perform any exercise discussed on the site.",
    ],
  },
  {
    title: "7. Intellectual property",
    content: [
      "The ALLEIN name, site design, copy, Self-Check framework, graphics, training concepts as expressed on the site, and other original materials are owned by or licensed to ALLEIN and are protected by applicable intellectual-property laws. You may use free resources for your personal, noncommercial use, but may not reproduce, sell, publish, modify, or distribute them as your own without written permission.",
    ],
  },
  {
    title: "8. Third-party services and links",
    content: [
      "The website may link to or rely on third-party services such as email, hosting, scheduling, payment, social media, or coaching platforms. We do not control those services and are not responsible for their availability, security, content, or practices. Your use of them may be governed by separate terms and privacy policies.",
    ],
  },
  {
    title: "9. Website availability and changes",
    content: [
      "We may update, suspend, or discontinue any part of the website or a free resource. We try to keep information accurate and useful but do not promise that every page will always be complete, current, error-free, or continuously available.",
    ],
  },
  {
    title: "10. Disclaimer and limitation",
    content: [
      "To the extent permitted by law, the website and free resources are provided on an \"as is\" and \"as available\" basis without warranties of merchantability, fitness for a particular purpose, or noninfringement. Nothing in these Terms excludes a warranty or right that cannot legally be excluded.",
      "To the extent permitted by law, ALLEIN will not be liable for indirect, incidental, special, consequential, or punitive damages arising from use of or inability to use the website or free resources. These limitations do not apply where prohibited by law or to liability that cannot legally be limited.",
    ],
  },
  {
    title: "11. Governing law",
    content: [
      "These Terms are governed by the laws of the State of Colorado, without regard to conflict-of-law principles. Any dispute not governed by a separate coaching agreement will be handled in a court with proper jurisdiction, subject to any non-waivable rights you may have under applicable law.",
    ],
  },
  {
    title: "12. Changes and severability",
    content: [
      "We may update these Terms as the website or services change. The updated date at the top identifies the current version. If a provision is found unenforceable, it will be limited or removed only to the extent necessary and the remaining provisions will continue in effect.",
    ],
  },
];

export default function Terms() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main id="main-content">
        <section className="pb-12 pt-28 lg:pb-16 lg:pt-36">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <span className="eyebrow">Legal</span>
              <h1 className="mt-4 font-[var(--font-display)] text-4xl font-bold sm:text-5xl">Website Terms</h1>
              <p className="mt-4 text-sm text-[#777]">Effective and last updated: August 25, 2026</p>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#999]">Terms for the ALLEIN coaching website, free Capability Self-Check, and inquiry process.</p>
            </ScrollReveal>
          </div>
        </section>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><div className="h-px bg-gradient-to-r from-[#D4AF37]/30 to-transparent" /></div>
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-4xl space-y-12 px-4 sm:px-6 lg:px-8">
            {terms.map((section, index) => (
              <ScrollReveal key={section.title} delay={Math.min(index * 25, 150)}>
                <article>
                  <h2 className="font-[var(--font-display)] text-2xl font-semibold text-white">{section.title}</h2>
                  {section.content?.map((paragraph) => <p key={paragraph} className="mt-4 leading-relaxed text-[#999]">{paragraph}</p>)}
                  {section.bullets && <ul className="mt-5 space-y-3">{section.bullets.map((bullet) => <li key={bullet} className="flex gap-3 leading-relaxed text-[#999]"><span className="text-[#D4AF37]">•</span><span>{bullet}</span></li>)}</ul>}
                </article>
              </ScrollReveal>
            ))}
            <ScrollReveal>
              <article className="rounded-xl border border-[#D4AF37]/20 bg-[#080808] p-6 sm:p-8">
                <h2 className="font-[var(--font-display)] text-2xl font-semibold">13. Contact</h2>
                <p className="mt-4 leading-relaxed text-[#999]">Questions about these Terms may be sent to <a href="mailto:michael@alleinfitness.com" className="text-[#D4AF37] hover:underline">michael@alleinfitness.com</a>.</p>
              </article>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
