import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import "leaflet/dist/leaflet.css";


// Páginas
import HomePage from "./pages/HomePage";
import Protectores from "./pages/Protectores";
import BioPortal from "./pages/BioPortal";
import FaunaGuard from "./pages/FaunaGuard";
import Creditos from "./pages/Creditos";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/protectores" element={<Protectores />} />
        <Route path="/bioportal" element={<BioPortal />} />
        <Route path="/faunaguard" element={<FaunaGuard />} />
        <Route path="/creditos" element={<Creditos />} />
      </Routes>
    </App>
  </BrowserRouter>
);
