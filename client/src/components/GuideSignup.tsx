import { useEffect, useRef, useState } from "react";

// Use the published Kit embed so delivery, confirmation and error handling
// continue to follow the owner's existing form settings.
export default function GuideSignup({ id }: { id: string }) {
  const container = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const host = container.current;
    if (!host) return;
    const script = document.createElement("script");
    script.async = true;
    script.dataset.uid = "b41a314882";
    script.src = "https://allein.kit.com/b41a314882/index.js";
    script.onerror = () => setFailed(true);
    host.appendChild(script);
    return () => { host.replaceChildren(); };
  }, []);

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-y border-[#D4AF37]/10 bg-[#080808] py-12 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8">
        <div>
          <p className="eyebrow">Your free next step</p>
          <h2 id={`${id}-title`} className="mt-4 font-[var(--font-display)] text-3xl font-semibold sm:text-4xl">The Everyday Athlete Capability Guide</h2>
          <p className="mt-4 text-base leading-relaxed text-[#A7A7A7]">Get a practical guide to strength, movement, balance, coordination, power, and recovery — delivered to your inbox.</p>
        </div>
        <div className="guide-signup min-w-0">
          <div ref={container} />
          {failed && <p role="status" className="mb-3 text-sm text-[#BBB]">The signup form could not load. Open the guide signup below to continue.</p>}
          <p className="mt-4 text-sm leading-relaxed text-[#999]">Sign up for the free guide and practical ALLEIN coaching emails. Unsubscribe anytime. <a href="/privacy" className="text-[#D4AF37] underline">Privacy Policy</a>.</p>
          <a href="https://allein.kit.com/b41a314882" className="mt-2 inline-flex min-h-11 items-center text-sm text-[#D4AF37] underline">Open guide signup in a new page</a>
        </div>
      </div>
    </section>
  );
}
