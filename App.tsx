
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import ThankYouPage from './components/ThankYouPage';

const App: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userName, setUserName] = useState('');

  const handleSubmission = (name: string) => {
    setUserName(name);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {isSubmitted ? (
        <ThankYouPage userName={userName} />
      ) : (
        <LandingPage onComplete={handleSubmission} />
      )}
    </div>
  );
};

export default App;
