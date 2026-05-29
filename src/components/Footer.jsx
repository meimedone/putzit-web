import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
export default function Footer() {
  return (
    <footer className="mt-16 bg-putzit-dark text-white">
      <div className="max-w-7xl mx-auto px-5 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div><Logo inverted /><p className="text-sm mt-4 leading-relaxed text-white/70">Digitale Lohnabrechnung und Plattform für Reinigungskräfte in der Schweiz.</p></div>
        <div><div className="font-black mb-3">Produkt</div><div className="space-y-2 text-sm text-white/70"><Link to="/abrechnung">Gratis Lohnabrechnung</Link><br/><Link to="/login">Profiversion</Link><br/><Link to="/howto">So funktioniert's</Link></div></div>
        <div><div className="font-black mb-3">Unternehmen</div><div className="space-y-2 text-sm text-white/70"><Link to="/kontakt">Kontakt & Assist</Link><br/><Link to="/rechtliches/impressum">Impressum</Link><br/><Link to="/rechtliches/datenschutz">Datenschutz</Link><br/><Link to="/rechtliches/agb">AGB</Link><br/><Link to="/rechtliches/haftung">Haftungsausschluss</Link></div></div>
        <div><div className="font-black mb-3">MeiMed GmbH</div><div className="text-sm leading-relaxed text-white/70">Schweiz<br/>E-Mail: info@putzit.ch<br/><br/>PutzIT unterstützt dich bei der digitalen Lohnabrechnung. Rechtliche oder steuerliche Spezialfälle sollten individuell geprüft werden.</div></div>
      </div>
      <div className="border-t border-white/10 py-5 text-xs text-center text-white/50">2026 MeiMed GmbH · PutzIT.ch</div>
    </footer>
  );
}
