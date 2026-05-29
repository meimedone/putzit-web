export const CHF = new Intl.NumberFormat("de-CH", { style: "currency", currency: "CHF" });

export function round(value) {
  return Math.round((Number(value || 0) + Number.EPSILON) * 100) / 100;
}

export function calcPayroll(values) {
  const hours = Number(values.hours || 0);
  const netHourly = Number(values.netHourly || 0);
  const netTarget = round(hours * netHourly);
  const deductionRate =
    Number(values.ahvRate || 0) / 100 +
    Number(values.alvRate || 0) / 100 +
    Number(values.sourceTaxRate || 0) / 100 +
    (values.nbuActive ? Number(values.nbuRate || 0) / 100 : 0);

  const grossTotal = round(netTarget / Math.max(0.01, 1 - deductionRate));
  const vacationRate = Number(values.vacationRate || 0);
  const vacationPart = round(grossTotal * (vacationRate / (100 + vacationRate)));
  const baseGross = round(grossTotal - vacationPart);
  const ahv = round(grossTotal * Number(values.ahvRate || 0) / 100);
  const alv = round(grossTotal * Number(values.alvRate || 0) / 100);
  const sourceTax = round(grossTotal * Number(values.sourceTaxRate || 0) / 100);
  const nbu = values.nbuActive ? round(grossTotal * Number(values.nbuRate || 0) / 100) : 0;
  const netPayout = round(grossTotal - ahv - alv - sourceTax - nbu);
  const expenses = round(values.expenses || 0);

  return { hours, netHourly, netTarget, grossTotal, vacationPart, baseGross, ahv, alv, sourceTax, nbu, netPayout, expenses, totalPayout: round(netPayout + expenses) };
}
