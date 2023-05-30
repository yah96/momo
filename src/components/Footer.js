import React from 'react';
import './css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer id="contact" className="footer-section">
      <div className="contact-container">
        <table className="contact-table">
          <tbody>
            <tr>
              <td>
                <h2 className="contact-title">Contact Us</h2>
              </td>
              <td>
                <h2 className="opening-hours-title">Opening Hours</h2>
              </td>
            </tr>
            <tr>
              <td>
                <div className="contact-details">
                  <p>
                    <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                    <a href="tel:+123456789">123-456-789</a>
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                    <a href="mailto:info@mymomoscoffee.com">info@mymomoscoffee.com</a>
                  </p>
                  <p>
                    <a href="https://www.facebook.com/profile.php?id=100089211402313&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                    </a>
                  </p>
                  <p>
                    <a href="https://www.instagram.com/momos_coffee_/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                    </a>
                  </p>
                </div>
              </td>
              <td>
                <div className="opening-hours">
                  <ul>
                    <li>Monday 7:00 am - 5:00 pm</li>
                    <li>Tuesday 7:00 am - 5:00 pm</li>
                    <li>Wednesday closed</li>
                    <li>Thursday 7:00 am - 5:00 pm</li>
                    <li>Friday 7:00 am - 5:00 pm</li>
                    <li>Saturday 8:00 am - 2:00 pm</li>
                    <li>Sunday 8:00 am - 2:00 pm</li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="social-links">

      </div>
    </footer>
  );
};

export default Footer;
