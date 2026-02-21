import React from "react";
import "./RegistrationHero.css";

import RegistrationHeroImage from '../assets/user-register-hero.png'

const RegistrationHero = () => {
  return (
    <section className="hero">
      <div className="hero__overlay" />

      <div className="hero__content">
        <div className="hero__text">
          <span className="hero__subheading">Welcome to the platform</span>
          <h1 className="hero__heading">
            Create Your <br />
            <span className="hero__heading--accent">Free Account</span>
          </h1>
          <p className="hero__tagline">
            Register to track Your Health and get Suggestions for Free.
          </p>
          <div className="hero__badges">
            <span className="hero__badge">✦ BMI</span>
            <span className="hero__badge">✦ Prediction</span>
            <span className="hero__badge">✦ AI Assistant</span>
          </div>
        </div>

        <div className="hero__image-wrapper">
          <div className="hero__image-blob" />
          <img
            className="hero__image"
            src={RegistrationHeroImage}
            alt="Team collaborating"
          />
          <div className="hero__image-card">
            
            <div>
              <strong>Hello!</strong>
              <p>Doctors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationHero;