import "./App.scss";
import CanvasThree from "./components/CanvasThree";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <CanvasThree />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
};

export default App;
