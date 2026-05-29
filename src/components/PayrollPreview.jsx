import Card from "./Card.jsx";
import Logo from "./Logo.jsx";
import { CHF, calcPayroll } from "../utils/calc.js";
export default function PayrollPreview({ values }) {
  const c = calcPayroll(values);
  const monthLabel = values.month ? new Date(`${values.month}-01`).toLocaleDateString("de-CH", { month: "long", year: "numeric" }) : "Monat";
  const rows = [
    ["Arbeitsstunden", `${c.hours.toFixed(2)} h`, `CHF ${c.netHourly.toFixed(2)} / h`, CHF.format(c.netTarget)],
    ["Bruttolohn Basis", `${c.hours.toFixed(2)} h`, "rückwärts berechnet", CHF.format(c.baseGross)],
    ["Ferienanteil", `${Number(values.vacationRate).toFixed(2)} %`, "separat ausgewiesen", CHF.format(c.vacationPart)],
    ["Bruttolohn total", "", "", CHF.format(c.grossTotal)],
    ["AHV / IV / EO", `${Number(values.ahvRate).toFixed(3)} %`, "Abzug", `-${CHF.format(c.ahv)}`],
    ["ALV", `${Number(values.alvRate).toFixed(2)} %`, "Abzug", `-${CHF.format(c.alv)}`],
    ["Quellensteuer*", `${Number(values.sourceTaxRate).toFixed(2)} %`, values.canton, `-${CHF.format(c.sourceTax)}`],
    ...(values.nbuActive ? [["NBU", `${Number(values.nbuRate).toFixed(2)} %`, "Abzug", `-${CHF.format(c.nbu)}`]] : []),
    ["Netto Auszahlung Lohn", "", "", CHF.format(c.netPayout)],
    ["Auslagen / Spesen", "", "separat", CHF.format(c.expenses)],
    ["Auszahlung total", "", "", CHF.format(c.totalPayout)]
  ];
  return <Card className="overflow-hidden"><div className="p-5 sm:p-7 border-b" style={{borderColor:"#E6EEF2"}}><div className="flex justify-between gap-4 items-start"><Logo/><div className="text-right text-sm text-putzit-grey"><b className="text-putzit-dark text-lg">Lohnabrechnung</b><br/>{monthLabel}</div></div></div><div className="p-5 sm:p-7"><div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6"><Summary label="Lohnmonat" value={monthLabel}/><Summary label="Arbeitsstunden" value={`${c.hours.toFixed(2)} h`}/><Summary label="Stundenansatz netto" value={`CHF ${c.netHourly.toFixed(2)}`}/><Summary label="Auszahlung total" value={CHF.format(c.totalPayout)} highlight/></div><div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 text-sm"><Address title="Arbeitgeber" name={values.employerName} address={values.employerAddress}/><Address title="Reinigungskraft" name={values.employeeName} address={values.employeeAddress}/></div><div className="table-scroll"><table className="w-full min-w-[680px] text-sm border-collapse"><thead><tr className="bg-putzit-light">{["Position","Ansatz","Basis","Betrag"].map(h=><th key={h} className="text-left p-3 border" style={{borderColor:"#E6EEF2"}}>{h}</th>)}</tr></thead><tbody>{rows.map(row=><tr key={row[0]} className={row[0].includes("total")||row[0].includes("Auszahlung")?"font-bold":""}>{row.map((cell,i)=><td key={`${row[0]}-${i}`} className="p-3 border" style={{borderColor:"#E6EEF2"}}>{cell}</td>)}</tr>)}</tbody></table></div><div className="mt-5 rounded-2xl p-4 bg-putzit-light text-xs leading-relaxed text-putzit-grey">* Quellensteuer kann je nach Status der Reinigungskraft und Abrechnungsverfahren relevant sein. Im vereinfachten Abrechnungsverfahren wird sie in der Regel pauschal über die Ausgleichskasse abgewickelt.</div><div className="mt-3 rounded-2xl p-4 bg-putzit-lightGrey text-xs leading-relaxed text-putzit-grey">Die Berechnung basiert auf den eingegebenen Werten und den hinterlegten Standardansätzen. Kantonale Vorgaben oder individuelle Spezialfälle können abweichen.</div><div className="mt-8 flex flex-col md:flex-row md:justify-between gap-4 text-sm"><div>Auszahlungsdatum: <b>{values.payoutDate}</b></div><div>Unterschrift: ______________________________</div></div></div></Card>;
}
function Summary({label,value,highlight=false}){return <div className={`rounded-2xl p-4 ${highlight?"bg-putzit-primary text-white":"bg-putzit-light"}`}><div className={`text-xs font-semibold uppercase tracking-wide ${highlight?"text-white/80":"text-putzit-grey"}`}>{label}</div><div className="font-black mt-1">{value}</div></div>}
function Address({title,name,address}){return <div className="rounded-2xl p-4 bg-putzit-lightGrey"><b>{title}</b><br/>{name}<br/><span className="text-putzit-grey">{address}</span></div>}
