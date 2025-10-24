import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="w-full bg-[#4DA428] shadow-sm relative z-50">
      <div className="container mx-auto flex justify-center py-6">
        <ul className="flex space-x-8 text-white font-medium">
          {/* INICIO */}
          <li>
            <Link
              to="/"
              className="hover:text-white border-b-2 border-transparent hover:border-white pb-1 transition"
            >
              Inicio
            </Link>
          </li>

          {/* Portales */}
          <li className="relative">
            <button
              onClick={toggleMenu}
              className="flex items-center space-x-1 hover:text-white border-b-2 border-transparent hover:border-white pb-1 transition focus:outline-none"
            >
              <span>Portales</span>
              {menuOpen ? (
                <ChevronUp size={16} className="mt-0.5" />
              ) : (
                <ChevronDown size={16} className="mt-0.5" />
              )}
            </button>

            {menuOpen && (
              <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-64 text-sm z-50">
                <li>
                  <Link
                    to="/protectores"
                    className="block px-4 py-2 text-[#4DA428] hover:bg-[#4DA428]/10 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    Protectores de la Biodiversidad
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bioportal"
                    className="block px-4 py-2 text-[#4DA428] hover:bg-[#4DA428]/10 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    BioPortal
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faunaguard"
                    className="block px-4 py-2 text-[#4DA428] hover:bg-[#4DA428]/10 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    FaunaGuard
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* CRÉDITOS */}
          <li>
            <Link
              to="/creditos"
              className="hover:text-white border-b-2 border-transparent hover:border-white pb-1 transition"
            >
              Créditos
            </Link>
          </li>
        </ul>
      </div>

      {/* Cerrar el menú si se hace clic fuera */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
}