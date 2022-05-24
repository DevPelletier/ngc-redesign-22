import React from 'react';
import '../../styles/app.scss';
import '../../styles/layout/learning-hub.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import ShopHero from '../shop-hero';

import SubCat_HubHighlights from '../articles/subcat-hubhighlights';
import SubCat_HubLatest from '../articles/subcat-hublatestposts';

import SubCat_BeginnersGuides from '../articles/subcat-beginnersguides';
import SubCat_NGCNews from '../articles/subcat-ngc-news';
import SubCat_UsingMedCann from '../articles/subcat-using-medcann';
import SubCat_CannabisScience from '../articles/subcat-cannabis-science';
import { Helmet } from 'react-helmet';

const pageTitle = 'Medicinal Cannabis Learning Hub | Northern Green Canada';


function LearningHub() {
  return (
    <>
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>

      <ShopHero />

      <Switch>
        <Route path="/learning-hub" exact>
          <SubCat_HubHighlights />
          <SubCat_HubLatest />
        </Route>
        <Route path="/learning-hub-subcategory-all" exact>
          <SubCat_HubHighlights />
          <SubCat_HubLatest />
        </Route>

        <Route path="/learning-hub-subcategory-beginners-guide" exact>
          <SubCat_BeginnersGuides />
        </Route>

        <Route path="/learning-hub-subcategory-ngc-news" exact>
          <SubCat_NGCNews />
        </Route>

        <Route path="/learning-hub-subcategory-cannabis-science" exact>
          <SubCat_CannabisScience />
        </Route>

        <Route path="/learning-hub-subcategory-using-medicinal-cannabis" exact>
          <SubCat_UsingMedCann />
        </Route>
      </Switch>


    </>
  );
}

export default LearningHub;
