import { useState } from "react";
import React from "react";

export default function Quiz() {
  const QUESTIONS = [
    {
      q: "¿Cuál es su dieta principal?",
      a: ["Carnívoro", "Omnívoro", "Herbívoro", "Insectívoro"],
      c: 2,
    },
    {
      q: "¿En qué horario es más activo?",
      a: ["Diurno", "Nocturno", "Crepuscular", "Siempre"],
      c: 1,
    },
    {
      q: "¿Cuál es su estado de conservación?",
      a: ["Preocupación menor", "Casi amenazada", "Vulnerable", "En peligro"],
      c: 3,
    },
    {
      q: "¿Cuánto dura aproximadamente la gestación?",
      a: ["6 meses", "9 meses", "13 meses", "18 meses"],
      c: 2,
    },
    {
      q: "¿Qué función ecológica cumple al comer frutos?",
      a: ["Polinización", "Dispersión de semillas", "Control de plagas", "Ninguna"],
      c: 1,
    },
  ];

  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);

  const handleAnswer = (qIndex, oIndex) => {
    if (answers[qIndex] !== undefined) return;
    const isCorrect = oIndex === QUESTIONS[qIndex].c;
    setAnswers({ ...answers, [qIndex]: oIndex });
    if (isCorrect) setScore(score + 1);
  };

  const handleRetry = () => {
    setAnswers({});
    setScore(0);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-orange-500">
          🧠 Mini-quiz
        </h3>
        <button
          onClick={handleRetry}
          className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition font-medium"
        >
          🔄 Reiniciar Quiz
        </button>
      </div>
      
      {QUESTIONS.map((q, i) => (
        <div key={i} className="mb-4 p-3 bg-gray-50 border rounded-xl">
          <p className="font-medium mb-2">{`Q${i + 1}. ${q.q}`}</p>
          <div className="grid sm:grid-cols-2 gap-2">
            {q.a.map((opt, j) => (
              <button
                key={j}
                onClick={() => handleAnswer(i, j)}
                className={`border rounded-lg px-3 py-2 text-left transition ${
                  answers[i] === undefined
                    ? "hover:bg-emerald-50"
                    : j === q.c
                    ? "border-emerald-500 bg-emerald-50"
                    : answers[i] === j
                    ? "border-red-500 bg-red-50"
                    : "opacity-60"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}
      
      <p className="mt-2 font-semibold text-lg">
        Puntuación: {score}/{QUESTIONS.length}
      </p>
    </div>
  );
}