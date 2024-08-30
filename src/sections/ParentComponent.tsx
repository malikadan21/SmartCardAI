import React, { useState } from 'react';
import OptionBar from './OptionBar'; 
import { FlashCards } from './components/FlashCards';
import {TextComponent} from './components/TextComponent';
import {DocumentComponent} from './components/DocumentComponent';
import {ImageComponent} from './components/ImageComponent';
import {VideoComponent} from './components/VideoComponent';

const ParentComponent: React.FC = () => {
    const [selectedComponent, setSelectedComponent] = useState<string>('manual');

    const handleButtonClick = (componentName: string) => {
        setSelectedComponent(componentName);
    };

    let ComponentToShow;
    switch (selectedComponent) {
        case 'text':
            ComponentToShow = TextComponent;
            break;
        case 'document':
            ComponentToShow = DocumentComponent;
            break;
        case 'image':
            ComponentToShow = ImageComponent;
            break;
        case 'video':
            ComponentToShow = VideoComponent;
            break;
        case 'manual':
        default:
            ComponentToShow = FlashCards;
            break;
    }

    return (
        <div>
            <div className="bg-black text-white py-[72px] sm:py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tight mb-12">Flashcards</h2>
        <           p className="text-center mt-5 text-xl text-white/80">
                        <span>Explore the power of flashcards to enhance your learning! Whether you choose to create them manually for a personal touch or use our automatic tools to streamline the process, you’ll find a method that suits your needs. Dive in and start making the most of your study time with flashcards tailored to your content!</span>
                    </p>
                </div>
            </div>
    
            <OptionBar onButtonClick={handleButtonClick} />
            <div>
                <ComponentToShow />
            </div>
        </div>
    );
};

export default ParentComponent;
