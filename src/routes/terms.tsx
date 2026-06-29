import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [{ title: "Terms & Conditions — Banana Exchange" }],
    links: [{ rel: "canonical", href: "/terms.html" }],
  }),
  component: () => {
    useEffect(() => { window.location.replace("/terms.html"); }, []);
    return <a href="/terms.html" style={{display:"grid",minHeight:"100vh",placeItems:"center",background:"#1a1a1f",color:"#ffe600",textDecoration:"none"}}>Loading terms →</a>;
  },
});
