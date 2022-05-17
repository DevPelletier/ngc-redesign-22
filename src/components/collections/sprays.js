import React from 'react';
import '../../styles/app.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import '../../styles/components/shop-collection.scss';

const Collection = (props) => {
    return (
      <div className="collection-container">
      <div className="scrollAnchor" ref={props.refProp}></div>
        <div className="collection-header">
          <h3>Cannabis Sprays</h3>
          <p>Discover NGC's line of medicinal cannabis extracts in a convenient metered-spray bottle. Each extract is packaged in an opaque, child-resistant, pharmaceutical-grade 15ml spray bottle to keep your medical cannabis safe, as well as providing a consistent dose per spray for ease-of-use.</p>
        </div>
        <div className="collection-listings-container">
          <div className="listing-container border-radius">
            <Link to="/product" className="listing-img-link">
              <div className="img-container exact-size border-radius">
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
              <div className="img-container exact-size border-radius">
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
              <div className="img-container exact-size border-radius">
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
              <div className="img-container exact-size border-radius">
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
              <div className="img-container exact-size border-radius">
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

    )
}

export default Collection;
