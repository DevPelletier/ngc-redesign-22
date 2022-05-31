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
import CollTHCProds from './collections/thc-prods';
import Coll1to1Prods from './collections/1to1-prods';
import CollNoTHCProds from './collections/nothc-prods';


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
              <p>Discover NGC's collection of medicincal cannabis products - featuring hydroponically-grown dried flower, CBD and THC oils, full-spectrum vaporizers, and more -</p>
              <p>Please note: Due to Health Canada regulations, you must be registered with us to purchase medical cannabis products.</p>
              <p>Not registered with us yet? <a href="/register">Sign Up Today!</a> It takes about 1-2 minutes to register with us, and we'll guide you through the process of getting your medicinal cannabis prescription for full access to NGC products 💚</p>
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
                    <span className="img-container exact-size exact-size"><img src="imgs/prod-oil.png" alt=""/></span>
                  </Button>
                  <Button
                    buttonStyle="btn--primary sub-menu-btn"
                    onClick={executeScrollDFRef}
                    // onClick={()=>setShowDF(!showDriedFlower)}
                    // url="#dried-flower"
                    >
                    Dried Flower
                    <span className="img-container exact-size"><img src="imgs/prod-driedflower.png" alt=""/></span>
                  </Button>
                  <Button
                    buttonStyle="btn--primary sub-menu-btn"
                    onClick={executeScrollOilRef}
                    >
                    Cannabis Oils
                    <span className="img-container exact-size"><img src="imgs/prod-oil.png" alt=""/></span>
                  </Button>
                  <Button
                    buttonStyle="btn--primary sub-menu-btn"
                    onClick={executeScrollSprayRef}
                    >
                    Cannabis Sprays
                    <span className="img-container exact-size"><img src="imgs/prod-spray.png" alt=""/></span>
                  </Button>
                  <Button
                    buttonStyle="btn--primary sub-menu-btn"
                    onClick={executeScrollVapesRef}
                    >
                    Vaporizers
                    <span className="img-container exact-size"><img src="imgs/prod-vaporizer_ascend.png" alt=""/></span>
                  </Button>
                  <Button
                    buttonStyle="btn--primary sub-menu-btn"
                    onClick={executeScrollAccessRef}
                    >
                    Accessories
                    <span className="img-container exact-size"><img src="imgs/prod-accessory.png" alt=""/></span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="shop-sub-menu-container">
              <h4>By Cannabinoid Content:</h4>
              <div className="sub-menu border-radius">
                <Button
                  buttonStyle="btn--primary sub-menu-btn"
                  url="/shop-subcategory-high-cbd"
                  >
                  High CBD
                  <span className="img-container exact-size"><img src="imgs/ngc_looseknot_128.png" alt=""/></span>
                </Button>
                <Button
                  buttonStyle="btn--primary sub-menu-btn"
                  url="/shop-subcategory-high-thc"
                  >
                  High THC
                  <span className="img-container exact-size"><img src="imgs/ngc_looseknot_128.png" alt=""/></span>
                </Button>
                <Button
                  buttonStyle="btn--primary sub-menu-btn"
                  url="/shop-subcategory-1-to-1-thc-cbd"
                  >
                  1:1 (THC:CBD)
                  <span className="img-container exact-size"><img src="imgs/ngc_looseknot_128.png" alt=""/></span>
                </Button>
                <Button
                  buttonStyle="btn--primary sub-menu-btn"
                  url="/shop-subcategory-no-thc"
                  >
                  No THC
                  <span className="img-container exact-size"><img src="imgs/ngc_looseknot_128.png" alt=""/></span>
                </Button>

              </div>
            </div>
          </div>
        </section>

        <section class="shop-collection">
          <div className="inner-section">
            <CollMostPopular refProp={mostpopRef} />
            <CollVaporizers refProp={vapesRef} />
            <CollDriedFlower refProp={driedFlowerRef} />
            <CollOils refProp={oilsRef} />
            <CollSprays refProp={spraysRef} />
            <CollAccessories refProp={accessRef} />
          </div>
        </section>
      </Route>

      <Route path="/shop-subcategory-high-cbd" exact>
        <section class="shop-hero bg-f7f8f9-bigknot-right">
          <div className="inner-section">
            <div className="text-container">
              <h3>High cbd products</h3>
              <h2>Take Advantage of CBD’s High Anti-Inflammatory Properties</h2>
              <p>CBD - also known as Cannabidiol - is a non-psychoactive cannabinoid with anti-pain, anti-inflammatory, and anti-cancer properties while having zero psychoactive effect.</p>
              <p>While CBD is one of the more well-known cannabinoids, scientific research on its use to alleviate and treat illness is still relatively recent. However, of course, CBD has shown huge promise in medicinal use for the above properties, as well as an anticonvulsant, antipsychotic, and anxiolytic.*</p>
              <p>Discover our collection of medicinal cannabis products with high CBD content below! <span class="material-symbols-rounded background">arrow_downward</span></p>
              <p className="sm">* - As with all medical products, always consult your chosen healthcare professional first and foremost for guidance on the use of medical cannabis. <br /><br />Please note: Due to Health Canada regulations, you must be registered with us to purchase medical cannabis products. Not registered with us yet? <a href="/register">Sign Up Today!</a> It takes about 1-2 minutes to register with us, and we'll guide you through the process of getting your medicinal cannabis prescription for full access to NGC products.</p>
            </div>
            <div className="shop-sub-menu-container">
              <h4>Product Types:</h4>
              <div className={`fixed-nav-container ${stickyClass}`}>
                <div className="sub-menu border-radius">
                  <Button
                    buttonStyle="btn--primary sub-menu-btn"
                    // onClick={executeScrollMPRef}
                    // disabled
                    url="/shop#best-sellers"
                    >
                    Best Sellers
                    <span className="img-container exact-size exact-size"><img src="imgs/prod-square.png" alt=""/></span>
                  </Button>
                  <Button
                    buttonStyle="btn--primary sub-menu-btn"
                    // onClick={executeScrollMPRef}
                    // disabled
                    url="/shop#best-sellers"
                    >
                    Dried Flower
                    <span className="img-container exact-size"><img src="imgs/prod-square.png" alt=""/></span>
                  </Button>
                  <Button
                    buttonStyle="btn--primary sub-menu-btn"
                    // onClick={executeScrollMPRef}
                    // disabled
                    url="/shop#oils"
                    >
                    Cannabis Oils
                    <span className="img-container exact-size"><img src="imgs/prod-square.png" alt=""/></span>
                  </Button>
                  <Button
                      buttonStyle="btn--primary sub-menu-btn"
                      // onClick={executeScrollMPRef}
                      // disabled
                      url="/shop#sprays"
                    >
                    Cannabis Sprays
                    <span className="img-container exact-size"><img src="imgs/prod-square.png" alt=""/></span>
                  </Button>
                  <Button
                    buttonStyle="btn--primary sub-menu-btn"
                    // onClick={executeScrollMPRef}
                    // disabled
                    url="/shop#vaporizers"
                    >
                    Vaporizers
                    <span className="img-container exact-size"><img src="imgs/prod-square.png" alt=""/></span>
                  </Button>
                  <Button
                    buttonStyle="btn--primary sub-menu-btn"
                    // onClick={executeScrollMPRef}
                    // disabled
                    url="/shop#accessories"
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
                <Button
                  buttonStyle="btn--primary sub-menu-btn"
                  url="/shop-subcategory-high-cbd"
                  >
                  High CBD
                  <span className="img-container exact-size"><img src="imgs/ngc_looseknot_128.png" alt=""/></span>
                </Button>
                <Button
                  buttonStyle="btn--primary sub-menu-btn"
                  url="/shop-subcategory-high-thc"
                  >
                  High THC
                  <span className="img-container exact-size"><img src="imgs/ngc_looseknot_128.png" alt=""/></span>
                </Button>
                <Button
                  buttonStyle="btn--primary sub-menu-btn"
                  url="/shop-subcategory-1-to-1-thc-cbd"
                  >
                  1:1 (THC:CBD)
                  <span className="img-container exact-size"><img src="imgs/ngc_looseknot_128.png" alt=""/></span>
                </Button>
                <Button
                  buttonStyle="btn--primary sub-menu-btn"
                  url="/shop-subcategory-no-thc"
                  >
                  No THC
                  <span className="img-container exact-size"><img src="imgs/ngc_looseknot_128.png" alt=""/></span>
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


      <Route path="/shop-subcategory-high-thc" exact>
        <section class="shop-hero bg-f7f8f9-bigknot-right">
          <div className="inner-section">
            <div className="text-container">
            <h3>High THC products</h3>
            <h2>High THC Medicinal Cannabis For Your Relief</h2>
            <p>THC - also known as Tetrahydrocannabinol - is the main psychoactive substance that produces the “high” associated with smoking cannabis.</p>
            <p>Although THC is one of the more widely recognized cannabinoids, scientific research on its use to alleviate and treat illness is still relatively recent. However, we do know that THC interacts with the human body’s endocannabinoid system to stimulate the release of dopamine in the brain, which is what causes feelings of euphoria, as well as relaxation, increased appetite, and heightened sensory perception.*</p>
            <p>Discover our collection of medicinal cannabis products with high THC content below! <span class="material-symbols-rounded background">arrow_downward</span></p>
            <p className="sm">* - As with all medical products, always consult your chosen healthcare professional first and foremost for guidance on the use of medical cannabis.</p><p class="sm">Please note: Due to Health Canada regulations, you must be registered with us to purchase medical cannabis products. Not registered with us yet? <a href="/register">Sign Up Today!</a> It takes about 1-2 minutes to register with us, and we'll guide you through the process of getting your medicinal cannabis prescription for full access to NGC products.</p>
            </div>
            <div className="shop-sub-menu-container">
              <h4>Product Types:</h4>
              <div className={`fixed-nav-container ${stickyClass}`}>
                <div className="sub-menu border-radius">
                  <Button
                    buttonStyle="btn--primary sub-menu-btn"
                    // onClick={executeScrollMPRef}
                    // disabled
                    url="/shop#best-sellers"
                    >
                    Best Sellers
                    <span className="img-container exact-size exact-size"><img src="imgs/prod-square.png" alt=""/></span>
                  </Button>
                  <Button
                    buttonStyle="btn--primary sub-menu-btn"
                    // onClick={executeScrollMPRef}
                    // disabled
                    url="/shop#best-sellers"
                    >
                    Dried Flower
                    <span className="img-container exact-size"><img src="imgs/prod-square.png" alt=""/></span>
                  </Button>
                  <Button
                    buttonStyle="btn--primary sub-menu-btn"
                    // onClick={executeScrollMPRef}
                    // disabled
                    url="/shop#oils"
                    >
                    Cannabis Oils
                    <span className="img-container exact-size"><img src="imgs/prod-square.png" alt=""/></span>
                  </Button>
                  <Button
                      buttonStyle="btn--primary sub-menu-btn"
                      // onClick={executeScrollMPRef}
                      // disabled
                      url="/shop#sprays"
                    >
                    Cannabis Sprays
                    <span className="img-container exact-size"><img src="imgs/prod-square.png" alt=""/></span>
                  </Button>
                  <Button
                    buttonStyle="btn--primary sub-menu-btn"
                    // onClick={executeScrollMPRef}
                    // disabled
                    url="/shop#vaporizers"
                    >
                    Vaporizers
                    <span className="img-container exact-size"><img src="imgs/prod-square.png" alt=""/></span>
                  </Button>
                  <Button
                    buttonStyle="btn--primary sub-menu-btn"
                    // onClick={executeScrollMPRef}
                    // disabled
                    url="/shop#accessories"
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
                <Button
                  buttonStyle="btn--primary sub-menu-btn"
                  url="/shop-subcategory-high-cbd"
                  >
                  High CBD
                  <span className="img-container exact-size"><img src="imgs/ngc_looseknot_128.png" alt=""/></span>
                </Button>
                <Button
                  buttonStyle="btn--primary sub-menu-btn"
                  url="/shop-subcategory-high-thc"
                  >
                  High THC
                  <span className="img-container exact-size"><img src="imgs/ngc_looseknot_128.png" alt=""/></span>
                </Button>
                <Button
                  buttonStyle="btn--primary sub-menu-btn"
                  url="/shop-subcategory-1-to-1-thc-cbd"
                  >
                  1:1 (THC:CBD)
                  <span className="img-container exact-size"><img src="imgs/ngc_looseknot_128.png" alt=""/></span>
                </Button>

              </div>
            </div>
          </div>
        </section>
        <section class="shop-collection">
          <div className="inner-section">

            <CollTHCProds/>

          </div>
        </section>
      </Route>

      <Route path="/shop-subcategory-1-to-1-thc-cbd" exact>
        <section class="shop-hero bg-f7f8f9-bigknot-right">
          <div className="inner-section">
            <div className="text-container">
              <h3>1:1 THC:CBD Products</h3>
              <h2>Balanced THC:CBD Cannabis Products for the best of both worlds</h2>
              <p>THC & CBD are two of the more well-researched cannabinoids that can be taken by patients in a variety of ways, separately or together. However, some research suggests doses of both compounds may provide additional therapeutic benefits for specific treatments. This effect includes 'The Entourage Effect', among other mechanisms.</p>
              <p>However, the ideal ratio of THC to CBD, along with other cannabinoids and terpenes, is always specific to the patient and their unique situation.</p>
              <p>Discover our collection of medicinal cannabis products with balanced THC & CBD content below! <span class="material-symbols-rounded background">arrow_downward</span></p>
              <p className="sm">* - As with all medical products, always consult your chosen healthcare professional first and foremost for guidance on the use of medical cannabis. <br /><br />Please note: Due to Health Canada regulations, you must be registered with us to purchase medical cannabis products. <br />Not registered with us yet? <a href="/register">Sign Up Today!</a> It takes about 1-2 minutes to register with us, and we'll guide you through the process of getting your medicinal cannabis prescription for full access to NGC products 💚</p>
            </div>
            <div className="shop-sub-menu-container">
              <h4>Product Types:</h4>
              <div className={`fixed-nav-container ${stickyClass}`}>
                <div className="sub-menu border-radius">
                  <Button
                    buttonStyle="btn--primary sub-menu-btn"
                    // onClick={executeScrollMPRef}
                    // disabled
                    url="/shop#best-sellers"
                    >
                    Best Sellers
                    <span className="img-container exact-size exact-size"><img src="imgs/prod-square.png" alt=""/></span>
                  </Button>
                  <Button
                    buttonStyle="btn--primary sub-menu-btn"
                    // onClick={executeScrollMPRef}
                    // disabled
                    url="/shop#best-sellers"
                    >
                    Dried Flower
                    <span className="img-container exact-size"><img src="imgs/prod-square.png" alt=""/></span>
                  </Button>
                  <Button
                    buttonStyle="btn--primary sub-menu-btn"
                    // onClick={executeScrollMPRef}
                    // disabled
                    url="/shop#oils"
                    >
                    Cannabis Oils
                    <span className="img-container exact-size"><img src="imgs/prod-square.png" alt=""/></span>
                  </Button>
                  <Button
                      buttonStyle="btn--primary sub-menu-btn"
                      // onClick={executeScrollMPRef}
                      // disabled
                      url="/shop#sprays"
                    >
                    Cannabis Sprays
                    <span className="img-container exact-size"><img src="imgs/prod-square.png" alt=""/></span>
                  </Button>
                  <Button
                    buttonStyle="btn--primary sub-menu-btn"
                    // onClick={executeScrollMPRef}
                    // disabled
                    url="/shop#vaporizers"
                    >
                    Vaporizers
                    <span className="img-container exact-size"><img src="imgs/prod-square.png" alt=""/></span>
                  </Button>
                  <Button
                    buttonStyle="btn--primary sub-menu-btn"
                    // onClick={executeScrollMPRef}
                    // disabled
                    url="/shop#accessories"
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
                <Button
                  buttonStyle="btn--primary sub-menu-btn"
                  url="/shop-subcategory-high-cbd"
                  >
                  High CBD
                  <span className="img-container exact-size"><img src="imgs/ngc_looseknot_128.png" alt=""/></span>
                </Button>
                <Button
                  buttonStyle="btn--primary sub-menu-btn"
                  url="/shop-subcategory-high-thc"
                  >
                  High THC
                  <span className="img-container exact-size"><img src="imgs/ngc_looseknot_128.png" alt=""/></span>
                </Button>
                <Button
                  buttonStyle="btn--primary sub-menu-btn"
                  url="/shop-subcategory-1-to-1-thc-cbd"
                  >
                  1:1 (THC:CBD)
                  <span className="img-container exact-size"><img src="imgs/ngc_looseknot_128.png" alt=""/></span>
                </Button>
                <Button
                  buttonStyle="btn--primary sub-menu-btn"
                  url="/shop-subcategory-no-thc"
                  >
                  No THC
                  <span className="img-container exact-size"><img src="imgs/ngc_looseknot_128.png" alt=""/></span>
                </Button>

              </div>
            </div>
          </div>
        </section>
        <section class="shop-collection">
          <div className="inner-section">

            <Coll1to1Prods />

          </div>
        </section>
      </Route>

      <Route path="/shop-subcategory-no-thc" exact>
        <section class="shop-hero bg-f7f8f9-bigknot-right">
          <div className="inner-section">
            <div className="text-container">
              <h3>No THC products</h3>
              <h2>Trust You Can Avoid Psychoactive Effects with Our Zero THC Products</h2>
              <p>THC is the cannabinoid that is mainly responsible for the psychoactive effects (or 'high') of cannabis. However, the effects of THC often are unnecessary or harmful for some medicinal cannabis patients.</p>
              <p>Therefore, zero THC products allow patients to reap the medicinal benefits of cannabis, without the interference of this specific compound.</p>
              <p>Discover our collection of medicinal cannabis products with zero THC content below! <span class="material-symbols-rounded background">arrow_downward</span></p>
              <p className="sm">* - As with all medical products, always consult your chosen healthcare professional first and foremost for guidance on the use of medical cannabis. <br /><br />Please note: Due to Health Canada regulations, you must be registered with us to purchase medical cannabis products. Not registered with us yet? <a href="/register">Sign Up Today!</a> It takes about 1-2 minutes to register with us, and we'll guide you through the process of getting your medicinal cannabis prescription for full access to NGC products.</p>
            </div>
            <div className="shop-sub-menu-container">
              <h4>Product Types:</h4>
              <div className={`fixed-nav-container ${stickyClass}`}>
                <div className="sub-menu border-radius">
                  <Button
                    buttonStyle="btn--primary sub-menu-btn"
                    // onClick={executeScrollMPRef}
                    // disabled
                    url="/shop#best-sellers"
                    >
                    Best Sellers
                    <span className="img-container exact-size exact-size"><img src="imgs/prod-square.png" alt=""/></span>
                  </Button>
                  <Button
                    buttonStyle="btn--primary sub-menu-btn"
                    // onClick={executeScrollMPRef}
                    // disabled
                    url="/shop#best-sellers"
                    >
                    Dried Flower
                    <span className="img-container exact-size"><img src="imgs/prod-square.png" alt=""/></span>
                  </Button>
                  <Button
                    buttonStyle="btn--primary sub-menu-btn"
                    // onClick={executeScrollMPRef}
                    // disabled
                    url="/shop#oils"
                    >
                    Cannabis Oils
                    <span className="img-container exact-size"><img src="imgs/prod-square.png" alt=""/></span>
                  </Button>
                  <Button
                      buttonStyle="btn--primary sub-menu-btn"
                      // onClick={executeScrollMPRef}
                      // disabled
                      url="/shop#sprays"
                    >
                    Cannabis Sprays
                    <span className="img-container exact-size"><img src="imgs/prod-square.png" alt=""/></span>
                  </Button>
                  <Button
                    buttonStyle="btn--primary sub-menu-btn"
                    // onClick={executeScrollMPRef}
                    // disabled
                    url="/shop#vaporizers"
                    >
                    Vaporizers
                    <span className="img-container exact-size"><img src="imgs/prod-square.png" alt=""/></span>
                  </Button>
                  <Button
                    buttonStyle="btn--primary sub-menu-btn"
                    // onClick={executeScrollMPRef}
                    // disabled
                    url="/shop#accessories"
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
                <Button
                  buttonStyle="btn--primary sub-menu-btn"
                  url="/shop-subcategory-high-cbd"
                  >
                  High CBD
                  <span className="img-container exact-size"><img src="imgs/ngc_looseknot_128.png" alt=""/></span>
                </Button>
                <Button
                  buttonStyle="btn--primary sub-menu-btn"
                  url="/shop-subcategory-high-thc"
                  >
                  High THC
                  <span className="img-container exact-size"><img src="imgs/ngc_looseknot_128.png" alt=""/></span>
                </Button>
                <Button
                  buttonStyle="btn--primary sub-menu-btn"
                  url="/shop-subcategory-1-to-1-thc-cbd"
                  >
                  1:1 (THC:CBD)
                  <span className="img-container exact-size"><img src="imgs/ngc_looseknot_128.png" alt=""/></span>
                </Button>
                <Button
                  buttonStyle="btn--primary sub-menu-btn"
                  url="/shop-subcategory-no-thc"
                  >
                  No THC
                  <span className="img-container exact-size"><img src="imgs/ngc_looseknot_128.png" alt=""/></span>
                </Button>
                <Button
                  buttonStyle="btn--primary sub-menu-btn"
                  url="/shop-subcategory-no-thc"
                  >
                  No THC
                  <span className="img-container exact-size"><img src="imgs/ngc_looseknot_128.png" alt=""/></span>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section class="shop-collection">
          <div className="inner-section">

            <CollNoTHCProds />

          </div>
        </section>
      </Route>
    </Switch>

    </>

  )
}

export default ShopAll;
