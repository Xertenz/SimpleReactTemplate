import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import PricingCards from "../../Components/PricingCards/PricingCards";
import WorkCards from "../../Components/WorkCards/WorkCards";
import HeroImage2 from "../HeroImage2/HeroImage2";

function Project() {
  return (
    <section className="project">
      <Navbar />
      <HeroImage2 title="PROJECT" text="This Is Project Page" />
      <WorkCards />
      <PricingCards />
      <Footer />
    </section>
  );
}

export default Project;
