import React from 'react';
import '../styles/app.scss';
import { Link } from 'react-router-dom';
import { Button } from './button';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
// import ShowHideComponent from './show-hide-component';
import '../styles/components/shop-hero.scss';



function ShopHero() {


    return (
      <>
      <Switch>
        <Route path="/shop" exact>
          <section class="shop-hero">
            <div className="inner-section">
              <div className="text-container">
                <h3>Quality Medicinal Cannabis</h3>
                <h2>The Northern Green<br />Cannabis Shop</h2>
                <p>Discover our complete collection of NGC brand & partners’ medicinal cannabis products – featuring hydroponic dried flower, fresh-tasting oils, custom formula vaporizers, and quick-to-take capsules.</p>
              </div>
              <div className="shop-sub-menu-container">
                <h4>Product Types:</h4>
                <div className="sub-menu border-radius">
                  <Button
                    buttonStyle="btn--primary sub-menu-btn"
                    >
                    Most Popular
                    <span className="img-container exact-size"><img src="imgs/test.jpg" alt=""/></span>
                  </Button>
                  <Button buttonStyle="btn--primary sub-menu-btn">
                    Dried Flower
                    <span className="img-container  exact-size"><img src="imgs/test.jpg" alt=""/></span>
                  </Button>
                  <Button buttonStyle="btn--primary sub-menu-btn">
                    Cannabis Oils
                    <span className="img-container exact-size"><img src="imgs/test.jpg" alt=""/></span>
                  </Button>
                  <Button buttonStyle="btn--primary sub-menu-btn">
                    Cannabis Sprays
                    <span className="img-container exact-size"><img src="imgs/test.jpg" alt=""/></span>
                  </Button>
                  <Button buttonStyle="btn--primary sub-menu-btn">
                    Vaporizers
                    <span className="img-container exact-size"><img src="imgs/test.jpg" alt=""/></span>
                  </Button>
                  <Button buttonStyle="btn--primary sub-menu-btn">
                    Accessories
                    <span className="img-container exact-size"><img src="imgs/test.jpg" alt=""/></span>
                  </Button>
                </div>
              </div>
              <div className="shop-sub-menu-container">
                <h4>By Cannabinoid Content:</h4>
                <div className="sub-menu border-radius">
                  <Button buttonStyle="btn--primary sub-menu-btn">
                    High CBD
                    <span className="img-container"><img src="imgs/test.jpg" alt=""/></span>
                  </Button>
                  <Button buttonStyle="btn--primary sub-menu-btn">
                    High THC
                    <span className="img-container"><img src="imgs/test.jpg" alt=""/></span>
                  </Button>
                  <Button buttonStyle="btn--primary sub-menu-btn">
                    1:1 (THC:CBD)
                    <span className="img-container"><img src="imgs/test.jpg" alt=""/></span>
                  </Button>
                  <Button buttonStyle="btn--primary sub-menu-btn">
                    No THC
                    <span className="img-container"><img src="imgs/test.jpg" alt=""/></span>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </Route>
        <Route path="/learning-hub" exact>
          <section class="shop-hero learning-hub-hero">
            <div className="inner-section width-02 two-col-70-30">
              <div className="text-container-2">
                <div className="text-container">
                  <h2>The Medicinal Cannabis<br />Learning Hub</h2>
                  <h3>Everything you need to know about medicinal cannabis</h3>
                </div>
                <div className="shop-sub-menu-container">
                  <h4>Popular Articles:</h4>
                  <div className="sub-menu btn-container">
                    <Button buttonStyle="btn--primary sub-menu-btn">
                      Medicinal Cannabis 101
                      <span className="img-container exact-size"><img src="imgs/ngc_looseknot_lightgreen_600px.png" alt=""/></span>
                    </Button>
                    <Button buttonStyle="btn--primary sub-menu-btn">
                      Is medicinal cannabis right for me?
                      <span className="img-container exact-size"><img src="imgs/ngc_looseknot_lightgreen_600px.png" alt=""/></span>
                    </Button>
                    <Button buttonStyle="btn--primary sub-menu-btn">
                      learn dried flower
                      <span className="img-container exact-size"><img src="imgs/ngc_looseknot_lightgreen_600px.png" alt=""/></span>
                    </Button>
                    <Button buttonStyle="btn--primary sub-menu-btn">
                      Learn extracts
                      <span className="img-container exact-size"><img src="imgs/ngc_looseknot_lightgreen_600px.png" alt=""/></span>
                    </Button>
                    <Button buttonStyle="btn--primary sub-menu-btn">
                      learn the science
                      <span className="img-container exact-size"><img src="imgs/ngc_looseknot_lightgreen_600px.png" alt=""/></span>
                    </Button>
                    <Button buttonStyle="btn--primary sub-menu-btn">
                      Learn vaporizers
                      <span className="img-container exact-size"><img src="imgs/ngc_looseknot_lightgreen_600px.png" alt=""/></span>
                    </Button>
                    <Button buttonStyle="btn--primary sub-menu-btn">
                      learn cannabinoids & terpenes
                      <span className="img-container exact-size"><img src="imgs/ngc_looseknot_lightgreen_600px.png" alt=""/></span>
                    </Button>

                  </div>
                </div>
                <div className="shop-sub-menu-container">
                  <h4>Topics:</h4>
                  <div className="btn-container border-radius">
                    <Link
                      // to="/"
                      className="primary-link"
                    >
                      All Articles
                    </Link>
                    <Link
                      // to="/"
                      className="primary-link"
                    >
                      Beginners Guide to Cannabis
                    </Link>
                    <Link
                      // to="/"
                      className="primary-link"
                    >
                      NGC News
                    </Link>
                    <Link
                      // to="/"
                      className="primary-link"
                    >
                      Cannabis Science
                    </Link>
                    <Link
                      // to="/"
                      className="primary-link"
                    >
                      How To Use Cannabis
                    </Link>
                    <Link
                      // to="/"
                      className="primary-link"
                    >
                      Healthy Living
                    </Link>

                  </div>
                </div>
              </div>
              <div className="img-container hub-hero-img border-radius">
                <img src="imgs/16-9-vert-01.jpg" alt=""/>
              </div>
            </div>
          </section>
        </Route>
      </Switch>
      </>

    )
}

export default ShopHero;
