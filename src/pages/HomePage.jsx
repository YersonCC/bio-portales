import React from "react";
import ModulesSection from "../components/ModulesSection";

export default function HomePage() {
  return (
    <>
      {/* Banner con video */}
      <section className="relative h-[40vh] flex items-center justify-center text-center overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/assets/video/banner.mp4"
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

      {/* Nueva sección de módulos */}
      <ModulesSection />
    </>
  );
}
