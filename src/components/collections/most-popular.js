import React from 'react';
import '../../styles/app.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import '../../styles/components/shop-collection.scss';

// THIS SHIT IS TOO COMPLICATED FOR RIGHT NOW
// class Collection extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "React"
//     };
//   }
//
//   render() {
//     return <div>This is Demo1 component</div>;
//   }
// }
//
// export default Demo1;

const Collection = (props) => {

    return (
      <div className="collection-container">
      <div className="scrollAnchor" ref={props.refProp}></div>
        <div className="collection-header">
          <h3>Best Sellers</h3>
          <p>Discover the most popular medicinal cannabis products in NGC's collection - featuring NGC's hydroponically-grown dried flower, CBD and THC oils, full-spectrum vaporizers, and more.</p>
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
