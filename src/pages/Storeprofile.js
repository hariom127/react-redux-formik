import React from "react";
import { Button, Form } from "react-bootstrap";
import Layout from "../components/Layout";

const Storeprofile = (props) => {
  return (
    <Layout sidebar header>
      <div className="dashboard_conatnt">
        <h2 className="dashboard_title">Store Profile</h2>
        <div className="storeprifile_contant">
          <div className="profile_detail">
            <figure className="user_pic_profile">
              <img src="./assets/images/profile.png" />
            </figure>
            <strong className="profile_Name">Treat Restaurant</strong>
            <a href="#" className="btn editprofile">
              <i className="fas fa-pen"></i>Edit Profile
            </a>

            <span className="switch">
              <input type="checkbox" />
              <span className="overswitch"></span>{" "}
              <span className="line_condition">Available</span>
            </span>
          </div>

          <div className="storeprofile_form">
            <form className="theme_form">
              <div className="form_row">
                <Form.Group className="form-group fullrow" controlId="">
                  <Form.Label>Store Manager</Form.Label>
                  <select>
                    <option value="volvo">Today</option>
                    <option value="saab">Monday</option>
                    <option value="opel">Tuesday</option>
                    <option value="audi">wednesday</option>
                  </select>
                </Form.Group>
              </div>
              <div className="form_row">
                <Form.Group className="form-group" controlId="">
                  <Form.Label>Store Name (English)</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>

                <Form.Group className="form-group" controlId="">
                  <Form.Label>Store Name (Arabic)</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </div>

              <div className="form_row">
                <Form.Group className="form-group" controlId="">
                  <Form.Label>Store Branch Code (English)</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>

                <Form.Group className="form-group" controlId="">
                  <Form.Label>Store Branch Code (Arabic)</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </div>

              <div className="form_row">
                <Form.Group className="form-group " controlId="">
                  <Form.Label>Store Tagline (English)</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>

                <Form.Group className="form-group " controlId="">
                  <Form.Label>Store Tagline (Arabic)</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </div>

              <div className="form_row">
                <Form.Group className="form-group " controlId="">
                  <Form.Label>Store Address (English)</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>

                <Form.Group className="form-group " controlId="">
                  <Form.Label>Store Address (Arabic)</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </div>

              <Button className="btn green_btn">Save</Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Storeprofile;
