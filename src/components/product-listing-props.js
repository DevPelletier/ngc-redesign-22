import React from 'react';
import { Button } from './button';
import { Link } from 'react-router-dom';
import '../styles/app.scss';
import '../styles/layout/product.scss';
import ProductInfoList from './product-prop-list';


function Product(props) {
  const numbers = props.numbers;

  const prodTagItems = numbers[0].tagItems;
  const tagItems = prodTagItems.map((item) =>
    <span className="tag border-radius" key={item.id}>
      {item.content}
    </span>
  );

  const product = numbers.map((number) =>
    <>
    <div className="listing-container border-radius">
      <Link to={number.link} className="listing-img-link">
        <div className="img-container exact-size border-radius">
          <img src={number.image} alt=""/>
        </div>
        <div className="tags-container">
          {tagItems}
        </div>
        <h4>{number.name}</h4>
        <h6>{number.brand}</h6>
        <p className="prod-price">{number.type}</p>
      </Link>
      <div className="flex-center-col">
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
    </>
  );
    return (
      <>{product}</>
    );
}

export default Product;
