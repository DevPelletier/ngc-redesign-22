import React from 'react';
import '../styles/app.scss';
import { Button } from './button';
import '../styles/components/newsletter-signup.scss';

// Check this to React-ify this form
// https://reactjs.org/docs/forms.html


function NewsletterSignup() {
    return (
      <section className='newsletter'>
        <div className="newsletter-container">
          <h2>Join the Medicinal Cannabis Revolution</h2>
          <p>Get the latest news and innovation on Medicinal Cannabis, as well as NGC news and products, straight to your inbox</p>
          <form className='newsletter-signup'>
            <div className="newsletter-inputs">
              <div>
                <input type="text" name="name" placeholder="name" id="dark-input" />
              </div>
              <div>
                <input type="email" name="email" placeholder="your@email.com" id="dark-input" />
              </div>
            </div>
            <button type="submit" value="Submit" class="btn-success" disabled>
              <span className="material-symbols-rounded btn-submit">check</span>
            </button>
          </form>
        </div>
      </section>
    )
}

export default NewsletterSignup;
