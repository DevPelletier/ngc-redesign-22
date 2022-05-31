import React, { Component } from 'react';
import '../styles/app.scss';
import { Button } from './button';
import { Link } from 'react-router-dom';
import '../styles/components/landing-hero.scss';


// function LandingHero() {
class LandingHero extends React.Component {
  constructor(props) {
    super(props);
    const images = [
      "imgs/000-4to3-V.jpg",
      "imgs/030-4to3-V.jpg",
      "imgs/032-4to3-V.jpg"
    ];
    this.state = {
      images,
      currentImg: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.changeBackgroundImage(), 7000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  // fadeImage = () => {
  //   this.setState({
  //     fadeOut: true
  //   });
  //   setTimeout(() => {
  //     this.setState({
  //       fadeOut: false
  //     });
  //   }, 500);
  // }
  // className={`${fadeOut ? 'fadeOutOpacity' : ''}`}

  changeBackgroundImage(ref) {
    let newCurrentImg = 0;
    const {images, currentImg} = this.state;
    const noOfImages = images.length;

    if (currentImg !== noOfImages - 1) {
      newCurrentImg = currentImg + 1;
    }

    this.setState({
      fadeOut: true
    });
    // console.log('fadeout');

    setTimeout(() => {
      this.setState({currentImg: newCurrentImg});
      // console.log('imagechanged');

      setTimeout(() => {
        this.setState({
          fadeOut: false
        });
        // console.log('fadein');
      }, 250);

    }, 250);

  }


  render() {
    const {images, currentImg} = this.state;
    const imgString = `${images[currentImg]}`;

    return (
      <section className='hero-container'>
        <div className="hero-text">
          <div className="text-container">
            <h2>Welcome to Northern Green Canada</h2>
            <p>At Northern Green Canada, we put you and your health first. It’s what drives us to deliver excellence in everything we do. From offering medicinal cannabis products of the highest calibre to delivering exemplary customer service, our focus is on quality that you can see, feel, and believe in.</p>
            <Link to="/start-here" className="primary-link">
            New To Medical Cannabis? Start Here
            </Link>
          </div>
        </div>
        <div className="hero-img-container img-container">
          <img className={`fading ${this.state.fadeOut ? 'fadeOutOpacity' : ''}`}src={imgString} alt=""/>
        </div>
      </section>
    );
  }

}

export default LandingHero;
