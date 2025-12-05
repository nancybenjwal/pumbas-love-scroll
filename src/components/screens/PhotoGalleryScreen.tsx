import { useState, useEffect } from "react";
import FloatingHearts from "../FloatingHearts";
import Sparkles from "../Sparkles";

import pumba1 from "@/assets/pumba-1.jpeg";
import pumba2 from "@/assets/pumba-2.jpeg";
import pumba3 from "@/assets/pumba-3.jpeg";
import pumba4 from "@/assets/pumba-4.jpeg";
import goomba1 from "@/assets/goomba-1.jpeg";
import goomba2 from "@/assets/goomba-2.jpeg";
import goomba3 from "@/assets/goomba-3.jpeg";
import coupleMerged from "@/assets/couple-merged.png";

interface PhotoGalleryScreenProps {
  onComplete: () => void;
}

const PhotoGalleryScreen = ({ onComplete }: PhotoGalleryScreenProps) => {
  const [showMerged, setShowMerged] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const photos = [
    { src: pumba1, caption: "My handsome baby 💙", type: "pumba" },
    { src: goomba1, caption: "Your Goomba with her furry friend 🐱", type: "goomba" },
    { src: pumba2, caption: "That cute smile I love 💙", type: "pumba" },
    { src: goomba2, caption: "Adventures waiting for us 🏔️", type: "goomba" },
    { src: pumba3, caption: "The man who has my heart 💙", type: "pumba" },
    { src: goomba3, caption: "Thinking of you always ☕", type: "goomba" },
    { src: pumba4, caption: "My everything 💙", type: "pumba" },
  ];

  useEffect(() => {
    if (!showMerged && currentPhotoIndex < photos.length) {
      const timer = setTimeout(() => {
        if (currentPhotoIndex < photos.length - 1) {
          setCurrentPhotoIndex(prev => prev + 1);
        } else {
          setTimeout(() => setShowMerged(true), 1500);
        }
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [currentPhotoIndex, showMerged, photos.length]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative px-4 py-8 overflow-hidden">
      <FloatingHearts count={20} />
      <Sparkles count={30} />

      {!showMerged ? (
        <div className="text-center z-10 w-full max-w-md animate-fade-in">
          <h2 className="font-romantic text-3xl md:text-4xl gradient-text mb-6">
            Our Beautiful Moments 💙
          </h2>
          
          <div className="relative">
            {photos.map((photo, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentPhotoIndex 
                    ? "opacity-100 scale-100" 
                    : index < currentPhotoIndex 
                      ? "opacity-0 scale-95 -translate-x-full" 
                      : "opacity-0 scale-95 translate-x-full"
                }`}
              >
                <div className={`
                  rounded-3xl overflow-hidden border-4 shadow-2xl
                  ${photo.type === "pumba" 
                    ? "border-love-blue/40 shadow-love-blue/20" 
                    : "border-love-purple/40 shadow-love-purple/20"
                  }
                `}>
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-80 md:h-96 object-cover"
                  />
                </div>
                <p className={`
                  mt-4 font-romantic text-xl
                  ${photo.type === "pumba" ? "text-love-blue" : "text-love-purple"}
                `}>
                  {photo.caption}
                </p>
              </div>
            ))}
            
            {/* Placeholder for layout */}
            <div className="opacity-0">
              <div className="rounded-3xl overflow-hidden">
                <div className="w-full h-80 md:h-96" />
              </div>
              <p className="mt-4 font-romantic text-xl">placeholder</p>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {photos.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentPhotoIndex 
                    ? "bg-love-blue w-6" 
                    : index < currentPhotoIndex 
                      ? "bg-love-purple" 
                      : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center z-10 w-full max-w-lg animate-scale-in">
          <h2 className="font-romantic text-3xl md:text-4xl gradient-text mb-4">
            You & Me, Forever 💙
          </h2>
          <p className="text-muted-foreground mb-6 text-sm">
            Together, we're magic ✨
          </p>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-love-blue/30 via-love-purple/30 to-love-blue/30 rounded-[2rem] blur-xl opacity-60 group-hover:opacity-80 transition-opacity animate-pulse" />
            <div className="relative rounded-3xl overflow-hidden border-4 border-love-blue/30 shadow-2xl box-glow">
              <img
                src={coupleMerged}
                alt="Pumba and Goomba together"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <p className="font-romantic text-xl text-love-blue-soft mt-6 animate-fade-in">
            My favorite picture of us 💙
          </p>

          <button
            onClick={onComplete}
            className="btn-romantic mt-8 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            Continue to Quiz 💙
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotoGalleryScreen;
