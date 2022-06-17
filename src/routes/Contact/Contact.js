import React from "react";
import ContactForm from "../../Components/ContactForm/ContactForm";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import HeroImage2 from "../HeroImage2/HeroImage2";

function Contact() {
  return (
    <section className="contact">
      <Navbar />
      <HeroImage2 title="CONTACT" text="Let's Have a Chat" />
      <ContactForm />
      <Footer />
    </section>
  );
}

export default Contact;
