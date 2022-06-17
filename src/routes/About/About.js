import React from "react";
import AboutContent from "../../Components/AboutContent/AboutContent";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import HeroImage2 from "../HeroImage2/HeroImage2";

function About() {
  return (
    <>
      <Navbar />
      <HeroImage2 title="ABOUT" text="I am Friendly Front-End Developer" />
      <AboutContent />
      <Footer />
    </>
  );
}

export default About;
