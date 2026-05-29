import PublicNav from "./PublicNav.jsx";
import Footer from "./Footer.jsx";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #fff, #F4F6F8, #E6F7F3)" }}>
      <PublicNav />
      {children}
      <Footer />
    </div>
  );
}
