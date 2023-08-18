import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.jsx";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routers/routers";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  </React.StrictMode>
);
