import Layout from "../components/Layout.jsx";
import Card from "../components/Card.jsx";

export default function Dashboard() {
  return <Layout><main className="max-w-6xl mx-auto px-5 py-12"><Card><div className="p-8"><h1 className="text-3xl font-black">PutzIT Dashboard</h1><p className="text-sm text-putzit-grey mt-3">Phase 1.5: Hier kommen Mitarbeiter, gespeicherte Abrechnungen und PDF-Archiv hin.</p></div></Card></main></Layout>;
}
