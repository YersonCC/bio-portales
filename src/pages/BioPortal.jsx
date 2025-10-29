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
        Registros de Biodiversidad en BioPortal
      </h1>
    </div>
  );
}