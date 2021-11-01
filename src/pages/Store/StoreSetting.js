import { React, useState } from "react";
import Layout from "../../components/Layout";
import { Tab, Tabs, Form, Button, Modal } from "react-bootstrap";

const Storesetting = () => {
  return (
    <Layout sidebar header>
      <div className="dashboard_conatnt">
        <h2 className="dashboard_title">Store Settings</h2>
        <div className="storeprifile_contant">
          <div className="profile_detail storesetting">
            <figure className="user_pic_profile">
              <img src="./assets/images/profile.png" />
            </figure>
            <strong class="profile_Name">Treat Restaurant</strong>

            <a href="#" className="btn editprofile">
              <i class="fas fa-pen"></i>Edit
            </a>
            <a href="#" className="btn cuisine">
              {" "}
              Cuisine
            </a>
          </div>

          <div className="mysales_outer store_setting_tabs">
            <Tabs
              defaultActiveKey="storesetting"
              id="uncontrolled-tab-example"
              className="store_setting_tabs_contant"
            >
              <Tab eventKey="storesetting" title="Store Settings">
                <h2 className="dashboard_title">Store Settings</h2>
                <Form className="theme_form editownrprofile">
                  <div className="form_row">
                    <Form.Group className="form-group fullwidth" controlId="">
                      <Form.Label>Store Manager</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className="form-group" controlId="">
                      <Form.Label>Store Name </Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className="form-group" controlId="">
                      <Form.Label>Store Number</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className="form-group fullwidth" controlId="">
                      <Form.Label>Store Manager</Form.Label>
                      <Form.Control as="textarea" type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className="form-group upload_file" controlId="">
                      <Form.Label>
                        Background Image (Mobile) ( 500px X 600px )
                      </Form.Label>
                      <span className="upload_outer">
                        {" "}
                        <Form.Control
                          type="file"
                          placeholder=""
                          className="form-control-file"
                        />{" "}
                      </span>
                    </Form.Group>

                    <Form.Group className="form-group upload_file" controlId="">
                      <Form.Label>
                        Background Image (Website) ( 500px X 600px )
                      </Form.Label>
                      <span className="upload_outer">
                        {" "}
                        <Form.Control
                          type="file"
                          placeholder=""
                          className="form-control-file"
                        />{" "}
                      </span>
                    </Form.Group>

                    <Form.Group
                      className="form-group upload_file fullwidth"
                      controlId=""
                    >
                      <Form.Label>
                        Logo Image (Mobile) ( 500px X 600px )
                      </Form.Label>
                      <span className="upload_outer">
                        {" "}
                        <Form.Control
                          type="file"
                          placeholder=""
                          className="form-control-file"
                        />{" "}
                      </span>
                    </Form.Group>

                    <Form.Group className="form-group" controlId="">
                      <Form.Label>Tagline (English)</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className="form-group" controlId="">
                      <Form.Label>Tagline (Arabic)</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className="form-group" controlId="">
                      <Form.Label>Preparation Time</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className="form-group" controlId="">
                      <Form.Label>Delivery Time (In min)</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group
                      className="form-group radio-row fullwidth"
                      controlId=""
                    >
                      <Form.Label className="p-0">Dish Type</Form.Label>
                      <Form.Check type="radio" label="Veg" checked />
                      <Form.Check type="radio" label="Non-Veg" />
                      <Form.Check type="radio" label="Both" />
                    </Form.Group>

                    <Form.Group className="form-group" controlId="">
                      <Form.Label>House No./Flat No. (English)</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className="form-group" controlId="">
                      <Form.Label>House No./Flat No. (Arabic)</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className="form-group" controlId="">
                      <Form.Label>Street Name (English)</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className="form-group" controlId="">
                      <Form.Label>Street Name (Arabic)</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className="form-group" controlId="">
                      <Form.Label>Block Name (English)</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className="form-group" controlId="">
                      <Form.Label>Block Name (Arabic)</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className="form-group" controlId="">
                      <Form.Label>Langitude</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className="form-group" controlId="">
                      <Form.Label>Longitude</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className="form-group" controlId="">
                      <Form.Label>Restaurant No</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className="form-group" controlId="">
                      <Form.Label>Building No</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className="form-group" controlId="">
                      <Form.Label>Street no</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className="form-group" controlId="">
                      <Form.Label>Block No</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className="form-group fullwidth" controlId="">
                      <Form.Label>Area</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Location</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Form.Group>

                    <div className="toggle_list">
                      <Form.Group className="form-group radio-row" controlId="">
                        <Form.Label className="p-0">Busy</Form.Label>
                        <div className="choose_option single_select">
                          <span className="switch">
                            {" "}
                            <span className="line_condition"></span>
                            <input type="checkbox" />
                            <span class="overswitch"></span>
                          </span>
                        </div>
                      </Form.Group>

                      <Form.Group className="form-group radio-row" controlId="">
                        <Form.Label className="p-0">
                          Dine availability
                        </Form.Label>
                        <div className="choose_option single_select">
                          <span className="switch">
                            {" "}
                            <span className="line_condition"></span>
                            <input type="checkbox" />
                            <span class="overswitch"></span>
                          </span>
                        </div>
                      </Form.Group>

                      <Form.Group className="form-group radio-row" controlId="">
                        <Form.Label className="p-0">
                          Store availability
                        </Form.Label>
                        <div className="choose_option single_select">
                          <span className="switch">
                            {" "}
                            <span className="line_condition"></span>
                            <input type="checkbox" />
                            <span class="overswitch"></span>
                          </span>
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <Button className="btn green_btn">Save</Button>
                </Form>
              </Tab>

              <Tab
                eventKey="storedelivery-settings"
                title="Store Delivery Settings"
              >
                <h2 className="dashboard_title">Store Delivery Timings</h2>

                <Form className="select_time_form">
                  <div className="choose_timeing_part">
                    <div className="timeing-label-outer">
                      <h6>Sunday</h6>
                      <div className="select_date_time">
                        <div className="partofday">
                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Opens at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>09:00 AM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>

                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Closes at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>01:00 PM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>

                          <button className="timing_toggle"></button>
                        </div>

                        <div className="partofday">
                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Opens at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>02:00 PM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>

                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Closes at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>06:00 PM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>

                          <button className="timing_toggle"></button>
                        </div>

                        <div className="partofday">
                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Opens at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>08:00 AM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>

                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Closes at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>10:00 PM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>
                        </div>
                      </div>
                    </div>

                    <div className="timeing-label-outer">
                      <h6>Monday</h6>
                      <div className="select_date_time">
                        <div className="partofday active">
                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Opens at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>09:00 AM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>

                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Closes at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>01:00 PM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>

                          <button className="timing_toggle"></button>
                        </div>

                        <div className="partofday">
                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Opens at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>02:00 PM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>

                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Closes at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>06:00 PM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>

                          <button className="timing_toggle"></button>
                        </div>

                        <div className="partofday">
                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Opens at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>08:00 AM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>

                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Closes at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>10:00 PM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>
                        </div>
                      </div>
                    </div>

                    <div className="timeing-label-outer">
                      <h6>Tuesday</h6>
                      <div className="select_date_time">
                        <div className="partofday active">
                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Opens at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>09:00 AM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>

                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Closes at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>01:00 PM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>

                          <button className="timing_toggle"></button>
                        </div>

                        <div className="partofday">
                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Opens at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>02:00 PM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>

                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Closes at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>06:00 PM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>

                          <button className="timing_toggle"></button>
                        </div>

                        <div className="partofday">
                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Opens at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>08:00 AM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>

                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Closes at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>10:00 PM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="btn green_btn">Save</Button>
                </Form>
              </Tab>

              <Tab eventKey="dine-in" title="Dine in">
                <h2 className="dashboard_title">Dine in Availability</h2>

                <Form className="select_time_form">
                  <div className="choose_timeing_part">
                    <div className="timeing-label-outer">
                      <h6>Sunday</h6>
                      <div className="select_date_time">
                        <div className="partofday">
                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Opens at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>09:00 AM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>

                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Closes at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>01:00 PM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>

                          <button className="timing_toggle"></button>
                        </div>

                        <div className="partofday">
                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Opens at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>02:00 PM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>

                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Closes at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>06:00 PM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>

                          <button className="timing_toggle"></button>
                        </div>

                        <div className="partofday">
                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Opens at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>08:00 AM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>

                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Closes at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>10:00 PM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>
                        </div>
                      </div>
                    </div>

                    <div className="timeing-label-outer">
                      <h6>Monday</h6>
                      <div className="select_date_time">
                        <div className="partofday active">
                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Opens at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>09:00 AM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>

                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Closes at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>01:00 PM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>

                          <button className="timing_toggle"></button>
                        </div>

                        <div className="partofday">
                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Opens at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>02:00 PM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>

                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Closes at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>06:00 PM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>

                          <button className="timing_toggle"></button>
                        </div>

                        <div className="partofday">
                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Opens at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>08:00 AM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>

                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Closes at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>10:00 PM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>
                        </div>
                      </div>
                    </div>

                    <div className="timeing-label-outer">
                      <h6>Tuesday</h6>
                      <div className="select_date_time">
                        <div className="partofday active">
                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Opens at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>09:00 AM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>

                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Closes at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>01:00 PM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>

                          <button className="timing_toggle"></button>
                        </div>

                        <div className="partofday">
                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Opens at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>02:00 PM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>

                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Closes at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>06:00 PM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>

                          <button className="timing_toggle"></button>
                        </div>

                        <div className="partofday">
                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Opens at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>08:00 AM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>

                          <Form.Group className="form-group" controlId="">
                            <Form.Label>Closes at</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option>10:00 PM</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="btn green_btn">Save</Button>
                </Form>
              </Tab>

              <Tab eventKey="bank-details" title="Bank Details">
                <h2 className="dashboard_title">Bank Details</h2>
                <Form className="theme_form editownrprofile">
                  <div className="form_row">
                    <Form.Group className="form-group" controlId="">
                      <Form.Label>Bank Holder Name</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className="form-group" controlId="">
                      <Form.Label>Bank Name</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className="form-group" controlId="">
                      <Form.Label>Bank Account Number</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className="form-group" controlId="">
                      <Form.Label>IBAN Number</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>
                  </div>

                  <Button className="btn green_btn">Save</Button>
                </Form>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Storesetting;
