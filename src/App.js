import React, { useEffect } from 'react';
import Hero from "./components/Hero";
import WhyMoonEx from "./components/WhyMoonEx";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WebFont from 'webfontloader';
const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Raleway', 'sans-serif', 'Fira Code'],
      },
    });
  }, []);
  return (
    <div style={{ fontFamily: 'Fira Code, Raleway' }} className="bg-[#061625] w-full">
      <Hero />
      <WhyMoonEx />
      <Features />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
