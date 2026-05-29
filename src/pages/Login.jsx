import { useState } from "react";
import Layout from "../components/Layout.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import { supabase } from "../lib/supabase.js";

export default function Login() {
  const [email, setEmail] = useState("demo@putzit.ch");
  const [password, setPassword] = useState("demo1234");
  const [message, setMessage] = useState("");

  async function handleLogin() {
    if (!supabase) {
      setMessage("Supabase ist noch nicht konfiguriert. Login ist vorbereitet.");
      return;
    }
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setMessage(error ? error.message : "Login erfolgreich.");
  }

  return (
    <Layout>
      <main className="max-w-5xl mx-auto px-5 py-12 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <Card><div className="p-8 space-y-5"><h1 className="text-3xl font-black">Login zur PutzIT Plattform</h1><p className="text-sm text-putzit-grey">Phase 1.5: Login, Mitarbeiter speichern, Abrechnungen speichern und Archiv.</p><label className="block"><div className="text-sm font-bold mb-1">E-Mail</div><input className="w-full rounded-2xl px-4 py-3 border bg-white text-sm outline-none" value={email} onChange={(e) => setEmail(e.target.value)} /></label><label className="block"><div className="text-sm font-bold mb-1">Passwort</div><input className="w-full rounded-2xl px-4 py-3 border bg-white text-sm outline-none" type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></label><Button onClick={handleLogin}>Einloggen</Button>{message ? <div className="text-sm text-putzit-grey">{message}</div> : null}</div></Card>
        <Card><div className="p-8"><div className="rounded-[24px] p-5 mb-5 bg-putzit-light"><div className="text-sm font-bold">Profiversion</div><div className="text-4xl font-black mt-1">ab CHF 5.- / Monat</div><div className="text-sm mt-2 text-putzit-grey">1 Mitarbeiter inklusive. Erweiterbar für Teams.</div></div><div className="space-y-3 text-sm text-putzit-grey"><div>✓ Stammdaten speichern</div><div>✓ alte Abrechnungen ansehen</div><div>✓ PDF erneut downloaden</div><div>✓ später Einsätze und Rapporte</div></div></div></Card>
      </main>
    </Layout>
  );
}
