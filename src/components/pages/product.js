import React from 'react';
import '../../styles/app.scss';
import '../../styles/layout/product.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';


function Product() {
  return (
    <>
      <section className="product-hero">
        <div className="prod-img-container img-container">
          <img src="imgs/prod-square-01.jpg" alt=""/>
        </div>
        <div className="prod-main">
          <div className="prod-info-container center-selfXY">
            <h3>Northern Green Canada</h3>
            <h2>NGC Product</h2>
            <h4>From $8.00 per gram</h4>
            <div className="tags-container">
              <span className="tag highlight border-radius">High CBD</span>
              <span className="tag border-radius">CBD: 20mg/g</span>
              <span className="tag border-radius">THC: 0mg/g</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus officiis, aliquid amet sint veniam doloremque excepturi vero magnam harum ut asperiores nihil nisi accusamus maxime, voluptates atque. Praesentium, maxime perferendis?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <ul className="list-styled">
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
            </ul>
            <div className="flexcont-space-between">
              <Button
                buttonStyle="btn--secondary"
              >
                Sign In to Buy
              </Button>
              <Link to="/register" className="primary-link">
                Not Registered?
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="suggested-prods">
        <div className="inner-section">
          <h2>You May Also Like:</h2>
          <div className="collection-listings-container">
            <div className="listing-container border-radius">
              <Link to="/product" className="listing-img-link">
                <div className="img-container border-radius">
                  <img src="imgs/prod-square.png" alt=""/>
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
                <div className="img-container border-radius">
                <img src="imgs/prod-square.png" alt=""/>
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
                <div className="img-container border-radius">
                <img src="imgs/prod-square.png" alt=""/>
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
      </section>
    </>
  );
}

export default Product;
