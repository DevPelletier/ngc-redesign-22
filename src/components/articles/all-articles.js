import React from 'react';
import '../../styles/app.scss';
import '../../styles/layout/product.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const beginnersGuide = [
  {
    tagItems: [
      {id: 'a', content: 'Beginners Guide', link: '/learning-hub-subcategory-beginners-guide'}
    ],
    image: "imgs/test.jpg",
    title: "Beginners Guide to Medicinal Cannabis",
    date: "May 24, 2022",
    articleLink: "/learning-hub-beginners-guide-to-cannabis"
  }
];
const learnCannabinoids = [
  {
    tagItems: [
      {id: 'a', content: 'Beginners Guide', link: '/learning-hub-subcategory-beginners-guide'},
      {id: 'b', content: 'Cannabis Science', link: '/learning-hub-subcategory-cannabis-science'}
    ],
    image: "imgs/test.jpg",
    title: "Learn Cannabinoids",
    date: "May 24, 2022",
    articleLink: "/learning-hub-cannabinoids"
  }
];
const learnDriedFlower = [
  {
    tagItems: [
      {id: 'a', content: 'Using Med-Cannabis', link: '/learning-hub-subcategory-using-medicinal-cannabis'}
    ],
    image: "imgs/test.jpg",
    title: "Learn Dried Flower",
    date: "May 24, 2022",
    articleLink: "/learning-hub-dried-flower"
  }
];
const learnEdibles = [
  {
    tagItems: [
      {id: 'a', content: 'Using Med-Cannabis', link: '/learning-hub-subcategory-using-medicinal-cannabis'}
    ],
    image: "imgs/test.jpg",
    title: "Learn Cannabis Edibles",
    date: "May 24, 2022",
    articleLink: "/learning-hub-cannabis-edibles"
  }
];
const learnExtracts = [
  {
    tagItems: [
      {id: 'a', content: 'Using Med-Cannabis', link: '/learning-hub-subcategory-using-medicinal-cannabis'},
      {id: 'b', content: 'Cannabis Science', link: '/learning-hub-subcategory-cannabis-science'}
    ],
    image: "imgs/test.jpg",
    title: "Learn Cannabis Extracts",
    date: "May 24, 2022",
    articleLink: "/learning-hub-cannabis-extracts"
  }
];
const learnTerpenes = [
  {
    tagItems: [
      {id: 'a', content: 'Beginners Guide', link: '/learning-hub-subcategory-beginners-guide'},
      {id: 'b', content: 'Cannabis Science', link: '/learning-hub-subcategory-cannabis-science'}
    ],
    image: "imgs/test.jpg",
    title: "Learn Terpenes",
    date: "May 24, 2022",
    articleLink: "/learning-hub-terpenes"
  }
];
const learnTHCCBD = [
  {
    tagItems: [
      {id: 'a', content: 'Beginners Guide', link: '/learning-hub-subcategory-beginners-guide'},
      {id: 'b', content: 'Cannabis Science', link: '/learning-hub-subcategory-cannabis-science'}
    ],
    image: "imgs/test.jpg",
    title: "Learn THC & CBD",
    date: "May 24, 2022",
    articleLink: "/learning-hub-thc-cbd"
  }
];
const learnTheScience = [
  {
    tagItems: [
      {id: 'a', content: 'Beginners Guide', link: '/learning-hub-subcategory-beginners-guide'},
      {id: 'b', content: 'Cannabis Science', link: '/learning-hub-subcategory-cannabis-science'}
    ],
    image: "imgs/test.jpg",
    title: "Learn The Science",
    date: "May 24, 2022",
    articleLink: "/learning-hub-the-science-of-medicinal-cannabis"
  }
];
const learnVaporizers = [
  {
    tagItems: [
      {id: 'a', content: 'Using Med-Cannabis', link: '/learning-hub-subcategory-using-medicinal-cannabis'}
    ],
    image: "imgs/test.jpg",
    title: "Learn Vaporizers",
    date: "May 24, 2022",
    articleLink: "/learning-hub-cannabis-vaporizers"
  }
];
const medicalCannabis101 = [
  {
    tagItems: [
      {id: 'a', content: 'Beginners Guide', link: '/learning-hub-subcategory-beginners-guide'}
    ],
    image: "imgs/test.jpg",
    title: "Medical Cannabis 101",
    date: "May 24, 2022",
    articleLink: "/learning-hub-medical-cannabis-101"
  }
];
const ngcEUGMP = [
  {
    tagItems: [
      {id: 'a', content: 'NGC News', link: '/learning-hub-subcategory-ngc-news'}
    ],
    image: "imgs/test.jpg",
    title: "A First in Canada: NGC Achieves EU GMP Certification",
    date: "May 24, 2022",
    articleLink: "/learning-hub-a-first-canada-ngc-eu-gmp-certified"
  }
];
const isMedCannRight = [
  {
    tagItems: [
      {id: 'a', content: 'Beginners Guide', link: '/learning-hub-subcategory-beginners-guide'}
    ],
    image: "imgs/test.jpg",
    title: "Is Medical Cannabis Right For Me?",
    date: "May 24, 2022",
    articleLink: "/is-medical-cannabis-right-for-me"
  }
];


const Article = (props) => (
  <>
  </>
);

export default Article;

export {beginnersGuide};
export {learnCannabinoids};
export {learnDriedFlower};
export {learnEdibles};
export {learnExtracts};
export {learnTerpenes};
export {learnTHCCBD};
export {learnTheScience};
export {learnVaporizers};
export {medicalCannabis101};
export {ngcEUGMP};
export {isMedCannRight};
