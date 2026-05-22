import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Choose from './pages/Choose.jsx';
import Process from './pages/process.jsx';
import Stats from './pages/Stats.jsx';
import TechStack from './pages/TechStack.jsx';
import CTA from './pages/CTA.jsx';
import Footer from './pages/Footer.jsx';
import Contact from './pages/Contact.jsx'; // 🆕 Contact page import

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Services />
              <Choose />
              <Process />
              {/* <Stats/>
              <TechStack/>
              <CTA/> */}
              <Footer />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;