import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: number;
  delay: number;
  size: number;
  duration: number;
}

const FloatingHearts = ({ count = 15 }: { count?: number }) => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const newHearts: Heart[] = [];
    for (let i = 0; i < count; i++) {
      newHearts.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        size: 12 + Math.random() * 20,
        duration: 6 + Math.random() * 6,
      });
    }
    setHearts(newHearts);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-love-blue opacity-20"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animation: `float-heart ${heart.duration}s ease-out infinite`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          💙
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
