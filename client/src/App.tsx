import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Histoire from "./pages/Histoire";
import Carte from "./pages/Carte";
import Galerie from "./pages/Galerie";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/histoire" element={<Histoire />} />
        <Route path="/carte" element={<Carte />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
