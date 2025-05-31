import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import EntryPage from './components/EntryPage';
import Dashboard from './components/Dashboard';

function App() {
  const [showEntry, setShowEntry] = useState(true);
  const [showDashboard, setShowDashboard] = useState(false);

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setShowEntry(false);
      setShowDashboard(true);
    }, 500);
  };

  return (
    <>
      <AnimatePresence>
        {showEntry && <EntryPage onAnimationComplete={handleAnimationComplete} />}
      </AnimatePresence>
      {showDashboard && <Dashboard />}
    </>
  );
}

export default App