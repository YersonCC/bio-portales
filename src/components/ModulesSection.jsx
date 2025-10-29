import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Portales</h2>
        <p className="text-gray-500 mb-12">Explora nuestros portales educativos</p>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 - Mapa */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">
            <div className="relative h-64 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127488.54088344544!2d-76.11635304999999!3d1.8538889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e257254e6f006ab%3A0x7b7c58b5de3e3e8e!2sPitalito%2C%20Huila!5e0!3m2!1ses!2sco!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: 'none' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Pitalito, Huila"
              ></iframe>
              <div className="absolute inset-0 cursor-default"></div>
            </div>
            <div className="p-7 flex flex-col flex-grow justify-center items-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                PROTECTORES DE LA BIODIVERSIDAD
              </h3>
              <p className="text-gray-500 mb-4">
                Explora los Ecosistemas estratégicos de Pitalito
              </p>
              <div className="flex gap-2 mb-6">
                <span className="bg-gray-100 text-green-600 px-3 py-1 rounded-xl text-sm font-medium border border-gray-200">
                  ¡Anímate a navegar por el territorio!
                </span>
              </div>
              <Link
                to="/protectores"
                className="bg-[#4DA428] text-white py-3 rounded-xl font-semibold hover:bg-[#3e8b1d] transition-all shadow-md hover:shadow-lg mt-auto w-full text-center"
              >
                ¡Explorar!
              </Link>
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
                    className={`transition-all cursor-pointer ${index === currentIndex
                        ? "w-6 h-2 rounded bg-white"
                        : "w-2 h-2 rounded-full bg-white/50"
                      }`}
                    onClick={() => setCurrentIndex(index)}
                  ></div>
                ))}
              </div>
            </div>
            <div className="p-7 flex flex-col flex-grow justify-center items-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">BIOPORTAL</h3>
              <p className="text-gray-500 mb-4">
                Conoce los registros estadísticos de la fauna presente en Pitalito
              </p>
              <div className="flex gap-2 mb-6">
                <span className="bg-gray-100 text-green-600 px-3 py-1 rounded-xl text-sm font-medium border border-gray-200">
                  ¡Explora datos actualizados sobre biodiversidad local!
                </span>
              </div>
              <Link
                to="/bioportal"
                className="bg-[#4DA428] text-white py-3 rounded-xl font-semibold hover:bg-[#3e8b1d] transition-all shadow-md hover:shadow-lg mt-auto w-full text-center"
              >
                ¡Consulta los registros!
              </Link>
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
            <div className="p-7 flex flex-col flex-grow justify-center items-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">FAUNA GUARD</h3>
              <p className="text-gray-500 mb-4">
                Reporta accidentes o incidentes relacionados con fauna silvestre
              </p>
              <div className="flex gap-2 mb-6">
                <span className="bg-gray-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium border border-gray-200">
                  ¡Ayuda a proteger nuestra biodiversidad!
                </span>
              </div>
              <Link
                to="/faunaguard"
                className="bg-[#4DA428] text-white py-3 rounded-xl font-semibold hover:bg-[#3e8b1d] transition-all shadow-md hover:shadow-lg mt-auto w-full text-center"
              >
                ¡Reporta un caso!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}