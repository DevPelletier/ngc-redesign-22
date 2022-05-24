import React from 'react';

import '../styles/app.scss';
import '../styles/layout/product.scss';

function ProductInfoList(props) {
  const numbers = props.numbers;
  const listExists = numbers[0].list;

  if(listExists) {
    const productListItems = numbers[0].listItems;
    const listItems = productListItems.map((item) =>
      <li key={item.id}>
        {item.content}
      </li>
    );

    return (
      <ul className='list-styled'>
        {listItems}
      </ul>
    );
  }

  return ( <></> );
}

export default ProductInfoList;
