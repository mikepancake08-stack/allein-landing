import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";

const sections = [
  {
    title: "1. Scope of this policy",
    content: [
      "This Privacy Policy explains how ALLEIN Fitness (\"ALLEIN,\" \"we,\" \"us,\" or \"our\") handles information associated with alleinfitness.com, coaching inquiries, the Everyday Athlete Capability Self-Check, and related communications.",
      "This policy currently applies to the coaching website and inquiry process. If ALLEIN later launches a mobile application or adds accounts, payments, analytics, or additional data-processing tools, this policy will be updated before those features are offered.",
    ],
  },
  {
    title: "2. Information we collect",
    content: [
      "Information you choose to provide may include your name, email address, phone number, coaching goals, availability, training history, available equipment, Self-Check results, and information included in messages you send to us.",
      "The current website does not create user accounts, process payments, use advertising trackers, or directly collect precise location, government identifiers, or medical records. Our hosting, form, and communications providers may automatically process basic technical information such as IP address, browser type, device type, timestamps, and security logs when you visit the site, submit a form, or send an email.",
    ],
  },
  {
    title: "3. How we use information",
    bullets: [
      "Respond to questions and coaching applications.",
      "Deliver requested resources, including the Capability Self-Check guide.",
      "Evaluate whether ALLEIN coaching may be appropriate for your stated goals.",
      "Provide, administer, personalize, and improve coaching services when you become a client.",
      "Maintain business records, protect the website, prevent misuse, and comply with legal obligations.",
    ],
  },
  {
    title: "4. Health and fitness information",
    content: [
      "Information about your movement, training, goals, injuries, diagnoses, or physical capabilities may be sensitive. Please share only what is reasonably necessary. We use this information to respond to your request or provide coaching and do not use it for targeted advertising.",
      "ALLEIN is a fitness-coaching service and is not a healthcare provider. Information submitted through this website is not a substitute for a private clinical communication channel with a licensed medical professional.",
    ],
  },
  {
    title: "5. When information may be shared",
    content: [
      "We do not sell personal information. We may share limited information with service providers that help operate the website, email, scheduling, payments, or coaching systems; when you direct or consent to the sharing; when reasonably necessary to protect rights, safety, and security; or when required by law.",
      "Service providers may process information under their own privacy terms. The website is hosted through GitHub Pages. When connected for launch, Kit will support guide delivery and email communications, and Tally will support coaching applications. Links to those services may take you to a form hosted on the provider's website.",
    ],
  },
  {
    title: "6. Retention and security",
    content: [
      "We retain inquiry and client information only as long as reasonably necessary for the purposes described above, legitimate business records, dispute resolution, and applicable legal obligations. You may request deletion of an inquiry by contacting us.",
      "We use reasonable administrative and technical measures to protect information. No internet transmission or storage system can be guaranteed completely secure, so please avoid sending highly sensitive medical, financial, or identity information by ordinary email.",
    ],
  },
  {
    title: "7. Your choices and requests",
    content: [
      "You may ask to access, correct, or delete personal information you have provided, or ask us to stop non-essential communications. Marketing emails include an unsubscribe option. Depending on your location and applicable law, you may have additional privacy rights. We will verify and respond to requests as reasonably required.",
      "Because ALLEIN does not currently sell personal information or use it for targeted advertising, there is no sale or targeted-advertising opt-out process on this version of the site.",
    ],
  },
  {
    title: "8. Children’s privacy",
    content: [
      "This website and its inquiry tools are intended for adults and are not directed to children under 13. We do not knowingly collect personal information online from children under 13. If you believe a child has provided information, contact us so we can address it.",
      "Online coaching is offered to adults age 18 or older unless a separate arrangement is made with a parent or legal guardian for a minor athlete.",
    ],
  },
  {
    title: "9. Changes to this policy",
    content: [
      "We may update this policy as the website, coaching services, or legal requirements change. The updated date at the top of this page will identify the current version. Material changes will be communicated when reasonably appropriate.",
    ],
  },
];

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main id="main-content">
        <section className="pb-12 pt-28 lg:pb-16 lg:pt-36">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <span className="eyebrow">Legal</span>
              <h1 className="mt-4 font-[var(--font-display)] text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
              <p className="mt-4 text-sm text-[#777]">Effective and last updated: August 25, 2026</p>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#999]">A plain-language description of the information practices for ALLEIN’s coaching website and current inquiry process.</p>
            </ScrollReveal>
          </div>
        </section>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><div className="h-px bg-gradient-to-r from-[#D4AF37]/30 to-transparent" /></div>
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-4xl space-y-12 px-4 sm:px-6 lg:px-8">
            {sections.map((section, index) => (
              <ScrollReveal key={section.title} delay={Math.min(index * 30, 150)}>
                <article>
                  <h2 className="font-[var(--font-display)] text-2xl font-semibold text-white">{section.title}</h2>
                  {section.content?.map((paragraph) => <p key={paragraph} className="mt-4 leading-relaxed text-[#999]">{paragraph}</p>)}
                  {section.bullets && <ul className="mt-5 space-y-3">{section.bullets.map((bullet) => <li key={bullet} className="flex gap-3 leading-relaxed text-[#999]"><span className="text-[#D4AF37]">•</span><span>{bullet}</span></li>)}</ul>}
                </article>
              </ScrollReveal>
            ))}
            <ScrollReveal>
              <article className="rounded-xl border border-[#D4AF37]/20 bg-[#080808] p-6 sm:p-8">
                <h2 className="font-[var(--font-display)] text-2xl font-semibold">10. Contact us</h2>
                <p className="mt-4 leading-relaxed text-[#999]">For privacy questions or requests, email <a href="mailto:michael@alleinfitness.com" className="text-[#D4AF37] hover:underline">michael@alleinfitness.com</a>.</p>
              </article>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
