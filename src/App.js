import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from "react-helmet";

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
// import { Button } from './components/button';
import Button from '@mui/material/Button';
// import { Helmet, HelmetProvider } from "react-helmet-async";

import './styles/app.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import NewsletterSignup from './components/newsletter-signup';
import Footer from './components/footer';

import Home from './components/pages/home';
import Shop from './components/pages/shop';
import ShopCBD from './components/pages/shop-subcategory-cbd';

import Register from './components/pages/register';
import StartHere from './components/pages/start-here';
import IsMedCannRightPage from './components/pages/page-is-medcann-right-for-me';
import LearningHub from './components/pages/learning-hub';
import Product from './components/pages/product';
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

/////// ARTICLES ///////
import Article_MedCann101 from './components/articles/medicalcannabis101';
import Article_LearnDriedFlower from './components/articles/learndriedflower';
import Article_LearnExtracts from './components/articles/learnextracts';
import Article_LearnEdibles from './components/articles/learnedibles';
import Article_LearnVaporizers from './components/articles/learnvaporizers';
import Article_LearnTerpenes from './components/articles/learnterpenes';
import Article_LearnCannabinoids from './components/articles/learncannabinoids';
import Article_LearnTHCCBD from './components/articles/learnTHCCBD';
import Article_BeginnersGuide from './components/articles/beginnersguide';
import Article_LearntheScience from './components/articles/learnthescience';
import Article_NGCEUGMP from './components/articles/ngc-eugmp';

/////// PRODUCTS ///////
import AllProducts from './components/products/all-products';

import Page404 from './components/pages/404';


import GoToTop from './components/go-to-top';

import Other from './components/pages/other';
import UnderConstrPage from './components/pages/under-constr-pg';

const learningHubSubCategoryPaths = ["/learning-hub", "/learning-hub-subcategory-all", "/learning-hub-subcategory-beginners-guide", "/learning-hub-subcategory-ngc-news", "/learning-hub-subcategory-cannabis-science", "/learning-hub-subcategory-using-medicinal-cannabis"];

const shopSubCategoryPaths = ["/shop", "/shop-subcategory-high-cbd", "/shop-subcategory-high-thc", "/shop-subcategory-1-to-1-thc-cbd", "/shop-subcategory-no-thc"];

const productPaths = [
  "/product-driedflower_shishkaberry",
  "/product-driedflower_darkangel",
  "/product-driedflower_gg4",
  "/product-driedflower_sourtang",
  "/product-driedflower_orangevelvet",
  "/product-driedflower_sourogcheese",
  "/product-driedflower_watermelonog",
  "/product-driedflower_washingmachine",
  "/product-vaporizer_kaiser-day-relax",
  "/product-vaporizer_kaiser-day-sleep",
  "/product-vaporizer_kaiser-day-bliss",
  "/product-vaporizer_kaiser-day-relief",
  "/product-vaporizer_kaiser-day-ascend",
  "/product-sprays_cbd20",
  "/product-sprays_cbd50",
  "/product-sprays_thc20",
  "/product-sprays_12thc20cbd",
  "/product-oils_cbd20",
  "/product-oils_thc20",
  "/product-oils_12thc20cbd",
  "/product-accessories_lighter",
  "/product-accessories_popsocket",
  "/product-accessories_cardgrinder",
  "/product-accessories_rollingpaper"
];


function App() {

  // const [ageGate, setAgeGate] = useState(() => {
  //   // Getting stored value
  //   const savedAgeGate = localStorage.getItem("ageGate");
  //   const initialValueAgeGate = JSON.parse(savedAgeGate);
  //   return initialValueAgeGate || "";
  // });


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false)
    localStorage.setItem("ageGate", "confirmed");
  };

  useEffect(() => {
    // get ageGate value
    const savedAgeGate = localStorage.getItem("ageGate");
    if (savedAgeGate != "confirmed") {
      handleOpen();
    } else {
      // don't open modal
    }
  });

  return (
    <>
      <div className="under-construction-responsive">
        <h1>Responsiveness for this screen size not complete</h1>
      </div>
      <Router>
        <Navbar />
        <Switch>

          /////////////// MAIN PAGES ///////////////
          <Route path='/' exact component={Home} />
          <Route path={shopSubCategoryPaths} exact component={Shop} />
          <Route path='/register' exact component={Register} />
          <Route path='/start-here' exact component={StartHere} />
          <Route path='/is-medical-cannabis-right-for-me' exact component={IsMedCannRightPage} />
          <Route path={learningHubSubCategoryPaths} exact component={LearningHub} />
          <Route path='/product' exact component={Product} />
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

          /////////////// ARTICLES ///////////////
          <Route path='/learning-hub-medical-cannabis-101' exact component={Article_MedCann101} />
          <Route path='/learning-hub-dried-flower' exact component={Article_LearnDriedFlower} />
          <Route path='/learning-hub-cannabis-extracts' exact component={Article_LearnExtracts} />
          <Route path='/learning-hub-cannabis-edibles' exact component={Article_LearnEdibles} />
          <Route path='/learning-hub-cannabis-vaporizers' exact component={Article_LearnVaporizers} />
          <Route path='/learning-hub-terpenes' exact component={Article_LearnTerpenes} />
          <Route path='/learning-hub-cannabinoids' exact component={Article_LearnCannabinoids} />
          <Route path='/learning-hub-thc-cbd' exact component={Article_LearnTHCCBD} />
          <Route path='/learning-hub-beginners-guide-to-cannabis' exact component={Article_BeginnersGuide} />
          <Route path='/learning-hub-the-science-of-medicinal-cannabis' exact component={Article_LearntheScience} />
          <Route path='/learning-hub-a-first-canada-ngc-eu-gmp-certified' exact component={Article_NGCEUGMP} />

          /////////////// PRODUCTS ///////////////
          <Route path={productPaths} exact component={AllProducts} />


          <Route component={Page404} />
        </Switch>
        <NewsletterSignup />
        <Footer />
        <GoToTop />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <div className="img-container">
              <img src="imgs/ngc_logobadge_green.jpg" className="exact-size" alt=""/>
            </div>
            <div className="text-container">
              <h2>Can we see some ID, please?</h2>
              <p>You must be of legal age to consume cannabis in your province of residence to enter our website. By clicking ‘Enter’, you confirm that you are of legal age to consume cannabis in your province of residence (19+, 18+ in AB or QC).</p>
              <div className="btn-container centered-btn-container">
                <Button
                  className="btn btn--primary btn--medium btn-override"
                  onClick={handleClose}
                >
                  Confirm
                </Button>
                <Button
                  className="btn btn--secondary btn--medium btn-override"
                  to="https://www.google.com"
                >
                  Exit
                </Button>

              </div>
              <p>
                By entering this site, you agree to our <a href="/terms-conditions">Terms and Conditions</a> & <a href="/privacy-policy">Privacy Policy</a>.
              </p>
            </div>
          </Box>
        </Modal>

      </Router>
    </>
  );
}

export default App;
