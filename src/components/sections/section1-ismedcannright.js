import React from 'react';
import '../../styles/app.scss';
import { Button } from '../button';
import '../../styles/components/ismedcannright1.scss';
import { Link } from 'react-router-dom';


function Section_IsMedCannRightForMe() {
    return (
      <section className="ismedcannright_1 bg-grey-bigknot">
        <div className="inner-section two-col-40-60">
          <div className="text-container margin-top-md">
            <h2>Is Medical Cannabis Right for Me?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nobis perferendis explicabo consequuntur iusto provident consectetur doloribus atque quis odio eaque alias laborum ullam, ducimus sit accusamus mollitia officiis ratione.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nobis perferendis explicabo consequuntur iusto provident consectetur doloribus atque quis odio eaque alias laborum ullam, ducimus sit accusamus mollitia officiis ratione.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nobis perferendis explicabo consequuntur iusto provident consectetur doloribus atque quis odio eaque alias laborum ullam, ducimus sit accusamus mollitia officiis ratione.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <Link className="primary-link"
            >
              Medical Cannabis Learning Hub
            </Link>
          </div>
          <div className="issue-cards-container">
            <div className="issue-card">
              <div className="icon-item">
                <span className="material-symbols-rounded blue01">bolt</span>
              </div>
              <div className="text-container">
                <h3>I would like help</h3>
                <h4>managing my pain</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, delectus deserunt ab illum, natus quis veritatis voluptatum nam commodi. </p>
                <Link to="/learning-hub" className="primary-link"
                >
                  Medical Cannabis Learning Hub
                  <span className="material-symbols-rounded arrow">navigate_next</span>
                </Link>
              </div>
            </div>
            <div className="issue-card">
              <div className="icon-item">
                <span className="material-symbols-rounded blue01">bolt</span>
              </div>
              <div className="text-container">
                <h3>I Am Having</h3>
                <h4>Trouble Sleeping</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, delectus deserunt ab illum, natus quis veritatis voluptatum nam commodi. </p>
                <Link to="/learning-hub" className="primary-link"
                >
                  Medical Cannabis Learning Hub
                  <span className="material-symbols-rounded arrow">navigate_next</span>
                </Link>
              </div>
            </div>
            <div className="issue-card">
              <div className="icon-item">
                <span className="material-symbols-rounded blue01">bolt</span>
              </div>
              <div className="text-container">
                <h3>I Am Feeling</h3>
                <h4>Anxious / Depressed</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, delectus deserunt ab illum, natus quis veritatis voluptatum nam commodi. </p>
                <Link to="/learning-hub" className="primary-link"
                >
                  Medical Cannabis Learning Hub
                  <span className="material-symbols-rounded arrow">navigate_next</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    )
}

export default Section_IsMedCannRightForMe;
