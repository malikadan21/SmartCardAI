import React, { useState } from 'react';

interface FlashCard {
  id: number;
  question: string;
  answer: string;
}

export const FlashCards: React.FC = () => {
  const [flashCards, setFlashCards] = useState<FlashCard[]>([]);
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [flippedCardId, setFlippedCardId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // Loading state

  const addFlashCard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!question || !answer) {
      setMessage('Please provide both question and answer.');
      return;
    }

    setLoading(true); // Start loading

    // Simulate adding flashcard with delay
    setTimeout(() => {
      const newFlashCard: FlashCard = {
        id: flashCards.length + 1,
        question,
        answer,
      };

      setFlashCards((prevList) => [...prevList, newFlashCard]);
      setQuestion('');
      setAnswer('');
      setMessage('Flashcard added successfully!');
      setLoading(false); // End loading
    }, 1000); // Simulate a 1-second delay
  };

  const handleCardClick = (id: number) => {
    setFlippedCardId(flippedCardId === id ? null : id);
  };

  return (
    <section className="py-20 md:py-24 flex flex-col items-center">
      <div className="container p-4">
        <form onSubmit={addFlashCard} className="mb-8 text-white">
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Enter question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="py-2 px-4 rounded-lg border border-gray-800 bg-black"
              required
            />
            <input
              type="text"
              placeholder="Enter answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="py-2 px-4 rounded-lg border border-gray-800 bg-black"
              required
            />
            <button
              type="submit"
              className="py-2 px-4 rounded-lg bg-gradient-to-b from-[#190d2e] to-[#4a208c] text-white font-semibold disabled:opacity-50"
              disabled={loading} // Disable button while loading
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 animate-spin text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12a8 8 0 01.44-2.74M12 4a8 8 0 000 16m-8-4a8 8 0 001.6-4.68M12 20a8 8 0 01-.44-8.74M12 20a8 8 0 001.6-4.68M12 4a8 8 0 01-.44 8.74M12 4a8 8 0 01-4.68 4.68" />
                  </svg>
                </div>
              ) : (
                'Add Flashcard'
              )}
            </button>
          </div>
          {message && <p className="text-center mt-4 text-green-500">{message}</p>}
        </form>
        <div className="flex flex-wrap gap-4 justify-center">
          {flashCards.map((card) => (
            <div
              key={card.id}
              className="w-64 h-64 perspective cursor-pointer"
              onClick={() => handleCardClick(card.id)}
            >
              <div
                className={`relative w-full h-full duration-500 transform-style-preserve-3d ${flippedCardId === card.id ? 'rotate-y-180' : ''}`}
              >
                <div className="absolute w-full h-full bg-black border border-gray-300 rounded-lg flex items-center justify-center p-4 face front shadow-[-5px_-6px_20px_rgba(128,0,128,0.4)]">
                  <p className="text-lg font-semibold text-gray-100">Question: {card.question}?</p>
                </div>
                <div className="absolute w-full h-full bg-black border border-gray-300 rounded-lg flex items-center justify-center p-4 face back rotate-y-180 shadow-[0_4px_8px_rgba(128,0,128,0.4)]">
                  <p className="text-lg text-gray-200">Answer: {card.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

FlashCards.displayName = 'FlashCards';
