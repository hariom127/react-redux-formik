import React from "react";
import { Tab, Tabs, Form, Button } from "react-bootstrap";
import Layout from "../../components/Layout";

const Mysales = () => {
  return (
    <Layout sidebar header>
      <div className="dashboard_conatnt">
        <h2 className="dashboard_title mysales_title">My Sales</h2>
        <div className="mysales_contant">
          <span className="sales_count">BHD20.00</span>

          <div className="mysales_outer">
            <Tabs
              defaultActiveKey="Daily"
              id="uncontrolled-tab-example"
              className="mb-2"
            >
              <Tab eventKey="Daily" title="Daily">
                <div className="mysales_daily">
                  <form>
                    <div className="form_group_first">
                      <Form.Label>From Date</Form.Label>
                      <Form.Control type="date" placeholder="From Date" />
                      <Form.Control type="date" placeholder="To Date" />
                    </div>

                    <div className="form_group_outer">
                      <Form.Label>Select Type</Form.Label>
                      <select>
                        <option value="volvo">Home Delivery</option>
                        <option value="saab">Monday</option>
                        <option value="opel">Tuesday</option>
                        <option value="audi">wednesday</option>
                      </select>
                    </div>

                    <div className="form_group_outer">
                      <Form.Label>Select Beanch</Form.Label>
                      <select>
                        <option value="volvo">Behrain</option>
                        <option value="saab">Monday</option>
                        <option value="opel">Tuesday</option>
                        <option value="audi">wednesday</option>
                      </select>
                    </div>

                    <Button className="btn search_btn">Search</Button>
                  </form>
                </div>

                <div className="monthly_value_outer">
                  <ul>
                    <li>
                      <a href="#">
                        <span className="month_visit">Jan</span>
                        <small>BHD20.00</small>
                        <i className="fas fa-chevron-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="month_visit">Feb</span>
                        <small>BHD20.00</small>
                        <i className="fas fa-chevron-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="month_visit">Mar</span>
                        <small>BHD20.00</small>
                        <i className="fas fa-chevron-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="month_visit">Apr</span>
                        <small>BHD20.00</small>
                        <i className="fas fa-chevron-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="month_visit">May</span>
                        <small>BHD20.00</small>
                        <i className="fas fa-chevron-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="month_visit">Jun</span>
                        <small>BHD20.00</small>
                        <i className="fas fa-chevron-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="month_visit">Jul</span>
                        <small>BHD20.00</small>
                        <i className="fas fa-chevron-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="month_visit">Aug</span>
                        <small>BHD20.00</small>
                        <i className="fas fa-chevron-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="month_visit">Sep</span>
                        <small>BHD20.00</small>
                        <i className="fas fa-chevron-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="month_visit">Oct</span>
                        <small>BHD20.00</small>
                        <i className="fas fa-chevron-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="month_visit">Nov</span>
                        <small>BHD20.00</small>
                        <i className="fas fa-chevron-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="month_visit">Dec</span>
                        <small>BHD20.00</small>
                        <i className="fas fa-chevron-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <Button className="btn green_btn">Update</Button>
              </Tab>
              <Tab eventKey="Weekly" title="Weekly">
                xyz
              </Tab>
              <Tab eventKey="Quarterly" title="Quarterly">
                xyz..
              </Tab>
              <Tab eventKey="Monthly" title="Monthly">
                xyz..
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Mysales;
