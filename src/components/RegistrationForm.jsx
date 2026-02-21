import React, { useState } from "react";
import "./RegistrationForm.css";

import { auth, database } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";

const RegistrationForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const[isRegistered,setIsRegistered]=useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1️⃣ Create Auth User
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      setIsRegistered(true);

      const user = userCredential.user;

      // 2️⃣ Store Extra Data in Realtime DB
      await set(ref(database, "users/" + user.uid), {
        name: formData.name,
        age: formData.age,
        email: formData.email
      });

      alert("Registration Successful!");

      // Optional: Reset form
      setFormData({
        name: "",
        age: "",
        email: "",
        password: ""
      });

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section className="reg-section">
      <div className="reg-card">

        <div className="reg-header">
          <div className="reg-logo">✦</div>
          <h2 className="reg-heading">Start for free today</h2>
          <p className="reg-subheading">
            Create your account in under a minute. No credit card needed —
            just your curiosity and a few details.
          </p>
        </div>

        <div className="reg-divider">
          <span>Register with Email</span>
        </div>

        <form className="reg-form" onSubmit={handleSubmit} noValidate>

          <div className="reg-row">
            <div className="reg-field">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Jane Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="reg-field">
              <label htmlFor="age">Age</label>
              <input
                id="age"
                name="age"
                type="number"
                placeholder="25"
                min="13"
                max="120"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="reg-field">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="jane@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="reg-field">
            <label htmlFor="password">Password</label>
            <div className="reg-password-wrapper">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Min. 8 characters"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="reg-password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button className={isRegistered ? "reg-submit-btn-success":"reg-submit-btn"} type="submit">
           {isRegistered ? "Registration Successfull":"Create My Account ->"}
          </button>

        </form>

        <p className="reg-login-prompt">
          Already have an account?{" "}
          <a href="/login" className="reg-login-link">
            Login Here
          </a>
        </p>

      </div>
    </section>
  );
};

export default RegistrationForm;