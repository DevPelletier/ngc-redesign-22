import React from 'react';
import { Button } from './button';
import { Link } from 'react-router-dom';
import '../styles/app.scss';
import '../styles/layout/product.scss';
// import ProductInfoList from './product-prop-list';


function Article(props) {
  const numbers = props.numbers;

  const articleTagItems = numbers[0].tagItems;
  const tagItems = articleTagItems.map((item) =>
    <div className="blog-tag" key={item.id}>
      <Link to={item.link}>
        <span>{item.content}</span>
      </Link>
    </div>
  );

  const articleListing = numbers.map((number) =>
    <>

    <div className="blog-link-container">
      <div className="blog-tag-container">
        {tagItems}
      </div>
      <Link to={number.articleLink}>
        <div className="img-container border-radius">
          <img src={number.image} alt=""/>
        </div>
      </Link>
      <span className="blog-link-date">{number.date}</span>
      <h4>{number.title}</h4>
    </div>

    </>
  );
    return (
      <>{articleListing}</>
    );
}

export default Article;
