import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Business from './components/Business';
import Course from './components/Course';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Business />
        <Course />
      </main>
      <Footer />
    </div>
  );
}

export default App;
