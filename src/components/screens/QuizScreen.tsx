import { useState } from "react";
import Sparkles from "../Sparkles";

interface QuizScreenProps {
  onComplete: (answers: QuizAnswers) => void;
}

export interface QuizAnswers {
  loveAboutUs: string;
  oneWord: string;
  favouriteMemory: string;
  whatMakesYouSpecial: string;
  howMuchLove: string;
  futureWithMe: string;
  compliment: string;
}

const questions = [
  {
    id: "loveAboutUs",
    question: "What do you love most about us?",
    options: [
      "The way we laugh together",
      "How we understand each other",
      "Our random sweet moments",
      "Everything, honestly",
    ],
  },
  {
    id: "oneWord",
    question: "One word for how I make you feel?",
    options: ["Loved", "Safe", "Happy", "Complete"],
  },
  {
    id: "favouriteMemory",
    question: "Your favourite memory with me?",
    options: [
      "Our late night calls",
      "When you showed me your college on VC",
      "Our first conversation",
      "Every moment with you",
    ],
  },
  {
    id: "whatMakesYouSpecial",
    question: "What makes you the best boyfriend?",
    options: [
      "I give random kisses 💋",
      "I always listen and understand",
      "I make her laugh non-stop",
      "All of the above, obviously 😏",
    ],
  },
  {
    id: "howMuchLove",
    question: "How much do you love your Goomba?",
    options: [
      "More than words can say",
      "To the moon and back",
      "Infinitely and beyond",
      "So much it scares me sometimes",
    ],
  },
  {
    id: "futureWithMe",
    question: "What are you most excited about for our future?",
    options: [
      "Growing old together",
      "Our little family of 4 💙",
      "All our adventures ahead",
      "Every single moment with you",
    ],
  },
  {
    id: "compliment",
    question: "Pick a compliment that fits you best:",
    options: [
      "I'm the smartest and most mature",
      "I'm the most caring and loyal",
      "I'm the funniest and most romantic",
      "I'm literally perfect, duh 💅",
    ],
  },
];

const QuizScreen = ({ onComplete }: QuizScreenProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (!selectedOption) return;

    const questionId = questions[currentQuestion].id as keyof QuizAnswers;
    const newAnswers = { ...answers, [questionId]: selectedOption };
    setAnswers(newAnswers);

    setIsTransitioning(true);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
        setIsTransitioning(false);
      } else {
        onComplete(newAnswers as QuizAnswers);
      }
    }, 400);
  };

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative px-4 py-12">
      <Sparkles count={20} />

      <div className={`text-center z-10 max-w-xl w-full transition-all duration-400 ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
        <div className="mb-8">
          <p className="text-love-blue-soft text-sm uppercase tracking-widest mb-2">
            Question {currentQuestion + 1} of {questions.length}
          </p>
          <div className="flex justify-center gap-2">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`h-1 w-8 rounded-full transition-all duration-300 ${
                  index <= currentQuestion ? "bg-love-blue" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="bg-card/40 backdrop-blur-sm rounded-3xl p-8 md:p-10 box-glow border border-love-blue/20">
          <h3 className="font-romantic text-3xl md:text-4xl text-love-blue mb-8 text-glow-soft">
            {question.question}
          </h3>

          <div className="space-y-3">
            {question.options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className={`w-full p-4 rounded-xl text-left transition-all duration-300 border ${
                  selectedOption === option
                    ? "bg-love-blue/20 border-love-blue text-foreground shadow-lg shadow-love-blue/20"
                    : "bg-secondary/50 border-transparent hover:border-love-blue/30 text-foreground/80 hover:text-foreground"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedOption === option
                        ? "border-love-blue bg-love-blue"
                        : "border-muted-foreground"
                    }`}
                  >
                    {selectedOption === option && (
                      <span className="w-2 h-2 rounded-full bg-background" />
                    )}
                  </span>
                  {option}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-8">
            <button
              onClick={handleNext}
              disabled={!selectedOption}
              className={`btn-romantic ${
                !selectedOption ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {currentQuestion < questions.length - 1 ? "Next 💙" : "See Your Message ✨"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizScreen;
