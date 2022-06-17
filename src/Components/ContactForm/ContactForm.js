import React from "react";
import "../../assets/css/style.css";
import "./contactform.css";

const ContactForm = () => {
  return (
    <section className="contact-form">
      <div className="container">
        <div className="form-wrapper">
          <form method="POST">
            <div className="form-group">
              <label for="name">your name</label>
              <input type="text" id="name" />
            </div>
            <div className="form-group">
              <label for="email">email</label>
              <input type="email" id="email" />
            </div>
            <div className="form-group">
              <label for="subject">subject</label>
              <input type="text" id="subject" />
            </div>
            <div className="form-group">
              <label for="message">message</label>
              <textarea
                rows="8"
                id="message"
                placeholder="Type your message here"
              />
            </div>
            <button className="btn">submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
