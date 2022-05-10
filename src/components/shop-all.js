import React, { useState, Component, useRef, useEffect } from 'react';
import { render } from "react-dom";

import '../styles/app.scss';
import { Link } from 'react-router-dom';
import { Button } from './button';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import '../styles/components/shop-hero.scss';
import '../styles/components/shop-collection.scss';
import CollMostPopular from './collections/most-popular';
import CollDriedFlower from './collections/dried-flower';
import CollOils from './collections/oils';
import CollSprays from './collections/sprays';
import CollVaporizers from './collections/vaporizers';
import CollAccessories from './collections/accessories';

// ALL OF THIS SHIT IS TOO COMPLICATED FOR RIGHT NOW
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "React",
//       showHideDemo1: false
//       // showHideDemo2: false,
//       // showHideDemo3: false
//     };
//     this.hideComponent = this.hideComponent.bind(this);
//   }
//
//   hideComponent(name) {
//     console.log(name);
//     switch (name) {
//       case "showHideDemo1":
//         this.setState({ showHideDemo1: !this.state.showHideDemo1 });
//         break;
//       // case "showHideDemo2":
//       //   this.setState({ showHideDemo2: !this.state.showHideDemo2 });
//       //   break;
//       // case "showHideDemo3":
//       //   this.setState({ showHideDemo3: !this.state.showHideDemo3 });
//       //   break;
//       default:
//         null;
//     }
//   }
//
//   render() {
//     const { showHideDemo1 } = this.state;
//     return (
//       <>
//       <div>
//         {showHideDemo1 && <CollMostPopular />}
//       </div>
//       <div>
//         <button onClick={() => this.hideComponent("showHideDemo1")}>
//               Click to hide CollMostPopular component
//         </button>
//       </div>
//       </>
//     );
//   }
// }
//
// render(<App />, document.getElementById("root"));

function ShopAll() {

  const mostpopRef = useRef(null);
  const driedFlowerRef = useRef(null);
  const oilsRef = useRef(null);
  const spraysRef = useRef(null);
  const vapesRef = useRef(null);
  const accessRef = useRef(null);


  const executeScrollMPRef = () => mostpopRef.current.scrollIntoView({behavior: 'smooth'});
  const executeScrollDFRef = () => driedFlowerRef.current.scrollIntoView({behavior: 'smooth'});
  const executeScrollOilRef = () => oilsRef.current.scrollIntoView({behavior: 'smooth'});
  const executeScrollSprayRef = () => spraysRef.current.scrollIntoView({behavior: 'smooth'});
  const executeScrollVapesRef = () => vapesRef.current.scrollIntoView({behavior: 'smooth'});
  const executeScrollAccessRef = () => accessRef.current.scrollIntoView({behavior: 'smooth'});



  const [
    showMostPopular,
    setShowMP
  ] = React.useState(true);

  const [
    showDriedFlower,
    setShowDF
  ] = React.useState(true);


  return(
    <>
    <section class="shop-hero">
      <div className="inner-section">
        <div className="text-container">
          <h3>Quality Medicinal Cannabis</h3>
          <h2>The Northern Green<br />Cannabis Shop</h2>
          <p>Discover our complete collection of NGC brand & partners’ medicinal cannabis products – featuring hydroponic dried flower, fresh-tasting oils, custom formula vaporizers, and quick-to-take capsules.</p>
        </div>
        <div className="shop-sub-menu-container">
          <h4>Product Types:</h4>
          <div className="sub-menu border-radius">
            <Button
              buttonStyle="btn--primary sub-menu-btn"
              onClick={executeScrollMPRef}
              disabled
              // onClick={()=>setShowMP(!showMostPopular)}
              // url="#most-popular"
              >
              Most Popular
              <span className="img-container exact-size exact-size"><img src="imgs/prod-square.png" alt=""/></span>
            </Button>
            <Button
              buttonStyle="btn--primary sub-menu-btn"
              onClick={executeScrollDFRef}
              // onClick={()=>setShowDF(!showDriedFlower)}
              // url="#dried-flower"
              >
              Dried Flower
              <span className="img-container exact-size"><img src="imgs/prod-square.png" alt=""/></span>
            </Button>
            <Button
              buttonStyle="btn--primary sub-menu-btn"
              onClick={executeScrollOilRef}
              >
              Cannabis Oils
              <span className="img-container exact-size"><img src="imgs/prod-square.png" alt=""/></span>
            </Button>
            <Button
              buttonStyle="btn--primary sub-menu-btn"
              onClick={executeScrollSprayRef}
              >
              Cannabis Sprays
              <span className="img-container exact-size"><img src="imgs/prod-square.png" alt=""/></span>
            </Button>
            <Button
              buttonStyle="btn--primary sub-menu-btn"
              onClick={executeScrollVapesRef}
              >
              Vaporizers
              <span className="img-container exact-size"><img src="imgs/prod-square.png" alt=""/></span>
            </Button>
            <Button
              buttonStyle="btn--primary sub-menu-btn"
              onClick={executeScrollAccessRef}
              >
              Accessories
              <span className="img-container exact-size"><img src="imgs/prod-square.png" alt=""/></span>
            </Button>
          </div>
        </div>
        <div className="shop-sub-menu-container">
          <h4>By Cannabinoid Content:</h4>
          <div className="sub-menu border-radius">
            <Button buttonStyle="btn--primary sub-menu-btn">
              High CBD
              <span className="img-container exact-size"><img src="imgs/ngc_loose_knot.svg" alt="" className="svg-filter-green03 svg-hover-lightgrey" /></span>
            </Button>
            <Button buttonStyle="btn--primary sub-menu-btn">
              High THC
              <span className="img-container exact-size"><img src="imgs/ngc_loose_knot.svg" alt="" className="svg-filter-green03 svg-hover-lightgrey" /></span>
            </Button>
            <Button buttonStyle="btn--primary sub-menu-btn">
              1:1 (THC:CBD)
              <span className="img-container exact-size"><img src="imgs/ngc_loose_knot.svg" alt="" className="svg-filter-green03 svg-hover-lightgrey" /></span>
            </Button>
            <Button buttonStyle="btn--primary sub-menu-btn">
              No THC
              <span className="img-container exact-size"><img src="imgs/ngc_loose_knot.svg" alt="" className="svg-filter-green03 svg-hover-lightgrey" /></span>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <section class="shop-collection">
      <div className="inner-section">

        <CollMostPopular refProp={mostpopRef} />

        <CollDriedFlower refProp={driedFlowerRef} />
        // { showDriedFlower ? <CollDriedFlower/> : null }

        <CollOils refProp={oilsRef} />

        <CollSprays refProp={spraysRef} />

        <CollVaporizers refProp={vapesRef} />

        <CollAccessories refProp={accessRef} />

      </div>
    </section>
    </>

  )
}

export default ShopAll;
