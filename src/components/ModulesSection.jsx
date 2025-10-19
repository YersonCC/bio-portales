import React, { useEffect, useState } from "react";

export default function ModulesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&h=600&fit=crop",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative bg-white py-20 px-6 flex justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/img/bg-modulos.svg')",
      }}
    >
      {/* 🔳 Degradado sutil de blanco a transparente (mitad inferior) */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/90 to-transparent z-0"></div>

      {/* Contenido */}
      <div className="relative max-w-7xl w-full text-center z-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Módulos</h2>
        <p className="text-gray-500 mb-12">Explora nuestros módulos educativos</p>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop"
                alt="Biodiversidad"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div className="p-7 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Protectores de la Biodiversidad
              </h3>
              <p className="text-gray-500 mb-4">
                Aprende sobre la biodiversidad local.
              </p>
              <div className="flex gap-2 mb-6">
                <span className="bg-gray-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium border border-gray-200">
                  🦋 Fauna
                </span>
              </div>
              <a
                href="/protectores"
                className="bg-[#4DA428] text-white py-3 rounded-xl font-semibold hover:bg-[#3e8b1d] transition-all shadow-md hover:shadow-lg mt-auto"
              >
                ¡Explorar!
              </a>
            </div>
          </div>

          {/* Card 2 con carrusel */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">
            <div className="relative h-64 overflow-hidden">
              <div
                className="flex w-full h-full transition-transform duration-700"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="min-w-full h-full object-cover"
                  />
                ))}
              </div>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`transition-all cursor-pointer ${
                      index === currentIndex
                        ? "w-6 h-2 rounded bg-white"
                        : "w-2 h-2 rounded-full bg-white/50"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  ></div>
                ))}
              </div>
            </div>
            <div className="p-7 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Bioportal</h3>
              <p className="text-gray-500 mb-4">
                Explora los módulos interactivos del proyecto.
              </p>
              <div className="flex gap-2 mb-6">
                <span className="bg-gray-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium border border-gray-200">
                  🌿 Flora
                </span>
              </div>
              <a
                href="/bioportal"
                className="bg-[#4DA428] text-white py-3 rounded-xl font-semibold hover:bg-[#3e8b1d] transition-all shadow-md hover:shadow-lg mt-auto"
              >
                ¡Explorar!
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=800&h=600&fit=crop"
                alt="Fauna Guard"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div className="p-7 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">FAUNA GUARD</h3>
              <p className="text-gray-500 mb-4">
                Conoce las especies protegidas y su importancia ecológica.
              </p>
              <div className="flex gap-2 mb-6">
                <span className="bg-gray-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium border border-gray-200">
                  🐾 Conservación
                </span>
              </div>
              <a
                href="/faunaguard"
                className="bg-[#4DA428] text-white py-3 rounded-xl font-semibold hover:bg-[#3e8b1d] transition-all shadow-md hover:shadow-lg mt-auto"
              >
                ¡Explorar!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
