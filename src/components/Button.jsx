export default function Button({ children, onClick, secondary = false, type = "button", className = "" }) {
  const style = secondary
    ? { background: "white", color: "#071A2F", border: "1px solid #00AFA8" }
    : { background: "linear-gradient(135deg, #00AFA8, #55D6B7)", color: "white", boxShadow: "0 12px 28px rgba(0,175,168,.25)" };
  return <button type={type} onClick={onClick} className={`rounded-2xl px-5 py-3 text-sm font-bold transition active:scale-[0.99] min-h-[44px] ${className}`} style={style}>{children}</button>;
}
