import React from "react";

export default function MainContent({ activeTab, data }) {
  return (
    <main className="bg-white border border-black/10 rounded-xl p-4 shadow-sm min-h-[500px]">
      {activeTab === "general" && (
        <section>
          <h3 className="text-lg font-semibold text-orange-500 mb-2">
            💡 Identidad
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p><strong>Nombre común:</strong> {data.comun}</p>
              <p><strong>Nombre científico:</strong> {data.cient}</p>
              <p><strong>Frase:</strong> {data.frase}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-emerald-50 text-emerald-700 text-sm px-3 py-1 rounded-full">
                  Herbívoro
                </span>
                <span className="bg-emerald-50 text-emerald-700 text-sm px-3 py-1 rounded-full">
                  Andes
                </span>
                <span className="bg-emerald-50 text-emerald-700 text-sm px-3 py-1 rounded-full">
                  Dispersor de semillas
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-500">
                👥 Estructura social
              </h3>
              <p>{data.social}</p>
              <div className="relative mt-3 perspective-[1000px] h-32 group">
                <div className="absolute inset-0 transition-transform duration-500 transform group-hover:rotate-y-180">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-200/40 to-orange-200/40 rounded-xl border border-black/10 backface-hidden">
                    Pasa el cursor 👉 para ver un dato
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-200/40 to-orange-200/40 rounded-xl border border-black/10 backface-hidden transform rotate-y-180">
                    Esta especie es un símbolo importante de la biodiversidad andina y ayuda a <b>dispersar semillas</b>.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === "taxonomia" && (
        <section>
          <h3 className="text-lg font-semibold text-orange-500 mb-2">
            🧬 Taxonomía
          </h3>
          <p><strong>Clase:</strong> {data.clase}</p>
          <p><strong>Orden:</strong> {data.orden}</p>
          <p><strong>Familia:</strong> {data.familia}</p>
          <p><strong>Otros nombres:</strong> {data.otros}</p>
        </section>
      )}

      {activeTab === "fisico" && (
        <section>
          <h3 className="text-lg font-semibold text-orange-500 mb-2">
            🦣 Descripción Física
          </h3>
          <ul className="list-disc pl-5">
            {data.aspecto.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
          <p className="mt-3"><strong>Talla:</strong> {data.talla}</p>
          <p><strong>Peso:</strong> {data.peso}</p>
        </section>
      )}

      {activeTab === "alimentacion" && (
        <section>
          <h3 className="text-lg font-semibold text-orange-500 mb-2">
            🍃 Alimentación & Hábitat
          </h3>
          <p><strong>Alimentación:</strong> {data.alimentacion}</p>
          <p><strong>Hábitat:</strong> {data.habitat}</p>
        </section>
      )}

      {activeTab === "comportamiento" && (
        <section>
          <h3 className="text-lg font-semibold text-orange-500 mb-2">
            🌙 Comportamiento
          </h3>
          <p>{data.actividad}</p>
        </section>
      )}

      {activeTab === "reproduccion" && (
        <section>
          <h3 className="text-lg font-semibold text-orange-500 mb-2">
            👶 Reproducción
          </h3>
          <p><strong>Gestación:</strong> {data.gestacion}</p>
          <p><strong>Crías:</strong> {data.crias}</p>
        </section>
      )}

      {activeTab === "conservacion" && (
        <section>
          <h3 className="text-lg font-semibold text-orange-500 mb-2">
            🛡️ Conservación
          </h3>
          <p>{data.conservacion}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {data.amenazas.map((a, i) => (
              <span
                key={i}
                className="bg-emerald-50 text-emerald-700 text-sm px-3 py-1 rounded-full"
              >
                {a}
              </span>
            ))}
          </div>
        </section>
      )}

      {activeTab === "distribucion" && (
        <section>
          <h3 className="text-lg font-semibold text-orange-500 mb-2">
            🗺️ Distribución
          </h3>
          <p>{data.distribucion}</p>
        </section>
      )}

    </main>
  );
}
