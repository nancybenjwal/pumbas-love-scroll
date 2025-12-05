import { useEffect, useState } from "react";
import Sparkles from "../Sparkles";

interface SurpriseScreenProps {
  onComplete: () => void;
}

const SurpriseScreen = ({ onComplete }: SurpriseScreenProps) => {
  const [showText, setShowText] = useState(false);
  const [showDots, setShowDots] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowText(true), 300);
    const timer2 = setTimeout(() => setShowDots(true), 1500);
    const timer3 = setTimeout(() => setShowButton(true), 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative px-4">
      <Sparkles count={15} />

      <div className="text-center z-10 max-w-xl">
        <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-12 box-glow border border-love-blue/20">
          {showText && (
            <div className="animate-fade-in-up">
              <p className="font-romantic text-4xl md:text-5xl text-love-blue-soft text-glow-soft">
                Baby…
              </p>
            </div>
          )}

          {showDots && (
            <div className="animate-fade-in-up mt-6">
              <p className="text-2xl md:text-3xl text-foreground font-light">
                I&apos;m not done yet.
              </p>
              <p className="text-5xl mt-4 animate-heart-beat">💙</p>
            </div>
          )}

          {showButton && (
            <div className="animate-fade-in-up mt-10">
              <button onClick={onComplete} className="btn-romantic">
                Continue 💫
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SurpriseScreen;
