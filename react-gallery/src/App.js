// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { GalleryProvider } from './context/GalleryContext';
import Gallery from './components/Gallery';
import Search from './components/Search';

function App() {
  return (
    <GalleryProvider>
     <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/mountain">Mountain</Link>
          <Link to="/beaches">Beaches</Link>
          <Link to="/birds">Birds</Link>
          <Link to="/food">Food</Link>
          <Link to="/search">Search</Link>
        </nav>
        <hr />
        <Routes>
           <Route path="/" element={<Navigate to="/mountain" />} />
           <Route path="/mountain" element={<Gallery category="mountain" />} />
           <Route path="/beaches" element={<Gallery category="beaches" />} />
           <Route path="/birds" element={<Gallery category="birds" />} />
           <Route path="/food" element={<Gallery category="food" />} />
           <Route path="/search" element={<Search />} />
        </Routes>
      </div>
     </Router>
    </GalleryProvider>
  );
}

export default App;
