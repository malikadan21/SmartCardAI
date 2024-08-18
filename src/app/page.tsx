"use client"
import React, { useRef } from 'react';
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Features } from "@/sections/Features";
import { Pricing } from "@/sections/Pricing";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { FlashCards } from "@/sections/FlashCards";

export default function Home() {
  const featuresRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const testRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header featuresRef={featuresRef} testRef={testRef} pricingRef={pricingRef} ctaRef={ctaRef}  />
      <Hero />
      <div ref={featuresRef}>
        <Features />
      </div>
      <div ref={testRef}>
        <FlashCards />
      </div>
      <div ref={pricingRef}>
        <Pricing />
      </div>
      <div ref={ctaRef}>
        <CallToAction />
      </div>
      <Footer featuresRef={featuresRef} pricingRef={pricingRef} ctaRef={ctaRef}/>
    </>
  );
}
