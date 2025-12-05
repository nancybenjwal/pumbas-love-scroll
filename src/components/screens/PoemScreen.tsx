import { useEffect, useState } from "react";
import FloatingHearts from "../FloatingHearts";

interface PoemScreenProps {
  onComplete: () => void;
}

const PoemScreen = ({ onComplete }: PoemScreenProps) => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const poemLines = [
    "In a world so vast and wide,",
    "You chose to walk right by my side.",
    "Your love, a flame that softly glows,",
    "A warmth that only my heart knows.",
    "",
    "You hold me close when skies turn gray,",
    "You kiss away the fears that stay.",
    "My safe place, my forever home—",
    "With you, I never feel alone.",
    "",
    "Happy Birthday, my sweet love,",
    "You're a blessing from above. 💙",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev < poemLines.length) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 600);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (visibleLines === poemLines.length) {
      setTimeout(() => setShowButton(true), 800);
    }
  }, [visibleLines, poemLines.length]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative px-4 py-12">
      <FloatingHearts count={12} />

      <div className="text-center z-10 max-w-2xl">
        <div className="bg-card/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 box-glow border border-love-blue/20">
          <h3 className="font-romantic text-3xl md:text-4xl text-love-blue mb-8 text-glow-soft">
            A Little Poem for You
          </h3>

          <div className="space-y-2 md:space-y-3">
            {poemLines.map((line, index) => (
              <p
                key={index}
                className={`text-lg md:text-xl font-light transition-all duration-500 ${
                  index < visibleLines
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                } ${line === "" ? "h-4" : ""} ${
                  line.includes("💙") ? "text-love-blue-soft font-romantic text-2xl" : "text-foreground/90"
                }`}
              >
                {line}
              </p>
            ))}
          </div>

          {showButton && (
            <div className="animate-fade-in-up mt-10">
              <button onClick={onComplete} className="btn-romantic">
                There&apos;s More 💙
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PoemScreen;
