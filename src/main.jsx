import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Loading from "./components/Loading";
import "./index.scss";
import { lazy } from "react";

const App = lazy(() => import("./App"));
ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={<Loading />}>
    <App />
  </Suspense>
);
