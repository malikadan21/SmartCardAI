import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = 'AIzaSyAwmteSwj2DudQv8HKe89OI1Vi5ac0HpJY';
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain',
};

interface FlashCard {
  id: number;
  question: string;
  answer: string;
}

export const TextComponent: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [flashCards, setFlashCards] = useState<FlashCard[]>([]);
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [flippedCardId, setFlippedCardId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // Loading state

  const MAX_CHAR_LIMIT = 4000;

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;
    if (inputText.length <= MAX_CHAR_LIMIT) {
      setText(inputText);
      setError(''); // Clear error message if input is valid
    } else {
      setError('You can only add up to 4,000 characters for the free version.');
    }
  };

  const generateFlashCards = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text) {
      setMessage('Please provide some text.');
      return;
    }

    if (text.length > MAX_CHAR_LIMIT) {
      setError('You can only add up to 4,000 characters for the free version.');
      return;
    }

    setLoading(true); // Start loading

    try {
      const chatSession = model.startChat({
        generationConfig,
        history: [
          {
            role: 'user',
            parts: [
              {
                text: `You are a highly advanced AI designed to assist with educational content creation. Your task is to generate flashcards from a given article. Each flashcard should contain a question and an answer based on the key concepts and important information in the article.\n\n**Instructions:**\n\n1. **Read the Article:** Begin by analyzing the content of the input article.\n2. **Identify Key Concepts:** Extract the most important concepts, facts, and information that are crucial for understanding the topic of the article.\n3. **Formulate Questions:** For each key concept, create a clear and concise question that focuses on the essence of the information.\n4. **Provide Answers:** Write accurate and brief answers to each question based on the content of the article.\n\n**Formatting:**\n\n- **Flashcard 1:**\n  - **Question:** [Your question here]\n  - **Answer:** [Your answer here]\n\n- **Flashcard 2:**\n  - **Question:** [Your question here]\n  - **Answer:** [Your answer here]\n\n(Continue with additional flashcards as needed)\n\n**Example Input Article:**\n\n${text}\n\n**Example Output:**\n\n- **Flashcard 1:**\n  - **Question:** What is the main purpose of photosynthesis in plants?\n  - **Answer:** The main purpose of photosynthesis is to convert light energy into chemical energy stored in glucose, which provides energy for the plant's growth and development.\n\n- **Flashcard 2:**\n  - **Question:** What are the primary colors in the visible spectrum of light?\n  - **Answer:** The primary colors in the visible spectrum are red, green, and blue.\n\n**Note:** Ensure the questions are relevant to the content of the article and the answers are precise and informative.\n`,
              },
            ],
          },
          {
            role: 'model',
            parts: [
              {
                text: `Please provide me with the article you want me to create flashcards from. I'm ready to analyze the text and generate flashcards with questions and answers based on the key concepts. \n`,
              },
            ],
          },
          {
            role: 'user',
            parts: [
              { text: text },
            ],
          },
        ],
      });

      const result = await chatSession.sendMessage('');
      const responseText = await result.response.text();

      const flashcards = parseFlashcards(responseText);

      setFlashCards(flashcards);
      setMessage('Flashcards generated successfully!');
    } catch (error) {
      console.error('Error generating flashcards:', error);
      setMessage('Error generating flashcards');
    } finally {
      setLoading(false); // End loading
    }
  };

  const parseFlashcards = (text: string): FlashCard[] => {
    const cards: FlashCard[] = [];

    // Regex pattern to match questions and answers
    const flashcardPattern = /- \*\*Question:\*\* ([\s\S]*?)\n- \*\*Answer:\*\* ([\s\S]*?)(?=\n- \*\*Question:\*\*|$)/g;

    let match: RegExpExecArray | null;
    let cardId = 1;

    while ((match = flashcardPattern.exec(text)) !== null) {
      let question = match[1].trim();
      let answer = match[2].trim();

      answer = answer.split('.')[0].trim();

      cards.push({
        id: cardId++,
        question,
        answer,
      });
    }

    return cards;
  };

  return (
    <section className="py-20 md:py-24 flex flex-col items-center">
      <div className="container p-4">
        <form onSubmit={generateFlashCards} className="mb-8 text-white">
          <div className="flex flex-col space-y-4">
            <textarea
              placeholder="Enter your text here"
              value={text}
              onChange={handleTextChange}
              className="py-2 px-4 rounded-lg border border-gray-300 h-72 resize-none bg-black"
              required
            />
            <div className="flex items-center justify-between">
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
                  'Generate Flashcards'
                )}
              </button>
              <span className="text-white text-sm">
                {text.length} characters / {MAX_CHAR_LIMIT} characters
              </span>
            </div>
            {error && <p className="text-center mt-4 text-red-500">{error}</p>}
            {message && <p className="text-center mt-4 text-green-500">{message}</p>}
          </div>
        </form>
        <div className="flex flex-wrap gap-4 justify-center">
          {flashCards.length > 0 ? (
            flashCards.map((card) => (
              <div
                key={card.id}
                className="w-64 h-64 perspective cursor-pointer"
                onClick={() => setFlippedCardId(flippedCardId === card.id ? null : card.id)}
              >
                <div
                  className={`relative w-full h-full duration-500 transform-style-preserve-3d ${flippedCardId === card.id ? 'rotate-y-180' : ''}`}
                >
                  <div className="absolute w-full h-full bg-black border border-gray-300 rounded-lg flex items-center justify-center p-4 face front shadow-[-5px_-6px_20px_rgba(128,0,128,0.29)]">
                    <p className="text-lg font-semibold text-gray-100">Question: {card.question}</p>
                  </div>
                  <div className="absolute w-full h-full bg-black border border-gray-300 rounded-lg flex items-center justify-center p-4 face back rotate-y-180 shadow-[0_4px_8px_rgba(128,0,128,0.4)]">
                    <p className="text-lg text-gray-200">Answer: {card.answer}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No flashcards to display.</p>
          )}
        </div>
      </div>
    </section>
  );
};

TextComponent.displayName = 'TextComponent';
