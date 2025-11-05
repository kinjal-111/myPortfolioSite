import { useEffect, useState } from "react";

const technologies = [
  { name: "Python", color: "hsl(217 91% 60%)" },
  { name: "React", color: "hsl(187 85% 45%)" },
  { name: "AWS", color: "hsl(39 100% 50%)" },
  { name: "Docker", color: "hsl(217 91% 60%)" },
  { name: "PostgreSQL", color: "hsl(187 85% 45%)" },
  { name: "Azure", color: "hsl(217 91% 60%)" },
];

const TechOrbit = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-72 flex items-center justify-center">
      {/* Outer Orbit Rings */}
      <div className="absolute w-56 h-56 border-2 border-dashed border-primary/20 rounded-full"></div>
      <div className="absolute w-40 h-40 border-2 border-dashed border-accent/20 rounded-full"></div>

      {/* Rotating Tech Labels */}
      {technologies.map((tech, index) => {
        const angle = (360 / technologies.length) * index + rotation;
        const radian = (angle * Math.PI) / 180;
        const radius = 120; // slightly larger radius to fit bigger image
        const x = Math.cos(radian) * radius;
        const y = Math.sin(radian) * radius;

        return (
          <div
            key={tech.name}
            className="absolute transition-transform duration-100"
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            <div
              className="px-3 py-1.5 rounded-full text-xs font-semibold shadow-md border bg-card backdrop-blur-sm"
              style={{
                borderColor: tech.color,
                color: tech.color,
              }}
            >
              {tech.name}
            </div>
          </div>
        );
      })}

      {/* 👇 Center Profile Photo */}
      <div className="absolute flex items-center justify-center">
        <div className="relative">
          {/* Subtle glowing ring effect - much lighter and no blur */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 -z-10 scale-110"></div>

          {/* Your photo */}
          <img
            src={`${import.meta.env.BASE_URL.replace(/\/$/, '')}/kinjal-photo.png`}
            alt="Kinjal Parekh"
            className="w-36 h-36 rounded-full border-2 border-primary/40 shadow-xl object-cover hover:scale-105 transition-transform duration-300 relative z-10 bg-background"
            style={{
              imageRendering: 'auto',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale'
            }}
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};

export default TechOrbit;
