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
import CollCBDProds from './collections/subcategory-cbd';


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

// ////////// Sticky Shop Nav
// const refSubmenu01 = useRef();
// // let refY_submenu01= refSubmenu01.current.offsetTop;
// // console.log(refY_submenu01);

// // This function calculate X and Y
// const getPosition = () => {
//   const refY_submenu01 = refSubmenu01.current.offsetTop;
// };

// // Get the position in the beginning
// useEffect(() => {
//   getPosition();
// }, []);
//
// // Re-calculate coordiante(s) when the window is resized by the user
// useEffect(() => {
//   window.addEventListener("resize", getPosition);
// }, []);


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

  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 750 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };



  return(
    <>
    <Switch>
      <Route path="/shop">

        <section class="shop-hero bg-f7f8f9-bigknot-right">
          <div className="inner-section">
            <div className="text-container">
              <h3>Quality Medicinal Cannabis</h3>
              <h2>The Northern Green<br />Cannabis Shop</h2>
              <p>Discover NGC's collection of medicincal cannabis products - featuring NGC's hydroponically-grown dried flower, CBD and THC oils, full-spectrum vaporizers, and more.</p>
              <p>Please note: Due to Health Canada regulations, you must be registered with us to purchase medical cannabis products.</p>
              <p>Not registered with us yet? <a href="/register">Sign Up Today!</a> It takes 2 minutes to register, and we'll guide you through the process of getting the required medicinal cannabis prescription 💚.</p>
            </div>
            <div className="shop-sub-menu-container">
              <h4>Product Types:</h4>
              <div className={`fixed-nav-container ${stickyClass}`}>
                <div className="sub-menu border-radius">
                  <Button
                    buttonStyle="btn--primary sub-menu-btn"
                    onClick={executeScrollMPRef}
                    disabled
                    // onClick={()=>setShowMP(!showMostPopular)}
                    // url="#most-popular"
                    >
                    Best Sellers
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

      </Route>
      <Route path="/shop-cbd">

        <section class="shop-hero">
          <div className="inner-section">
            <div className="text-container">
              <h3>High cbd products</h3>
              <h2>Take Advantage of CBD’s High Anti-Inflammatory Properties</h2>
              <p>Discover our complete collection of NGC brand & partners’ medicinal cannabis products – featuring hydroponic dried flower, fresh-tasting oils, custom formula vaporizers, and quick-to-take capsules.</p>
              <p>As with all medical products and prescriptions, always consult your chosen healthcare professional first and foremost for guidance on the use of medical cannabis.</p>
            </div>
            <div className="shop-sub-menu-container">
              <h4>Product Types:</h4>
              <div className={`fixed-nav-container ${stickyClass}`}>
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

            <CollCBDProds />

          </div>
        </section>

      </Route>
    </Switch>
    </>

  )
}

export default ShopAll;
