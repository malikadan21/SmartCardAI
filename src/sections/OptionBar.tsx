import React, { useState } from 'react';

interface OptionBarProps {
    onButtonClick: (componentName: string) => void;
}

export const OptionBar: React.FC<OptionBarProps> = ({ onButtonClick }) => {
    // State to track the selected button
    const [selected, setSelected] = useState<string>('manual');

    // Handler to handle button click and set selected option
    const handleClick = (componentName: string) => {
        setSelected(componentName);
        onButtonClick(componentName);
    };

    return (
        <section className="flex flex-wrap bg-black rounded-[25px] p-[3px] w-full max-w-5xl mx-auto 
                            shadow-[5px_10px_20px_rgba(128,0,128,0.5),10px_6px_6px_rgba(128,0,128,0.3)]
                            transition-transform duration-300 ease-in-out">
            
            <button 
                onClick={() => handleClick('manual')} 
                className={`flex-1 bg-transparent py-2 px-4 rounded-[25px] text-white text-base cursor-pointer 
                           transition-colors duration-300 ease-in-out
                           ${selected === 'manual' ? 'border border-[#82098b] text-white' : ''}`}
            >
                Manual
            </button>
            <button 
                onClick={() => handleClick('text')} 
                className={`flex-1 bg-transparent py-2 px-4 rounded-[25px] text-white text-base cursor-pointer 
                           transition-colors duration-300 ease-in-out
                           ${selected === 'text' ? 'border border-[#82098b] text-white' : ''}`}
            >
                Text
            </button>
            <button 
                onClick={() => handleClick('document')} 
                className={`flex-1 bg-transparent py-2 px-4 rounded-[25px] text-white text-base cursor-pointer 
                           transition-colors duration-300 ease-in-out
                           ${selected === 'document' ? 'border border-[#82098b] text-white' : ''}`}
            >
                Document
            </button>
            <button 
                onClick={() => handleClick('image')} 
                className={`flex-1 bg-transparent py-2 px-4 rounded-[25px] text-white text-base cursor-pointer 
                           transition-colors duration-300 ease-in-out
                           ${selected === 'image' ? 'border border-[#82098b] text-white' : ''}`}
            >
                Image
            </button>
            <button 
                onClick={() => handleClick('video')} 
                className={`flex-1 bg-transparent py-2 px-4 rounded-[25px] text-white text-base cursor-pointer 
                           transition-colors duration-300 ease-in-out
                           ${selected === 'video' ? 'border border-[#82098b] text-white' : ''}`}
            >
                Video
            </button>
        </section>
    );
};

OptionBar.displayName = 'OptionBar';

export default OptionBar;
