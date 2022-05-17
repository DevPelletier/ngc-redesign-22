import React from 'react';
import '../styles/app.scss';
import { Button } from './button';
import '../styles/layout/footer.scss';
// const simpleIcons = require('simple-icons'); not working right now
// const icon = simpleIcons.Get('facebook');
import { ReactComponent as FacebookIcon } from '../svg/facebook.svg';
import { ReactComponent as TwitterIcon } from '../svg/twitter.svg';
import { ReactComponent as InstagramIcon } from '../svg/instagram.svg';
import { ReactComponent as LinkedInIcon } from '../svg/linkedin.svg';
import { ReactComponent as PinterestIcon } from '../svg/pinterest.svg';
import { Link } from 'react-router-dom';


function Footer() {
    return (
      <footer>
        <div className="footer-links-container">
          <ul className="footer-link-list">
            <li>
              <h3>Patients</h3>
            </li>
            <li>
              <a href="/register">How to Sign Up</a>
            </li>
            <li>
              <a href="/find-a-clinic">Find a Clinic</a>
            </li>
            <li>
              <a href="/veterans-coverage">Veteran's Coverage</a>
            </li>
            <li>
              <a href="/compassionate-pricing">Compassionate Pricing</a>
            </li>
            <li>
              <a href="/patients/about-us">About NGC</a>
            </li>
            <li>
              <a href="/faqs">FAQ</a>
            </li>
          </ul>
          <ul className="footer-link-list">
            <li>
              <h3>HCP & Clinics</h3>
            </li>
            <li>
              <a href="/professionals-clinics/resources-hub">Resources Hub</a>
            </li>
            <li>
              <a href="/professionals-clinics/working-with-ngc">Working with NGC</a>
            </li>
          </ul>
          <ul className="footer-link-list">
            <li>
              <h3>Shop</h3>
            </li>
            <li>
              <a href="/shop">All Products</a>
            </li>
            <li>
              <a href="/shop#dried-flower">Dried Flower</a>
            </li>
            <li>
              <a href="/shop#vaporizers">Vaporizers</a>
            </li>
            <li>
              <a href="/shop#oils">Oils</a>
            </li>
            <li>
              <a href="/shop#sprays">Sprays</a>
            </li>
            <li>
              <a href="/shop#accessories">Accessories</a>
            </li>
          </ul>
          <ul className="footer-link-list">
            <li>
              <h3>Learn</h3>
            </li>
            <li>
              <a href="/learning-hub">Medical Cannabis Learning Hub</a>
            </li>
            <li>
              <a href="/article">Medical Cannabis 101</a>
            </li>
            <li>
              <a href="/learning-hub/learn-dried-flower">Learn Dried Flower</a>
            </li>
            <li>
              <a href="/learning-hub/learn-vaporizers">Learn Vaporizers</a>
            </li>
            <li>
              <a href="/learning-hub/learn-extracts">Learn Extracts</a>
            </li>
            <li>
              <a href="/learning-hub/learn-cannabinoids">Learn Cannabinoids</a>
            </li>
          </ul>
          <ul className="footer-link-list contact">
            <li>
              <h3>Contact Us</h3>
            </li>
            <li>
              <a
                href="mailto:ClientServices@NorthernGreenCanada.com">
                ClientServices@NorthernGreenCanada.com
              </a>
              <br /><br />
              <a>
                1-866-233-3707
              </a>
            </li>
            <li><br /></li>
            <li>
              <h6>Hours</h6>
              <p>Mon - Fri: 8:30am - 4:00pm EST</p>
            </li>
            <li>
              <div className="social-container">
                <Link
                  class="svg-icon"
                  to='/'
                  target='_blank'
                  aria-label="Facebook"
                >
                  <FacebookIcon fill="#FFFFFF" width="26" alt="facebook"/>
                </Link>
                <Link
                  class="svg-icon"
                  to='/'
                  target='_blank'
                  aria-label="Instagram"
                >
                  <InstagramIcon fill="#FFFFFF" width="26" alt="instagram"/>
                </Link>
                <Link
                  class="svg-icon"
                  to='/'
                  target='_blank'
                  aria-label="Twitter"
                >
                  <TwitterIcon fill="#FFFFFF" width="26" alt="twitter"/>
                </Link>
                <Link
                  class="svg-icon"
                  to='/'
                  target='_blank'
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon fill="#FFFFFF" width="26" alt="linkedin"/>
                </Link>
                <Link
                  class="svg-icon"
                  to='/'
                  target='_blank'
                  aria-label="Pinterest"
                >
                  <PinterestIcon fill="#FFFFFF" width="26" alt="Pinterest"/>
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="legal-links-container">
          <div className="logo-container">
            <img
              src="imgs/ngc_logo_badge_white.png"
              alt="Northern Green Canada Logo Badge White"
            />
          </div>
          <div className="text-centered">
            <h6>Copyright 2022 Northern Green Canada</h6>
          </div>
          <div className="link-grid">
            <a
              href="/terms-conditions"
              className="h6-style">
              Terms & Conditions
            </a>
            <span class="link-separator">|</span>
            <a
              href="/privacy-policy"
              className="h6-style">
              Privacy Policy
            </a>
            <span class="link-separator">|</span>
            <a
              href="/medical-disclaimer"
              className="h6-style">
              Medical Disclaimer
            </a>
          </div>
        </div>
      </footer>
    )
}

export default Footer;
