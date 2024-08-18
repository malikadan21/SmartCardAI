import Logo from '@/assets/logo.svg';
import XSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YtSocial from "@/assets/social-youtube.svg";
import React, { RefObject } from 'react';

interface FooterProps {
  featuresRef: RefObject<HTMLDivElement>;
  pricingRef: RefObject<HTMLDivElement>;
  ctaRef: RefObject<HTMLDivElement>;
}

export const Footer: React.FC<FooterProps> = ({ featuresRef, pricingRef, ctaRef }) => {
  const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex gap-2 items-center lg:flex-1">
            <Logo className="h-6 w-6" />
            <div className="font-medium">SmartCardAI</div>
          </div>
          <div>
            <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7">
              <button
                onClick={() => scrollToSection(featuresRef)}
                className="text-white/70 hover:text-white text-xs md:text-sm transition"
              >
                Features
              </button>
              <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition">
                Test
              </a>
              <button
                onClick={() => scrollToSection(pricingRef)}
                className="text-white/70 hover:text-white text-xs md:text-sm transition"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection(ctaRef)}
                className="text-white/70 hover:text-white text-xs md:text-sm transition"
              >
                Waitlist
              </button>
            </nav>
          </div>
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <XSocial className="text-white/40 hover:text-white transition" />
            <InstaSocial className="text-white/40 hover:text-white transition" />
            <YtSocial className="text-white/40 hover:text-white transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};
