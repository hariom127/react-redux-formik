import React, { useRef } from "react";
// import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import { signup } from "../../redux/action/authAction";
import { Redirect } from "react-router-dom";
import { useFormik } from "formik";
import { Formik, Form } from "formik";
import FormikControl from "../../components/Formik/FormikControl";
import * as Yup from "yup";

const Registration = (props) => {
  /***
   * Get state
   */
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authState);
  /***
   * Setup form validation and submit handel
   */

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(10, "Must be 15 characters or less")
      .required("Required"),
    address: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    phone: Yup.number().required("Required").positive().integer(),
    country_code: Yup.string().required("Required"),
    branches: Yup.number().required("Required").positive().integer(),
    latitude: Yup.number().required("Required"),
    longitude: Yup.number().required("Required"),
  });
  const initialValues = {
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phone: "",
    country_code: "",
    branches: "",
    latitude: "",
    longitude: "",
  };
  const dropdownOptions = [
    { key: "Select an option", value: "" },
    { key: "Bahrain (+973)", value: "+973" },
  ];
  const onSubmit = (values, onSubmitProps) => {
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
    dispatch(signup(values));
    onSubmitProps.resetForm();
  };

  // if user loged in redirect to on dashboard
  if (auth.authenticate && auth.token) {
    return <Redirect to={`/`} />;
  }
  return (
    <Layout>
      <div className="dashboard_conatnt">
        <h2 className="dashboard_title">Registration</h2>
        <div className="storeprifile_contant">
          <div className="storeprofile_form">
            <div className="theme_form">
              <Formik
                initialValues={initialValues}
                validationSchema={RegisterSchema}
                onSubmit={onSubmit}
              >
                {(formik) => (
                  <Form>
                    <div className="row">
                      <div className="col-md-4">
                        <FormikControl
                          control="input"
                          type="text"
                          label=""
                          name="firstName"
                          placeholder="First name"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4">
                        <FormikControl
                          control="input"
                          type="text"
                          label=""
                          name="lastName"
                          placeholder="Last name"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-md-8">
                        <FormikControl
                          control="input"
                          type="text"
                          label=""
                          name="address"
                          placeholder="Address"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-md-4">
                        <FormikControl
                          control="input"
                          type="text"
                          label=""
                          name="latitude"
                          placeholder="Latitude"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4">
                        <FormikControl
                          control="input"
                          type="text"
                          label=""
                          name="longitude"
                          placeholder="Longitude"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-md-8">
                        <FormikControl
                          control="input"
                          type="text"
                          label=""
                          name="email"
                          placeholder="Email"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-md-4">
                        <FormikControl
                          control="select"
                          label=""
                          name="country_code"
                          options={dropdownOptions}
                        />
                      </div>
                      <div className="col-md-4">
                        <FormikControl
                          control="input"
                          type="text"
                          label=""
                          name="phone"
                          placeholder="Phone"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-md-8">
                        <FormikControl
                          control="input"
                          type="number"
                          label=""
                          name="branches"
                          placeholder="No. of branches"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Registration;
