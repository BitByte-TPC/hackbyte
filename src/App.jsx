import "./App.scss";
import CanvasThree from "./components/CanvasThree";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
function App() {
  return (
    <div className='App'>
      <CanvasThree />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='faq' element={<FAQ />} />
      </Routes>
    </div>
  );
}

export default App;
