import React, { useMemo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Only keep the typing effect words array
  const words = useMemo(() => ["School", "Business", "Training Centre", "Academy"], []);

  useEffect(() => {
    const typeEffect = () => {
      const currentWord = words[currentWordIndex];
      
      if (isDeleting) {
        setCurrentCharIndex(prev => prev - 1);
      } else {
        setCurrentCharIndex(prev => prev + 1);
      }

      if (!isDeleting && currentCharIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentCharIndex === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(typeEffect, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [currentWordIndex, currentCharIndex, isDeleting, words]);

  return (
    <div className="min-h-screen w-screen flex flex-col md:flex-row relative z-10 overflow-hidden">
      {/* Left Section - Admin Contact */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-green-900 p-6 text-white">
        <div className="w-full max-w-md">
          <img src="asset/favicon.png" alt="Logo" className="mx-auto mb-6 w-16 h-auto" />

          <h2 className="text-2xl font-semibold mb-6 text-center">Account Registration</h2>

          <div className="bg-green-800 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-medium mb-4 text-center text-yellow-300">
              Registration by Admin Only
            </h3>
            <p className="mb-4 text-center">
              Please contact the administrator to create your account.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>admin@example.com</span>
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+1 (123) 456-7890</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm mb-4">
              Already have an account?
            </p>
            <Link 
              to="/login" 
              className="inline-block bg-yellow-500 text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Right Section (Illustration & Dynamic Typing Text) */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white px-4 py-8 md:px-8">
        <h2 className="text-xl font-bold mb-2 text-center">
          Start managing <span className="text-green-700">free</span> now!
        </h2>
        <p className="text-center mb-4 text-sm px-2">
          Sukuu is a 100% online{' '}
          <span className="font-bold text-yellow-500">
            {words[currentWordIndex].substring(0, currentCharIndex)}
          </span>{' '}
          management software.
        </p>
        <img 
          src="asset/illustration2.png" 
          alt="Illustration" 
          className="w-full max-w-xs h-auto"
        />
      </div>
    </div>
  );
};

export default Signup;