import React from 'react';
import { Button } from './button';
// import { Link } from 'react-router-dom';

function ButtonList(props) {
  const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <Button
      buttonStyle="btn--primary btn-hover-green"
      url={number.url}
      >
      {number.condition}
      </Button>
    );
    return (
      <>{listItems}</>
    );
}

export default ButtonList;
