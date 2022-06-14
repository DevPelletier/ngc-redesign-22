import React from 'react';
import '../../styles/app.scss';
import '../../styles/layout/product.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ProductProps from '../product-props';
import Recommended_CBD_01 from '../collections/recommended-cbd01';
import Recommended_THC_01 from '../collections/recommended-thc01';
import Recommended_1to1_01 from '../collections/recommended-1to1';
import Recommended_Random_01 from '../collections/recommended-random';
import { Helmet } from 'react-helmet';

const pageTitle = 'Medical Cannabis | Northern Green Canada';

const vaporizer_bliss = [
  {
    link: '/product-vaporizer_kaiser-day-bliss',
    brand: 'Kaiser Day',
    name: 'Bliss',
    image: 'imgs/prod-vaporizer_bliss.png',
    type: 'Vaporizer',
    tagItems: [
      {id: 'a', content: 'Balanced Formula' },
      {id: 'b', content: 'THC: 215mg/g' },
      {id: 'c', content: 'CBD: 195mg/g' }
    ],
    descripItems: [
      {id: 'a', content: 'NGC has partnered with Kaiser Day Cannaceuticals to offer their full-spectrum vaporizers on our Client Portal.'},
      {id: 'b', content: 'BLISS is Kaiser Day’s balanced THC:CBD formula complemented by uplifting and flavourful terpenes such as myrcene, which occurs naturally in highly-fragrant plants like mangoes. One of the most dominant terpenes in the BLISS formulation is caryophyllene, which has been shown to reduce stress, anxiety and have pain-relieving properties.**'},
    ],
    listItems: [
      {id: 'a', content: 'CBDV: 2.0mg/g'},
      {id: 'b', content: 'CBC: 6.5mg/g'}
    ]
  }
];
const vaporizer_relief = [
  {
    link: '/product-vaporizer_kaiser-day-relief',
    brand: 'Kaiser Day',
    name: 'Relief',
    image: 'imgs/prod-vaporizer_relief.png',
    type: 'Vaporizer',
    tagItems: [
      {id: 'a', content: 'Targets Inflammation' },
      {id: 'b', content: 'THC: 90mg/g' },
      {id: 'c', content: 'CBD: 300mg/g' }
    ],
    descripItems: [
      {id: 'a', content: 'NGC has partnered with Kaiser Day Cannaceuticals to offer their full-spectrum vaporizers on our Client Portal.'},
      {id: 'b', content: "RELIEF Medical Cannabis vaporizer is Kaiser Day’s one-of-a-kind 1:3 THC:CBD blend, with myrcene. Myrcene contains anti-inflammatory qualities that aid in the treatment of chronic pain disorders such as migraines and arthritis. Kaiser Day’s RELIEF formulation also contains caryophyllene. which has analgesic qualities and has been used to relieve pain in people living with Parkinson's.**"},
    ],
    listItems: [
      {id: 'a', content: 'CBDV: 3.5mg/g'},
      {id: 'b', content: 'CBG: 1.0mg/g'}
    ]
  }
];
const vaporizer_relax = [
  {
    link: '/product-vaporizer_kaiser-day-relax',
    brand: 'Kaiser Day',
    name: 'Relax',
    image: 'imgs/prod-vaporizer_relax.png',
    type: 'Vaporizer',
    tagItems: [
      {id: 'a', content: 'Relaxing / Calming' },
      {id: 'c', content: 'THC: 220mg/g' },
      {id: 'd', content: 'CBD: 200mg/g' }
    ],
    descripItems: [
      {id: 'a', content: 'NGC has partnered with Kaiser Day Cannaceuticals to offer their full-spectrum vaporizers on our Client Portal.'},
      {id: 'b', content: "RELAX is Kaiser Day’s even THC:CBD blend that combines CBD's anti-anxiety qualities with the soothing benefits of myrcene and the balancing impacts of caryophyllene and limonene. Terpenes like linalool, phytol, and borneol are also included in Kaiser Day’s RELAX formulation.**"},
    ],
    listItems: [
      {id: 'a', content: 'CBDV: 2.0mg/g'},
      {id: 'b', content: 'CBC: 6.5mg/g'},
      {id: 'c', content: 'Major Terpenes: Linalool, Phytol, Borneol'}
    ]
  }
];
const vaporizer_ascend = [
  {
    link: '/product-vaporizer_kaiser-day-ascend',
    brand: 'Kaiser Day',
    name: 'Ascend',
    image: 'imgs/prod-vaporizer_ascend.png',
    type: 'Vaporizer',
    tagItems: [
      {id: 'a', content: 'Uplifting / Energetic' },
      {id: 'b', content: 'THC: 400mg/g' },
      {id: 'c', content: 'CBD: 80mg/g' }
    ],
    descripItems: [
      {id: 'a', content: 'NGC has partnered with Kaiser Day Cannaceuticals to offer their full-spectrum vaporizers on our Client Portal.'},
      {id: 'b', content: "ASCEND is Kaiser Day’s ultra-high THC formulation with a proprietary, effect-specific terpene profile. ASCEND’s energizing properties are suitable for conditions where a high-THC formulation is needed for daytime use.**"}
    ],
    listItems: [
      {id: 'a', content: 'CBC: 2.5mg/g'},
      {id: 'b', content: 'Major Terpenes: Limonene, Caryophyllene, Tergenelene'}
    ]
  }
];
const vaporizer_sleep = [
  {
    link: '/product-vaporizer_kaiser-day-sleep',
    brand: 'Kaiser Day',
    name: 'Sleep',
    image: 'imgs/prod-vaporizer_sleep.png',
    type: 'Vaporizer',
    tagItems: [
      {id: 'a', content: 'Sleep-Inducing' },
      {id: 'b', content: 'THC: 350mg/g' },
      {id: 'c', content: 'CBD: 80mg/g' }
    ],
    descripItems: [
      {id: 'a', content: 'NGC has partnered with Kaiser Day Cannaceuticals to offer their full-spectrum vaporizers on our Client Portal.'},
      {id: 'b', content: "SLEEP is Kaiser Day’s full-spectrum, THC-dominant formula with sleep-inducing and anxiolytic terpenes, including myrcene, caryophyllene, limonene, terpineol and linalool. SLEEP is designed to help you fall asleep and stay asleep.**"},
    ],
    listItems: [
      {id: 'a', content: 'Suitable for Nighttime Use'},
      {id: 'b', content: 'CBC: 2.5mg/g'},
      {id: 'c', content: 'CBDV: 1.0mg/g'},
      {id: 'd', content: 'May help with Opioid/Benzo reduction'}

    ]
  }
];

const driedflower_shishkaberry = [
  {
    link: '/product-driedflower_shishkaberry',
    brand: 'Northern Green Canada',
    name: 'Shishkaberry',
    image: 'imgs/prod-df_shishkaberry.jpg',
    type: 'Whole-Bud Dried Flower',
    tagItems: [
      {id: 'a', content: 'Indica-Dominant' },
      {id: 'a', content: 'THC: 14-19%' },
      {id: 'a', content: 'CBD: ~0%' }
    ],
    descripItems: [
      {id: 'a', content: "Shishkaberry (formerly “IN-Gesia” at NGC) is a well-known indica-dominant strain in Canadian medical cannabis with standard indica characteristics. NGC’s Shishkaberry carries an aroma profile of blackberry, pine, and cloves due to the dominant terpenes myrcene, ocimene, caryophyllene, and humulene. Shishkaberry’s lineage is a combination of the famous strains Afghani and DJ Short Blueberry. NGC’s Shishkaberry contains between 14-19% THC content, and ~0 CBD content, and is available in 5g dried flower weight, with 15g jars to come soon"}
    ],
    listItems: [
    ]
  }
];
const driedflower_darkangel = [
  {
    link: '/product-driedflower_darkangel',
    brand: 'Northern Green Canada',
    name: 'Dark Angel',
    image: 'imgs/prod-df_darkangel.jpg',
    type: 'Whole-Bud Dried Flower',
    tagItems: [
      {id: 'a', content: 'Indica-Dominant' },
      {id: 'b', content: 'THC: 17-24%' },
      {id: 'c', content: 'CBD: ~0%' }
    ],
    descripItems: [
      {id: 'a', content: 'Dark Angel is an indica-dominant hybrid with a nutty and citrus aroma and taste. The strain lineage of Dark Angel is Jack Herer and Cheese. As with all of our dried flower, Dark Angel is 100% hydroponic, hand-trimmed and hang-dried indoors. NGC’s Dark Angel contains THC content between 17-24% and 0 CBD content, with a terpene profile of terpinolene, ocimene, myrcene, and caryophyllene. NGC’s Dark Angel is available in 5g and 15g dried flower weights.'}
    ],
    listItems: [
    ]
  }
];
const driedflower_gg4 = [
  {
    link: '/product-driedflower_gg4',
    brand: 'Northern Green Canada',
    name: 'GG#4',
    image: 'imgs/prod-df_gg4.jpg',
    type: 'Whole-Bud Dried Flower',
    tagItems: [
      {id: 'a', content: 'Strong Indica' },
      {id: 'b', content: 'THC: 18-25%' },
      {id: 'c', content: 'CBD: ~0%' }
    ],
    descripItems: [
      {id: 'a', content: 'GG#4 is a strain with strong indica characteristics and a pungent earthy and peppery aroma and taste profile. GG#4 comes from a lineage of distinctive strains such as Sour Dubb, Chem’s Sister, and Chocolate Diesel. As with all of our dried flower, GG#4 is 100% hydroponic, hand-trimmed, hang-dried and cured indoors. NGC’s GG#4 contains THC content between 18-25% with 0 CBD content, with a terpene profile of caryophyllene, humulene, limonene, and myrcene. NGC’s GG#4 is available in 5g and 15g dried flower weights.'}
    ],
    listItems: [
    ]
  }
];
const driedflower_sourtang = [
  {
    link: '/product-driedflower_sourtang',
    brand: 'Northern Green Canada',
    name: 'Sour Tang',
    image: 'imgs/prod-df_sourtang.jpg',
    type: 'Whole-Bud Dried Flower',
    tagItems: [
      {id: 'a', content: 'Sativa-Hybrid' },
      {id: 'b', content: 'THC: 18-23%' },
      {id: 'c', content: 'CBD: ~0%' }
    ],
    descripItems: [
      {id: 'a', content: "NGC's Sour Tang is a popular strain with mostly sativa characteristics - a cross between East Coast Sour Diesel and Tangie. Of course, Sour Tang carries a pungent lemon and citrus flavour profile, with an undertone of earthiness when smoked or vaporized. As with all of our dried flower, Sour Tang is 100% hydroponic, hand-trimmed and hang-dried indoors. NGC’s Sour Tang contains THC content between 18-24% and 0 CBD content. NGC’s Sour Tang is available in 5g and 15g dried flower weights."}
    ],
    listItems: [
    ]
  }
];
const driedflower_washingmachine = [
  {
    link: '/product-driedflower_washingmachine',
    brand: 'Northern Green Canada',
    name: 'Washing Machine',
    image: 'imgs/prod-df_washingmachine.png',
    type: 'Whole-Bud Dried Flower',
    tagItems: [
      {id: 'a', content: 'Limited Run' },
      {id: 'b', content: 'Sativa-Hybrid' },
      {id: 'c', content: '1:2 THC:CBD' },
      {id: 'd', content: 'THC: 6%' },
      {id: 'e', content: 'CBD: 11%' }
    ],
    descripItems: [
      {id: 'a', content: "One of our new LIMITED-RUN medicinal strains - Washing Machine is a sativa-hybrid strain that users report as having a happy and heavy sedating effect, making this strain ideal for patients with mental health and sleep issues. Washing Machine has high THC content (21%), and a strong terpene profile. The aroma and taste of this strain is strongly herbal with spice and earthiness. Washing Machine is available in 5 g and 15 g dried flower weights - while quantities last."}
    ],
    listItems: [
    ]
  }
];
const driedflower_orangevelvet = [
  {
    link: '/product-driedflower_orangevelvet',
    brand: 'Northern Green Canada',
    name: 'Orange Velvet',
    image: 'imgs/prod-df_orangevelvet.png',
    type: 'Whole-Bud Dried Flower',
    tagItems: [
      {id: 'a', content: 'Limited Run' },
      {id: 'b', content: 'Sativa Hybrid' },
      {id: 'c', content: 'THC: 15%' },
      {id: 'd', content: 'CBD: ~0%' }
    ],
    descripItems: [
      {id: 'a', content: "One of our new LIMITED-RUN medicinal strains - Orange Velvet is a hybrid strain that users have reported as having an uplifting, appetite-boosting effect, as well as increasing creativity and focus. Orange Velvet has moderate THC content, and moderate terpene content, with caryophyllene, myrcene, farnesene, humulene, and more. True to its name, Orange Velvet carries the aroma of an orange creamsicle, with notes of orange, vanilla, honey, and earthiness. Orange Velvet is available in 5 g and 15 g dried flower weights - while quantities last."}
    ],
    listItems: [
    ]
  }
];
const driedflower_sourogcheese = [
  {
    link: '/product-driedflower_sourogcheese',
    brand: 'Northern Green Canada',
    name: 'Sour OG Cheese',
    image: 'imgs/prod-df_sourog.png',
    type: 'Whole-Bud Dried Flower',
    tagItems: [
      {id: 'a', content: 'Limited Run' },
      {id: 'b', content: 'Balanced Hybrid' },
      {id: 'c', content: 'THC: 22%' },
      {id: 'd', content: 'CBD: ~0%' }
    ],
    descripItems: [
      {id: 'a', content: "One of our new LIMITED-RUN medicinal strains - Sour OG Cheese is an indica-dominant strain that users have reported as being surprisingly balanced in mind and body effects - potentially useful for patients with chronic pain or inflammation. Sour OG Cheese has high THC content (21%), and a strong terpene profile. As its name suggests, This strain has a sharp, sour aroma along with a pungent earthy taste. Sour OG Cheese is available in 5 g and 15 g dried flower weights - while quantities last."}
    ],
    listItems: [
    ]
  }
];
const driedflower_watermelonog = [
  {
    link: '/product-driedflower_watermelonog',
    brand: 'Northern Green Canada',
    name: 'Watermelon OG',
    image: 'imgs/prod-df_watermelonog.png',
    type: 'Whole-Bud Dried Flower',
    tagItems: [
      {id: 'a', content: 'Limited Run' },
      {id: 'b', content: 'Indica Hybrid' },
      {id: 'c', content: 'THC: 21%' },
      {id: 'd', content: 'CBD: ~0%' }
    ],
    descripItems: [
      {id: 'a', content: "One of our new LIMITED-RUN medicinal strains - Watermelon OG is a hybrid strain that user report as having a happy and heavy sedating effect, making this strain ideal for patients with mental health and sleep issues. Washing Machine has high THC content, and a strong terpene profile. As the name implies, Watermelon OG carries a light, fruity aroma and taste profile. Watermelon OG is available in 5 g and 15 g dried flower weights while quantities last."}
    ],
    listItems: [
    ]
  }
];

const sprays_cbd20 = [
  {
    link: '/product-sprays_cbd20',
    brand: 'Northern Green Canada',
    name: 'CBD-20 Spray',
    image: 'imgs/prod-spray_cbd20.png',
    type: 'Cannabis Oil Spray',
    tagItems: [
      {id: 'a', content: '0:20 Formula' },
      {id: 'b', content: 'THC: 0mg/g' },
      {id: 'c', content: 'CBD: 20mg/g' }
    ],
    descripItems: [
      {id: 'a', content: "An abundant source of CBD, our NGC CBD Spray is a great choice for clients in need of medical cannabis therapy without the intoxicating effects of THC. Our CBD-20 Spray is derived from the popular medical cannabis cultivar, Nebula II. Packaged in an opaque, child-resistant, pharmaceutical-grade 15ml spray bottle to keep your medical cannabis safe, as well as providing a consistent dose per spray for ease-of-use."}
    ],
    listItems: [
    ]
  }
];
const sprays_cbd50 = [
  {
    link: '/product-sprays_cbd50',
    brand: 'Northern Green Canada',
    name: 'CBD-50 Spray',
    image: 'imgs/prod-spray_cbd20.png',
    type: 'Cannabis Oil Spray',
    tagItems: [
      {id: 'a', content: '0:50 Formula' },
      {id: 'b', content: 'THC: 0mg/g' },
      {id: 'c', content: 'CBD: 50mg/g' }
    ],
    descripItems: [
      {id: 'a', content: "An abundant source of CBD, our NGC CBD Spray is a great choice for clients in need of medical cannabis therapy without the intoxicating effects of THC. Our CBD-50 Spray is derived from the popular medical cannabis cultivar, Nebula II. Packaged in an opaque, child-resistant, pharmaceutical-grade 15ml spray bottle to keep your medical cannabis safe, as well as providing a consistent dose per spray for ease-of-use."}
    ],
    listItems: [
    ]
  }
];
const sprays_thc20 = [
  {
    link: '/product-sprays_thc20',
    brand: 'Northern Green Canada',
    name: 'THC-20 Spray',
    image: 'imgs/prod-spray_thc20.png',
    type: 'Cannabis Oil Spray',
    tagItems: [
      {id: 'a', content: '20:0 Formula' },
      {id: 'b', content: 'THC: 20mg/g' },
      {id: 'c', content: 'CBD: 0mg/g' }
    ],
    descripItems: [
      {id: 'a', content: "NGC's THC-20 Spray is extracted from a Sour Kush cultivar, creating an indica-dominant oil extract that has a rich consistency and pungent, intoxicating effects. Packaged in an opaque, child-resistant, pharmaceutical-grade 15ml spray bottle to keep your medical cannabis safe, as well as providing a consistent dose per spray for ease-of-use."}
    ],
    listItems: [
    ]
  }
];
const sprays_12thc20cbd = [
  {
    link: '/product-sprays_12thc20cbd',
    brand: 'Northern Green Canada',
    name: '12:20 Spray',
    image: 'imgs/prod-spray_1220.png',
    type: 'Cannabis Oil Spray',
    tagItems: [
      {id: 'a', content: '12:20 Formula' },
      {id: 'b', content: 'THC: 12mg/g' },
      {id: 'c', content: 'CBD: 20mg/g' }
    ],
    descripItems: [
      {id: 'a', content: "NGC's 12THC:20CBD Spray is derived from Black Widow, a balanced hybrid cultivar that is popular for its medicinal properties, due in part to its harmony of THC and CBD, as well as being perfectly balanced between common Sativa and Indica characteristics. Packaged in an opaque, child-resistant, pharmaceutical-grade 15ml spray bottle to keep your medical cannabis safe, as well as providing a consistent dose per spray for ease-of-use."}
    ],
    listItems: [
    ]
  }
];

const oils_cbd20 = [
  {
    link: '/product-oils_cbd20',
    brand: 'Northern Green Canada',
    name: 'CBD-20 Oil',
    image: 'imgs/prod-oil_cbd20.png',
    type: 'Cannabis Oil',
    tagItems: [
      {id: 'a', content: '0:20 Formula' },
      {id: 'b', content: 'THC: 0mg/g' },
      {id: 'c', content: 'CBD: 20mg/g' }
    ],
    descripItems: [
      {id: 'a', content: "An abundant source of CBD, NGC CBD Oil is a great choice for clients in need of medical cannabis therapy without the intoxicating effects of THC. Our NGC CBD-20 Oil is derived from the popular medical cannabis cultivar Nebula II. Packaged in an opaque, child-resistant, pharmaceutical-grade 30ml bottle to keep your medical cannabis safe, as well as a graduated 1.0ml dropper for ease-of-use."}
    ],
    listItems: [
    ]
  }
];
const oils_thc20 = [
  {
    link: '/product-oils_thc20',
    brand: 'Northern Green Canada',
    name: 'THC-20 Oil',
    image: 'imgs/prod-oil_thc20.png',
    type: 'Cannabis Oil',
    tagItems: [
      {id: 'a', content: '20:0 Formula' },
      {id: 'b', content: 'THC: 20mg/g' },
      {id: 'c', content: 'CBD: 0mg/g' }
    ],
    descripItems: [
      {id: 'a', content: "Our NGC THC-20 Oil is extracted from a Sour Kush cultivar, creating a balanced hybrid oil extract that has a rich consistency and pungent, intoxicating effects. Packaged in an opaque, child-resistant, pharmaceutical-grade 30ml bottle to keep your medical cannabis safe, as well as a graduated 1.0ml dropper for ease-of-use."}
    ],
    listItems: [
    ]
  }
];
const oils_12thc20cbd = [
  {
    link: '/product-oils_thc12cbd20',
    brand: 'Northern Green Canada',
    name: '12:20 Oil',
    image: 'imgs/prod-oil_1220.png',
    type: 'Cannabis Oil',
    tagItems: [
      {id: 'a', content: '12:20 Formula' },
      {id: 'b', content: 'THC: 12mg/g' },
      {id: 'c', content: 'CBD: 20mg/g' }
    ],
    descripItems: [
      {id: 'a', content: "Our 12THC:20CBD Oil is derived from Black Widow, a balanced hybrid cultivar that is popular for its medicinal properties, due in part to its harmony of THC and CBD, as well as being perfectly balanced between common Sativa and Indica characteristics. Packaged in an opaque, child-resistant, pharmaceutical-grade 30ml bottle to keep your medical cannabis safe, as well as a graduated 1.0ml dropper for ease-of-use."}
    ],
    listItems: [
    ]
  }
];

const accessories_popsocket = [
  {
    link: '/product-accessory_popsocket',
    brand: 'Northern Green Canada',
    name: 'Pop Socket',
    image: 'imgs/prod-accessory.png',
    type: 'Accessory',
    tagItems: [
    ],
    descripItems: [
      {id: 'a', content: "Get a grip on your phone and represent Northern Green Canada at the same time! NGC branded pop socket will grip on to almost any mobile device and make holding your devices more comfortable and more secure."}
    ],
    listItems: [
    ]
  }
];
const accessories_rollingpaper = [
  {
    link: '/product-accessory_rollingpaper',
    brand: 'Northern Green Canada',
    name: 'Rolling Paper',
    image: 'imgs/prod-accessory.png',
    type: 'Accessory',
    tagItems: [
    ],
    descripItems: [
      {id: 'a', content: "The right rolling papers are essential to a satisfying experience with NGC dried flower cannabis. Northern Green’s rolling papers are unbleached, organic, and pure hemp for the smoothest possible smoke. Expertly crafted rolling papers are the perfect compliment to our expertly crafted cannabis."}
    ],
    listItems: [
    ]
  }
];
const accessories_cardgrinder = [
  {
    link: '/product-accessory_cardgrinder',
    brand: 'Northern Green Canada',
    name: 'Card Grinder',
    image: 'imgs/prod-accessory.png',
    type: 'Accessory',
    tagItems: [
    ],
    descripItems: [
      {id: 'a', content: "Instant gratification is always possible when you carry your herb essentials in your wallet! The NGC Grinder Card is a slim tool with huge implications that will prepare you for any smoking scenario. Enjoy your NGC flower anywhere, on-the-go, without the complexities of hiding bulky accessories."}
    ],
    listItems: [
    ]
  }
];
const accessories_lighter = [
  {
    link: '/product-accessory_lighter',
    brand: 'Northern Green Canada',
    name: 'Lighter',
    image: 'imgs/prod-accessory.png',
    type: 'Accessory',
    tagItems: [
    ],
    descripItems: [
      {id: 'a', content: "The NGC branded lighter sends the subtle signal that you’re serious about craft medicinal cannabis. Complete with black finish and the Northern Green Canada wordmark - pick up one of these to pair with our expertly crafted dried flower products… or if you just want to support NGC!"}
    ],
    listItems: [
    ]
  }
];


const Product = (props) => (
  <>
  <Helmet>
    <title>{pageTitle}</title>
  </Helmet>

  <Switch>
    /////////// VAPORIZERS ///////////
    <Route path="/product-vaporizer_kaiser-day-bliss" exact>
      <ProductProps numbers={vaporizer_bliss} />
      <Recommended_1to1_01 />

    </Route>
    <Route path="/product-vaporizer_kaiser-day-relief" exact>
      <ProductProps numbers={vaporizer_relief} />
      <Recommended_CBD_01 />

    </Route>
    <Route path="/product-vaporizer_kaiser-day-relax" exact>
      <ProductProps numbers={vaporizer_relax} />
      <Recommended_1to1_01 />

    </Route>
    <Route path="/product-vaporizer_kaiser-day-ascend" exact>
      <ProductProps numbers={vaporizer_ascend} />
      <Recommended_THC_01 />

    </Route>
    <Route path="/product-vaporizer_kaiser-day-sleep" exact>
      <ProductProps numbers={vaporizer_sleep} />
      <Recommended_THC_01 />

    </Route>

    /////////// OILS ///////////
    <Route path="/product-oils_cbd20" exact>
      <ProductProps numbers={oils_cbd20} />
      <Recommended_CBD_01 />

    </Route>
    <Route path="/product-oils_thc20" exact>
      <ProductProps numbers={oils_thc20} />
      <Recommended_THC_01 />

    </Route>
    <Route path="/product-oils_12thc20cbd" exact>
      <ProductProps numbers={oils_12thc20cbd} />
      <Recommended_1to1_01 />

    </Route>

    /////////// SPRAYS ///////////
    <Route path="/product-sprays_cbd20" exact>
      <ProductProps numbers={sprays_cbd20} />
      <Recommended_CBD_01 />

    </Route>
    <Route path="/product-sprays_cbd50" exact>
      <ProductProps numbers={sprays_cbd50} />
      <Recommended_CBD_01 />

    </Route>
    <Route path="/product-sprays_thc20" exact>
      <ProductProps numbers={sprays_thc20} />
      <Recommended_THC_01 />

    </Route>
    <Route path="/product-sprays_12thc20cbd" exact>
      <ProductProps numbers={sprays_12thc20cbd} />
      <Recommended_1to1_01 />

    </Route>


    /////////// DRIED FLOWER ///////////
    <Route path="/product-driedflower-shishkaberry" exact>
      <ProductProps numbers={driedflower_shishkaberry} />
      <Recommended_THC_01 />

    </Route>
    <Route path="/product-driedflower_gg4" exact>
      <ProductProps numbers={driedflower_gg4} />
      <Recommended_THC_01 />

    </Route>
    <Route path="/product-driedflower_darkangel" exact>
      <ProductProps numbers={driedflower_darkangel} />
      <Recommended_THC_01 />

    </Route>
    <Route path="/product-driedflower_sourtang" exact>
      <ProductProps numbers={driedflower_sourtang} />
      <Recommended_THC_01 />

    </Route>
    <Route path="/product-driedflower_washingmachine" exact>
      <ProductProps numbers={driedflower_washingmachine} />
      <Recommended_1to1_01 />

    </Route>
    <Route path="/product-driedflower_orangevelvet" exact>
      <ProductProps numbers={driedflower_orangevelvet} />
      <Recommended_THC_01 />

    </Route>
    <Route path="/product-driedflower_watermelonog" exact>
      <ProductProps numbers={driedflower_watermelonog} />
      <Recommended_THC_01 />

    </Route>
    <Route path="/product-driedflower_sourogcheese" exact>
      <ProductProps numbers={driedflower_sourogcheese} />
      <Recommended_THC_01 />

    </Route>

    /////////// ACCESSORIES ///////////
    <Route path="/product-accessories_popsocket" exact>
      <ProductProps numbers={accessories_popsocket} />
      <Recommended_Random_01 />

    </Route>
    <Route path="/product-accessories_lighter" exact>
      <ProductProps numbers={accessories_lighter} />
      <Recommended_Random_01 />

    </Route>
    <Route path="/product-accessories_cardgrinder" exact>
      <ProductProps numbers={accessories_cardgrinder} />
      <Recommended_Random_01 />

    </Route>
    <Route path="/product-accessories_rollingpaper" exact>
      <ProductProps numbers={accessories_rollingpaper} />
      <Recommended_Random_01 />

    </Route>



  </Switch>

    </>
);

export default Product;

export {vaporizer_bliss};
export {vaporizer_relief};
export {vaporizer_relax};
export {vaporizer_ascend};
export {vaporizer_sleep};

export {driedflower_shishkaberry};
export {driedflower_darkangel};
export {driedflower_gg4};
export {driedflower_sourtang};
export {driedflower_washingmachine};
export {driedflower_orangevelvet};
export {driedflower_sourogcheese};
export {driedflower_watermelonog};

export {sprays_cbd20};
export {sprays_cbd50};
export {sprays_thc20};
export {sprays_12thc20cbd};

export {oils_cbd20};
export {oils_thc20};
export {oils_12thc20cbd};

export {accessories_popsocket};
export {accessories_rollingpaper};
export {accessories_cardgrinder};
export {accessories_lighter};
