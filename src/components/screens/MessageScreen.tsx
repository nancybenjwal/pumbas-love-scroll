import { useEffect, useState } from "react";
import FloatingHearts from "../FloatingHearts";
import { QuizAnswers } from "./QuizScreen";

interface MessageScreenProps {
  answers: QuizAnswers;
  onComplete: () => void;
}

const MessageScreen = ({ answers, onComplete }: MessageScreenProps) => {
  const [showMessage, setShowMessage] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowMessage(true), 500);
    setTimeout(() => setShowButton(true), 2000);
  }, []);

  const generateMessage = () => {
    const memoryText = `I treasure ${answers.favouriteMemory.toLowerCase()} so much. Every moment with you becomes a memory I want to keep forever.`;

    return (
      <>
        <p className="mb-6">Baby,</p>
        <p className="mb-6">
          You said what you love most about us is{" "}
          <span className="text-love-blue font-semibold">
            {answers.loveAboutUs.toLowerCase()}
          </span>
          , and honestly? I feel the exact same way. There&apos;s something
          magical about how we just fit together.
        </p>
        <p className="mb-6">
          You said I make you feel{" "}
          <span className="text-love-purple font-semibold">
            {answers.oneWord.toLowerCase()}
          </span>
          . Do you know that&apos;s exactly what I&apos;ve always wanted? To be
          your safe place, your comfort, your peace. And knowing I am that for
          you makes me the happiest girl in the world.
        </p>
        <p className="mb-6">{memoryText}</p>
        <p className="mb-6">
          And you know what makes you the best boyfriend?{" "}
          <span className="text-love-blue font-semibold">
            {answers.whatMakesYouSpecial}
          </span>{" "}
          — yes baby, that&apos;s YOU. No one else comes close. You&apos;re
          literally irreplaceable.
        </p>
        <p className="mb-6">
          You said you love me{" "}
          <span className="text-love-purple font-semibold">
            {answers.howMuchLove.toLowerCase()}
          </span>
          . Baby, I feel the exact same way. Sometimes I look at you and I
          can&apos;t believe you&apos;re mine. How did I get so lucky?
        </p>
        <p className="mb-6">
          You know what I love about you? You&apos;re romantic, emotional,
          intelligent, mature — and somehow also the funniest person who makes
          me laugh until my stomach hurts. You&apos;re practical when I&apos;m
          emotional, and instead of judging me, you value that about me. That
          balance? It&apos;s everything.
        </p>
        <p className="mb-6">
          And about our future — you said you&apos;re excited about{" "}
          <span className="text-love-blue font-semibold">
            {answers.futureWithMe.toLowerCase()}
          </span>
          . Baby, I can&apos;t wait either. Every time I think about our future,
          my heart does that thing where it beats so fast because I know
          I&apos;m going to spend forever with the most amazing person.
        </p>
        <p className="mb-6">
          I can share anything with you — my fears, my dreams, my weirdest
          thoughts — and you never make me feel small. You give me more respect
          than I could ever give myself. We&apos;re so deeply connected,
          emotionally and in every way that matters.
        </p>
        <p className="mb-6">
          And baby… you agreed to have 2 kids just for me. You wanted one, but
          you said yes to two because you love me that much. That&apos;s when I
          knew — you&apos;re not just my boyfriend, you&apos;re my forever. My
          future husband. The father of our future babies. 💙
        </p>
        <p className="mb-6">
          Oh and by the way, you picked{" "}
          <span className="text-love-purple font-semibold">
            &quot;{answers.compliment}&quot;
          </span>{" "}
          as your compliment? Baby, you&apos;re ALL of that and so much more.
          You&apos;re the smartest, most caring, funniest, most romantic, most
          loyal, most perfect person I know. And you&apos;re MINE. How crazy is
          that?
        </p>
        <p className="mb-6">
          You&apos;re my best friend, my support system, my random-kisses-giver,
          my laughing partner, and the most beautiful soul I&apos;ve ever known.
          I feel so safe, so loved, so complete with you.
        </p>
        <p className="mb-6">
          Thank you for being you. Thank you for choosing me. Thank you for
          loving me the way you do.
        </p>
        <p className="text-love-blue-soft font-romantic text-2xl mt-8">
          Happy Birthday, my Pumba. I love you endlessly.
        </p>
        <p className="text-love-purple font-romantic text-xl mt-4">
          — Forever Your Goomba 💙
        </p>
      </>
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative px-4 py-12">
      <FloatingHearts count={25} />

      <div
        className={`z-10 max-w-2xl w-full transition-all duration-700 ${
          showMessage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 box-glow border border-love-blue/20">
          <h3 className="font-romantic text-3xl md:text-4xl text-center text-love-blue mb-8 text-glow-soft">
            My Love Letter to You
          </h3>

          <div className="text-foreground/90 text-lg leading-relaxed">
            {generateMessage()}
          </div>

          {showButton && (
            <div className="animate-fade-in-up mt-10 text-center">
              <button onClick={onComplete} className="btn-romantic">
                One Last Thing… 💙
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageScreen;
