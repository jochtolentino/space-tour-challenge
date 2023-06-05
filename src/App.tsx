import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import HomePage from './screens/HomePage';
import DestinationPage from './screens/DestinationPage';
import CrewPage from './screens/CrewPage';
import TechnologyPage from './screens/TechnologyPage';
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation/>
      <AnimatePresence>
      <main>
      <Routes>
        <Route path="/space-tour-website/" element={<HomePage />} />
        <Route path="/space-tour-website/destination" element={<DestinationPage />} />
        <Route path="/space-tour-website/crew" element={<CrewPage />} />
        <Route path="/space-tour-website/technology" element={<TechnologyPage />} />
      </Routes>
      </main>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
