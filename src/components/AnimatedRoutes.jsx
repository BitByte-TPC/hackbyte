import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home";
import About from "../pages/About";
import FAQ from "../pages/FAQ";
import Prizes from "../pages/Prizes";
import SponsorUs from "../pages/SponsorUs";
import NotFound from "../pages/NotFound";
export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='faq' element={<FAQ />} />
        <Route path='prizes' element={<Prizes />} />
        <Route path='sponsor-us' element={<SponsorUs />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
