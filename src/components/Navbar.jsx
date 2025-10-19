import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="container mx-auto flex justify-center py-4">
        <ul className="flex space-x-8 text-gray-800 font-medium">
          {/* INICIO */}
          <li>
            <Link
              to="/"
              className="hover:text-green-600 border-b-2 border-transparent hover:border-green-600 pb-1 transition"
            >
              Inicio
            </Link>
          </li>

          {/* MÓDULOS */}
          <li
            className="relative"
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <button className="flex items-center space-x-1 hover:text-green-600 border-b-2 border-transparent hover:border-green-600 pb-1 transition">
              <span>Modulos</span>
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
                    className="block px-4 py-2 text-green-700 hover:bg-green-50 transition"
                  >
                    Protectores de la Biodiversidad
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bioportal"
                    className="block px-4 py-2 text-green-700 hover:bg-green-50 transition"
                  >
                    BioPortal
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faunaguard"
                    className="block px-4 py-2 text-green-700 hover:bg-green-50 transition"
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
              className="hover:text-green-600 border-b-2 border-transparent hover:border-green-600 pb-1 transition"
            >
              Créditos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
