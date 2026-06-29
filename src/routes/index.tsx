import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Banana Exchange — UK Licensed Online Gaming" },
      { name: "description", content: "A sharper take on online gaming, based in the UK. Slots, live casino, sports and poker on one regulated platform." },
    ],
    // Server-side redirect for crawlers / no-JS
    links: [{ rel: "canonical", href: "/home.html" }],
  }),
  component: Redirect,
});

function Redirect() {
  useEffect(() => { window.location.replace("/home.html"); }, []);
  return (
    <div style={{minHeight:"100vh",display:"grid",placeItems:"center",background:"#1a1a1f",color:"#fafaf5",fontFamily:"-apple-system,system-ui,sans-serif"}}>
      <a href="/home.html" style={{color:"#ffe600",textDecoration:"none",fontWeight:800}}>Loading Banana Exchange →</a>
    </div>
  );
}
