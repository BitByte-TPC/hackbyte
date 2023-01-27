import "./App.scss";
import CanvasThree from "./components/CanvasThree";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import CanvasRoute from "./components/CanvasRoute";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <BrowserRouter>
      <div className='App'>
        <CanvasRoute setIsLoading={setIsLoading} />
        {isLoading ? <Loading /> : <AnimatedRoutes />}
      </div>
    </BrowserRouter>
  );
};

export default App;
