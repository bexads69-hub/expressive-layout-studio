import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sparkles,
  Dice5,
  Trophy,
  ShieldCheck,
  Lock,
  Zap,
  BadgeCheck,
  ArrowRight,
  ArrowLeft,
  Check,
  ExternalLink,
  Clock,
  Heart,
  CircleDot,
  Flame,
  Target,
  Swords,
  Activity,
  Bike,
  Mountain,
  Gamepad2,
} from "lucide-react";
import logo from "../assets/banana-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Banana Exchange — UK Licensed Online Gaming" },
      { name: "description", content: "A sharper take on online gaming, based in the UK. Slots, live casino, sports and poker on one regulated platform." },
      { property: "og:title", content: "Banana Exchange — UK Licensed Online Gaming" },
      { property: "og:description", content: "Slots, live casino, sports and poker on one fast, secure UK-licensed platform." },
    ],
  }),
  component: Index,
});

const casinoFavourites = [
  { name: "European Roulette", tag: "Table" },
  { name: "Classic Blackjack", tag: "Card" },
  { name: "Texas Hold'em", tag: "Poker" },
  { name: "Punto Banco Baccarat", tag: "Table" },
  { name: "Mega Fortune Slots", tag: "Slots" },
];

const sportsList = [
  { name: "Football", icon: CircleDot },
  { name: "Cricket", icon: Target },
  { name: "Tennis", icon: Activity },
  { name: "Rugby", icon: Trophy },
  { name: "Boxing", icon: Swords },
  { name: "Snooker", icon: CircleDot },
  { name: "Golf", icon: Flame },
  { name: "Darts", icon: Target },
  { name: "Horse Racing", icon: Mountain },
  { name: "F1", icon: Bike },
  { name: "MMA", icon: Swords },
  { name: "Esports", icon: Gamepad2 },
];

const worldCups = [
  {
    badge: "FIFA Men's",
    title: "FIFA World Cup 2026",
    sub: "USA · Canada · Mexico",
    blurb: "The 23rd FIFA World Cup is live across Banana Exchange — every group stage, knockout and final. Match odds, top scorer, anytime scorer and live in-play markets updated every second.",
    fixtures: [
      { teams: "England v Brazil", date: "12 Jun · 20:00", odds: "2.45" },
      { teams: "France v Argentina", date: "14 Jun · 19:00", odds: "2.10" },
      { teams: "Germany v Spain", date: "15 Jun · 17:30", odds: "2.70" },
      { teams: "Portugal v Netherlands", date: "16 Jun · 20:00", odds: "2.25" },
    ],
  },
  {
    badge: "ICC Cricket",
    title: "ICC T20 World Cup 2026",
    sub: "India · Sri Lanka",
    blurb: "Full ball-by-ball coverage of the ICC Men's T20 World Cup. Outright winner, top batter, top bowler, session and fancy markets — all priced live as the action unfolds.",
    fixtures: [
      { teams: "India v Pakistan", date: "14 Feb · 14:30", odds: "1.85" },
      { teams: "England v Australia", date: "16 Feb · 18:00", odds: "2.10" },
      { teams: "South Africa v New Zealand", date: "18 Feb · 14:30", odds: "1.95" },
      { teams: "West Indies v Sri Lanka", date: "19 Feb · 18:00", odds: "1.72" },
    ],
  },
  {
    badge: "Wimbledon",
    title: "Wimbledon Championships 2026",
    sub: "All England Club · London",
    blurb: "The grass-court Grand Slam returns to SW19. Outright winner, set betting, match handicaps and game-by-game markets across every centre court fixture.",
    fixtures: [
      { teams: "Alcaraz v Sinner", date: "06 Jul · 13:30", odds: "1.90" },
      { teams: "Djokovic v Zverev", date: "07 Jul · 14:00", odds: "1.65" },
      { teams: "Świątek v Sabalenka", date: "08 Jul · 15:00", odds: "2.05" },
      { teams: "Gauff v Rybakina", date: "09 Jul · 13:30", odds: "2.20" },
    ],
  },
  {
    badge: "Rugby Union",
    title: "Rugby World Cup 2027",
    sub: "Australia",
    blurb: "The 11th Rugby World Cup, expanded to 24 nations. Pool stage, knockouts, top try-scorer and handicap markets across every fixture.",
    fixtures: [
      { teams: "New Zealand v South Africa", date: "01 Oct · 11:00", odds: "2.30" },
      { teams: "England v France", date: "02 Oct · 09:30", odds: "2.05" },
      { teams: "Ireland v Australia", date: "03 Oct · 12:00", odds: "1.80" },
      { teams: "Wales v Argentina", date: "04 Oct · 10:00", odds: "1.95" },
    ],
  },
  {
    badge: "Formula 1",
    title: "F1 World Championship 2026",
    sub: "24 races · Worldwide",
    blurb: "Race winner, podium, fastest lap, constructors and driver championship outrights — every Grand Prix priced from lights out to chequered flag.",
    fixtures: [
      { teams: "British GP — Silverstone", date: "05 Jul · 15:00", odds: "2.50" },
      { teams: "Monaco GP — Monte Carlo", date: "24 May · 14:00", odds: "2.75" },
      { teams: "Italian GP — Monza", date: "06 Sep · 14:00", odds: "2.20" },
      { teams: "Abu Dhabi GP — Yas Marina", date: "29 Nov · 13:00", odds: "2.40" },
    ],
  },
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
      <Sports />
      <Games />
      <WorldCup />
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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center">
          <img src={logo.url} alt="Banana Exchange" className="h-9 md:h-10 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
          <a href="#sports" className="hover:text-primary transition">Sports</a>
          <a href="#games" className="hover:text-primary transition">Casino</a>
          <a href="#about" className="hover:text-primary transition">About</a>
          <a href="#responsible" className="hover:text-primary transition">Responsible</a>
        </nav>
        <div className="flex items-center gap-3">
          <span className="chip hidden sm:inline-flex">18+</span>
          <a href="#contact" className="btn-primary text-xs px-4 py-2.5">Join now</a>
          <button onClick={() => setOpen(!open)} className="md:hidden btn-ghost px-3 py-2 text-xs" aria-label="Menu">≡</button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background px-5 py-4 flex flex-col gap-3 text-sm font-semibold uppercase">
          <a href="#sports" onClick={() => setOpen(false)}>Sports</a>
          <a href="#games" onClick={() => setOpen(false)}>Casino</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#responsible" onClick={() => setOpen(false)}>Responsible</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Animated background orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-20 h-[420px] w-[420px] rounded-full bg-primary/25 blur-3xl animate-float" style={{ ['--r' as any]: '0deg' }} />
        <div className="absolute top-40 -right-32 h-[520px] w-[520px] rounded-full bg-primary/15 blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-primary/10 blur-3xl animate-float" style={{ animationDelay: '-4s' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-12 items-center">
        <div className="animate-rise">
          <span className="chip"><Sparkles className="h-3.5 w-3.5" /> UK Licensed Online Gaming</span>
          <h1 className="text-display mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-[88px]">
            A sharper take on online gaming, <span className="text-shimmer">based in the UK.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Banana Exchange brings together slots, live casino and sports markets on one fast, secure platform — backed by UK regulation and fair-play standards.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary animate-pulse-glow">
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
    <div className="relative aspect-square w-full max-w-lg justify-self-center animate-rise" style={{ animationDelay: '0.15s' }}>
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-primary/5 to-transparent blur-2xl animate-pulse-glow" />
      <div className="relative h-full w-full rounded-3xl surface-card p-6 overflow-hidden">
        <div className="absolute top-6 left-6 chip">LIVE</div>
        <div className="absolute top-6 right-6 text-xs font-mono text-muted-foreground">#BNX-2026</div>

        <div className="absolute inset-0 grid place-items-center">
          <div className="relative h-60 w-60">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/60 animate-spin" style={{ animationDuration: "18s" }} />
            <div className="absolute inset-3 rounded-full border border-primary/30 animate-spin" style={{ animationDuration: "26s", animationDirection: 'reverse' }} />
            <div className="absolute inset-8 rounded-full bg-primary text-primary-foreground grid place-items-center overflow-hidden animate-pulse-glow">
              <img src={logo.url} alt="" className="h-20 w-auto opacity-95" />
            </div>
          </div>
        </div>

        <div className="absolute -left-2 top-1/3 surface-card px-4 py-3 shadow-card animate-float" style={{ ['--r' as any]: '-6deg', transform: 'rotate(-6deg)' }}>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Roulette</div>
          <div className="text-display text-xl text-primary">36 RED</div>
        </div>
        <div className="absolute right-2 top-16 surface-card px-4 py-3 shadow-card animate-float" style={{ ['--r' as any]: '5deg', transform: 'rotate(5deg)', animationDelay: '-1.5s' }}>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Match odds</div>
          <div className="text-display text-xl">2.45</div>
        </div>
        <div className="absolute right-4 bottom-6 surface-card px-4 py-3 shadow-card animate-float" style={{ ['--r' as any]: '-3deg', transform: 'rotate(-3deg)', animationDelay: '-3s' }}>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Withdrawal</div>
          <div className="text-display text-xl text-[color:var(--success)]">£420.00</div>
        </div>
        <div className="absolute left-4 bottom-8 surface-card px-4 py-3 shadow-card animate-float" style={{ ['--r' as any]: '4deg', transform: 'rotate(4deg)', animationDelay: '-4.5s' }}>
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

function Sports() {
  return (
    <section id="sports" className="mx-auto max-w-7xl px-5 py-20 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
        <div>
          <span className="chip"><Trophy className="h-3.5 w-3.5" /> Sportsbook</span>
          <h2 className="text-display mt-4 text-4xl md:text-6xl">Bet across <span className="text-primary">30+ sports</span></h2>
          <p className="text-muted-foreground mt-3 text-lg">From the Premier League to the Ashes — every market, in-play and pre-match.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
        {sportsList.map((s, i) => (
          <article
            key={s.name}
            className="surface-card p-5 group flex flex-col items-start gap-4 animate-rise"
            style={{ animationDelay: `${i * 0.04}s` }}
          >
            <div className="h-11 w-11 grid place-items-center rounded-xl bg-primary/10 border border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <s.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <div>
              <div className="text-display text-lg leading-tight">{s.name}</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Live · Pre-match</div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/40 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
          + many more sports inside
        </span>
      </div>
    </section>
  );
}

function Games() {
  return (
    <section id="games" className="mx-auto max-w-7xl px-5 pb-20 md:pb-28">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
        <div>
          <span className="chip"><Dice5 className="h-3.5 w-3.5" /> Live Casino</span>
          <h2 className="text-display mt-4 text-4xl md:text-6xl">Casino floor <span className="text-primary">favourites</span></h2>
          <p className="text-muted-foreground mt-3 text-lg">A handpicked five from the lobby. Dozens more inside.</p>
        </div>
        <Link to="/casino" className="btn-ghost">See full lobby <ArrowRight className="h-4 w-4" /></Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
        {casinoFavourites.map((g, i) => (
          <article key={g.name} className="surface-card p-4 md:p-5 group relative overflow-hidden animate-rise" style={{ animationDelay: `${i * 0.05}s` }}>
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
            <div className="relative">
              <div className="text-[10px] font-mono uppercase tracking-widest text-primary">{g.tag}</div>
              <h3 className="text-display mt-2 text-base md:text-lg leading-tight">{g.name}</h3>
              <div className="mt-3 flex items-center justify-between pt-3 border-t border-border">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Play live</span>
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition" />
              </div>
            </div>
          </article>
        ))}
        <Link to="/casino" className="surface-card p-5 grid place-items-center text-center bg-primary/10 border-primary/40 group">
          <div>
            <div className="text-display text-2xl text-primary">View all</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1 inline-flex items-center gap-1">
              Full lobby <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition" />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

function WorldCup() {
  const [index, setIndex] = useState(0);
  const cup = worldCups[index];
  const prev = () => setIndex((i) => (i - 1 + worldCups.length) % worldCups.length);
  const next = () => setIndex((i) => (i + 1) % worldCups.length);

  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 md:pb-28">
      <div className="surface-card p-6 md:p-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-float" />

        <div className="relative flex items-center justify-between mb-6">
          <span className="chip"><Trophy className="h-3.5 w-3.5" /> {cup.badge}</span>
          <div className="flex items-center gap-2">
            <button onClick={prev} aria-label="Previous world cup" className="h-9 w-9 rounded-full border border-border grid place-items-center hover:border-primary hover:text-primary transition">
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-1.5">
              {worldCups.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-primary' : 'w-1.5 bg-border'}`}
                />
              ))}
            </div>
            <button onClick={next} aria-label="Next world cup" className="h-9 w-9 rounded-full border border-border grid place-items-center hover:border-primary hover:text-primary transition">
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div key={index} className="relative grid md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-10 items-center animate-rise">
          <div>
            <h2 className="text-display text-3xl md:text-5xl leading-tight">
              <span className="text-primary">{cup.title.split(' ').slice(0, -1).join(' ')}</span> {cup.title.split(' ').slice(-1)}
            </h2>
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-3">{cup.sub}</div>
            <p className="text-muted-foreground mt-5 leading-relaxed max-w-2xl">{cup.blurb}</p>
            <div className="flex flex-wrap gap-3 mt-7">
              <a href="#contact" className="btn-primary">Place your bet <ArrowRight className="h-4 w-4" /></a>
              <a href="#sports" className="btn-ghost">View all fixtures</a>
            </div>
          </div>
          <div className="grid gap-3">
            {cup.fixtures.map((f) => (
              <Fixture key={f.teams} teams={f.teams} date={f.date} odds={f.odds} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Fixture({ teams, date, odds }: { teams: string; date: string; odds: string }) {
  return (
    <div className="surface-card px-5 py-4 flex items-center justify-between gap-4">
      <div className="min-w-0">
        <div className="text-sm font-bold truncate">{teams}</div>
        <div className="text-xs text-muted-foreground mt-0.5">{date}</div>
      </div>
      <div className="text-display text-xl text-primary shrink-0">{odds}</div>
    </div>
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
              You must be of legal gambling age in your country to register. Set deposit and time limits in your account, and take a break with self-exclusion tools whenever you need to. If gambling is no longer fun, please reach out to one of the organisations below — they&rsquo;re independent, confidential, and free.
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
            <InfoBlock title="Registered for" body="Players worldwide who are of legal gambling age in their country of residence. ID verification required at sign-up." icon={ShieldCheck} />
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
          <img src={logo.url} alt="Banana Exchange" className="h-9 w-auto" />
          <p className="text-sm text-muted-foreground mt-4 max-w-md">
            UK Gambling Commission licensed operator, based in the UK. 18+ only. Please play responsibly. Gambling can be addictive.
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
            <li><a href="#sports" className="hover:text-primary">Sports</a></li>
            <li><Link to="/casino" className="hover:text-primary">Casino lobby</Link></li>
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
          <span>Licence number [INSERT LICENCE NUMBER] · Based in the UK</span>
        </div>
      </div>
    </footer>
  );
}
