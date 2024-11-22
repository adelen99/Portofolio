// src/components/StarsBackground.tsx
import React from "react";

const StarsBackground: React.FC = () => {
  // Numărul de stele care vor apărea pe fundal
  const starCount = 500;

  // Funcția pentru a genera o listă de stele cu poziții randomizate
  const stars = Array.from({ length: starCount }, (_, index) => {
    const top = Math.random() * 100; // Poziția pe verticală (0-100%)
    const left = Math.random() * 100; // Poziția pe orizontală (0-100%)
    const size = Math.random() * 2 + 1; // Dimensiunea stelei (între 1 și 3px)
    const delay = Math.random() * 5 + "s"; // Întârzierea animației (random între 0 și 5 secunde)
    const duration = Math.random() * 3 + 1 + "s"; // Durata animației (random între 1 și 4 secunde)

    return (
      <div
        key={index}
        className="star"
        style={{
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDelay: delay,
          animationDuration: duration,
        }}
      />
    );
  });

  return <div className="stars-background">{stars}</div>;
};

export default StarsBackground;
