import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home";
import About from "../pages/About";
import Events from "../pages/Events";
import Prizes from "../pages/Prizes";
import SponsorUs from "../pages/SponsorUs";
import Team from "../pages/Team";
import NotFound from "../pages/NotFound";
import Speakers from "../pages/Speakers";
import OfflineRegistration from "../pages/OfflineRegistration";

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Events />} />
        <Route path="prizes" element={<Prizes />} />
        <Route path="sponsors" element={<SponsorUs />} />
        <Route path="offline-registration" element={<OfflineRegistration />} />
        <Route path="team" element={<Team />} />
        <Route path="speakers" element={<Speakers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
