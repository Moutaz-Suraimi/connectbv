import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Services } from '../sections/Services';
import { VisualBreak } from '../sections/VisualBreak';
import { Publications } from '../sections/Publications';
import { Contact } from '../sections/Contact';

export const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <VisualBreak />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </>
  );
};
