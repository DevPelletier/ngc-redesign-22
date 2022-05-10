import React from 'react';
import { Button } from './button';
// import { Link } from 'react-router-dom';

function ExploreProdList(props) {
  const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <Button
      buttonStyle="explore-prod-btn"
      url={number.collectionID}
      >
        <span className="img-container">
          <img src={number.image} alt=""/>
        </span>
        <h3>{number.name}</h3>
      </Button>
    );
    return (
      <>{listItems}</>
    );
}

export default ExploreProdList;
