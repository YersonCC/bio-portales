import { useState } from "react";
import React from "react";

export default function Quiz() {
  const questions = [
    {
      q: "¿Cuál es su dieta principal?",
      options: ["Carnívoro", "Omnívoro", "Herbívoro", "Insectívoro"],
      correct: 2,
    },
    {
      q: "¿En qué horario es más activo?",
      options: ["Diurno", "Nocturno", "Crepuscular", "Siempre"],
      correct: 1,
    },
  ];

  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);

  const handleAnswer = (qIndex, oIndex) => {
    if (answers[qIndex] !== undefined) return;
    const isCorrect = oIndex === questions[qIndex].correct;
    setAnswers({ ...answers, [qIndex]: oIndex });
    if (isCorrect) setScore(score + 1);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-orange-500 mb-4">
        🧠 Mini-quiz
      </h3>
      {questions.map((q, i) => (
        <div key={i} className="mb-4 p-3 bg-gray-50 border rounded-xl">
          <p className="font-medium mb-2">{`Q${i + 1}. ${q.q}`}</p>
          <div className="grid sm:grid-cols-2 gap-2">
            {q.options.map((opt, j) => (
              <button
                key={j}
                onClick={() => handleAnswer(i, j)}
                className={`border rounded-lg px-3 py-2 text-left transition ${
                  answers[i] === undefined
                    ? "hover:bg-emerald-50"
                    : j === q.correct
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
      <p className="mt-2 font-semibold">Puntuación: {score}/{questions.length}</p>
    </div>
  );
}
