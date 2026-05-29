export default function Logo({ compact = false, inverted = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className={inverted ? "bg-white rounded-2xl p-1.5 shadow-sm" : ""}>
        <img src="/icon-180.png" alt="PutzIT Icon" className={compact ? "w-9 h-9 object-contain" : "w-12 h-12 object-contain"} />
      </div>
      <div className="leading-tight">
        <div className={`${compact ? "text-xl" : "text-3xl"} font-black tracking-tight ${inverted ? "text-white" : "text-putzit-dark"}`}>
          Putz<span className="text-putzit-primary">IT</span>
        </div>
        {!compact ? <div className={inverted ? "text-[11px] font-semibold text-white/70" : "text-[11px] font-semibold text-putzit-grey"}>Einfach. Sauber. Erledigt.</div> : null}
      </div>
    </div>
  );
}
