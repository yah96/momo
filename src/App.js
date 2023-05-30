import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Footer';

const Page = () => {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <Menu />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default Page;
