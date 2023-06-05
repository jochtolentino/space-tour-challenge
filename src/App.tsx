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
        <Route path="/" element={<HomePage />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/crew" element={<CrewPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
      </Routes>
      </main>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
