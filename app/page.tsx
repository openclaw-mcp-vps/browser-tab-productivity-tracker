export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Browser Extension
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Track Which Tabs Kill Your{" "}
          <span className="text-[#58a6ff]">Productivity</span> Most
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          TabTrack silently monitors every domain you visit, then surfaces clear reports showing exactly where your focus leaks — so you can fix it.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $9/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">Cancel anytime. Works on Chrome &amp; Edge.</p>
        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            ["Domain Tracking", "Time logged per site, automatically"],
            ["Drain Reports", "Weekly digest of your worst offenders"],
            ["Focus Score", "Daily productivity score at a glance"],
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold text-sm mb-1">{title}</p>
              <p className="text-[#8b949e] text-xs">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-extrabold text-white mb-1">$9</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Browser extension (Chrome & Edge)",
              "Unlimited domain tracking",
              "Weekly productivity reports",
              "Daily focus score",
              "Dashboard & data export",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "How does the extension track my time?",
              "The background script listens for tab focus and visibility events, logging active time per domain locally and syncing to your dashboard every few minutes.",
            ],
            [
              "Is my browsing data private?",
              "Only domain names and time durations are stored — never URLs, page titles, or content. Data is encrypted in transit and at rest.",
            ],
            [
              "Can I cancel my subscription?",
              "Yes, cancel anytime from your account dashboard. You keep access until the end of your billing period.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold text-sm mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        © {new Date().getFullYear()} TabTrack. All rights reserved.
      </footer>
    </main>
  );
}
