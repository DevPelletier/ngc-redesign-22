import React, { useState, Component, useRef, useEffect } from 'react';
import { render } from "react-dom";
import '../../styles/app.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import '../../styles/components/shop-hero.scss';
import '../../styles/components/shop-collection.scss';
import CollCBDProds from '../collections/subcategory-cbd';
import { Helmet } from 'react-helmet';

const pageTitle = 'Our Products | Northern Green Canada';


function Shop() {
  const mostpopRef = useRef(null);
  const driedFlowerRef = useRef(null);
  const oilsRef = useRef(null);
  const spraysRef = useRef(null);
  const vapesRef = useRef(null);
  const accessRef = useRef(null);



  const executeScrollMPRef = () => mostpopRef.current.scrollIntoView({behavior: 'smooth'});
  const executeScrollDFRef = () => driedFlowerRef.current.scrollIntoView({behavior: 'smooth'});
  const executeScrollOilRef = () => oilsRef.current.scrollIntoView({behavior: 'smooth'});
  const executeScrollSprayRef = () => spraysRef.current.scrollIntoView({behavior: 'smooth'});
  const executeScrollVapesRef = () => vapesRef.current.scrollIntoView({behavior: 'smooth'});
  const executeScrollAccessRef = () => accessRef.current.scrollIntoView({behavior: 'smooth'});



  const [
    showMostPopular,
    setShowMP
  ] = React.useState(true);

  const [
    showDriedFlower,
    setShowDF
  ] = React.useState(true);

  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 750 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };


  return(
    <>
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>

    <section class="shop-hero">
      <div className="inner-section">
        <div className="text-container">
          <h3>High cbd products</h3>
          <h2>Take Advantage of CBD’s High Anti-Inflammatory Properties</h2>
          <p>Discover our complete collection of NGC brand & partners’ medicinal cannabis products – featuring hydroponic dried flower, fresh-tasting oils, custom formula vaporizers, and quick-to-take capsules.</p>
          <p>As with all medical products and prescriptions, always consult your chosen healthcare professional first and foremost for guidance on the use of medical cannabis.</p>
        </div>
        <div className="shop-sub-menu-container">
          <h4>Product Types:</h4>
          <div className={`fixed-nav-container ${stickyClass}`}>
            <div className="sub-menu border-radius">
              <Button
                buttonStyle="btn--primary sub-menu-btn"
                onClick={executeScrollMPRef}
                disabled
                // onClick={()=>setShowMP(!showMostPopular)}
                // url="#most-popular"
                >
                Most Popular
                <span className="img-container exact-size exact-size"><img src="imgs/prod-square.png" alt=""/></span>
              </Button>
              <Button
                buttonStyle="btn--primary sub-menu-btn"
                onClick={executeScrollDFRef}
                // onClick={()=>setShowDF(!showDriedFlower)}
                // url="#dried-flower"
                >
                Dried Flower
                <span className="img-container exact-size"><img src="imgs/prod-square.png" alt=""/></span>
              </Button>
              <Button
                buttonStyle="btn--primary sub-menu-btn"
                onClick={executeScrollOilRef}
                >
                Cannabis Oils
                <span className="img-container exact-size"><img src="imgs/prod-square.png" alt=""/></span>
              </Button>
              <Button
                buttonStyle="btn--primary sub-menu-btn"
                onClick={executeScrollSprayRef}
                >
                Cannabis Sprays
                <span className="img-container exact-size"><img src="imgs/prod-square.png" alt=""/></span>
              </Button>
              <Button
                buttonStyle="btn--primary sub-menu-btn"
                onClick={executeScrollVapesRef}
                >
                Vaporizers
                <span className="img-container exact-size"><img src="imgs/prod-square.png" alt=""/></span>
              </Button>
              <Button
                buttonStyle="btn--primary sub-menu-btn"
                onClick={executeScrollAccessRef}
                >
                Accessories
                <span className="img-container exact-size"><img src="imgs/prod-square.png" alt=""/></span>
              </Button>
            </div>
          </div>
        </div>
        <div className="shop-sub-menu-container">
          <h4>By Cannabinoid Content:</h4>
          <div className="sub-menu border-radius">
            <Button buttonStyle="btn--primary sub-menu-btn">
              High CBD
              <span className="img-container exact-size"><img src="imgs/ngc_loose_knot.svg" alt="" className="svg-filter-green03 svg-hover-lightgrey" /></span>
            </Button>
            <Button buttonStyle="btn--primary sub-menu-btn">
              High THC
              <span className="img-container exact-size"><img src="imgs/ngc_loose_knot.svg" alt="" className="svg-filter-green03 svg-hover-lightgrey" /></span>
            </Button>
            <Button buttonStyle="btn--primary sub-menu-btn">
              1:1 (THC:CBD)
              <span className="img-container exact-size"><img src="imgs/ngc_loose_knot.svg" alt="" className="svg-filter-green03 svg-hover-lightgrey" /></span>
            </Button>
            <Button buttonStyle="btn--primary sub-menu-btn">
              No THC
              <span className="img-container exact-size"><img src="imgs/ngc_loose_knot.svg" alt="" className="svg-filter-green03 svg-hover-lightgrey" /></span>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <section class="shop-collection">
      <div className="inner-section">

        <CollCBDProds />

      </div>
    </section>

    </>

  )
}

export default Shop;
