import React, {useState} from 'react';
import '../styles/app.scss';
import { Link } from 'react-router-dom';
import { Button } from './button';
import '../styles/components/shop-collection.scss';
// import ShowHideComponent from './show-hide-component';
import CollMostPopular from './collections/most-popular';



function ShopCollection() {


    return (
      <section class="shop-collection">
        <div className="inner-section">



          <div className="collection-container">
            <div className="collection-header">
              <h3>Dried Flower</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus quisquam ipsam consectetur nisi vitae fuga asperiores inventore, quos ad consequatur ullam cupiditate nihil ea maxime, autem rem deserunt. Nemo, deleniti.</p>
            </div>
            <div className="collection-listings-container">
              <div className="listing-container border-radius">
                <Link to="/product" className="listing-img-link">
                  <div className="img-container exact-size exact size border-radius">
                    <img src="imgs/test.jpg" alt=""/>
                  </div>
                  <div className="tags-container">
                    <div><span className="tag highlight border-radius">High CBD</span></div>
                    <div><span className="tag border-radius">CBD: 20mg/g</span></div>
                    <div><span className="tag border-radius">THC: 0mg/g</span></div>
                  </div>
                  <h4>Product Title</h4>
                  <h6>Product Category</h6>
                </Link>
                <div className="flex-center-col">
                  <p className="prod-price">From $8.00/g</p>
                  <Button
                    buttonStyle="btn--secondary"
                    url="/sign-in"
                    >
                  Sign In To Buy
                  </Button>
                  <Link to="/register" className="primary-link">
                    Register Now
                  </Link>
                </div>
              </div>
              <div className="listing-container border-radius">
                <Link to="/product" className="listing-img-link">
                  <div className="img-container exact-size border-radius">
                    <img src="imgs/test.jpg" alt=""/>
                  </div>
                  <div className="tags-container">
                    <div><span className="tag highlight border-radius">High CBD</span></div>
                    <div><span className="tag border-radius">CBD: 20mg/g</span></div>
                    <div><span className="tag border-radius">THC: 0mg/g</span></div>
                  </div>
                  <h4>Product Title</h4>
                  <h6>Product Category</h6>
                </Link>
                <div className="flex-center-col">
                  <p className="prod-price">From $8.00/g</p>
                  <Button
                  buttonStyle="btn--secondary"
                  url="/sign-in"
                  >
                  Sign In To Buy
                  </Button>
                  <Link to="/register" className="primary-link">
                    Register Now
                  </Link>
                </div>
              </div>
              <div className="listing-container border-radius">
                <Link to="/product" className="listing-img-link">
                  <div className="img-container exact-size border-radius">
                    <img src="imgs/test.jpg" alt=""/>
                  </div>
                  <div className="tags-container">
                    <div><span className="tag highlight border-radius">High CBD</span></div>
                    <div><span className="tag border-radius">CBD: 20mg/g</span></div>
                    <div><span className="tag border-radius">THC: 0mg/g</span></div>
                  </div>
                  <h4>Product Title</h4>
                  <h6>Product Category</h6>
                </Link>
                <div className="flex-center-col">
                  <p className="prod-price">From $8.00/g</p>
                  <Button
                    buttonStyle="btn--secondary" url="/sign-in"
                  >
                  Sign In To Buy
                  </Button>
                  <Link to="/register" className="primary-link">
                    Register Now
                  </Link>
                </div>
              </div>
              <div className="listing-container border-radius">
                <Link to="/product" className="listing-img-link">
                  <div className="img-container exact-size border-radius">
                    <img src="imgs/test.jpg" alt=""/>
                  </div>
                  <div className="tags-container">
                    <div><span className="tag highlight border-radius">High CBD</span></div>
                    <div><span className="tag border-radius">CBD: 20mg/g</span></div>
                    <div><span className="tag border-radius">THC: 0mg/g</span></div>
                  </div>
                  <h4>Product Title</h4>
                  <h6>Product Category</h6>
                </Link>
                <div className="flex-center-col">
                  <p className="prod-price">From $8.00/g</p>
                  <Button
                    buttonStyle="btn--secondary" url="/sign-in"
                  >
                  Sign In To Buy
                  </Button>
                  <Link to="/register" className="primary-link">
                    Register Now
                  </Link>
                </div>
              </div>
              <div className="listing-container border-radius">
                <Link to="/product" className="listing-img-link">
                  <div className="img-container exact-size border-radius">
                    <img src="imgs/test.jpg" alt=""/>
                  </div>
                  <div className="tags-container">
                    <div><span className="tag highlight border-radius">High CBD</span></div>
                    <div><span className="tag border-radius">CBD: 20mg/g</span></div>
                    <div><span className="tag border-radius">THC: 0mg/g</span></div>
                  </div>
                  <h4>Product Title</h4>
                  <h6>Product Category</h6>
                </Link>
                <div className="flex-center-col">
                  <p className="prod-price">From $8.00/g</p>
                  <Button
                    buttonStyle="btn--secondary" url="/sign-in"
                  >
                  Sign In To Buy
                  </Button>
                  <Link to="/register" className="primary-link">
                    Register Now
                  </Link>
                </div>
              </div>

            </div>
          </div>
          <div className="collection-container">
            <div className="collection-header">
              <h3>Cannabis Oils</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus quisquam ipsam consectetur nisi vitae fuga asperiores inventore, quos ad consequatur ullam cupiditate nihil ea maxime, autem rem deserunt. Nemo, deleniti.</p>
            </div>
            <div className="collection-listings-container">
              <div className="listing-container border-radius">
                <Link to="/product" className="listing-img-link">
                  <div className="img-container exact-size border-radius">
                    <img src="imgs/test.jpg" alt=""/>
                  </div>
                  <div className="tags-container">
                    <div><span className="tag highlight border-radius">High CBD</span></div>
                    <div><span className="tag border-radius">CBD: 20mg/g</span></div>
                    <div><span className="tag border-radius">THC: 0mg/g</span></div>
                  </div>
                  <h4>Product Title</h4>
                  <h6>Product Category</h6>
                </Link>
                <div className="flex-center-col">
                  <p className="prod-price">From $8.00/g</p>
                  <Button
                    buttonStyle="btn--secondary" url="/sign-in"
                  >
                  Sign In To Buy
                  </Button>
                  <Link to="/register" className="primary-link">
                    Register Now
                  </Link>
                </div>
              </div>
              <div className="listing-container border-radius">
                <Link to="/product" className="listing-img-link">
                  <div className="img-container exact-size border-radius">
                    <img src="imgs/test.jpg" alt=""/>
                  </div>
                  <div className="tags-container">
                    <div><span className="tag highlight border-radius">High CBD</span></div>
                    <div><span className="tag border-radius">CBD: 20mg/g</span></div>
                    <div><span className="tag border-radius">THC: 0mg/g</span></div>
                  </div>
                  <h4>Product Title</h4>
                  <h6>Product Category</h6>
                </Link>
                <div className="flex-center-col">
                  <p className="prod-price">From $8.00/g</p>
                  <Button
                    buttonStyle="btn--secondary" url="/sign-in"
                  >
                  Sign In To Buy
                  </Button>
                  <Link to="/register" className="primary-link">
                    Register Now
                  </Link>
                </div>
              </div>
              <div className="listing-container border-radius">
                <Link to="/product" className="listing-img-link">
                  <div className="img-container exact-size border-radius">
                    <img src="imgs/test.jpg" alt=""/>
                  </div>
                  <div className="tags-container">
                    <div><span className="tag highlight border-radius">High CBD</span></div>
                    <div><span className="tag border-radius">CBD: 20mg/g</span></div>
                    <div><span className="tag border-radius">THC: 0mg/g</span></div>
                  </div>
                  <h4>Product Title</h4>
                  <h6>Product Category</h6>
                </Link>
                <div className="flex-center-col">
                  <p className="prod-price">From $8.00/g</p>
                  <Button
                    buttonStyle="btn--secondary" url="/sign-in"
                  >
                  Sign In To Buy
                  </Button>
                  <Link to="/register" className="primary-link">
                    Register Now
                  </Link>
                </div>
              </div>
              <div className="listing-container border-radius">
                <Link to="/product" className="listing-img-link">
                  <div className="img-container exact-size border-radius">
                    <img src="imgs/test.jpg" alt=""/>
                  </div>
                  <div className="tags-container">
                    <div><span className="tag highlight border-radius">High CBD</span></div>
                    <div><span className="tag border-radius">CBD: 20mg/g</span></div>
                    <div><span className="tag border-radius">THC: 0mg/g</span></div>
                  </div>
                  <h4>Product Title</h4>
                  <h6>Product Category</h6>
                </Link>
                <div className="flex-center-col">
                  <p className="prod-price">From $8.00/g</p>
                  <Button
                    buttonStyle="btn--secondary" url="/sign-in"
                  >
                  Sign In To Buy
                  </Button>
                  <Link to="/register" className="primary-link">
                    Register Now
                  </Link>
                </div>
              </div>
              <div className="listing-container border-radius">
                <Link to="/product" className="listing-img-link">
                  <div className="img-container exact-size border-radius">
                    <img src="imgs/test.jpg" alt=""/>
                  </div>
                  <div className="tags-container">
                    <div><span className="tag highlight border-radius">High CBD</span></div>
                    <div><span className="tag border-radius">CBD: 20mg/g</span></div>
                    <div><span className="tag border-radius">THC: 0mg/g</span></div>
                  </div>
                  <h4>Product Title</h4>
                  <h6>Product Category</h6>
                </Link>
                <div className="flex-center-col">
                  <p className="prod-price">From $8.00/g</p>
                  <Button
                    buttonStyle="btn--secondary" url="/sign-in"
                  >
                  Sign In To Buy
                  </Button>
                  <Link to="/register" className="primary-link">
                    Register Now
                  </Link>
                </div>
              </div>

            </div>
          </div>
          <div className="collection-container">
            <div className="collection-header">
              <h3>Cannabis Sprays</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus quisquam ipsam consectetur nisi vitae fuga asperiores inventore, quos ad consequatur ullam cupiditate nihil ea maxime, autem rem deserunt. Nemo, deleniti.</p>
            </div>
            <div className="collection-listings-container">
              <div className="listing-container border-radius">
                <Link to="/product" className="listing-img-link">
                  <div className="img-container exact-size border-radius">
                    <img src="imgs/test.jpg" alt=""/>
                  </div>
                  <div className="tags-container">
                    <div><span className="tag highlight border-radius">High CBD</span></div>
                    <div><span className="tag border-radius">CBD: 20mg/g</span></div>
                    <div><span className="tag border-radius">THC: 0mg/g</span></div>
                  </div>
                  <h4>Product Title</h4>
                  <h6>Product Category</h6>
                </Link>
                <div className="flex-center-col">
                  <p className="prod-price">From $8.00/g</p>
                  <Button
                    buttonStyle="btn--secondary" url="/sign-in"
                  >
                  Sign In To Buy
                  </Button>
                  <Link to="/register" className="primary-link">
                    Register Now
                  </Link>
                </div>
              </div>
              <div className="listing-container border-radius">
                <Link to="/product" className="listing-img-link">
                  <div className="img-container exact-size border-radius">
                    <img src="imgs/test.jpg" alt=""/>
                  </div>
                  <div className="tags-container">
                    <div><span className="tag highlight border-radius">High CBD</span></div>
                    <div><span className="tag border-radius">CBD: 20mg/g</span></div>
                    <div><span className="tag border-radius">THC: 0mg/g</span></div>
                  </div>
                  <h4>Product Title</h4>
                  <h6>Product Category</h6>
                </Link>
                <div className="flex-center-col">
                  <p className="prod-price">From $8.00/g</p>
                  <Button
                    buttonStyle="btn--secondary" url="/sign-in"
                  >
                  Sign In To Buy
                  </Button>
                  <Link to="/register" className="primary-link">
                    Register Now
                  </Link>
                </div>
              </div>
              <div className="listing-container border-radius">
                <Link to="/product" className="listing-img-link">
                  <div className="img-container exact-size border-radius">
                    <img src="imgs/test.jpg" alt=""/>
                  </div>
                  <div className="tags-container">
                    <div><span className="tag highlight border-radius">High CBD</span></div>
                    <div><span className="tag border-radius">CBD: 20mg/g</span></div>
                    <div><span className="tag border-radius">THC: 0mg/g</span></div>
                  </div>
                  <h4>Product Title</h4>
                  <h6>Product Category</h6>
                </Link>
                <div className="flex-center-col">
                  <p className="prod-price">From $8.00/g</p>
                  <Button
                    buttonStyle="btn--secondary" url="/sign-in"
                  >
                  Sign In To Buy
                  </Button>
                  <Link to="/register" className="primary-link">
                    Register Now
                  </Link>
                </div>
              </div>
              <div className="listing-container border-radius">
                <Link to="/product" className="listing-img-link">
                  <div className="img-container exact-size border-radius">
                    <img src="imgs/test.jpg" alt=""/>
                  </div>
                  <div className="tags-container">
                    <div><span className="tag highlight border-radius">High CBD</span></div>
                    <div><span className="tag border-radius">CBD: 20mg/g</span></div>
                    <div><span className="tag border-radius">THC: 0mg/g</span></div>
                  </div>
                  <h4>Product Title</h4>
                  <h6>Product Category</h6>
                </Link>
                <div className="flex-center-col">
                  <p className="prod-price">From $8.00/g</p>
                  <Button
                    buttonStyle="btn--secondary" url="/sign-in"
                  >
                  Sign In To Buy
                  </Button>
                  <Link to="/register" className="primary-link">
                    Register Now
                  </Link>
                </div>
              </div>
              <div className="listing-container border-radius">
                <Link to="/product" className="listing-img-link">
                  <div className="img-container exact-size border-radius">
                    <img src="imgs/test.jpg" alt=""/>
                  </div>
                  <div className="tags-container">
                    <div><span className="tag highlight border-radius">High CBD</span></div>
                    <div><span className="tag border-radius">CBD: 20mg/g</span></div>
                    <div><span className="tag border-radius">THC: 0mg/g</span></div>
                  </div>
                  <h4>Product Title</h4>
                  <h6>Product Category</h6>
                </Link>
                <div className="flex-center-col">
                  <p className="prod-price">From $8.00/g</p>
                  <Button
                    buttonStyle="btn--secondary" url="/sign-in"
                  >
                  Sign In To Buy
                  </Button>
                  <Link to="/register" className="primary-link">
                    Register Now
                  </Link>
                </div>
              </div>

            </div>
          </div>
          <div className="collection-container">
            <div className="collection-header">
              <h3>Vaporizers</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus quisquam ipsam consectetur nisi vitae fuga asperiores inventore, quos ad consequatur ullam cupiditate nihil ea maxime, autem rem deserunt. Nemo, deleniti.</p>
            </div>
            <div className="collection-listings-container">
              <div className="listing-container border-radius">
                <Link to="/product" className="listing-img-link">
                  <div className="img-container exact-size border-radius">
                    <img src="imgs/test.jpg" alt=""/>
                  </div>
                  <div className="tags-container">
                    <div><span className="tag highlight border-radius">High CBD</span></div>
                    <div><span className="tag border-radius">CBD: 20mg/g</span></div>
                    <div><span className="tag border-radius">THC: 0mg/g</span></div>
                  </div>
                  <h4>Product Title</h4>
                  <h6>Product Category</h6>
                </Link>
                <div className="flex-center-col">
                  <p className="prod-price">From $8.00/g</p>
                  <Button
                    buttonStyle="btn--secondary" url="/sign-in"
                  >
                  Sign In To Buy
                  </Button>
                  <Link to="/register" className="primary-link">
                    Register Now
                  </Link>
                </div>
              </div>
              <div className="listing-container border-radius">
                <Link to="/product" className="listing-img-link">
                  <div className="img-container exact-size border-radius">
                    <img src="imgs/test.jpg" alt=""/>
                  </div>
                  <div className="tags-container">
                    <div><span className="tag highlight border-radius">High CBD</span></div>
                    <div><span className="tag border-radius">CBD: 20mg/g</span></div>
                    <div><span className="tag border-radius">THC: 0mg/g</span></div>
                  </div>
                  <h4>Product Title</h4>
                  <h6>Product Category</h6>
                </Link>
                <div className="flex-center-col">
                  <p className="prod-price">From $8.00/g</p>
                  <Button
                    buttonStyle="btn--secondary" url="/sign-in"
                  >
                  Sign In To Buy
                  </Button>
                  <Link to="/register" className="primary-link">
                    Register Now
                  </Link>
                </div>
              </div>
              <div className="listing-container border-radius">
                <Link to="/product" className="listing-img-link">
                  <div className="img-container exact-size border-radius">
                    <img src="imgs/test.jpg" alt=""/>
                  </div>
                  <div className="tags-container">
                    <div><span className="tag highlight border-radius">High CBD</span></div>
                    <div><span className="tag border-radius">CBD: 20mg/g</span></div>
                    <div><span className="tag border-radius">THC: 0mg/g</span></div>
                  </div>
                  <h4>Product Title</h4>
                  <h6>Product Category</h6>
                </Link>
                <div className="flex-center-col">
                  <p className="prod-price">From $8.00/g</p>
                  <Button
                    buttonStyle="btn--secondary" url="/sign-in"
                  >
                  Sign In To Buy
                  </Button>
                  <Link to="/register" className="primary-link">
                    Register Now
                  </Link>
                </div>
              </div>
              <div className="listing-container border-radius">
                <Link to="/product" className="listing-img-link">
                  <div className="img-container exact-size border-radius">
                    <img src="imgs/test.jpg" alt=""/>
                  </div>
                  <div className="tags-container">
                    <div><span className="tag highlight border-radius">High CBD</span></div>
                    <div><span className="tag border-radius">CBD: 20mg/g</span></div>
                    <div><span className="tag border-radius">THC: 0mg/g</span></div>
                  </div>
                  <h4>Product Title</h4>
                  <h6>Product Category</h6>
                </Link>
                <div className="flex-center-col">
                  <p className="prod-price">From $8.00/g</p>
                  <Button
                    buttonStyle="btn--secondary" url="/sign-in"
                  >
                  Sign In To Buy
                  </Button>
                  <Link to="/register" className="primary-link">
                    Register Now
                  </Link>
                </div>
              </div>
              <div className="listing-container border-radius">
                <Link to="/product" className="listing-img-link">
                  <div className="img-container exact-size border-radius">
                    <img src="imgs/test.jpg" alt=""/>
                  </div>
                  <div className="tags-container">
                    <div><span className="tag highlight border-radius">High CBD</span></div>
                    <div><span className="tag border-radius">CBD: 20mg/g</span></div>
                    <div><span className="tag border-radius">THC: 0mg/g</span></div>
                  </div>
                  <h4>Product Title</h4>
                  <h6>Product Category</h6>
                </Link>
                <div className="flex-center-col">
                  <p className="prod-price">From $8.00/g</p>
                  <Button
                    buttonStyle="btn--secondary" url="/sign-in"
                  >
                  Sign In To Buy
                  </Button>
                  <Link to="/register" className="primary-link">
                    Register Now
                  </Link>
                </div>
              </div>

            </div>
          </div>
          <div className="collection-container">
            <div className="collection-header">
              <h3>Accessories</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus quisquam ipsam consectetur nisi vitae fuga asperiores inventore, quos ad consequatur ullam cupiditate nihil ea maxime, autem rem deserunt. Nemo, deleniti.</p>
            </div>
            <div className="collection-listings-container">
              <div className="listing-container border-radius">
                <Link to="/product" className="listing-img-link">
                  <div className="img-container exact-size border-radius">
                    <img src="imgs/test.jpg" alt=""/>
                  </div>
                  <div className="tags-container">
                    <div><span className="tag highlight border-radius">High CBD</span></div>
                    <div><span className="tag border-radius">CBD: 20mg/g</span></div>
                    <div><span className="tag border-radius">THC: 0mg/g</span></div>
                  </div>
                  <h4>Product Title</h4>
                  <h6>Product Category</h6>
                </Link>
                <div className="flex-center-col">
                  <p className="prod-price">From $8.00/g</p>
                  <Button
                    buttonStyle="btn--secondary" url="/sign-in"
                  >
                  Sign In To Buy
                  </Button>
                  <Link to="/register" className="primary-link">
                    Register Now
                  </Link>
                </div>
              </div>
              <div className="listing-container border-radius">
                <Link to="/product" className="listing-img-link">
                  <div className="img-container exact-size border-radius">
                    <img src="imgs/test.jpg" alt=""/>
                  </div>
                  <div className="tags-container">
                    <div><span className="tag highlight border-radius">High CBD</span></div>
                    <div><span className="tag border-radius">CBD: 20mg/g</span></div>
                    <div><span className="tag border-radius">THC: 0mg/g</span></div>
                  </div>
                  <h4>Product Title</h4>
                  <h6>Product Category</h6>
                </Link>
                <div className="flex-center-col">
                  <p className="prod-price">From $8.00/g</p>
                  <Button
                    buttonStyle="btn--secondary" url="/sign-in"
                  >
                  Sign In To Buy
                  </Button>
                  <Link to="/register" className="primary-link">
                    Register Now
                  </Link>
                </div>
              </div>
              <div className="listing-container border-radius">
                <Link to="/product" className="listing-img-link">
                  <div className="img-container exact-size border-radius">
                    <img src="imgs/test.jpg" alt=""/>
                  </div>
                  <div className="tags-container">
                    <div><span className="tag highlight border-radius">High CBD</span></div>
                    <div><span className="tag border-radius">CBD: 20mg/g</span></div>
                    <div><span className="tag border-radius">THC: 0mg/g</span></div>
                  </div>
                  <h4>Product Title</h4>
                  <h6>Product Category</h6>
                </Link>
                <div className="flex-center-col">
                  <p className="prod-price">From $8.00/g</p>
                  <Button
                    buttonStyle="btn--secondary" url="/sign-in"
                  >
                  Sign In To Buy
                  </Button>
                  <Link to="/register" className="primary-link">
                    Register Now
                  </Link>
                </div>
              </div>
              <div className="listing-container border-radius">
                <Link to="/product" className="listing-img-link">
                  <div className="img-container exact-size border-radius">
                    <img src="imgs/test.jpg" alt=""/>
                  </div>
                  <div className="tags-container">
                    <div><span className="tag highlight border-radius">High CBD</span></div>
                    <div><span className="tag border-radius">CBD: 20mg/g</span></div>
                    <div><span className="tag border-radius">THC: 0mg/g</span></div>
                  </div>
                  <h4>Product Title</h4>
                  <h6>Product Category</h6>
                </Link>
                <div className="flex-center-col">
                  <p className="prod-price">From $8.00/g</p>
                  <Button
                    buttonStyle="btn--secondary" url="/sign-in"
                  >
                  Sign In To Buy
                  </Button>
                  <Link to="/register" className="primary-link">
                    Register Now
                  </Link>
                </div>
              </div>
              <div className="listing-container border-radius">
                <Link to="/product" className="listing-img-link">
                  <div className="img-container exact-size border-radius">
                    <img src="imgs/test.jpg" alt=""/>
                  </div>
                  <div className="tags-container">
                    <div><span className="tag highlight border-radius">High CBD</span></div>
                    <div><span className="tag border-radius">CBD: 20mg/g</span></div>
                    <div><span className="tag border-radius">THC: 0mg/g</span></div>
                  </div>
                  <h4>Product Title</h4>
                  <h6>Product Category</h6>
                </Link>
                <div className="flex-center-col">
                  <p className="prod-price">From $8.00/g</p>
                  <Button
                    buttonStyle="btn--secondary" url="/sign-in"
                  >
                  Sign In To Buy
                  </Button>
                  <Link to="/register" className="primary-link">
                    Register Now
                  </Link>
                </div>
              </div>

            </div>
          </div>




        </div>
      </section>
    )
}

export default ShopCollection;
