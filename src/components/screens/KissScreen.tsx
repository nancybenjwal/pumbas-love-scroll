import { useState, useEffect } from "react";
import Sparkles from "../Sparkles";

interface KissScreenProps {
  onComplete: () => void;
}

interface ExplodingHeart {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
}

const KissScreen = ({ onComplete }: KissScreenProps) => {
  const [kissed, setKissed] = useState(false);
  const [hearts, setHearts] = useState<ExplodingHeart[]>([]);
  const [showContinue, setShowContinue] = useState(false);

  const handleKiss = () => {
    if (kissed) return;
    setKissed(true);

    const newHearts: ExplodingHeart[] = [];
    for (let i = 0; i < 30; i++) {
      const angle = (i / 30) * Math.PI * 2;
      const distance = 100 + Math.random() * 200;
      newHearts.push({
        id: i,
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        size: 20 + Math.random() * 30,
        rotation: Math.random() * 360,
      });
    }
    setHearts(newHearts);

    setTimeout(() => setShowContinue(true), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden">
      <Sparkles count={25} />

      <div className="text-center z-10 max-w-xl">
        {!kissed ? (
          <div className="animate-scale-in">
            <h3 className="font-romantic text-3xl md:text-4xl text-love-blue mb-8 text-glow-soft">
              Baby, I have one more thing for you…
            </h3>

            <button onClick={handleKiss} className="btn-kiss relative">
              Kiss Me 💋
              <span className="absolute -top-2 -right-2 text-2xl animate-heart-beat">
                💙
              </span>
            </button>

            <p className="text-muted-foreground mt-6 text-sm">
              Go on, press it… 💙
            </p>
          </div>
        ) : (
          <div className="relative">
            {/* Central big heart */}
            <div className="text-9xl animate-heart-beat">💙</div>

            {/* Exploding hearts */}
            {hearts.map((heart) => (
              <div
                key={heart.id}
                className="absolute left-1/2 top-1/2 transition-all duration-1000 ease-out"
                style={{
                  transform: `translate(-50%, -50%) translate(${heart.x}px, ${heart.y}px) rotate(${heart.rotation}deg)`,
                  fontSize: `${heart.size}px`,
                  opacity: 0,
                  animation: "heart-explosion 1.5s ease-out forwards",
                  animationDelay: `${Math.random() * 0.3}s`,
                }}
              >
                💙
              </div>
            ))}

            <h3 className="font-romantic text-4xl md:text-5xl text-love-pink mt-8 text-glow animate-fade-in delay-500">
              *kisses you back* 💋
            </h3>

            <p className="text-foreground/80 text-xl mt-4 animate-fade-in delay-700">
              I love you so much, Pumba!
            </p>

            {showContinue && (
              <div className="animate-fade-in-up mt-10">
                <button onClick={onComplete} className="btn-romantic">
                  Get Your PDF Gift 🎁
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default KissScreen;
