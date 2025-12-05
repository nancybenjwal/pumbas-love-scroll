import { useEffect, useState } from "react";

interface Sparkle {
  id: number;
  left: number;
  top: number;
  delay: number;
  size: number;
}

const Sparkles = ({ count = 20 }: { count?: number }) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const newSparkles: Sparkle[] = [];
    for (let i = 0; i < count; i++) {
      newSparkles.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 4,
        size: 4 + Math.random() * 8,
      });
    }
    setSparkles(newSparkles);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute rounded-full bg-love-blue-soft animate-sparkle"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            animationDelay: `${sparkle.delay}s`,
            boxShadow: "0 0 10px hsl(199 70% 70% / 0.8)",
          }}
        />
      ))}
    </div>
  );
};

export default Sparkles;
