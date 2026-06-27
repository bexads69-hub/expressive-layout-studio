import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Dice5, ArrowRight } from "lucide-react";
import logo from "../assets/banana-logo.png.asset.json";

export const Route = createFileRoute("/casino")({
  head: () => ({
    meta: [
      { title: "Casino Lobby — Banana Exchange" },
      { name: "description", content: "Browse the full Banana Exchange casino lobby — Blackjack, Roulette, Slots, Baccarat, Texas Hold'em and dozens more live tables." },
    ],
  }),
  component: CasinoPage,
});

const allGames = [
  { name: "European Roulette", tag: "Table" },
  { name: "Classic Blackjack", tag: "Card" },
  { name: "Texas Hold'em", tag: "Poker" },
  { name: "Three Card Brag", tag: "Card" },
  { name: "Punto Banco Baccarat", tag: "Table" },
  { name: "Mega Fortune Slots", tag: "Slots" },
  { name: "Starburst", tag: "Slots" },
  { name: "Gonzo's Quest", tag: "Slots" },
  { name: "Lightning Roulette", tag: "Table" },
  { name: "Speed Baccarat", tag: "Table" },
  { name: "Caribbean Stud Poker", tag: "Poker" },
  { name: "Pai Gow Poker", tag: "Poker" },
  { name: "Sic Bo", tag: "Dice" },
  { name: "Craps", tag: "Dice" },
  { name: "American Roulette", tag: "Table" },
  { name: "Casino Hold'em", tag: "Poker" },
  { name: "Book of Dead", tag: "Slots" },
  { name: "Rainbow Riches", tag: "Slots" },
  { name: "Mega Moolah", tag: "Slots" },
  { name: "Dream Catcher", tag: "Wheel" },
  { name: "Monopoly Live", tag: "Themed" },
  { name: "Crazy Time", tag: "Themed" },
  { name: "Deal or No Deal", tag: "Themed" },
  { name: "Bonanza Megaways", tag: "Slots" },
];

function CasinoPage() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border/60 backdrop-blur-xl bg-background/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo.url} alt="Banana Exchange" className="h-8 w-auto" />
          </Link>
          <Link to="/" className="btn-ghost text-xs px-4 py-2.5">
            <ArrowLeft className="h-4 w-4" /> Back home
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <span className="chip"><Dice5 className="h-3.5 w-3.5" /> Full Lobby</span>
        <h1 className="text-display mt-5 text-4xl md:text-6xl">
          The complete <span className="text-primary">casino floor</span>
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
          Every live table, slot and card game available on Banana Exchange — updated weekly with new providers.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mt-12">
          {allGames.map((g) => (
            <article key={g.name} className="surface-card p-5 group relative overflow-hidden animate-rise">
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
        </div>

        <div className="mt-12 text-center">
          <Link to="/" className="btn-primary">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
        </div>
      </section>
    </div>
  );
}
