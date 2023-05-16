import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Background from './components/Background';
import { Navbar } from './components/Navbar';
import React from 'react';
import Amenities from './components/Amenities';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';
import app from './firebase';
import Applications from './components/Applications';

function App() {
  return (
    <div className="App">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Amenities />
      <Events />
      <Contact />
      <Footer />
      <Applications />
    </div>
  );
}

export default App;
