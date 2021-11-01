import { React, useState } from "react";
import { Accordion, Form, Button, Modal } from "react-bootstrap";
import Layout from "../../components/Layout";

const Discount = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Layout sidebar header>
      <div className="dashboard_conatnt">
        <h2 className="dashboard_title">Discounts</h2>
        <div className="mysales_outer store_setting_tabs">
          <Form className="theme_form editownrprofile">
            <div className="form_row">
              <Form.Group className="form-group" controlId="">
                <Form.Label>Choose discount type</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>item Category</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="form-group" controlId="">
                <Form.Label>Choose Discount Percentage %</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>item Category</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </div>

            <div className="menu_selection">
              <h2 className="dashboard_title">Menu Selection</h2>

              <div className="menu_selection_button">
                <Button className="current">Discount On all Menu</Button>
                <Button onClick={handleShow}>Discount On Selected Item</Button>
              </div>

              <h2 className="dashboard_title">Discounts Period</h2>
              <div className="form_row">
                <Form.Group className="form-group" controlId="">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>

                <Form.Group className="form-group" controlId="">
                  <Form.Label>End date</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </div>
            </div>
          </Form>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} className="menu_selection">
        <Modal.Header closeButton>
          <Modal.Title>Menu Selection</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="menu-selection">
            <span className="selected_value"> 0/22 Items selected</span>
            <form className="slected_item_search">
              <Form.Control type="text" placeholder="Search Items" />
              <button>
                <img src="./assets/images/search-icon.png" />
              </button>
            </form>
          </div>

          <div className="select_accrordian_list">
            <Accordion defaultActiveKey="Starters">
              <Accordion.Item eventKey="Starters">
                <Accordion.Header>
                  <span className="custome_checkbox">
                    <input type="checkbox" />
                    <small></small>
                  </span>
                  Starters
                </Accordion.Header>
                <Accordion.Body>
                  <div className="add_point">
                    <ul>
                      <li>
                        <span className="custome_checkbox">
                          <input type="checkbox" />
                          <small></small>
                        </span>
                        Signature Shrimps
                      </li>
                      <li>
                        <span className="custome_checkbox">
                          <input type="checkbox" />
                          <small></small>
                        </span>
                        Gypsy Fries
                      </li>
                      <li>
                        <span className="custome_checkbox">
                          <input type="checkbox" />
                          <small></small>
                        </span>
                        Paella Bites
                      </li>
                      <li>
                        <span className="custome_checkbox">
                          <input type="checkbox" />
                          <small></small>
                        </span>
                        Campfire Bites
                      </li>
                      <li>
                        <span className="custome_checkbox">
                          <input type="checkbox" />
                          <small></small>
                        </span>
                        Shrimp Salad
                      </li>
                    </ul>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="mains">
                <Accordion.Header>
                  <span className="custome_checkbox">
                    <input type="checkbox" />
                    <small></small>
                  </span>
                  Mains
                </Accordion.Header>
                <Accordion.Body>
                  <div className="add_point">
                    <ul>
                      <li>
                        <span className="custome_checkbox">
                          <input type="checkbox" />
                          <small></small>
                        </span>
                        Signature Shrimps
                      </li>
                      <li>
                        <span className="custome_checkbox">
                          <input type="checkbox" />
                          <small></small>
                        </span>
                        Gypsy Fries
                      </li>
                      <li>
                        <span className="custome_checkbox">
                          <input type="checkbox" />
                          <small></small>
                        </span>
                        Paella Bites
                      </li>
                      <li>
                        <span className="custome_checkbox">
                          <input type="checkbox" />
                          <small></small>
                        </span>
                        Campfire Bites
                      </li>
                      <li>
                        <span className="custome_checkbox">
                          <input type="checkbox" />
                          <small></small>
                        </span>
                        Shrimp Salad
                      </li>
                    </ul>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="sweets-end">
                <Accordion.Header>
                  <span className="custome_checkbox">
                    <input type="checkbox" />
                    <small></small>
                  </span>
                  Sweets End
                </Accordion.Header>
                <Accordion.Body>
                  <div className="add_point">
                    <ul>
                      <li>
                        <span className="custome_checkbox">
                          <input type="checkbox" />
                          <small></small>
                        </span>
                        Signature Shrimps
                      </li>
                      <li>
                        <span className="custome_checkbox">
                          <input type="checkbox" />
                          <small></small>
                        </span>
                        Gypsy Fries
                      </li>
                      <li>
                        <span className="custome_checkbox">
                          <input type="checkbox" />
                          <small></small>
                        </span>
                        Paella Bites
                      </li>
                      <li>
                        <span className="custome_checkbox">
                          <input type="checkbox" />
                          <small></small>
                        </span>
                        Campfire Bites
                      </li>
                      <li>
                        <span className="custome_checkbox">
                          <input type="checkbox" />
                          <small></small>
                        </span>
                        Shrimp Salad
                      </li>
                    </ul>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="drinks">
                <Accordion.Header>
                  <span className="custome_checkbox">
                    <input type="checkbox" />
                    <small></small>
                  </span>
                  Drinks
                </Accordion.Header>
                <Accordion.Body>
                  <div className="add_point">
                    <ul>
                      <li>
                        <span className="custome_checkbox">
                          <input type="checkbox" />
                          <small></small>
                        </span>
                        Signature Shrimps
                      </li>
                      <li>
                        <span className="custome_checkbox">
                          <input type="checkbox" />
                          <small></small>
                        </span>
                        Gypsy Fries
                      </li>
                      <li>
                        <span className="custome_checkbox">
                          <input type="checkbox" />
                          <small></small>
                        </span>
                        Paella Bites
                      </li>
                      <li>
                        <span className="custome_checkbox">
                          <input type="checkbox" />
                          <small></small>
                        </span>
                        Campfire Bites
                      </li>
                      <li>
                        <span className="custome_checkbox">
                          <input type="checkbox" />
                          <small></small>
                        </span>
                        Shrimp Salad
                      </li>
                    </ul>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="none_all">
            <a href="#">None</a>
            <a href="#">All</a>
          </div>

          <div className="discount_confirmation_btn">
            <Button className="theme_btn confirm">Confirm</Button>
            <Button className="theme_btn cancel">Cancel</Button>
          </div>
        </Modal.Body>
      </Modal>
    </Layout>
  );
};
export default Discount;
