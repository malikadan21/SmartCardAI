import React, { useState } from 'react';
import starsBg from '@/assets/stars.png';
import gridLines from '@/assets/grid-lines.png';

export const CallToAction = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [emailsList, setEmailList] = useState<string[]>([]); 

  const isValidEmail = (email: string) => {
    // Simple regex for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    if (!email) {
      setMessage('Please enter your email address.');
      return;
    }

    if (!isValidEmail(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    if (emailsList.includes(email)) {
      setMessage('This email is already on the waitlist.');
      return;
    }

    setEmailList((prevList) => [...prevList, email]);
    setMessage('Successfully joined the waitlist!');
    setEmail(''); 
  };

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative"
          style={{
            backgroundImage: `url(${starsBg.src})`,
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(40%_at_40%_15%,black,transparent)]"
            style={{
              backgroundImage: `url(${gridLines.src})`,
              maskImage: 'radial-gradient(circle, black, transparent)',
            }}
          ></div>
          <div className="relative">
            <h2 className="text-5xl md:text-6xl tracking-tighter text-center font-medium">
              AI-driven Flash Cards <br />for Everyone.
            </h2>
            <p className="text-center text-lg md:text-xl text-white/70 px-4 mt-5 tracking-light">
              Be the first to experience our innovative flashcard solutions—join the waitlist today and revolutionize your study routine!
            </p>
            <form onSubmit={handleSubmit} className="flex justify-center mt-8 space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="py-4 px-6 rounded-lg text-black text-lg font-medium border border-gray-300"
                style={{ minWidth: '300px' }}
                required
              />
              <button
                type="submit"
                className="relative py-4 px-6 rounded-lg font-semibold text-lg bg-gradient-to-b from-[#190d2e] to-[#4a208c] shadow-[0px_0px_12px_#8c45ff]"
              >
                <div className="absolute inset-0">
                  <div className="border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                  <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                  <div className="absolute inset-0 shadow-[0_0_10px_rgb(148,69,255,.7)_inset]"></div>
                </div>
                <span>Join Waitlist</span>
              </button>
            </form>
            {message && <p className="text-center text-lg mt-4">{message}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

CallToAction.displayName = 'CallToAction';
