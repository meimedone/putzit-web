import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Abrechnung from "./pages/Abrechnung.jsx";
import HowTo from "./pages/HowTo.jsx";
import Kontakt from "./pages/Kontakt.jsx";
import Login from "./pages/Login.jsx";
import Legal from "./pages/Legal.jsx";
import Dashboard from "./pages/Dashboard.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/abrechnung" element={<Abrechnung />} />
      <Route path="/howto" element={<HowTo />} />
      <Route path="/kontakt" element={<Kontakt />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/rechtliches/:type" element={<Legal />} />
    </Routes>
  );
}
