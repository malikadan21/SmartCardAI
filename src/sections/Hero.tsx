import React, { RefObject } from 'react';

interface HeroProps {
  testRef: RefObject<HTMLDivElement>;
}


export const Hero: React.FC<HeroProps> = ({ testRef }) => {
  const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_92%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className="text-4xl sm:text-7xl font-bold tracking-tighter text-center">
              Your Ultimate Companion <br/>to Ace Every Exam
            </h1>
          </div>
        </div>

        <div className="flex justify-center">
          <p className="text-base sm:text-xl mt-8 text-center">
            SmartCardAI generates personalized flashcards from PowerPoint presentations, PDFs, images, and text, offering students an effective way to review and revise. By transforming various study materials into targeted flashcards, it helps streamline exam preparation and boost retention.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium" onClick={() => scrollToSection(testRef)} >
            Try for free
          </button>
        </div>
      </div>
    </div>
  );
};

Hero.displayName = 'Hero';
