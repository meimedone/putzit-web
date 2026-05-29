import { useState } from "react";
import Layout from "../components/Layout.jsx";
import Card from "../components/Card.jsx";
import { cantonLinks } from "../data/cantons.js";

const steps = [
  { title: "1. Reinigungskraft korrekt anmelden", text: "Sobald du in der Schweiz eine Reinigungskraft beschäftigst, musst du sie bei der zuständigen Ausgleichskasse anmelden.", modal: "cantons" },
  { title: "2. Vereinfachtes Abrechnungsverfahren wählen", text: "Für Privathaushalte ist häufig das vereinfachte Abrechnungsverfahren sinnvoll.", modal: "simple" },
  { title: "3. Quellensteuer verstehen", text: "Die Quellensteuer betrifft insbesondere Arbeitnehmerinnen und Arbeitnehmer ohne Niederlassungsbewilligung C.", modal: "simple" },
  { title: "4. Arbeitsstunden dokumentieren", text: "Dokumentiere monatlich Datum, Dauer, Einsatzort und optionale Spesen oder Tätigkeiten.", modal: "putzit" },
  { title: "5. Lohnabrechnung mit PutzIT erstellen", text: "Mit PutzIT kannst du automatisch eine saubere Schweizer Lohnabrechnung erstellen.", modal: "putzit" },
  { title: "6. UVG / Unfallversicherung abschliessen", text: "Wer eine Reinigungskraft beschäftigt, muss eine Unfallversicherung abschliessen.", link: "https://www.mobiliar.ch" }
];

const modalContent = {
  cantons: { title: "Kantonale Ausgleichskassen & Meldestellen", text: "Je nach Wohnsitzkanton erfolgt die Anmeldung bei unterschiedlichen Ausgleichskassen oder Portalen." },
  simple: { title: "Vereinfachtes Abrechnungsverfahren", text: "Das vereinfachte Abrechnungsverfahren ist nicht nur für ausländische Arbeitnehmer gedacht. Es richtet sich vor allem an Privathaushalte oder kleinere Arbeitgeber in der Schweiz." },
  putzit: { title: "PutzIT unterstützt dich", text: "PutzIT unterstützt dich bei der Dokumentation der Arbeitsstunden und erstellt automatisch eine saubere Lohnabrechnung als PDF." }
};

export default function HowTo() {
  const [modal, setModal] = useState(null);
  return (
    <Layout>
      <main className="max-w-6xl mx-auto px-5 py-12 space-y-8">
        <div className="max-w-3xl"><div className="inline-flex rounded-full px-4 py-2 text-sm font-bold mb-5 bg-putzit-light text-putzit-primary">How To Schweiz</div><h1 className="text-5xl font-black leading-tight">Wie stelle ich eine Reinigungskraft in der Schweiz korrekt an?</h1><p className="text-lg mt-5 leading-relaxed text-putzit-grey">Schritt-für-Schritt Anleitung für Privathaushalte und Reinigungsunternehmen in der Schweiz.</p></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">{steps.map((step) => <Card key={step.title}><div className="p-6"><div className="w-12 h-12 rounded-2xl flex items-center justify-center font-black mb-4 bg-putzit-light text-putzit-primary">✓</div><h3 className="font-black text-xl">{step.title}</h3><p className="text-sm mt-3 leading-relaxed text-putzit-grey">{step.text}</p><div className="flex flex-wrap gap-3 mt-5">{step.modal ? <button onClick={() => setModal(step.modal)} className="inline-flex rounded-2xl px-4 py-3 text-sm font-bold bg-putzit-light text-putzit-primary">Mehr Infos</button> : null}{step.link ? <a href={step.link} target="_blank" rel="noreferrer" className="inline-flex rounded-2xl px-4 py-3 text-sm font-bold bg-putzit-primary text-white">Zur Mobiliar UVG</a> : null}</div></div></Card>)}</div>
        <Card><div className="p-7 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 items-center"><div><div className="inline-flex rounded-full px-4 py-2 text-xs font-black mb-4 bg-putzit-light text-putzit-primary">PutzIT Assist</div><h2 className="text-3xl font-black">Du möchtest es nicht selbst zusammensuchen?</h2><p className="text-sm mt-3 leading-relaxed text-putzit-grey">PutzIT kann dich Schritt für Schritt durch Anmeldung, Quellensteuer, UVG und erste Lohnabrechnung führen.</p></div><div className="rounded-[28px] p-6 bg-putzit-light"><div className="text-sm font-bold text-putzit-grey">Mini Beratungspaket</div><div className="text-4xl font-black mt-1">CHF 50.-</div><a href="mailto:info@putzit.ch?subject=PutzIT Mini Beratungspaket" className="block text-center rounded-2xl px-4 py-3 text-sm font-bold bg-putzit-primary text-white mt-5">Mini-Paket anfragen</a></div></div></Card>
      </main>
      {modal ? <InfoModal modal={modal} onClose={() => setModal(null)} /> : null}
    </Layout>
  );
}

function InfoModal({ modal, onClose }) {
  const content = modalContent[modal];
  return <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50"><div className="bg-white rounded-[28px] max-w-2xl w-full p-6"><div className="flex items-center justify-between gap-3 mb-4"><h2 className="text-2xl font-black">{content.title}</h2><button onClick={onClose} className="w-10 h-10 rounded-2xl bg-putzit-lightGrey">×</button></div><div className="text-sm leading-7 text-putzit-grey">{content.text}</div>{modal === "cantons" ? <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[320px] overflow-auto pr-2">{cantonLinks.map((link) => <a key={link.code} href={link.url} target="_blank" rel="noreferrer" className="rounded-2xl border p-4 bg-putzit-lightGrey" style={{ borderColor: "#F4F6F8" }}><div className="font-black">{link.code}</div><div className="text-sm mt-1 text-putzit-dark">{link.name}</div><div className="text-xs mt-2 break-all text-putzit-grey">{link.url}</div></a>)}</div> : null}</div></div>;
}
