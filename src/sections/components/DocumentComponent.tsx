import React from 'react';

export const DocumentComponent: React.FC = () => {
  return (
    <section className="py-10 md:py-16 flex flex-col items-center">
      <div className="container mx-auto p-4">
        <div className="border border-gray-300 rounded-lg p-6 md:p-12 bg-black text-center">
          <span className="text-red-500 font-bold text-xl md:text-2xl">🔒</span>
          <span className="text-white ml-2 text-sm md:text-lg">
            This feature is only available in paid versions
          </span>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          <button
            type="button"
            className="py-2 px-4 rounded-lg bg-gradient-to-b from-[#190d2e] to-[#4a208c] text-white font-semibold text-sm md:text-md"
            disabled
          >
            Generate Flashcards
          </button>
          <span className="text-white text-sm md:text-md mt-2 md:mt-0">
            0 characters / 20,000 characters
          </span>
        </div>
      </div>
    </section>
  );
};

DocumentComponent.displayName = 'DocumentComponent';

export default DocumentComponent;
