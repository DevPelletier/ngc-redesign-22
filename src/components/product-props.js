import React from 'react';
import { Button } from './button';
import { Link } from 'react-router-dom';
import '../styles/app.scss';
import '../styles/layout/product.scss';
import ProductInfoList from './product-prop-list';


// import { Link } from 'react-router-dom';

// <ul className="list-styled">
//   <div key={numbers.listItems.id}>
//     <li>{numbers.listItems.content}</li>
//   </div>
// </ul>

// <ul className="list-styled">
//   <li key={numbers.listItems.id}>
//     {numbers.listItems.content}
//   </li>
// </ul>



function Product(props) {
  const numbers = props.numbers;

  const prodTagItems = numbers[0].tagItems;
  const tagItems = prodTagItems.map((item) =>
    <span className="tag border-radius" key={item.id}>
      {item.content}
    </span>
  );


  const productDescripItems = numbers[0].descripItems;
  const descripItems = productDescripItems.map((item) =>
    <p key={item.id}>
      {item.content}
    </p>
  );

  const productListItems = numbers[0].listItems;
  const listItems = productListItems.map((item) =>
    <li key={item.id}>
      {item.content}
    </li>
  );

  const product = numbers.map((number) =>
    <>
    <section className="product-hero">
      <div className="prod-img-container img-container">
        <img src={number.image} alt=""/>
      </div>
      <div className="prod-main">
        <div className="prod-info-container center-selfXY">
          <h3>{number.brand}</h3>
          <h2>{number.name}</h2>
          <h4>{number.type}</h4>
          <div className="tags-container">
            {tagItems}
          </div>

          {descripItems}

          <ul className="list-styled">
            {listItems}
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
    </>
  );
    return (
      <>{product}</>
    );
}

export default Product;
