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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, obcaecati quas maiores, totam voluptatibus ipsum consectetur praesentium illo consequuntur.</p>
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
