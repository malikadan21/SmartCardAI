import React from 'react';
import { Feature } from './Feature';

const features = [
  {
    title: 'Automated Flashcard Creation',
    description:
      'SmartCardAI automatically generates personalized flashcards from various study materials, including PowerPoint presentations, PDFs, images, and text. This saves students time and ensures they have targeted content for efficient revision.',
  },
  {
    title: 'Adaptive Learning',
    description:
      "The app tailors flashcards to each student's learning needs, focusing on areas where they need the most improvement. By continuously adapting to their progress, SmartCardAI optimizes study sessions for maximum effectiveness and retention.",
  },
  {
    title: 'Flexible Review Options',
    description:
      'Allows students to review flashcards anytime, anywhere, and supports various formats to suit different learning styles and preferences. Students can also download and save flashcards for offline use.',
  },
];

export const Features = React.forwardRef((props, ref) => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Everything you need
        </h2>
        <p className="text-center mt-5 text-xl text-white/70">
          Transform your diverse study materials into customized flashcards, empowering students with a versatile tool for efficient learning. By automatically generating flashcards, it provides a streamlined approach to revision. Students can review their flashcards anytime, anywhere, and download them for offline access, ensuring they have the right tools to excel in their exams.
        </p>
        <div className="mt-16 flex flex-col sm:flex-col md:flex-row gap-4">
          {features.map(({ title, description }) => (
            <Feature title={title} description={description} key={title} />
          ))}
        </div>
      </div>
    </div>
  );
});

Features.displayName = 'Features';
