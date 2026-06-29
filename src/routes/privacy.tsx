import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [{ title: "Privacy Policy — Banana Exchange" }],
    links: [{ rel: "canonical", href: "/privacy.html" }],
  }),
  component: () => {
    useEffect(() => { window.location.replace("/privacy.html"); }, []);
    return <a href="/privacy.html" style={{display:"grid",minHeight:"100vh",placeItems:"center",background:"#1a1a1f",color:"#ffe600",textDecoration:"none"}}>Loading privacy →</a>;
  },
});
