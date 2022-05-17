import React from 'react';
import '../styles/app.scss';
import { Button } from './button';
import { Link } from 'react-router-dom';
import '../styles/components/landing-hero.scss';


function LandingHero() {
    return (
      <section className='hero-container'>
        <div className="hero-text">
          <div className="text-container">
            <h2>Welcome to Northern Green Canada</h2>
            <p>At Northern Green Canada, we put you and your health first. It’s what drives us to deliver excellence in everything we do. From offering medicinal cannabis products of the highest calibre to delivering exemplary customer service, our focus is on quality. Quality that delivers a better quality of life you can see, feel and most importantly, believe in.</p>
            <Link to="/start-here" className="primary-link">
            New To Medical Cannabis? Start Here
            </Link>
          </div>
        </div>
        <div className="hero-img-container img-container">
          <img src="imgs/square01.jpg" alt=""/>
        </div>
      </section>
    )
}

export default LandingHero;
