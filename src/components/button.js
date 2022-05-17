import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/components/buttons.scss';

const STYLES = ['btn--primary', 'btn--secondary', 'btn--primary sub-menu-btn', 'explore-prod-btn', 'btn--primary btn-hover-green' ];

const SIZES = ['btn--medium', 'btn--large'];

const LINKnull = null;


export const Button = ({children, type, onClick, buttonStyle, buttonSize, url, target}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const link = url ? {to: url} : {LINKnull};
  const windowTarget = target ? {target: "_blank"} : {LINKnull};


  // const checkButtonLink = LINK==(buttonLink) ? buttonLink : LINK;

  // to={`${checkButtonLink}`}

  return (
    <Link
      {...link}
      {...windowTarget}
      className='btn'
      >

      <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
      >
        {children}
      </button>

    </Link>
  )
};
