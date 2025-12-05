import { useEffect, useState } from "react";
import FloatingHearts from "../FloatingHearts";
import Sparkles from "../Sparkles";

interface IntroScreenProps {
  onComplete: () => void;
}

const IntroScreen = ({ onComplete }: IntroScreenProps) => {
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowTitle(true), 500);
    const timer2 = setTimeout(() => setShowSubtitle(true), 1500);
    const timer3 = setTimeout(() => setShowButton(true), 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative px-4">
      <FloatingHearts count={20} />
      <Sparkles count={30} />

      <div className="text-center z-10 max-w-2xl">
        {showTitle && (
          <div className="animate-scale-in">
            <h1 className="font-romantic text-6xl md:text-8xl text-glow gradient-text mb-6">
              Happy Birthday
            </h1>
            <h2 className="font-romantic text-5xl md:text-7xl text-glow text-love-blue animate-heart-beat">
              Pumba 💙
            </h2>
          </div>
        )}

        {showSubtitle && (
          <div className="animate-fade-in-up mt-8">
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              From Your One & Only
            </p>
            <p className="font-romantic text-3xl md:text-4xl text-love-purple mt-2 text-glow-soft">
              Goomba 💙
            </p>
          </div>
        )}

        {showButton && (
          <div className="animate-fade-in-up mt-12">
            <button onClick={onComplete} className="btn-romantic">
              Open Your Gift ✨
            </button>
          </div>
        )}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-1000">
        <p className="text-muted-foreground text-sm">Made with all my love 💙</p>
      </div>
    </div>
  );
};

export default IntroScreen;
