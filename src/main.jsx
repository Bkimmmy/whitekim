import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Home from './Home.jsx';
import Services from './Services.jsx';
import MainServiceProductPage from './MainServiceProductPage.jsx';
import Resources from './Resources.jsx';
import CaseStudies from './CaseStudies.jsx';
import BookACall from './BookACall.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/main-recruiting-service" element={<MainServiceProductPage />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/book-a-call" element={<BookACall />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);