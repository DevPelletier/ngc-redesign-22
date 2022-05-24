import React, { useState, Component, useRef, useEffect } from 'react';
import '../../styles/app.scss';
import '../../styles/components/faqs.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import RegistrationAndRx from '../faq-groups/reg-and-rx';
import Accounts from '../faq-groups/accounts';
import Products from '../faq-groups/products';
import Orders from '../faq-groups/orders';
import Shipping from '../faq-groups/shipping';
import AboutNGC from '../faq-groups/aboutngc';
import UsingCannabis from '../faq-groups/usingcannabis';
import SafetyLegal from '../faq-groups/safety';
import { Helmet } from 'react-helmet';

const pageTitle = 'Patient FAQs | Northern Green Canada';

function Page() {

  const regrx_Ref = useRef(null);
  const accountsRef = useRef(null);
  const productsRef = useRef(null);
  const ordersRef = useRef(null);
  const shippingRef = useRef(null);
  const aboutngcRef = useRef(null);
  const usingcannRef = useRef(null);
  const safetyRef = useRef(null);


  const executeScroll_regrxRef = () => {
    regrx_Ref.current.scrollIntoView({behavior: 'smooth'});
    console.log('hello');
  }

  const executeScroll_accountsRef = () => accountsRef.current.scrollIntoView({behavior: 'smooth'});
  const executeScroll_productsRef = () => productsRef.current.scrollIntoView({behavior: 'smooth'});
  const executeScroll_ordersRef = () => ordersRef.current.scrollIntoView({behavior: 'smooth'});
  const executeScroll_shippingRef = () => shippingRef.current.scrollIntoView({behavior: 'smooth'});
  const executeScroll_aboutngcRef = () => aboutngcRef.current.scrollIntoView({behavior: 'smooth'});
  const executeScroll_usingcannRef = () => usingcannRef.current.scrollIntoView({behavior: 'smooth'});
  const executeScroll_safetyRef = () => safetyRef.current.scrollIntoView({behavior: 'smooth'});



  return (
    <>
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>

    <section className="text-and-image faqs">
      <div className="inner-section width-01 two-col-30-70">
        <div className="text-container">
          <h2>How Can We Help?</h2>
          <div className="btn-container">
            <Button
              onClick={executeScroll_regrxRef}
              >
              Registrations & Rx
            </Button>
            <Button
              onClick={executeScroll_accountsRef}
              >
              NGC Client Accounts
            </Button>
            <Button
              onClick={executeScroll_productsRef}
              >
              NGC Products
            </Button>
            <Button
              onClick={executeScroll_ordersRef}
              >
              Orders
            </Button>
            <Button
              onClick={executeScroll_shippingRef}
              >
              Shipping
            </Button>
            <Button
              onClick={executeScroll_aboutngcRef}
              disabled
              >
              About NGC
            </Button>
            <Button
              onClick={executeScroll_usingcannRef}
              >
              Using Cannabis Products
            </Button>
            <Button
              onClick={executeScroll_safetyRef}
              >
              Medical Cannabis Safety & Legal
            </Button>

          </div>
          <br /><br />
          <Link to="/" className="primary-link">
            Still need help?&nbsp;&nbsp; Contact Us
          </Link>
        </div>
        <div className="col-width-md push-right faqs-container">
          <div className="accordion-container border-radius">

            <RegistrationAndRx refProp={regrx_Ref}/>
            <Accounts refProp={accountsRef}/>
            <Products refProp={productsRef}/>
            <Orders refProp={ordersRef}/>
            <Shipping refProp={shippingRef}/>
            <AboutNGC refProp={aboutngcRef}/>
            <UsingCannabis refProp={usingcannRef}/>
            <SafetyLegal refProp={safetyRef}/>

          </div>

        </div>
      </div>
    </section>

    <section className="faqs">
      <div className="inner-section">



      </div>
    </section>

    </>
  );
}

export default Page;
