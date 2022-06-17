import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import HeroImage from "../HeroImage/HeroImage";
import "../../assets/css/style.css";
import Footer from "../../Components/Footer/Footer";
import WorkCards from "../../Components/WorkCards/WorkCards";

const Home = () => {
  return (
    <section className="home">
      <Navbar />
      <HeroImage />
      <WorkCards />
      <Footer />
    </section>
  );
};

export default Home;
