import { faHome, faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faYoutube,
  faGithub,
} from "@fortawesome/fontawesome-free-brands";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/style.css";
import "./footer.css";
const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="left">
            <ul>
              <li>
                <FontAwesomeIcon icon={faHome} />
                <div className="details">
                  <p>123 Housing Society.</p>
                  <p>Bangladesh.</p>
                </div>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <div className="details">
                  <p>1-1234-123-12</p>
                </div>
              </li>
              <li>
                <FontAwesomeIcon icon={faMessage} />
                <div className="details">
                  <p>info@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="right">
            <h3 className="title">About the company</h3>
            <p className="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <div className="icons">
              <Link to="https://www.facebook.com">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link to="https://www.twitter.com">
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
              <Link to="https://www.instagram.com">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
