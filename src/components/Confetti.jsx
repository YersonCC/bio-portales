// src/components/Confetti.jsx
import React, { useEffect } from "react";
import confetti from "canvas-confetti";

const Confetti = ({ active = false, onComplete, particleCount = 30, colors = ["#4DA428", "#ffffff", "#d3d3d3"] }) => {
  useEffect(() => {
    let animationFrameId;

    if (active) {
      const duration = 2000; // Duración de 2 segundos para una sola animación
      const end = Date.now() + duration;

      const frame = () => {
        if (Date.now() > end) {
          if (onComplete) onComplete();
          return;
        }

        // Confeti desde el lado izquierdo con dispersión aleatoria
        confetti({
          particleCount: Math.floor(particleCount / 2), // 15 partículas por lado
          spread: Math.floor(Math.random() * 30) + 20, // Dispersión aleatoria entre 20 y 50
          origin: { x: 0, y: Math.random() * 0.8 + 0.1 }, // Variación vertical (10% a 90% de altura)
          colors,
          scalar: 1.0,
          gravity: 0.7,
        });

        // Confeti desde el lado derecho con dispersión aleatoria
        confetti({
          particleCount: Math.floor(particleCount / 2), // 15 partículas por lado
          spread: Math.floor(Math.random() * 30) + 20, // Dispersión aleatoria entre 20 y 50
          origin: { x: 1, y: Math.random() * 0.8 + 0.1 }, // Variación vertical (10% a 90% de altura)
          colors,
          scalar: 1.0,
          gravity: 0.7,
        });

        animationFrameId = requestAnimationFrame(frame);
      };

      animationFrameId = requestAnimationFrame(frame);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [active, onComplete, particleCount, colors]);

  return <div style={{ position: "relative", width: "100%", height: "100%" }} />;
};

export default Confetti;