import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import Layout from "../components/Layout";

const Dashboard = (props) => {
  return (
    <Layout sidebar header>
      <div className="dashboard_conatnt">
        <h2 className="dashboard_title">Dashboard</h2>

        <div className="light_card_row">
          <div className="light_card_grid">
            <div className="light_card_header">
              <strong>
                <span>
                  <img src="./assets/images/icons/salespreview.svg" />
                </span>
                Sales Preview
              </strong>
              <select>
                <option value="volvo">Today</option>
                <option value="saab">Monday</option>
                <option value="opel">Tuesday</option>
                <option value="audi">wednesday</option>
              </select>
            </div>
            <div className="light_card_body">
              <ul className="cardvalue">
                <li>
                  <strong>35</strong>
                  <small>Total Order</small>
                </li>
              </ul>
            </div>

            <div className="light_card_footer">
              <span> Total Sales BHD 0:00</span>
            </div>
          </div>

          <div className="light_card_grid">
            <div className="light_card_header">
              <strong>
                <span>
                  <img src="./assets/images/icons/bag.svg" />
                </span>
                Total Orders
              </strong>
              <select>
                <option value="volvo">Today</option>
                <option value="saab">Monday</option>
                <option value="opel">Tuesday</option>
                <option value="audi">wednesday</option>
              </select>
            </div>

            <div className="light_card_body">
              <ul className="cardvalue justify-content-between pt-md-4">
                <li>
                  <strong>35</strong>
                  <small>Delivery</small>
                </li>
                <li>
                  <strong>40</strong>
                  <small>Pick up</small>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="light_card_row">
          <div className="light_card_grid">
            <div className="light_card_header">
              <strong>
                <span>
                  <img src="./assets/images/icons/performance.svg" />
                </span>
                Performance
              </strong>
              <select>
                <option value="volvo">Today</option>
                <option value="saab">Monday</option>
                <option value="opel">Tuesday</option>
                <option value="audi">wednesday</option>
              </select>
            </div>

            <div className="light_card_list_outer">
              <ul className="performance">
                <li>
                  <strong>Home Delivery</strong>
                  <div className="star_list">
                    <span className="fillstar">
                      <img src="./assets/images/icons/fillstar.svg" />
                    </span>
                    <span className="fillstar">
                      <img src="./assets/images/icons/fillstar.svg" />
                    </span>
                    <span>
                      <img src="./assets/images/icons/fillstar.svg" />
                    </span>
                    <span>
                      <img src="./assets/images/icons/fillstar.svg" />
                    </span>
                    <span>
                      <img src="./assets/images/icons/fillstar.svg" />
                    </span>
                  </div>
                </li>

                <li>
                  <strong>Pickup</strong>
                  <div className="star_list">
                    <span className="fillstar">
                      <img src="./assets/images/icons/fillstar.svg" />
                    </span>
                    <span className="fillstar">
                      <img src="./assets/images/icons/fillstar.svg" />
                    </span>
                    <span>
                      <img src="./assets/images/icons/fillstar.svg" />
                    </span>
                    <span>
                      <img src="./assets/images/icons/fillstar.svg" />
                    </span>
                    <span>
                      <img src="./assets/images/icons/fillstar.svg" />
                    </span>
                  </div>
                </li>

                <li>
                  <strong>Home Delivery</strong>
                  <div className="star_list">
                    <span className="fillstar">
                      <img src="./assets/images/icons/fillstar.svg" />
                    </span>
                    <span className="fillstar">
                      <img src="./assets/images/icons/fillstar.svg" />
                    </span>
                    <span>
                      <img src="./assets/images/icons/fillstar.svg" />
                    </span>
                    <span>
                      <img src="./assets/images/icons/fillstar.svg" />
                    </span>
                    <span>
                      <img src="./assets/images/icons/fillstar.svg" />
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="light_card_grid">
            <div className="light_card_header">
              <strong>
                <span>
                  <img src="./assets/images/icons/salespreview.svg" />
                </span>
                Top 6 Favourite items
              </strong>
            </div>

            <div className="light_card_list_outer">
              <ul className="favorite_item">
                <li>
                  <figure>
                    <img src="./assets/images/icons/banana.svg" />
                  </figure>
                  <strong>Home Delivery</strong>
                </li>
                <li>
                  <figure>
                    <img src="./assets/images/icons/leves.svg" />
                  </figure>
                  <strong>Home Delivery</strong>
                </li>
                <li>
                  <figure>
                    <img src="./assets/images/icons/grapes.svg" />
                  </figure>
                  <strong>Home Delivery</strong>
                </li>
                <li>
                  <figure>
                    <img src="./assets/images/icons/banana.svg" />
                  </figure>
                  <strong>Home Delivery</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="chart_outer">
          <div className="chart_header">
            <h3>
              <small>OVERVIEW</small>Hourly Report
            </h3>
          </div>

          <div class="chart_cnt-outer">
            <img width="100%" src="./assets/images/chart.png" />
          </div>
        </div>

        <div class="chart_outer">
          <div className="chart_header">
            <h3>
              <small>OVERVIEW</small>Sales Chart
            </h3>
            <Tabs
              defaultActiveKey="Daily"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="Daily" title="Daily">
                <img width="100%" src="./assets/images/chart.png" />
              </Tab>
              <Tab eventKey="Weekly" title="Weekly">
                <img width="100%" src="./assets/images/chart.png" />
              </Tab>
              <Tab eventKey="Monthly" title="Monthly">
                <img width="100%" src="./assets/images/chart.png" />
              </Tab>

              <Tab eventKey="Quarterly" title="Quarterly">
                <img width="100%" src="./assets/images/chart.png" />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
