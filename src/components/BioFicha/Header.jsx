import React from "react";

export default function Header({ comun, cient, frase, estado }) {
  return (
    <header className="rounded-2xl p-6 bg-gradient-to-br from-emerald-200/40 to-orange-200/40 border border-black/10 shadow-md">
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
        🐾 {comun}{" "}
        <span className="text-gray-600 font-normal text-lg">
          ({cient})
        </span>
      </h1>
      <p className="text-gray-600 mt-2">{frase}</p>
      <div className="inline-flex items-center gap-2 text-sm bg-orange-100 border border-black/10 rounded-full px-3 py-1 mt-3 text-orange-600">
        ⚠️ <b>{estado}</b>
      </div>
    </header>
  );
}
