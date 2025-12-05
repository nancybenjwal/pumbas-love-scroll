import { useState } from "react";
import IntroScreen from "@/components/screens/IntroScreen";
import SurpriseScreen from "@/components/screens/SurpriseScreen";
import PoemScreen from "@/components/screens/PoemScreen";
import QuizScreen, { QuizAnswers } from "@/components/screens/QuizScreen";
import MessageScreen from "@/components/screens/MessageScreen";
import KissScreen from "@/components/screens/KissScreen";
import FinalScreen from "@/components/screens/FinalScreen";

type Screen = "intro" | "surprise" | "poem" | "quiz" | "message" | "kiss" | "final";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("intro");
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswers | null>(null);

  const handleQuizComplete = (answers: QuizAnswers) => {
    setQuizAnswers(answers);
    setCurrentScreen("message");
  };

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {currentScreen === "intro" && (
        <IntroScreen onComplete={() => setCurrentScreen("surprise")} />
      )}
      {currentScreen === "surprise" && (
        <SurpriseScreen onComplete={() => setCurrentScreen("poem")} />
      )}
      {currentScreen === "poem" && (
        <PoemScreen onComplete={() => setCurrentScreen("quiz")} />
      )}
      {currentScreen === "quiz" && (
        <QuizScreen onComplete={handleQuizComplete} />
      )}
      {currentScreen === "message" && quizAnswers && (
        <MessageScreen answers={quizAnswers} onComplete={() => setCurrentScreen("kiss")} />
      )}
      {currentScreen === "kiss" && (
        <KissScreen onComplete={() => setCurrentScreen("final")} />
      )}
      {currentScreen === "final" && quizAnswers && (
        <FinalScreen answers={quizAnswers} />
      )}
    </main>
  );
};

export default Index;
