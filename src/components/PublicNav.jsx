import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo.jsx";
import Button from "./Button.jsx";

const nav = [
  ["/", "Startseite"],
  ["/abrechnung", "Gratis Lohnabrechnung"],
  ["/howto", "So funktioniert's"],
  ["/kontakt", "Kontakt & Assist"]
];

export default function PublicNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white/95 backdrop-blur border-b sticky top-0 z-30" style={{ borderColor: "#E6EEF2" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-5 py-3 flex items-center justify-between gap-3">
        <Link to="/" onClick={() => setOpen(false)}><Logo /></Link>
        <nav className="hidden lg:flex items-center gap-2">
          {nav.map(([to, label]) => (
            <NavLink key={to} to={to} className="px-4 py-2 rounded-2xl text-sm font-bold" style={({ isActive }) => ({ color: isActive ? "#00AFA8" : "#071A2F", background: isActive ? "#E8FAF7" : "transparent" })}>{label}</NavLink>
          ))}
        </nav>
        <div className="hidden sm:flex items-center gap-2">
          <Link to="/login"><Button secondary>Login</Button></Link>
          <Link to="/abrechnung"><Button>Gratis starten</Button></Link>
        </div>
        <button onClick={() => setOpen((v) => !v)} className="lg:hidden rounded-2xl w-12 h-12 flex items-center justify-center bg-putzit-light text-putzit-dark">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open ? (
        <div className="lg:hidden border-t bg-white px-4 pb-4" style={{ borderColor: "#E6EEF2" }}>
          <div className="grid gap-2 pt-3">
            {nav.map(([to, label]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 font-bold bg-putzit-lightGrey">{label}</Link>)}
            <Link to="/login" onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 font-bold bg-putzit-lightGrey">Login</Link>
            <Link to="/abrechnung" onClick={() => setOpen(false)}><Button className="w-full">Gratis Lohnabrechnung</Button></Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
