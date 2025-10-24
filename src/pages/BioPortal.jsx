import React, { useState } from "react";
import BioFicha from "../components/BioFicha/BioFicha";
import { especiesData } from "../data/data";
import { Search } from "lucide-react";
import Pagination from "../components/Pagination"; // Ajusta la ruta según tu estructura

export default function BioPortal() {
  const [open, setOpen] = useState(false);
  const [especieSeleccionada, setEspecieSeleccionada] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // 2 filas x 3 columnas = 6 cards

  const handleVerFicha = (especie) => {
    setEspecieSeleccionada(especie);
    setOpen(true);
  };

  const filteredEspecies = especiesData.filter((especie) =>
    especie.comun.toLowerCase().includes(searchTerm.toLowerCase()) ||
    especie.cient.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredEspecies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentEspecies = filteredEspecies.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Especies Registradas
      </h1>

      {/* BARRA DE BÚSQUEDA */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar por nombre común o científico..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#4DA428] bg-white text-gray-800 placeholder-gray-500"
          />
          <Search
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
      </div>

      {/* GRID DE CARDS */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
        {currentEspecies.map((especie) => (
          <div
            key={especie.id}
            className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center"
          >
            <img
              src={especie.imagen}
              alt={especie.comun}
              className="w-full h-56 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">
              {especie.comun}
            </h2>
            <p className="text-sm text-gray-500 italic mb-4">
              {especie.cient}
            </p>
            <button
              onClick={() => handleVerFicha(especie)}
              className="bg-[#4DA428] text-white px-6 py-2 rounded-xl hover:bg-[#3e8b1d] transition w-full"
            >
              Ver ficha
            </button>
          </div>
        ))}
      </div>

      {/* PAGINACIÓN */}
      {totalPages > 1 && (
        <Pagination
          totalItems={filteredEspecies.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}

      {/* MODAL */}
      {open && especieSeleccionada && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
          <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-700"
            >
              ✕
            </button>
            <div className="p-6">
              <BioFicha data={especieSeleccionada} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}