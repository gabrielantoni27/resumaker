import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ResumeForm from './pages/ResumeForm';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router basename="/resumaker"> {/* <-- FIXED HERE */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<ResumeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
