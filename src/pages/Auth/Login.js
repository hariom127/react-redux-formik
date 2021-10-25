import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Spinner } from "react-bootstrap";
import Layout from "../../components/Layout";
import { login } from "../../redux/action/authAction";
import { Redirect } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";

const Login = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authState);
  const override = css`
    display: flex !important;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-color: red;
  `;

  /***
   * Setup form validation and submit handel
   */

  const LoginSchema = Yup.object().shape({
    username: Yup.string()
      .email("Username must be a valid username")
      .required("Username is required"),
    password: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values, action) => {
      console.log(values);
      dispatch(login(values));
    },
  });

  // if user loged in redirect to on dashboard
  if (auth.authenticate && auth.token) {
    return <Redirect to={`/`} />;
  }

  return (
    <Layout>
      <div className="dashboard_conatnt">
        <h2 className="dashboard_title">Login</h2>
        <div className="storeprifile_contant">
          <div className="storeprofile_form">
            <form className="theme_form" onSubmit={formik.handleSubmit}>
              <div className="form_row">
                <Form.Group className="form-group" controlId="">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="email"
                    name="username"
                    placeholder="Enter Username"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.username && formik.errors.username ? (
                    <div className="text-danger">{formik.errors.username}</div>
                  ) : null}
                </Form.Group>
              </div>

              <div className="form_row">
                <Form.Group className="form-group" controlId="">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-danger">{formik.errors.password}</div>
                  ) : null}
                </Form.Group>
              </div>
              <Button type="submit" className="btn btn-primary">
                {auth.loading ? (
                  <ScaleLoader
                    color="#ffffff"
                    css={override}
                    loading={true}
                    size={100}
                    height={22}
                  />
                ) : (
                  "Login"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
