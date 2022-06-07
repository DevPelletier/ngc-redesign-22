import React from 'react';
import '../styles/app.scss';
import { Link } from 'react-router-dom';
import { Button } from './button';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
// import ShowHideComponent from './show-hide-component';
import '../styles/components/shop-hero.scss';

const learningHubSubCategoryPaths = ["/learning-hub", "/learning-hub-subcategory-all", "/learning-hub-subcategory-beginners-guide", "/learning-hub-subcategory-ngc-news", "/learning-hub-subcategory-cannabis-science", "/learning-hub-subcategory-using-medicinal-cannabis"];

const shopSubCategoryPaths = ["/shop", "/shop-subcategory-high-cbd", "/shop-subcategory-high-thc", "/shop-subcategory-1-to-1-thc-cbd", "/shop-subcategory-no-thc"];

////////// THIS IS DEPRECATED FOR SHOP - SEE SHOP-ALL
////////// THIS IS DEPRECATED FOR SHOP - SEE SHOP-ALL
////////// THIS IS DEPRECATED FOR SHOP - SEE SHOP-ALL
////////// THIS IS DEPRECATED FOR SHOP - SEE SHOP-ALL
////////// THIS IS DEPRECATED FOR SHOP - SEE SHOP-ALL

function ShopHero() {


    return (
      <>
      <Switch>
        <Route path={shopSubCategoryPaths} exact>
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
                    <span className="img-container exact-size"><img src="imgs/prod-oil.jpg" alt=""/></span>
                  </Button>
                  <Button buttonStyle="btn--primary sub-menu-btn">
                    Dried Flower
                    <span className="img-container  exact-size"><img src="imgs/prod-driedflower.jpg" alt=""/></span>
                  </Button>
                  <Button buttonStyle="btn--primary sub-menu-btn">
                    Cannabis Oils
                    <span className="img-container exact-size"><img src="imgs/prod-oil.jpg" alt=""/></span>
                  </Button>
                  <Button buttonStyle="btn--primary sub-menu-btn">
                    Cannabis Sprays
                    <span className="img-container exact-size"><img src="imgs/prod-sprays.jpg" alt=""/></span>
                  </Button>
                  <Button buttonStyle="btn--primary sub-menu-btn">
                    Vaporizers
                    <span className="img-container exact-size"><img src="imgs/prod-vaporizers.jpg" alt=""/></span>
                  </Button>
                  <Button buttonStyle="btn--primary sub-menu-btn">
                    Accessories
                    <span className="img-container exact-size"><img src="imgs/prod-accessory.jpg" alt=""/></span>
                  </Button>
                </div>
              </div>
              <div className="shop-sub-menu-container">
                <h4>By Cannabinoid Content:</h4>
                <div className="sub-menu border-radius">
                  <Button
                    buttonStyle="btn--primary sub-menu-btn"
                    url="/shop-subcategory-high-cbd"
                    >
                    High CBD
                    <span className="img-container"><img src="imgs/test.jpg" alt=""/></span>
                  </Button>
                  <Button
                    buttonStyle="btn--primary sub-menu-btn"
                    url="/shop-subcategory-high-thc"
                    >
                    High THC
                    <span className="img-container"><img src="imgs/test.jpg" alt=""/></span>
                  </Button>
                  <Button
                    buttonStyle="btn--primary sub-menu-btn"
                    url="/shop-subcategory-1-to-1-thc-cbd"
                    >
                    1:1 (THC:CBD)
                    <span className="img-container"><img src="imgs/test.jpg" alt=""/></span>
                  </Button>
                  <Button
                    buttonStyle="btn--primary sub-menu-btn"
                    url="/shop-subcategory-no-thc"
                    >
                    No THC
                    <span className="img-container"><img src="imgs/test.jpg" alt=""/></span>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </Route>
        <Route path={learningHubSubCategoryPaths}>
          <section class="shop-hero learning-hub-hero section-padding-lg-sm">
            <div className="inner-section width-02 two-col-70-30">
              <div className="text-container-2">
                <div className="text-container">
                  <h2>The Medicinal Cannabis<br />Learning Hub</h2>
                  <h3>Everything you need to know about medicinal cannabis</h3>
                </div>
                <div className="shop-sub-menu-container">
                  <h4>Popular Articles:</h4>
                  <div className="sub-menu btn-container">
                    <Button
                      buttonStyle="btn--primary sub-menu-btn"
                      url="/start-here"
                      >
                      Medicinal Cannabis 101
                      <span className="img-container exact-size"><img src="imgs/ngc_looseknot_lightgreen_600px.png" alt=""/></span>
                    </Button>
                    <Button
                      buttonStyle="btn--primary sub-menu-btn"
                      url="/is-medical-cannabis-right-for-me"
                      >
                      Is medicinal cannabis right for me?
                      <span className="img-container exact-size"><img src="imgs/ngc_looseknot_lightgreen_600px.png" alt=""/></span>
                    </Button>
                    <Button
                      buttonStyle="btn--primary sub-menu-btn"
                      url="/learning-hub-dried-flower"
                      >
                      learn dried flower
                      <span className="img-container exact-size"><img src="imgs/ngc_looseknot_lightgreen_600px.png" alt=""/></span>
                    </Button>
                    <Button
                      buttonStyle="btn--primary sub-menu-btn"
                      url="/learning-hub-cannabis-extracts"
                      >
                      Learn extracts
                      <span className="img-container exact-size"><img src="imgs/ngc_looseknot_lightgreen_600px.png" alt=""/></span>
                    </Button>
                    <Button
                      buttonStyle="btn--primary sub-menu-btn"
                      url="/learning-hub-the-science-of-medicinal-cannabis"
                      >
                      learn the science
                      <span className="img-container exact-size"><img src="imgs/ngc_looseknot_lightgreen_600px.png" alt=""/></span>
                    </Button>
                    <Button
                      buttonStyle="btn--primary sub-menu-btn"
                      url="/learning-hub-cannabis-vaporizers"
                      >
                      Learn vaporizers
                      <span className="img-container exact-size"><img src="imgs/ngc_looseknot_lightgreen_600px.png" alt=""/></span>
                    </Button>
                    <Button
                      buttonStyle="btn--primary sub-menu-btn"
                      url="/learning-hub-cannabinoids"
                      >
                      learn cannabinoids
                      <span className="img-container exact-size"><img src="imgs/ngc_looseknot_lightgreen_600px.png" alt=""/></span>
                    </Button>

                  </div>
                </div>
                <div className="shop-sub-menu-container">
                  <h4>Topics:</h4>
                  <div className="btn-container border-radius">
                    <Link
                      to="/learning-hub-subcategory-all"
                      className="primary-link"
                    >
                      All Articles
                    </Link>
                    <Link
                      to="/learning-hub-subcategory-beginners-guide"
                      className="primary-link"
                    >
                      Beginners Guides to Cannabis
                    </Link>
                    <Link
                      to="/learning-hub-subcategory-ngc-news"
                      className="primary-link"
                    >
                      NGC News
                    </Link>
                    <Link
                      to="/learning-hub-subcategory-cannabis-science"
                      className="primary-link"
                    >
                      Cannabis Science
                    </Link>
                    <Link
                      to="/learning-hub-subcategory-using-medicinal-cannabis"
                      className="primary-link"
                    >
                      Using Medicinal Cannabis
                    </Link>
                  </div>
                </div>
              </div>
              <div className="img-container hub-hero-img border-radius">
                <img src="imgs/036-4to3-V.jpg" alt=""/>
              </div>
            </div>
          </section>
        </Route>
      </Switch>
      </>

    )
}

export default ShopHero;
