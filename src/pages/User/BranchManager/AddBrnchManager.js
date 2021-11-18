import React from "react";
import { Nav, Button, Form } from "react-bootstrap";

import Layout from "../../../components/Layout";
const AddBrnchManager = () => {
  return (
    <Layout sidebar header>
      <div className="dashboard_conatnt">
        <div className="form_contant">
          <form className="theme_form add-branch-manager">
            <h2 className="dashboard_title">Add Branch Manager</h2>
            <div className="form_row">
              <Form.Group className="form-group fullwidth" controlId="">
                <Form.Label>Select Group</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>one</option>
                  <option value="1">two</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="form-group fullwidth" controlId="">
                <Form.Label>Select Member</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>one</option>
                  <option value="1">two</option>
                </Form.Select>
              </Form.Group>
            </div>

            <h2 className="dashboard_title">Or Add New Member</h2>
            <div className="form_row">
              <Form.Group className="form-group fullwidth" controlId="">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>

              <Form.Group className="form-group fullwidth" controlId="">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </div>

            <div className="form_row inline_b">
              <Form.Group className="form-group radio-row" controlId="">
                <Form.Label className="p-0">Gender</Form.Label>
                <Form.Check type="radio" label="Male" checked />
                <Form.Check type="radio" label="Female" />
              </Form.Group>
            </div>

            <div className="form_row">
              <Form.Group className="form-group fullwidth" controlId="">
                <Form.Label>DOB</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>

              <Form.Group className="form-group fullwidth" controlId="">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </div>

            <div className="form_row justify-content-between add_member_right">
              <Form.Group className="upload_file" controlId="">
                <Form.Label>Profile Image</Form.Label>
                <span className="upload_outer">
                  {" "}
                  <Form.Control
                    type="file"
                    placeholder=""
                    className="form-control-file"
                  />{" "}
                </span>
              </Form.Group>

              <div className="form-group addmore_member">
                <a href="#" className="btn addmore_btn">
                  Add More Member <span>+</span>
                </a>
              </div>
            </div>

            <Button className="btn green_btn">Submit</Button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default AddBrnchManager;
