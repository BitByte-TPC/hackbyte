import "./App.scss";
import CanvasThree from "./components/CanvasThree";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Prizes from "./pages/Prizes";
import SponsorUs from "./pages/SponsorUs";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div className="App">
      <CanvasThree />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="prizes" element={<Prizes />} />
        <Route path="sponsor-us" element={<SponsorUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
