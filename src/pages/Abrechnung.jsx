import { useMemo, useRef, useState } from "react";
import Layout from "../components/Layout.jsx";
import PayrollForm from "../components/PayrollForm.jsx";
import { calcPayroll } from "../utils/calc.js";
import { downloadElementAsPdf } from "../utils/pdf.js";

const defaultValues = {
  employerName: "MeiCasa Home Services",
  employerAddress: "Musterstrasse 12, 3007 Bern",
  employeeName: "Maria Fernandes",
  employeeAddress: "Bahnhofstrasse 8, 3011 Bern",
  month: "2026-04",
  hours: 4.75,
  netHourly: 26,
  canton: "BE",
  sourceTaxRate: 5,
  vacationRate: 8.33,
  ahvRate: 5.125,
  alvRate: 1.1,
  nbuActive: false,
  nbuRate: 0,
  expenses: 0,
  payoutDate: "30.04.2026"
};

export default function Abrechnung() {
  const [values, setValues] = useState(defaultValues);
  const [loadingPdf, setLoadingPdf] = useState(false);
  const pdfRef = useRef(null);
  const calculated = useMemo(() => calcPayroll(values), [values]);

  async function handleGeneratePdf() {
    try {
      setLoadingPdf(true);
      await downloadElementAsPdf(pdfRef.current, `putzit-lohnabrechnung-${values.month}.pdf`);
    } catch (error) {
      console.error(error);
      alert("PDF konnte nicht generiert werden.");
    } finally {
      setLoadingPdf(false);
    }
  }

  return (
    <Layout>
      <PayrollForm values={values} setValues={setValues} c={calculated} pdfRef={pdfRef} loadingPdf={loadingPdf} onGeneratePdf={handleGeneratePdf} publicMode />
    </Layout>
  );
}
