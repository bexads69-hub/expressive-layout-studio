import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sparkles,
  Dice5,
  Radio,
  Trophy,
  Spade,
  ShieldCheck,
  Lock,
  Zap,
  BadgeCheck,
  ArrowRight,
  Check,
  ExternalLink,
  Clock,
  Heart,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Banana Exchange — UK Licensed Online Gaming" },
      { name: "description", content: "A sharper take on online gaming, built for the UK. Slots, live casino, sports and poker on one regulated platform." },
      { property: "og:title", content: "Banana Exchange — UK Licensed Online Gaming" },
      { property: "og:description", content: "Slots, live casino, sports and poker on one fast, secure UK-licensed platform." },
    ],
  }),
  component: Index,
});

const casinoGames = [
  { name: "Teenpatti 20-20", tag: "Card" },
  { name: "Andar Bahar", tag: "Card" },
  { name: "Dragon Tiger", tag: "Card" },
  { name: "32 Cards", tag: "Card" },
  { name: "Lucky 7", tag: "Dice" },
  { name: "Baccarat", tag: "Table" },
  { name: "Poker 6 Player", tag: "Poker" },
  { name: "Sicbo", tag: "Dice" },
  { name: "Casino War", tag: "Card" },
  { name: "Worli Matka", tag: "Lottery" },
  { name: "Bollywood Casino", tag: "Themed" },
  { name: "5Five Cricket", tag: "Sport" },
];

const sportsList = [
  "Cricket", "Football", "Tennis", "Basketball", "Kabaddi", "Boxing",
  "Table Tennis", "Badminton", "Volleyball", "Snooker", "Ice Hockey",
  "Golf", "Rugby League", "MMA", "MotoGP", "Chess", "Cycling", "Esoccer",
];

const reasons = [
  { n: "01", title: "Licensed & regulated", body: "Operating under UK Gambling Commission licence number [INSERT LICENCE NUMBER]. Verify any operator's licence directly on the gamblingcommission.gov.uk public register before depositing.", icon: ShieldCheck },
  { n: "02", title: "Fair & tested", body: "Game RTPs are independently tested and published per title. No hidden odds, no rigged outcomes.", icon: BadgeCheck },
  { n: "03", title: "Built-in controls", body: "Deposit limits, time-outs, and self-exclusion are available from your account at any time — no questions asked.", icon: Lock },
];

const orgs = [
  { name: "BeGambleAware.org", href: "https://www.begambleaware.org/" },
  { name: "GamCare.org.uk", href: "https://www.gamcare.org.uk/" },
  { name: "GAMSTOP — self-exclude", href: "https://www.gamstop.co.uk/" },
  { name: "Verify our licence", href: "https://www.gamblingcommission.gov.uk/" },
];

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <Games />
      <WhyUs />
      <Responsible />
      <SignUp />
      <LegalLinks />
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 backdrop-blur-xl bg-background/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground font-black">
            B
          </div>
          <div className="leading-none">
            <div className="text-display text-base">Banana</div>
            <div className="text-[10px] tracking-[0.25em] text-muted-foreground">EXCHANGE</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
          <a href="#games" className="hover:text-primary transition">Games</a>
          <a href="#about" className="hover:text-primary transition">About</a>
          <a href="#responsible" className="hover:text-primary transition">Responsible</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <span className="chip hidden sm:inline-flex">18+</span>
          <a href="#contact" className="btn-primary text-xs px-4 py-2.5">Join now</a>
          <button onClick={() => setOpen(!open)} className="md:hidden btn-ghost px-3 py-2 text-xs" aria-label="Menu">≡</button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background px-5 py-4 flex flex-col gap-3 text-sm font-semibold uppercase">
          <a href="#games" onClick={() => setOpen(false)}>Games</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#responsible" onClick={() => setOpen(false)}>Responsible</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-12 items-center">
        <div>
          <span className="chip"><Sparkles className="h-3.5 w-3.5" /> UK Licensed Online Gaming</span>
          <h1 className="text-display mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-[88px]">
            A sharper take on online gaming, <span className="text-primary">built for the UK.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Banana Exchange brings together slots, live casino and sports markets on one fast, secure platform — backed by UK regulation and fair-play standards.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Join Banana Exchange <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#about" className="btn-ghost">How it works</a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            <Stat k="300+" v="Slot titles" />
            <Stat k="24/7" v="Live tables" />
            <Stat k="10k+" v="Sport markets" />
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="text-display text-3xl text-primary">{k}</div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{v}</div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative aspect-square w-full max-w-lg justify-self-center">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-primary/5 to-transparent blur-2xl" />
      <div className="relative h-full w-full rounded-3xl surface-card p-6 overflow-hidden">
        <div className="absolute top-6 left-6 chip">LIVE</div>
        <div className="absolute top-6 right-6 text-xs font-mono text-muted-foreground">#BNX-2026</div>

        {/* Bouncing tokens */}
        <div className="absolute inset-0 grid place-items-center">
          <div className="relative h-56 w-56">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/60 animate-spin" style={{ animationDuration: "18s" }} />
            <div className="absolute inset-6 rounded-full bg-primary text-primary-foreground grid place-items-center text-display text-7xl">B</div>
          </div>
        </div>

        <div className="absolute -left-2 top-1/3 surface-card px-4 py-3 rotate-[-6deg] shadow-card">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Roulette</div>
          <div className="text-display text-xl text-primary">36 RED</div>
        </div>
        <div className="absolute right-2 top-16 surface-card px-4 py-3 rotate-[5deg] shadow-card">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Match odds</div>
          <div className="text-display text-xl">2.45</div>
        </div>
        <div className="absolute right-4 bottom-6 surface-card px-4 py-3 rotate-[-3deg] shadow-card">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Withdrawal</div>
          <div className="text-display text-xl text-[color:var(--success)]">£420.00</div>
        </div>
        <div className="absolute left-4 bottom-8 surface-card px-4 py-3 rotate-[4deg] shadow-card">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Slot win</div>
          <div className="text-display text-xl text-primary">x128</div>
        </div>
      </div>
    </div>
  );
}

function TrustBar() {
  const items = [
    { icon: ShieldCheck, label: "UK Gambling Commission licensed" },
    { icon: Lock, label: "Encrypted payments" },
    { icon: Zap, label: "Fast withdrawals" },
    { icon: BadgeCheck, label: "18+ verified accounts only" },
  ];
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((it) => (
          <div key={it.label} className="flex items-center gap-3 text-sm">
            <it.icon className="h-4 w-4 text-primary shrink-0" />
            <span className="text-muted-foreground">{it.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Games() {
  return (
    <section id="games" className="mx-auto max-w-7xl px-5 py-20 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
        <div>
          <span className="chip">On the table</span>
          <h2 className="text-display mt-4 text-4xl md:text-6xl">What&rsquo;s on the table</h2>
          <p className="text-muted-foreground mt-3 text-lg">A focused lineup, not an overwhelming one.</p>
        </div>
        <a href="#contact" className="btn-ghost">Browse all <ArrowRight className="h-4 w-4" /></a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {games.map((g) => (
          <article key={g.name} className="surface-card p-6 group relative overflow-hidden">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
            <div className="relative">
              <div className="h-12 w-12 grid place-items-center rounded-xl bg-primary text-primary-foreground">
                <g.icon className="h-6 w-6" />
              </div>
              <h3 className="text-display mt-5 text-2xl">{g.name}</h3>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{g.desc}</p>
              <div className="mt-6 flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs font-mono uppercase tracking-wider text-primary">{g.tag}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="about" className="bg-surface/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="chip">Why Banana Exchange</span>
          <h2 className="text-display mt-4 text-4xl md:text-6xl">
            Built on <span className="text-primary">regulation</span>, not just marketing.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-14">
          {reasons.map((r) => (
            <div key={r.n} className="surface-card p-7 relative">
              <div className="flex items-start justify-between">
                <div className="text-display text-5xl text-primary/30">{r.n}</div>
                <div className="h-11 w-11 grid place-items-center rounded-xl bg-primary/10 border border-primary/30">
                  <r.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <h3 className="text-display mt-5 text-2xl">{r.title}</h3>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Responsible() {
  return (
    <section id="responsible" className="mx-auto max-w-7xl px-5 py-20 md:py-28">
      <div className="surface-card p-8 md:p-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="relative grid md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-10 items-start">
          <div>
            <span className="chip"><Heart className="h-3.5 w-3.5" /> Play responsibly</span>
            <h2 className="text-display mt-5 text-3xl md:text-5xl">
              Gambling should stay entertainment, <span className="text-primary">not a problem.</span>
            </h2>
            <p className="text-muted-foreground mt-5 leading-relaxed max-w-2xl">
              You must be 18 or over to register. Set deposit and time limits in your account, and take a break with self-exclusion tools whenever you need to. If gambling is no longer fun, please reach out to one of the organisations below — they&rsquo;re independent, confidential, and free.
            </p>
            <div className="flex flex-wrap gap-3 mt-7">
              {orgs.map((o) => (
                <a key={o.href} href={o.href} target="_blank" rel="noreferrer" className="btn-ghost text-xs px-4 py-2.5">
                  {o.name} <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-3">
            <ControlItem label="Deposit limits" />
            <ControlItem label="Loss limits" />
            <ControlItem label="Time-outs" />
            <ControlItem label="Reality checks" />
            <ControlItem label="Self-exclusion via GAMSTOP" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ControlItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 surface-card px-5 py-4">
      <div className="h-7 w-7 grid place-items-center rounded-full bg-primary text-primary-foreground">
        <Check className="h-4 w-4" />
      </div>
      <span className="text-sm font-semibold">{label}</span>
    </div>
  );
}

function SignUp() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-20 md:py-28">
      <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-10 items-start">
        <div className="md:sticky md:top-28">
          <span className="chip">Create your account</span>
          <h2 className="text-display mt-5 text-4xl md:text-6xl">
            Sign up in <span className="text-primary">minutes.</span>
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Quick sign-up. ID and age verification required before any deposit or withdrawal.
          </p>
          <div className="mt-8 grid gap-4">
            <InfoBlock title="Support" body="Live chat available daily, 9am – 11pm UK time." icon={Clock} />
            <InfoBlock title="Registered for" body="UK residents, 18+ only. ID verification required at sign-up per UK Gambling Commission requirements." icon={ShieldCheck} />
          </div>
        </div>

        <form
          name="signup"
          method="POST"
          data-netlify="true"
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="surface-card p-7 md:p-10"
        >
          <input type="hidden" name="form-name" value="signup" />
          <p className="hidden">
            <label>Don&rsquo;t fill this out: <input name="bot-field" /></label>
          </p>

          {submitted ? (
            <div className="text-center py-10">
              <div className="mx-auto h-14 w-14 grid place-items-center rounded-full bg-primary text-primary-foreground mb-5">
                <Check className="h-7 w-7" />
              </div>
              <h3 className="text-display text-2xl">Request received</h3>
              <p className="text-muted-foreground mt-3 text-sm">
                We&rsquo;ll be in touch to complete identity verification before your account is activated.
              </p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full name" name="name" />
                <Field label="Date of birth" name="dob" type="date" />
                <Field label="Email" name="email" type="email" />
                <Field label="Phone number" name="phone" type="tel" />
              </div>
              <label className="mt-6 flex items-start gap-3 text-sm cursor-pointer">
                <input type="checkbox" required className="mt-1 accent-[color:var(--color-primary)]" />
                <span className="text-muted-foreground">I confirm I am of legal gambling age in my country of residence.</span>
              </label>
              <label className="mt-3 flex items-start gap-3 text-sm cursor-pointer">
                <input type="checkbox" required className="mt-1 accent-[color:var(--color-primary)]" />
                <span className="text-muted-foreground">I agree to the <Link to="/terms" className="text-primary underline">Terms &amp; Conditions</Link> and <Link to="/privacy" className="text-primary underline">Privacy Policy</Link>.</span>
              </label>
              <button type="submit" className="btn-primary w-full mt-7">
                Submit registration request <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                Submitted via Netlify Forms. Full identity verification happens after submission, before any account is activated.
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{label}</span>
      <input
        required
        name={name}
        type={type}
        className="mt-2 w-full rounded-xl bg-background border border-border px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
      />
    </label>
  );
}

function InfoBlock({ title, body, icon: Icon }: { title: string; body: string; icon: any }) {
  return (
    <div className="surface-card p-5 flex gap-4">
      <div className="h-10 w-10 shrink-0 grid place-items-center rounded-xl bg-primary/10 border border-primary/30">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div className="min-w-0">
        <div className="text-sm font-bold uppercase tracking-wider">{title}</div>
        <p className="text-sm text-muted-foreground mt-1">{body}</p>
      </div>
    </div>
  );
}

function LegalLinks() {
  const docs = [
    { title: "Terms & Conditions", desc: "Eligibility, licensing, account rules and governing law.", to: "/terms" as const },
    { title: "Privacy Policy", desc: "What we collect, why, how we share it, and your rights.", to: "/privacy" as const },
  ];
  return (
    <section id="legal" className="bg-surface/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 grid md:grid-cols-2 gap-6">
        {docs.map((d) => (
          <Link key={d.to} to={d.to} className="surface-card p-7 md:p-8 group block">
            <div className="flex items-baseline justify-between flex-wrap gap-2">
              <h3 className="text-display text-2xl">{d.title}</h3>
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Updated June 2026</span>
            </div>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{d.desc}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:translate-x-1 transition">
              Read full document <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-12 grid md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1fr)] gap-10">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground font-black">B</div>
            <div className="text-display text-base">Banana Exchange</div>
          </div>
          <p className="text-sm text-muted-foreground mt-4 max-w-md">
            UK Gambling Commission licensed operator. 18+ only. Please play responsibly. Gambling can be addictive.
          </p>
          <div className="flex gap-2 mt-5">
            <span className="chip">18+</span>
            <span className="chip">UKGC</span>
            <span className="chip">GAMSTOP</span>
          </div>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Explore</div>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#games" className="hover:text-primary">Games</a></li>
            <li><a href="#about" className="hover:text-primary">Why us</a></li>
            <li><a href="#responsible" className="hover:text-primary">Responsible play</a></li>
            <li><a href="#contact" className="hover:text-primary">Sign up</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Help</div>
          <ul className="space-y-2.5 text-sm">
            {orgs.map((o) => (
              <li key={o.href}>
                <a href={o.href} target="_blank" rel="noreferrer" className="hover:text-primary inline-flex items-center gap-1.5">
                  {o.name} <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Banana Exchange. All rights reserved.</span>
          <span>Licence number [INSERT LICENCE NUMBER] · UK only</span>
        </div>
      </div>
    </footer>
  );
}
