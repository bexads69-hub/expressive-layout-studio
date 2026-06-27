import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Banana Exchange" },
      { name: "description", content: "Terms and conditions for using Banana Exchange." },
      { property: "og:title", content: "Terms & Conditions — Banana Exchange" },
      { property: "og:description", content: "Terms and conditions for using Banana Exchange." },
    ],
  }),
  component: TermsPage,
});

const sections: [string, string][] = [
  ["1. Eligibility", "You must be of legal gambling age in your country of residence to register or play on Banana Exchange. We carry out age and identity verification checks in line with regulatory requirements, and may suspend accounts pending verification."],
  ["2. Licensing", "Banana Exchange operates under a licence issued by the UK Gambling Commission, licence number [INSERT LICENCE NUMBER]. You can verify this on the public register at gamblingcommission.gov.uk."],
  ["3. Account responsibility", "You are responsible for keeping your login details secure. One account per person. We reserve the right to close or suspend accounts suspected of fraud, multiple-accounting, or breach of these terms."],
  ["4. Deposits & withdrawals", "Deposit and withdrawal limits, processing times, and verification requirements are detailed in your account dashboard and may vary by payment method."],
  ["5. Responsible gambling", "Deposit limits, time-outs, and self-exclusion tools are available in your account at any time. We may apply additional limits where we have concerns about a customer's gambling behaviour."],
  ["6. Changes to these terms", "We may update these terms from time to time; continued use of the platform after changes constitutes acceptance."],
  ["7. Governing law", "These terms are governed by the laws of England and Wales."],
];

function TermsPage() {
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
        <h1 className="text-display mt-5 text-4xl md:text-6xl">Terms &amp; Conditions</h1>
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
          <Link to="/privacy" className="btn-ghost">Read Privacy Policy</Link>
          <Link to="/" className="btn-primary">Back home</Link>
        </div>
      </section>
    </div>
  );
}
