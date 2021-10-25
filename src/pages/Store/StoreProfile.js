import React from "react";
import { Button, Form } from "react-bootstrap";
import Layout from "../../components/Layout";
import { useFormik } from "formik";
import * as Yup from "yup";

const Storeprofile = (props) => {
  /***
   * Setup form validation and submit handel
   */
  const ProfileSchema = Yup.object().shape({
    store_manager: Yup.string().required("Required"),
    store_name_en: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    store_name_ar: Yup.string()
      .max(10, "Must be 15 characters or less")
      .required("Required"),
    tag_line_en: Yup.string()
      .max(250, "Must be 250 characters or less")
      .required("Required"),
    tag_line_ar: Yup.string()
      .max(250, "Must be 250 characters or less")
      .required("Required"),
    branch_code: Yup.string().required("Required"),
    store_address_en: Yup.string()
      .max(250, "Must be 250 characters or less")
      .required("Required"),
    store_address_ar: Yup.string()
      .max(250, "Must be 250 characters or less")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      store_manager: "",
      store_name_en: "",
      store_name_ar: "",
      branch_code: "",
      tag_line_en: "",
      tag_line_ar: "",
      store_address_en: "",
      store_address_ar: "",
    },
    validationSchema: ProfileSchema,
    onSubmit: (values, action) => {
      alert("ddff");
      //   dispatch(signup(values));
    },
  });

  return (
    <Layout sidebar header>
      <div className="dashboard_conatnt">
        <h2 className="dashboard_title">Store Profile</h2>
        <div className="storeprifile_contant">
          <div className="profile_detail">
            <figure className="user_pic_profile">
              <img src="./assets/images/profile.png" />
            </figure>
            <strong class="profile_Name">Treat Restaurant</strong>
            <a href="#" className="btn editprofile">
              <i class="fas fa-pen"></i>Edit Profile
            </a>

            <span className="switch">
              <input type="checkbox" />
              <span class="overswitch"></span>{" "}
              <span className="line_condition">Available</span>
            </span>
          </div>

          <div className="storeprofile_form">
            <form className="theme_form" onSubmit={formik.handleSubmit}>
              <div className="form_row">
                <Form.Group className="form-group fullrow" controlId="">
                  <Form.Label>Store Manager</Form.Label>
                  <select name="store_manager">
                    <option value="">-Chose Manager-</option>
                  </select>
                  {formik.touched.store_manager &&
                  formik.errors.store_manager ? (
                    <div className="text-danger">
                      {formik.errors.store_manager}
                    </div>
                  ) : null}
                </Form.Group>
              </div>
              <div className="form_row">
                <Form.Group className="form-group" controlId="">
                  <Form.Label>Store Name (English)</Form.Label>
                  <Form.Control
                    name="store_name_en"
                    type="text"
                    placeholder=""
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.store_name_en &&
                  formik.errors.store_name_en ? (
                    <small className="form-text text-danger">
                      {formik.errors.store_name_en}
                    </small>
                  ) : null}
                </Form.Group>

                <Form.Group className="form-group" controlId="">
                  <Form.Label>Store Name (Arabic)</Form.Label>
                  <Form.Control
                    name="store_name_ar"
                    type="text"
                    placeholder=""
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.store_name_ar &&
                  formik.errors.store_name_ar ? (
                    <small className="form-text text-danger">
                      {formik.errors.store_name_ar}
                    </small>
                  ) : null}
                </Form.Group>
              </div>

              <div className="form_row">
                <Form.Group className="form-group " controlId="">
                  <Form.Label>Store Tagline (English)</Form.Label>
                  <Form.Control
                    name="tag_line_en"
                    type="text"
                    placeholder=""
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.tag_line_en && formik.errors.tag_line_en ? (
                    <small className="form-text text-danger">
                      {formik.errors.tag_line_en}
                    </small>
                  ) : null}
                </Form.Group>

                <Form.Group className="form-group " controlId="">
                  <Form.Label>Store Tagline (Arabic)</Form.Label>
                  <Form.Control
                    name="tag_line_ar"
                    type="text"
                    placeholder=""
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.tag_line_ar && formik.errors.tag_line_ar ? (
                    <small className="form-text text-danger">
                      {formik.errors.tag_line_ar}
                    </small>
                  ) : null}
                </Form.Group>
              </div>

              <div className="form_row">
                <Form.Group className="form-group " controlId="">
                  <Form.Label>Store Address (English)</Form.Label>
                  <Form.Control
                    name="store_address_en"
                    type="text"
                    placeholder=""
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.store_address_en &&
                  formik.errors.store_address_en ? (
                    <small className="form-text text-danger">
                      {formik.errors.store_address_en}
                    </small>
                  ) : null}
                </Form.Group>

                <Form.Group className="form-group " controlId="">
                  <Form.Label>Store Address (Arabic)</Form.Label>
                  <Form.Control
                    name="store_address_ar"
                    type="text"
                    placeholder=""
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.store_address_ar &&
                  formik.errors.store_address_ar ? (
                    <small className="form-text text-danger">
                      {formik.errors.store_address_ar}
                    </small>
                  ) : null}
                </Form.Group>
              </div>
              <div className="form_row">
                <Form.Group className="form-group" controlId="">
                  <Form.Label>Store Branch Code</Form.Label>
                  <Form.Control
                    name="branch_code"
                    type="text"
                    placeholder=""
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.branch_code && formik.errors.branch_code ? (
                    <small className="form-text text-danger">
                      {formik.errors.branch_code}
                    </small>
                  ) : null}
                </Form.Group>
              </div>
              <Button type="submit" className="btn green_btn">
                Save
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Storeprofile;
