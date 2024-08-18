interface PricingPlan {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
}

const pricing: PricingPlan[] = [
  {
    title: 'Free',
    price: '0',
    features: [
      'Unlimited non-AI Flashcards',
      'Conceptual Questions',
      '1 Case Scenario',
      'Basic Support',
      'Community Access',
    ],
    buttonText: 'Create',
  },
  {
    title: 'Mega Mind',
    price: '1.99',
    features: [
      'Unlimited AI-Generated Flashcards',
      'Upload PPT, PDF, and Text',
      'Save and Download for Offline Use',
      'Multiple Choice Questions',
      'Detailed Performance Analytics',
      'Priority Email Support',
    ],
    buttonText: 'Join Waitlist',
  },
  {
    title: 'Super Learner',
    price: '3.99',
    features: [
      'Unlimited AI-Generated Flashcards',
      'Upload PPT, PDF, Youtube Videos and Text',
      'Save and Download for Offline Use',
      'Unlimited generations per Month',
      'Advanced Analytics & Insights',
      'Personalized Study Plans',
      '24/7 Premium Support'
    ],
    buttonText: 'Join Waitlist',
  },
];

const PricingCard = ({ title, price, features, buttonText }: PricingPlan) => {
  return (
    <div className="bg-black text-white border border-white/30 rounded-xl shadow-md p-8 flex flex-col justify-between h-[600px]">
      <div>
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-400 mb-6 text-2xl">${price}/mo</p>
        <ul className="space-y-3 text-lg">
          {features.map((feature) => (
            <li key={feature} className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 mr-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l3 3l3-3m-3 0l-3 3l3-3" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <button
                type="submit"
                className="relative py-4 px-6 rounded-lg font-semibold text-lg bg-gradient-to-b from-[#190d2e] to-[#4a208c] shadow-[0px_0px_12px_#8c45ff]"
              >
                <div className="absolute inset-0">
                  <div className="border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                  <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                  <div className="absolute inset-0 shadow-[0_0_10px_rgb(148,69,255,.7)_inset]"></div>
                </div>
                <span>{buttonText}</span>
      </button>
    </div>
  );
};

export const Pricing = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tight mb-12">Pricing</h2>
        <p className="text-center mt-5 text-xl text-white/70">
          <span>Unlock the power of your study materials with our subscription plans. Transform your notes, textbooks, and presentations into tailored flashcards with ease. Our AI enhances your learning experience, making revision efficient and effective.</span>
        </p>
        <div className="flex flex-col mt-7 sm:flex-row justify-center gap-8">
          {pricing.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};
