export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-[28px] border shadow-soft ${className}`} style={{ borderColor: "#F4F6F8" }}>
      {children}
    </div>
  );
}
