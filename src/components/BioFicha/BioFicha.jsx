import React from "react";

import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import { fichaData } from "./data";

export default function BioFicha() {
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    { id: "general", label: "General", icon: "🏠" },
    { id: "taxonomia", label: "Taxonomía", icon: "🧬" },
    { id: "fisico", label: "Físico", icon: "🦣" },
    { id: "alimentacion", label: "Alimentación", icon: "🌿" },
    { id: "comportamiento", label: "Comportamiento", icon: "🌙" },
    { id: "reproduccion", label: "Reproducción", icon: "👶" },
    { id: "conservacion", label: "Conservación", icon: "🛡️" },
    { id: "distribucion", label: "Distribución", icon: "🗺️" },
    
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <Header
        comun={fichaData.comun}
        cient={fichaData.cient}
        frase={fichaData.frase}
        estado={fichaData.estado}
      />

      <div className="grid md:grid-cols-[260px_1fr] gap-4 mt-4">
        <Sidebar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        <MainContent activeTab={activeTab} data={fichaData} />
      </div>
    </div>
  );
}
