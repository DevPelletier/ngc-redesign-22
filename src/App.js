import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import NewsletterSignup from './components/newsletter-signup';
import Footer from './components/footer';

import Home from './components/pages/home';
import Shop from './components/pages/shop';
import Register from './components/pages/register';
import StartHere from './components/pages/start-here';
import IsMedCannRightPage from './components/pages/page-is-medcann-right-for-me';
import LearningHub from './components/pages/learning-hub';
import Product from './components/pages/product';
import Article from './components/pages/article';

import GoToTop from './components/go-to-top';

import Other from './components/pages/other';
import UnderConstrPage from './components/pages/under-constr-pg';



function App() {
  return (
    <>
      <div className="under-construction-responsive">
        <h1>Responsiveness for this screen size not complete</h1>
      </div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/shop' exact component={Shop} />
          <Route path='/register' exact component={Register} />
          <Route path='/start-here' exact component={StartHere} />
          <Route path='/is-medical-cannabis-right-for-me' exact component={IsMedCannRightPage} />
          <Route path='/learning-hub' exact component={LearningHub} />
          <Route path='/product' exact component={Product} />
          <Route path='/article' exact component={Article} />
          <Route path='/learning-hub/article' exact component={Article} />


          <Route path='/other' exact component={Other} />
          <Route component={UnderConstrPage} />
        </Switch>
        <NewsletterSignup />
        <Footer />
        <GoToTop />
      </Router>
    </>
  );
}

export default App;
