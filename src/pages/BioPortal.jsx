import React from "react";
import { useState } from "react";
import BioFicha from "../components/BioFicha/BioFicha";

export default function BioPortal() {
  const [open, setOpen] = useState(false);

  const especies = [
    {
      id: 1,
      nombre: "Danta de Montaña",
      cientifico: "Tapirus pinchaque",
      imagen: "/img/danta.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Especies Registradas
      </h1>

      {/* GRID DE CARDS */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {especies.map((especie) => (
          <div
            key={especie.id}
            className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center"
          >
            <img
              src={especie.imagen}
              alt={especie.nombre}
              className="w-full h-56 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">
              {especie.nombre}
            </h2>
            <p className="text-sm text-gray-500 italic mb-4">
              {especie.cientifico}
            </p>
            <button
              onClick={() => setOpen(true)}
              className="bg-[#4DA428] text-white px-6 py-2 rounded-xl hover:bg-[#3e8b1d] transition w-full"
            >
              Ver ficha
            </button>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
          <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto">
            {/* BOTÓN CERRAR */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-700"
            >
              ✕
            </button>

            {/* FICHA */}
            <div className="p-6">
              <BioFicha />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

