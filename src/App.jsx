import "./App.scss";
import CanvasThree from "./components/CanvasThree";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { useState } from "react";
import Loading from "./components/Loading";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <BrowserRouter>
      <div className='App'>
        <CanvasThree setIsLoading={setIsLoading} />
        {isLoading ? <Loading /> : <AnimatedRoutes />}
      </div>
    </BrowserRouter>
  );
};

export default App;
