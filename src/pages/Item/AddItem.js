import React from "react";
import { Tabs, Tab, Form } from "react-bootstrap";
import Layout from "../../components/Layout";

const Additem = () => {
  return (
    <Layout sidebar header>
      <div className="dashboard_conatnt">
        <div className="mysales_outer">
          <Tabs
            defaultActiveKey="itemdetail"
            id="uncontrolled-tab-example"
            className="store_setting_tabs_contant"
          >
            <Tab eventKey="itemdetail" title="Item-Detail">
              <div className="item_page">
                <form className="theme_form">
                  <div className="upload_droaper">
                    <input type="file" />
                    <img className="draoper" src="./assets/images/camera.png" />
                    <span>Upload Photo</span>
                    <span className="upload_outer">
                      {" "}
                      <Form.Control
                        type="file"
                        placeholder=""
                        className="form-control-file"
                      />{" "}
                    </span>
                  </div>
                  <div className="form_row">
                    <Form.Group className="form-group fullwidth" controlId="">
                      <Form.Label>Item Category</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>item Category</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="form-group" controlId="">
                      <Form.Label>Item Name (English)</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className="form-group" controlId="">
                      <Form.Label>Item Name (Arabic)</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className="form-group" controlId="">
                      <Form.Label>Description (English)</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className="form-group" controlId="">
                      <Form.Label>Description (Arabic)</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className="form-group" controlId="">
                      <Form.Label>Add brand </Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className="form-group" controlId="">
                      <Form.Label>Add price</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group
                      className="form-group radio-row fullwidth"
                      controlId=""
                    >
                      <div className="choose_option">
                        <span className="switch">
                          {" "}
                          <span className="line_condition">
                            Veg Or Non Veg{" "}
                          </span>
                          <input type="checkbox" checked />
                          <span class="overswitch"></span>
                        </span>
                        <span className="switch">
                          {" "}
                          <span className="line_condition">Add On</span>
                          <input type="checkbox" />
                          <span class="overswitch"></span>
                        </span>
                        <span className="switch">
                          {" "}
                          <span className="line_condition">Variant</span>
                          <input type="checkbox" />
                          <span class="overswitch"></span>
                        </span>
                      </div>
                    </Form.Group>
                  </div>

                  <button type="button" class="btn green_btn btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </Tab>

            <Tab eventKey="itemChoose" title="Item Choose">
              XYDDjbkb
            </Tab>

            <Tab eventKey="variant" title="Variant ">
              variant
            </Tab>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};
export default Additem;
