import { useState } from "react";
import { jsPDF } from "jspdf";
import FloatingHearts from "../FloatingHearts";
import Sparkles from "../Sparkles";
import { QuizAnswers } from "./QuizScreen";

interface FinalScreenProps {
  answers: QuizAnswers;
}

const FinalScreen = ({ answers }: FinalScreenProps) => {
  const [downloading, setDownloading] = useState(false);

  const generatePDF = () => {
    setDownloading(true);

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    const maxWidth = pageWidth - margin * 2;

    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(28);
    doc.setTextColor(30, 144, 255);
    doc.text("Happy Birthday Pumba!", pageWidth / 2, 30, { align: "center" });

    // Subtitle
    doc.setFontSize(16);
    doc.setTextColor(147, 112, 219);
    doc.text("From Your Goomba", pageWidth / 2, 42, { align: "center" });

    // Divider
    doc.setDrawColor(30, 144, 255);
    doc.line(margin, 65, pageWidth - margin, 65);

    // Message content
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor(60, 60, 60);

    let yPos = 80;
    const lineHeight = 7;

    const memoryText = `I treasure ${answers.favouriteMemory.toLowerCase()} so much. Every moment with you becomes a memory I want to keep forever.`;

    const paragraphs = [
      "Baby,",
      "",
      `You said what you love most about us is ${answers.loveAboutUs.toLowerCase()}, and honestly? I feel the exact same way. There's something magical about how we just fit together.`,
      "",
      `You said I make you feel ${answers.oneWord.toLowerCase()}. Do you know that's exactly what I've always wanted? To be your safe place, your comfort, your peace. And knowing I am that for you makes me the happiest girl in the world.`,
      "",
      memoryText,
      "",
      `And you know what makes you the best boyfriend? ${answers.whatMakesYouSpecial} — yes baby, that's YOU. No one else comes close. You're literally irreplaceable.`,
      "",
      `You said you love me ${answers.howMuchLove.toLowerCase()}. Baby, I feel the exact same way. Sometimes I look at you and I can't believe you're mine. How did I get so lucky?`,
      "",
      "You know what I love about you? You're romantic, emotional, intelligent, mature — and somehow also the funniest person who makes me laugh until my stomach hurts. You're practical when I'm emotional, and instead of judging me, you value that about me. That balance? It's everything.",
      "",
      `And about our future — you said you're excited about ${answers.futureWithMe.toLowerCase()}. Baby, I can't wait either. Every time I think about our future, my heart does that thing where it beats so fast because I know I'm going to spend forever with the most amazing person.`,
      "",
      "I can share anything with you — my fears, my dreams, my weirdest thoughts — and you never make me feel small. You give me more respect than I could ever give myself. We're so deeply connected, emotionally and in every way that matters.",
      "",
      "And baby... you agreed to have 2 kids just for me. You wanted one, but you said yes to two because you love me that much. That's when I knew — you're not just my boyfriend, you're my forever. My future husband. The father of our future babies.",
      "",
      `Oh and by the way, you picked "${answers.compliment}" as your compliment? Baby, you're ALL of that and so much more. You're the smartest, most caring, funniest, most romantic, most loyal, most perfect person I know. And you're MINE. How crazy is that?`,
      "",
      "You're my best friend, my support system, my random-kisses-giver, my laughing partner, and the most beautiful soul I've ever known. I feel so safe, so loved, so complete with you.",
      "",
      "Thank you for being you. Thank you for choosing me. Thank you for loving me the way you do.",
      "",
      "Happy Birthday, my Pumba. I love you endlessly.",
      "",
      "- Forever Your Goomba",
    ];

    paragraphs.forEach((para) => {
      if (para === "") {
        yPos += lineHeight / 2;
      } else {
        const lines = doc.splitTextToSize(para, maxWidth);
        lines.forEach((line: string) => {
          if (yPos > 270) {
            doc.addPage();
            yPos = 20;
          }
          doc.text(line, margin, yPos);
          yPos += lineHeight;
        });
      }
    });

    // Footer
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text("Made with love", pageWidth / 2, 285, { align: "center" });

    doc.save("happy-birthday-pumba.pdf");
    setDownloading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative px-4 py-12">
      <FloatingHearts count={30} />
      <Sparkles count={40} />

      <div className="text-center z-10 max-w-xl">
        <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 box-glow border border-love-blue/20 animate-scale-in">
          <div className="text-8xl mb-6 animate-heart-beat">💙</div>

          <h2 className="font-romantic text-4xl md:text-5xl gradient-text mb-4">
            Happy Birthday, Baby!
          </h2>

          <p className="text-foreground/80 text-lg mb-8">
            I hope this made you smile. You deserve all the happiness in the
            world.
            <br />
            <span className="text-love-blue-soft font-medium">
              I love you more than words can say.
            </span>
          </p>

          <button
            onClick={generatePDF}
            disabled={downloading}
            className="btn-romantic flex items-center justify-center gap-2 mx-auto"
          >
            {downloading ? (
              <>
                <span className="animate-spin">✨</span>
                Creating...
              </>
            ) : (
              <>📥 Download Your Love Letter (PDF)</>
            )}
          </button>

          <div className="mt-10 pt-8 border-t border-love-blue/20">
            <p className="text-muted-foreground text-sm mb-2">
              Keep this forever, just like I&apos;ll keep loving you.
            </p>
            <p className="font-romantic text-2xl text-love-purple text-glow-soft">
              Forever Yours, Goomba 💙
            </p>
          </div>
        </div>

        <div className="mt-8 animate-fade-in delay-500">
          <p className="text-muted-foreground text-xs">
            🎂 Made with all my love for your special day 🎂
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinalScreen;
