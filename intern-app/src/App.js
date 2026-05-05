import React, { useState } from 'react';
import LoginPage from './components/LoginPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // This function triggers when the login button is clicked
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        // Show Login Page if user is not logged in
        <LoginPage onLogin={handleLogin} />
      ) : (
        // Show success screen once logged in
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center p-6">
          <div className="w-24 h-24 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center mb-6">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
             </svg>
          </div>
          <h1 className="text-4xl font-black text-purple-700 uppercase tracking-tighter">
            Talent Corner Services
          </h1>
          <p className="text-slate-500 mt-4 text-xl font-medium">
            Authentication Successful. Phase 2: Landing Page is coming next!
          </p>
        </div>
      )}
    </div>
  );
}

// CRITICAL FIX: We must export App here, not LoginPage!
export default App;