import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Loading from "./components/Loading";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
// import { lazy } from "react";

// const App = lazy(() => import("./App"));
import App from "./App";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </BrowserRouter>
);
