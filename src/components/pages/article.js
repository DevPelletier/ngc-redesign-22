import React from 'react';
import '../../styles/app.scss';
import '../../styles/layout/article.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';



function Article() {
  return (
    <>
    <section className="article-hero">
      <div className="inner-section two-col-even width-02">
        <div className="text-container">
          <h6>April 30, 2022</h6>
          <h2>Medicinal Cannabis 101</h2>
        </div>
        <div className="img-container col-width-md push-right border-radius">
          <img src="imgs/square01.jpg" alt=""/>
        </div>
      </div>
    </section>

    <section className="article-info text-interject">
      <div className="inner-section two-col-even width-03">
        <div className="article-intro col-width-xsm">
          <p className="h4-style">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam natus voluptates reprehenderit nam, provident recusandae labore optio obcaecati ex ea corporis.</p>
        </div>
        <div className="article-author-tags-container">
          <h6>Written By:</h6>
          <h3>Jamie Lawlor</h3>
          <h6>Tags:</h6>
          <Link to="/">
            <h3>Cannabis 101</h3>
          </Link>
          <Link to="/">
            <h3>Health & Wellness</h3>
          </Link>
        </div>
      </div>
    </section>

    <section className="article">
      <div className="inner-section width-02">

        <div className="single-col-text">
          <h2>What is Cannabis?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, reiciendis quidem ipsam consequatur doloribus vero quam dolorem esse. Qui officia rem ad modi omnis sed dolorum, vel at accusamus nisi.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, reiciendis quidem ipsam consequatur doloribus vero quam dolorem esse. Qui officia rem ad modi omnis sed dolorum, vel at accusamus nisi.</p>
        </div>
        <div className="two-offset-imgs">
          <div className="img-container border-radius">
            <img src="imgs/test.jpg" alt=""/>
          </div>
          <div className="img-container border-radius">
            <img src="imgs/test.jpg" alt=""/>
          </div>
        </div>
        <div className="single-col-text">
          <h2>How Does Medicinal Cannabis Work?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, reiciendis quidem ipsam consequatur doloribus vero quam dolorem esse. Qui officia rem ad modi omnis sed dolorum, vel at accusamus nisi.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, reiciendis quidem ipsam consequatur doloribus vero quam dolorem esse. Qui officia rem ad modi omnis sed dolorum, vel at accusamus nisi.</p>
        </div>
        <div className="two-col-even">
          <div className="text-container">
            <h2>How Does Medicinal Cannabis Work?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, reiciendis quidem ipsam consequatur doloribus vero quam dolorem esse. Qui officia rem ad modi omnis sed dolorum, vel at accusamus nisi.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, reiciendis quidem ipsam consequatur doloribus vero quam dolorem esse. Qui officia rem ad modi omnis sed dolorum, vel at accusamus nisi.</p>
          </div>
          <div className="img-container">
            <img src="imgs/test.jpg" alt=""/>
          </div>
        </div>

        <div className="two-col-even how-can-i-try-medcann">
          <div className="text-container">
            <h2>How Can I Try Medicinal Cannabis?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, reiciendis quidem ipsam consequatur doloribus vero quam dolorem esse. Qui officia rem ad modi omnis sed dolorum, vel at accusamus nisi.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, reiciendis quidem ipsam consequatur doloribus vero quam dolorem esse. Qui officia rem ad modi omnis sed dolorum, vel at accusamus nisi.</p>
            <Link to="/" className="primary-link">
              Sign Up Today
            </Link>
            <Link to="/" className="primary-link">
              Browse Products
            </Link>

          </div>
          <div className="img-container">
            <img src="imgs/test.jpg" alt=""/>
          </div>
        </div>



      </div>
    </section>
    </>
  );
}

export default Article;
