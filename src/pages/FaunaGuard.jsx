import React from "react";
import Quiz from "@/components/Quiz.jsx";

export default function FaunaGuard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-center text-4xl font-bold text-emerald-800 mb-8">
          🦎 Fauna Guard
        </h1>
        
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <p className="text-gray-700 text-center mb-6">
            Aprende sobre la fauna silvestre y pon a prueba tus conocimientos
          </p>
          <Quiz />
        </div>
      </div>
    </div>
  );
}