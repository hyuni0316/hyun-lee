import React from 'react';
import './Contact.css';
// Import icons from react-icons library (need to install with: npm install react-icons)
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      type: 'Phone',
      value: '+1 (123) 456-7890',
      icon: <FaPhone className="contact-icon" />,
      link: 'tel:+11234567890'
    },
    {
      id: 2,
      type: 'Email',
      value: 'hyun.lee@example.com',
      icon: <FaEnvelope className="contact-icon" />,
      link: 'mailto:hyun.lee@example.com'
    },
    {
      id: 3,
      type: 'GitHub',
      value: 'github.com/hyunlee',
      icon: <FaGithub className="contact-icon" />,
      link: 'https://github.com/hyunlee'
    },
    {
      id: 4,
      type: 'LinkedIn',
      value: 'linkedin.com/in/hyunlee',
      icon: <FaLinkedin className="contact-icon" />,
      link: 'https://linkedin.com/in/hyunlee'
    },
    {
      id: 5,
      type: 'Instagram',
      value: '@hyunlee',
      icon: <FaInstagram className="contact-icon" />,
      link: 'https://instagram.com/hyunlee'
    }
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact</h2>
        <p className="contact-intro">
          Feel free to reach out to me through any of the following channels:
        </p>
        <div className="contact-methods">
          {contactInfo.map(contact => (
            <a 
              key={contact.id} 
              href={contact.link} 
              className="contact-item"
              target={contact.type !== 'Phone' && contact.type !== 'Email' ? '_blank' : ''}
              rel={contact.type !== 'Phone' && contact.type !== 'Email' ? 'noopener noreferrer' : ''}
            >
              <div className="contact-icon-wrapper">
                {contact.icon}
              </div>
              <div className="contact-details">
                <h3 className="contact-type">{contact.type}</h3>
                <p className="contact-value">{contact.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact; 