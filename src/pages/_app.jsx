import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import dashboard from './pages/dashboard';
import campaigns from './pages/campaigns';
import TermsAndConditions from '../components/TermsAndConditions';
import PrivacyPolicy from '../components/PrivacyPolicy';
import Footer from '../components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<dashboard />} />
        <Route path="/campaigns" element={<campaigns />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/" element={<dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
