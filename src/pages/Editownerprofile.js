import React from "react";
import { Nav, Button, Form } from "react-bootstrap";
import Sidebar from "../components/Sidebar";

const Editownerprofile = () => {
  return (
    <>
      <Sidebar />
      <div className="dashboard_conatnt">
        <h2 className="dashboard_title">Edit owner Profile</h2>
        <div className="editprofile_contant">
          <div className="editprofile_form">
            <form className="theme_form editownrprofile">
              <div className="form_row">
                <Form.Group className="form-group" controlId="">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>

                <Form.Group className="form-group" controlId="">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </div>

              <div className="form_row">
                <Form.Group className="form-group" controlId="">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>

                <Form.Group className="form-group" controlId="">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control type="date" placeholder="" />
                </Form.Group>
              </div>

              <div className="form_row">
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
              </div>

              <Button className="btn green_btn">Update</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Editownerprofile;
