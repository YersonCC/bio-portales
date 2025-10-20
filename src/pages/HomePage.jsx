import React from "react";
import ModulesSection from "../components/ModulesSection";

export default function HomePage() {
  return (
    <>
      {/* Banner con video */}
      <section className="relative h-[40vh] flex items-center justify-center text-center overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/video/oso.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-white">
          <h1 className="text-6xl font-extrabold tracking-wide">BIODIVERSIDAD</h1>
          <h2 className="text-3xl font-semibold mt-2">PITALITO</h2>
        </div>
      </section>

      {/* sección de módulos */}
      <ModulesSection />

      <section className="relative py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">CRÉDITOS</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 items-center justify-items-center">
            <div className="flex items-center justify-center w-full h-32 transition-transform duration-300 hover:scale-110">
              <img 
                src="/img/IE_Humberto.png" 
                alt="IE Humberto Muñoz Ordóñez" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            
            <div className="flex items-center justify-center w-full h-32 transition-transform duration-300 hover:scale-110">
              <img 
                src="/img/Logouniamazonia.png" 
                alt="Logo Amazonía" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            
            <div className="flex items-center justify-center w-full h-32 transition-transform duration-300 hover:scale-110 col-span-2 md:col-span-1">
              <img 
                src="/img/pitalito.png" 
                alt="Pitalito" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
