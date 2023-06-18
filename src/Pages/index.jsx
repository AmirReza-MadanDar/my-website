import About from "../Components/AboutSection";
import { aboutObj } from "../Components/AboutSection/data";
import Blog from "../Components/Blog";
import Client from "../Components/Client";
import Contact from "../Components/Contact";
import Hero from "../Components/HeroSection";
import { heroObj } from "../Components/HeroSection/data";
import Navbar from "../Components/Navbar";
import Portfolio from "../Components/Portfolio";
import { portfolioObj } from "../Components/Portfolio/data";
import Services from "../Components/Services";
import { serviceObj } from "../Components/Services/data";
import Sidebar from "../Components/Sidebar";
import React, { useState } from "react";

const Pages = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggel = () => {
    setIsOpen(!isOpen);
  };
  const toggel2 = () => {
    if (isOpen === true) {
      setIsOpen(isOpen === false);
    }
  };

  return (
    <>
      <Navbar toggel={toggel} isOpen={isOpen} />
      <Sidebar isOpen={isOpen} toggel={toggel} />
      <Hero toggel={toggel2} {...heroObj} />
      <About toggel={toggel2} {...aboutObj} />
      <Services toggel={toggel2} {...serviceObj} />
      <Portfolio toggel={toggel2} {...portfolioObj} />
      <Client toggel={toggel2} />
      <Blog toggel2={toggel2} />
      <Contact toggel={toggel2} />
    </>
  );
};

export default Pages;
