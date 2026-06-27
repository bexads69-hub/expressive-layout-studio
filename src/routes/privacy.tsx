import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Banana Exchange" },
      { name: "description", content: "How Banana Exchange collects, uses and protects your personal data." },
      { property: "og:title", content: "Privacy Policy — Banana Exchange" },
      { property: "og:description", content: "How Banana Exchange collects, uses and protects your personal data." },
    ],
  }),
  component: PrivacyPage,
});

const sections: [string, string][] = [
  ["1. What we collect", "Name, date of birth, contact details, and identity verification documents submitted during sign-up, plus account and transaction activity once you're playing."],
  ["2. Why we collect it", "To verify your age and identity, as required by law. To process deposits, withdrawals, and account activity. To detect fraud and meet anti-money-laundering obligations. To apply responsible gambling checks and limits."],
  ["3. Sharing", "We share data with identity verification providers, payment processors, and regulators where legally required. We do not sell personal data to third parties."],
  ["4. Retention", "We retain account and transaction records for the period required under UK gambling and financial regulations."],
  ["5. Your rights", "You can request a copy of the data we hold about you, or ask us to correct or delete it where we are not legally required to retain it, by contacting support."],
];

function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border/60 backdrop-blur-xl bg-background/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground font-black">B</div>
            <div className="leading-none">
              <div className="text-display text-base">Banana</div>
              <div className="text-[10px] tracking-[0.25em] text-muted-foreground">EXCHANGE</div>
            </div>
          </Link>
          <Link to="/" className="btn-ghost text-xs px-4 py-2.5"><ArrowLeft className="h-4 w-4" /> Back home</Link>
        </div>
      </header>
      <section className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <span className="chip">Legal</span>
        <h1 className="text-display mt-5 text-4xl md:text-6xl">Privacy Policy</h1>
        <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mt-3">Updated June 2026</p>
        <div className="mt-10 space-y-7">
          {sections.map(([h, b]) => (
            <div key={h}>
              <h2 className="text-sm font-bold uppercase tracking-wider text-primary">{h}</h2>
              <p className="text-sm md:text-base text-muted-foreground mt-2 leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link to="/terms" className="btn-ghost">Read Terms &amp; Conditions</Link>
          <Link to="/" className="btn-primary">Back home</Link>
        </div>
      </section>
    </div>
  );
}
