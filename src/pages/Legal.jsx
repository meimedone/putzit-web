import { useParams } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import Card from "../components/Card.jsx";

const company = [
  "PutzIT ist ein Angebot der",
  "",
  "MeiMed GmbH",
  "Zulligerstrasse 18",
  "3063 Ittigen",
  "Schweiz",
  "",
  "E-Mail: info@putzit.ch",
  "Web: www.putzit.ch",
  "",
  "Handelsregister-Nr.: CH-036.4.049.463-6"
].join("\n");

const content = {
  impressum: {
    title: "Impressum",
    text: [
      company,
      "",
      "Haftung für Inhalte",
      "Die Inhalte dieser Webseite werden mit grösstmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Informationen kann jedoch keine Gewähr übernommen werden.",
      "",
      "Urheberrechte",
      "Die auf dieser Webseite veröffentlichten Inhalte, Texte, Grafiken, Logos und Gestaltungselemente sind urheberrechtlich geschützt.",
      "",
      "Kontakt",
      "Bei Fragen zur Webseite oder zu PutzIT erreichen Sie uns unter info@putzit.ch."
    ].join("\n")
  },
  datenschutz: {
    title: "Datenschutzerklärung",
    text: [
      "Verantwortliche Stelle",
      company,
      "",
      "Allgemeines",
      "Der Schutz personenbezogener Daten ist uns wichtig. PutzIT verarbeitet personenbezogene Daten im Einklang mit dem Schweizer Datenschutzgesetz (DSG) und, soweit anwendbar, der Datenschutz-Grundverordnung (DSGVO).",
      "",
      "Bearbeitete Daten",
      "Bei der Nutzung von PutzIT können insbesondere folgende Daten bearbeitet werden: Kontakt- und Stammdaten, Arbeitgeberdaten, Angaben zu Reinigungskräften, Lohndaten, Abrechnungsdaten, Kommunikationsdaten sowie technische Nutzungs- und Logdaten.",
      "",
      "Zweck der Bearbeitung",
      "Die Daten werden verwendet, um die Webseite bereitzustellen, Lohnabrechnungen zu erstellen, Anfragen zu beantworten, Support zu leisten, Sicherheits- und Betriebsfunktionen sicherzustellen sowie PutzIT weiterzuentwickeln.",
      "",
      "Hosting und technische Dienstleister",
      "Die Webseite wird über moderne Cloud- und Hosting-Dienstleister betrieben. Dabei können technische Daten wie IP-Adresse, Browserinformationen, Zugriffszeiten und Logdaten verarbeitet werden. Für spätere Funktionen können weitere Dienstleister wie Supabase für Authentifizierung und Datenhaltung oder Stripe für Zahlungsabwicklung eingesetzt werden.",
      "",
      "Cookies und Analyse",
      "PutzIT kann technisch notwendige Cookies einsetzen. Optionale Analyse- oder Marketing-Dienste werden nur im Rahmen der geltenden rechtlichen Vorgaben verwendet.",
      "",
      "Speicherdauer",
      "Personendaten werden nur so lange gespeichert, wie dies für die genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.",
      "",
      "Rechte betroffener Personen",
      "Betroffene Personen können Auskunft, Berichtigung, Löschung oder Einschränkung der Bearbeitung ihrer personenbezogenen Daten verlangen, soweit die gesetzlichen Voraussetzungen erfüllt sind.",
      "",
      "Kontakt für Datenschutzanfragen",
      "info@putzit.ch"
    ].join("\n")
  },
  agb: {
    title: "Allgemeine Geschäftsbedingungen",
    text: [
      "1. Geltungsbereich",
      "Diese Allgemeinen Geschäftsbedingungen gelten für die Nutzung der Webseite und der digitalen Angebote von PutzIT, einem Angebot der MeiMed GmbH.",
      "",
      "2. Leistungsumfang",
      "PutzIT bietet digitale Hilfsmittel zur Erstellung von Lohnabrechnungen für Reinigungskräfte in der Schweiz sowie ergänzende Informationen, Anleitungen und künftig zusätzliche Plattformfunktionen wie Stammdatenverwaltung, Archiv und Loginbereich.",
      "",
      "3. Gratisversion",
      "Die kostenlose Version ermöglicht die Erstellung einzelner Lohnabrechnungen ohne Benutzerkonto. Eine dauerhafte Speicherung der Daten ist in der Gratisversion nicht Bestandteil des Leistungsumfangs.",
      "",
      "4. Profiversion",
      "Kostenpflichtige Funktionen können als monatliches Abonnement angeboten werden. Der konkrete Leistungsumfang und die Preise ergeben sich aus der jeweils publizierten Angebotsbeschreibung auf der Webseite.",
      "",
      "5. Pflichten der Nutzerinnen und Nutzer",
      "Die Nutzerinnen und Nutzer sind verantwortlich für die korrekte Eingabe der Daten sowie für die Prüfung, ob die generierten Abrechnungen für ihre konkrete Situation geeignet sind. Kantonale Vorgaben, Spezialfälle und individuelle arbeitsrechtliche Situationen sind bei Bedarf separat zu prüfen.",
      "",
      "6. Verfügbarkeit",
      "PutzIT bemüht sich um eine hohe Verfügbarkeit der digitalen Angebote. Ein Anspruch auf ununterbrochene Verfügbarkeit besteht nicht.",
      "",
      "7. Preise und Zahlung",
      "Preise werden in Schweizer Franken (CHF) angegeben. Die Zahlungsabwicklung kann über externe Zahlungsdienstleister erfolgen.",
      "",
      "8. Kündigung",
      "Abonnemente können auf Ende der jeweiligen Abrechnungsperiode gekündigt werden, sofern in der Angebotsbeschreibung nichts anderes vorgesehen ist.",
      "",
      "9. Haftung",
      "Die Haftung der MeiMed GmbH wird, soweit gesetzlich zulässig, ausgeschlossen.",
      "",
      "10. Anwendbares Recht und Gerichtsstand",
      "Es gilt Schweizer Recht. Gerichtsstand ist, soweit gesetzlich zulässig, der Sitz der MeiMed GmbH."
    ].join("\n")
  },
  haftung: {
    title: "Haftungsausschluss",
    text: [
      "PutzIT stellt digitale Hilfsmittel, Informationen und Berechnungen zur Verfügung, um die Lohnabrechnung für Reinigungskräfte in der Schweiz einfacher und verständlicher zu machen.",
      "",
      "Die bereitgestellten Inhalte und Berechnungen werden mit Sorgfalt erstellt. Dennoch können kantonale Vorgaben, persönliche Situationen, Bewilligungsstatus, Versicherungsfragen oder arbeitsrechtliche Spezialfälle zu abweichenden Ergebnissen führen.",
      "",
      "PutzIT ersetzt keine individuelle Rechts-, Steuer-, Versicherungs- oder Treuhandberatung. Nutzerinnen und Nutzer sind verantwortlich, die Angaben vor Verwendung zu prüfen und bei Unsicherheit geeignete Fachstellen beizuziehen.",
      "",
      "Eine Haftung der MeiMed GmbH für direkte oder indirekte Schäden aus der Nutzung der Webseite, der Berechnungen oder der generierten Dokumente wird im gesetzlich zulässigen Umfang ausgeschlossen."
    ].join("\n")
  },
  cookies: {
    title: "Cookie Hinweise",
    text: [
      "PutzIT verwendet technisch notwendige Cookies und vergleichbare Technologien, damit die Webseite sicher und zuverlässig funktioniert.",
      "",
      "Für optionale Analyse- oder Marketingzwecke können zusätzliche Dienste eingesetzt werden, sofern dies rechtlich zulässig ist oder eine entsprechende Einwilligung vorliegt.",
      "",
      "Browser-Cookies können jederzeit über die Einstellungen des verwendeten Browsers gelöscht oder blockiert werden."
    ].join("\n")
  }
};

export default function Legal() {
  const { type } = useParams();
  const page = content[type] || content.impressum;

  return (
    <Layout>
      <main className="max-w-4xl mx-auto px-4 sm:px-5 py-10 sm:py-12">
        <Card>
          <div className="p-6 sm:p-8">
            <div className="text-xs font-bold uppercase tracking-wide mb-3 text-putzit-primary">Rechtliches</div>
            <h1 className="text-3xl sm:text-4xl font-black mb-5">{page.title}</h1>
            <div className="text-sm leading-7 whitespace-pre-line text-putzit-grey">{page.text}</div>
          </div>
        </Card>
      </main>
    </Layout>
  );
}
