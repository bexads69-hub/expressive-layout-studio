import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/casino")({
  head: () => ({
    meta: [{ title: "Casino Lobby — Banana Exchange" }],
    links: [{ rel: "canonical", href: "/casino.html" }],
  }),
  component: () => {
    useEffect(() => { window.location.replace("/casino.html"); }, []);
    return <a href="/casino.html" style={{display:"grid",minHeight:"100vh",placeItems:"center",background:"#1a1a1f",color:"#ffe600",textDecoration:"none"}}>Loading casino →</a>;
  },
});
