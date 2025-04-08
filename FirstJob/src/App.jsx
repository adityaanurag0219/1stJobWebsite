import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/Home';

function App() {
  return (
    <div className="font-sans text-gray-800 scroll-smooth bg-gray-50">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;