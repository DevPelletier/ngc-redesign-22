import React from 'react';
import ReactDOM from 'react-dom';
// import { Helmet, HelmetProvider } from "react-helmet-async";

import './styles/app.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import NewsletterSignup from './components/newsletter-signup';
import Footer from './components/footer';

import Home from './components/pages/home';
import Shop from './components/pages/shop';
import ShopCBD from './components/pages/shop-cbd';

import Register from './components/pages/register';
import StartHere from './components/pages/start-here';
import IsMedCannRightPage from './components/pages/page-is-medcann-right-for-me';
import LearningHub from './components/pages/learning-hub';
import Product from './components/pages/product';
import Article from './components/pages/article';
import SupportMain from './components/pages/ngc-support-main';
import VetSupport from './components/pages/vet-support';
import Seniors from './components/pages/seniors';
import InsuranceCoverage from './components/pages/insurance-coverage';
import CompassionatePricing from './components/pages/compassionate-pricing';
import AboutUs from './components/pages/about-us';
import MedicalDisclaimer from './components/pages/medical-disclaimer';
import PrivacyPolicy from './components/pages/privacy-policy';
import TermsConditions from './components/pages/terms-conditions';
import HCPClinicsMain from './components/pages/hcp-clinics-main';
import FindAClinic from './components/pages/find-a-clinic';
import Careers from './components/pages/careers';
import TransferYourRx from './components/pages/transfer-your-rx';
import ClientForms from './components/pages/client-forms';
import FAQs from './components/pages/faqs';

import Page404 from './components/pages/404';


import GoToTop from './components/go-to-top';

import Other from './components/pages/other';
import UnderConstrPage from './components/pages/under-constr-pg';



function App() {

  // const [title, setTitle] = useState("");
  // useEffect(() => {
  //   // This will run when the page first loads and whenever the title changes
  //   document.title = title;
  // }, [title]);
  //
  // const changeTitle = (event) => {
  //   setTitle(event.target.value);
  // };

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
          <Route path='/shop-cbd' exact component={ShopCBD} />
          <Route path='/register' exact component={Register} />
          <Route path='/start-here' exact component={StartHere} />
          <Route path='/is-medical-cannabis-right-for-me' exact component={IsMedCannRightPage} />
          <Route path='/learning-hub' exact component={LearningHub} />
          <Route path='/product' exact component={Product} />
          <Route path='/article' exact component={Article} />
          <Route path='/learning-hub/article' exact component={Article} />
          <Route path='/support-programs' exact component={SupportMain} />
          <Route path='/veterans' exact component={VetSupport} />
          <Route path='/seniors-discount' exact component={Seniors} />
          <Route path='/insurance-coverage' exact component={InsuranceCoverage} />
          <Route path='/compassionate-pricing-low-income' exact component={CompassionatePricing} />
          <Route path='/about-us' exact component={AboutUs} />
          <Route path='/medical-disclaimer' exact component={MedicalDisclaimer} />
          <Route path='/privacy-policy' exact component={PrivacyPolicy} />
          <Route path='/terms-conditions' exact component={TermsConditions} />
          <Route path='/healthcare-professionals-clinics' exact component={HCPClinicsMain} />
          <Route path='/find-a-clinic' exact component={FindAClinic} />
          <Route path='/careers' exact component={Careers} />
          <Route path='/transfer-your-prescription' exact component={TransferYourRx} />
          <Route path='/client-forms' exact component={ClientForms} />
          <Route path='/faqs' exact component={FAQs} />

          <Route component={Page404} />
        </Switch>
        <NewsletterSignup />
        <Footer />
        <GoToTop />
      </Router>
    </>
  );
}

export default App;
