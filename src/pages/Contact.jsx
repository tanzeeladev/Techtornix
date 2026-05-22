import React, { useState } from "react";
import { FiUser, FiMail, FiEdit2, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import Footer from "../pages/Footer";
import "../css/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${formData.name}, your message has been sent!`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <section id="contact" className="contact-section">
        <div className="contact-container">
          
          {/* Left info panel */}
          <div className="contact-left">
            <div className="connect-tag">
              <FiSend className="tag-icon" /> LET'S CONNECT
            </div>
            <h2>
              Let's Build <br />
              Something <br />
              <span className="highlight-text">Amazing</span>
            </h2>
            <p className="sub-heading">Share your project idea and we’ll make it a reality.</p>
            
            <div className="contact-info-list">
              <div className="info-item">
                <div className="info-icon-box"><FiMail /></div>
                <div>
                  <span className="info-label">Email</span>
                  <p className="info-value">hello@techtornix.com</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon-box"><FiPhone /></div>
                <div>
                  <span className="info-label">Phone</span>
                  <p className="info-value">+123 456 7890</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon-box"><FiMapPin /></div>
                <div>
                  <span className="info-label">Address</span>
                  <p className="info-value">123 Tech Street, Silicon Valley</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right form panel */}
          <div className="contact-right">
            <div className="form-card">
              <div className="form-header">
                <div className="chat-icon-box"><BiMessageDetail /></div>
                <div>
                  <h3>Send us a message</h3>
                  <p>We'll get back to you as soon as possible.</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="input-group">
                  <FiUser className="input-icon" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <FiMail className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group textarea-group">
                  <FiEdit2 className="input-icon textarea-icon" />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Send Message <FiSend className="btn-arrow" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;