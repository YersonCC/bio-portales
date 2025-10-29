import React, { useState } from "react";
import BiodiversityMap from "../components/BiodiversityMap";
import BioFicha from "../components/BioFicha/BioFicha";
import Pagination from "../components/Pagination";
import Quiz from "@/components/Quiz.jsx";
import { especiesData } from "../data/data";
import { Search, Home, X, Leaf, Target, AlertTriangle, BookOpen, TrendingUp, Lightbulb, GitBranch } from "lucide-react";

export default function Protectores() {
  // Estados para BioPortal
  const [open, setOpen] = useState(false);
  const [especieSeleccionada, setEspecieSeleccionada] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Estados para el menú lateral
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [popoverPosition, setPopoverPosition] = useState({ top: 0 });

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

  // Datos del menú lateral
  const menuItems = [
    {
      id: 1,
      icon: <Leaf size={24} />,
      title: "¿Qué es?",
      content: (
        <div className="space-y-3">
          <p className="text-gray-700 leading-relaxed">
            <strong>Protectores de la biodiversidad</strong> es una estrategia didáctica interactiva que destaca la importancia de la biodiversidad identificada en el municipio de Pitalito, para la conservación de los ecosistemas estratégicos en la comunidad.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Cuenta con recursos innovadores, interactivos y materiales didácticos digitales, que facilitarán la comprensión y el compromiso de la comunidad con la protección de la biodiversidad y del medio ambiente.
          </p>
        </div>
      )
    },
    {
      id: 2,
      icon: <Target size={24} />,
      title: "Objetivos",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Objetivo General:</h4>
            <p className="text-gray-700 leading-relaxed">
              Reconocer la Biodiversidad en Ecosistemas Estratégicos desde la educación y cultura ambiental en el Municipio de Pitalito Huila.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Objetivo Específico:</h4>
            <p className="text-gray-700 leading-relaxed">
              Fortalecer el conocimiento e importancia de la biodiversidad identificada, para la conservación de los ecosistemas estratégico del municipio de Pitalito Huila, mediante la exploración, sensibilización, educación y cultura ambiental en la comunidad en general.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      icon: <AlertTriangle size={24} />,
      title: "Problemática",
      content: (
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-800 mb-3">Problemática General Encontrada:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm leading-relaxed">
            <li>Dificultades conceptuales. Poco desarrollo de procesos de construcción del conocimiento ambiental significativo.</li>
            <li>Descontextualización social y cultural de proyectos y propuestas ambientales.</li>
            <li>Dicotomía entre la teoría ambiental y las estrategias educativas.</li>
            <li>Compartimentalización en el proceso educativo.</li>
            <li>Ausencia de procesos educativos secuenciales.</li>
            <li>Muy poco trabajo crítico y reflexivo en el quehacer docente y de entidades ambientales.</li>
            <li>Dificultades en la construcción de situaciones pedagógicas y didácticas.</li>
            <li>Poca proyección de la escuela a la comunidad.</li>
            <li>Activismo ecológico (actividades atomizadas).</li>
            <li>Ausencia de investigaciones en educación ambiental.</li>
          </ul>
        </div>
      )
    },
    {
      id: 4,
      icon: <BookOpen size={24} />,
      title: "Pilares de la Educación",
      content: (
        <div className="space-y-3">
          <h4 className="font-semibold text-gray-800 mb-3">Pilares de la Educación Integral:</h4>
          <div className="space-y-2 text-gray-700">
            <p><strong>1. Aprender a aprender:</strong> Aprendizaje de toda la vida frente al cuidado del medio ambiente.</p>
            <p><strong>2. Aprender a hacer:</strong> Conocimiento y actitudes para el saber hacer en contextos locales.</p>
            <p><strong>3. Aprender a ser:</strong> Aceptación y reconocimiento del otro respecto a las diferencias.</p>
            <p><strong>4. Aprender a convivir:</strong> Con todas las especies del planeta, entre los seres humanos y todas las representaciones de vida.</p>
          </div>
        </div>
      )
    },
    {
      id: 5,
      icon: <TrendingUp size={24} />,
      title: "Proyección",
      content: (
        <div className="space-y-3">
          <h4 className="font-semibold text-gray-800 mb-2">"Comunicación - Participación de los Actores"</h4>
          <p className="font-medium text-gray-800">Resolución de Problemas:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Lectura del contexto</li>
            <li>Construcción de explicaciones para la comprensión de los problemas ambientales</li>
            <li>Diálogo de saberes</li>
            <li>Trabajo interdisciplinario</li>
            <li>La investigación</li>
          </ul>
        </div>
      )
    },
    {
      id: 6,
      icon: <Lightbulb size={24} />,
      title: "Conceptualización",
      content: (
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-800 mb-2">Para la Comprensión de los Problemas Ambientales:</h4>
          <ul className="list-decimal pl-5 space-y-1 text-gray-700 text-sm">
            <li>Concepto de interacción ser humano - ecosistemas</li>
            <li>Relación ciencia – tecnología – sociedad</li>
            <li>El enfoque integrador para la comprensión de los problemas ambientales</li>
            <li>Los individuos como seres naturales y sociales</li>
            <li>El concepto de sostenibilidad</li>
            <li>Monitoreo de la biodiversidad</li>
            <li>Cuidado y conservación biodiversidad</li>
            <li>Servicios ecosistémicos</li>
            <li>Restauración ecológica</li>
            <li>Sucesión ecológica</li>
            <li>Conectividad</li>
            <li>Pago por servicios ambientales</li>
            <li>La escuela como institución social</li>
            <li>La escuela facilitadora de la formación integral</li>
            <li>La proyección comunitaria como proceso de gestión</li>
          </ul>
        </div>
      )
    },
    {
      id: 7,
      icon: <GitBranch size={24} />,
      title: "Fases",
      content: (
        <div className="space-y-3">
          <h4 className="font-semibold text-gray-800 mb-2">HUELLA Y VIDA, EL VÍNCULO ENTRE HUMANOS Y ECOSISTEMAS</h4>
          <ol className="list-decimal pl-5 space-y-2 text-gray-700">
            <li>Exploración de los ecosistemas estratégicos</li>
            <li>Profundización: Pedagogía ambiental "Estética del pensamiento ambiental"</li>
            <li>Actividades participativas y educativas</li>
          </ol>
          <div className="mt-4 pt-3 border-t border-gray-200">
            <p className="font-medium text-gray-800 mb-2">Objetivos:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
              <li>Aprender a convivir con todas las especies del planeta</li>
              <li>Incrementar conciencia ambiental y fomentar prácticas sostenibles</li>
              <li>Involucrar a la comunidad en iniciativas de conservación</li>
              <li>Participar en actividades interactivas de sensibilización</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  const handleMenuClick = (item, event) => {
    const buttonRect = event.currentTarget.getBoundingClientRect();
    setPopoverPosition({ top: buttonRect.top });
    setSelectedMenu(selectedMenu === item.id ? null : item.id);
  };

  return (
    <div className="w-full flex">
      {/* MENÚ LATERAL IZQUIERDO */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-[9999] flex flex-col gap-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={(e) => handleMenuClick(item, e)}
            className={`w-14 h-14 rounded-full bg-gray-200 hover:bg-gray-300 transition flex items-center justify-center shadow-lg ${
              selectedMenu === item.id ? 'bg-[#4DA428] text-white' : 'text-gray-700'
            }`}
            title={item.title}
          >
            {item.icon}
          </button>
        ))}
      </div>

      {/* POPOVER */}
      {selectedMenu && (
        <>
          {/* Overlay para cerrar al hacer clic fuera */}
          <div
            className="fixed inset-0 z-[9998]"
            onClick={() => setSelectedMenu(null)}
          />
          
          {/* Contenido del popover */}
          <div
            className="fixed left-24 z-[9999] bg-white rounded-xl shadow-2xl p-6 w-96 max-h-[80vh] overflow-y-auto border border-gray-200"
            style={{ top: `${popoverPosition.top}px` }}
          >
            <button
              onClick={() => setSelectedMenu(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
            <h3 className="text-xl font-semibold text-[#4DA428] mb-4">
              {menuItems.find(item => item.id === selectedMenu)?.title}
            </h3>
            <div className="text-gray-600 leading-relaxed">
              {menuItems.find(item => item.id === selectedMenu)?.content}
            </div>
          </div>
        </>
      )}

      {/* CONTENIDO PRINCIPAL */}
      <div className="w-full">
        {/* SECCIÓN 1: PROTECTORES DE LA BIODIVERSIDAD (Original) */}
        <section className="w-full py-12 px-6">
          <h2 className="text-center font-semibold text-4xl text-gray-800">
            Protectores de la Biodiversidad
          </h2>
          <p className="text-center mt-2 text-2xl text-gray-600">
            "Reconocimiento de la Biodiversidad en Ecosistemas Estratégicos de Pitalito"
          </p>
          <BiodiversityMap />
        </section>

        {/* SECCIÓN 2: BIOPORTAL - ESPECIES REGISTRADAS */}
        <section className="min-h-screen bg-gray-50 py-12 px-6">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Especies Registradas
          </h1>

          {/* Barra de búsqueda */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar por nombre común o científico..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#4DA428] bg-white text-gray-800 placeholder-gray-500"
              />
              <Search
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>

          {/* Grid de cards */}
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

          {/* Paginación */}
          {totalPages > 1 && (
            <Pagination
              totalItems={filteredEspecies.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          )}

          {/* Modal de ficha */}
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
        </section>

        {/* SECCIÓN 3: FAUNAGUARD - QUIZ */}
        <section className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-center text-4xl font-bold text-[#3e8b1d] mb-8">
              QUIZ
            </h1>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <p className="text-gray-700 text-center mb-6">
                Aprende sobre la fauna silvestre y pon a prueba tus conocimientos
              </p>
              <Quiz />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}