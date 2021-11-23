import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import { signup } from "../../redux/action/authAction";
import { fetchVariants } from "../../redux/action/variantsAction";
import { Redirect } from "react-router-dom";
import { Formik, Form } from "formik";
import FormikControl from "../../components/Formik/FormikControl";
import * as Yup from "yup";
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";
import ownerProfile from "../../data/owner_profile";
import { Link } from "react-router-dom";

const Registration = (props) => {
  /***
   * get store types
   */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVariants());
  }, []);

  const auth = useSelector((state) => state.authState);
  const variants = useSelector((state) => state.variants);

  //--loader css--
  const override = css`
    display: flex !important;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-color: red;
  `;

  const renderStoreTypes = (variants) => {
    let storeTypes = [{ key: "Choose Store Type", value: "" }];
    for (let type of variants) {
      storeTypes.push({ key: type.name.en, value: type._id });
    }
    return storeTypes;
  };

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
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    phone: Yup.number().required("Required").positive().integer(),
    owner_profile: Yup.string().required("Required"),
    branches: Yup.number().required("Required").positive().integer(),
    store_name: Yup.string().required("Required"),
    store_type: Yup.string().required("Required"),
  });
  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    country_code: "+973",
    email: "",
    branches: "",
    owner_profile: "",
    store_name: "",
    store_type: "",
  };

  const onSubmit = (values, onSubmitProps) => {
    dispatch(signup(values));
    onSubmitProps.resetForm();
  };

  // if user loged in redirect to on dashboard
  if (auth.authenticate && auth.token) {
    return <Redirect to={`/`} />;
  }
  return (
    <Layout>
      <section className="signing-page signupsml">
        <div className="login_box register_box layout-wrapper">
          <span className="brand">
            <img src="../vendor/assets/images/logo2.svg" />
          </span>
          <strong>Reach new customers, get more sales</strong>
          <small>Sign up to create account with us</small>
          <div className="theme_form signing-form register_form">
            <Formik
              initialValues={initialValues}
              validationSchema={RegisterSchema}
              onSubmit={onSubmit}
            >
              {(formik) => (
                <Form>
                  <div className="form_row">
                    <div className="form-group">
                      <FormikControl
                        control="input"
                        type="text"
                        label="First Name"
                        name="firstName"
                        placeholder="First name"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <FormikControl
                        control="input"
                        type="text"
                        label="Last Name"
                        name="lastName"
                        placeholder="Last name"
                        className="form-control"
                      />
                    </div>

                    <div className="form-group">
                      <FormikControl
                        control="input"
                        type="text"
                        label="Mobile"
                        name="phone"
                        placeholder="Mobile"
                        className="form-control"
                      />

                      <FormikControl
                        control="input"
                        type="hidden"
                        label=""
                        name="country_code"
                        value="+973"
                        placeholder="Mobile"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <FormikControl
                        control="input"
                        type="text"
                        label="Email"
                        name="email"
                        placeholder="Email"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <FormikControl
                        control="select"
                        label="Owner Profile"
                        name="owner_profile"
                        options={ownerProfile}
                      />
                    </div>

                    <div className="form-group">
                      <FormikControl
                        control="input"
                        type="text"
                        label="Store Name"
                        name="store_name"
                        placeholder="Store Name"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <FormikControl
                        control="input"
                        type="number"
                        label="No. of branches"
                        name="branches"
                        placeholder="No. of branches"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <FormikControl
                        control="select"
                        label="Store Type"
                        name="store_type"
                        options={
                          (variants.variants && variants.variants.length) > 0
                            ? renderStoreTypes(variants.variants)
                            : [{ key: "Choose Store Type", value: "" }]
                        }
                      />
                    </div>
                    <button type="submit" className="btn green_btn">
                      {auth.loading ? (
                        <ScaleLoader
                          color={"#fff"}
                          loading={auth.loading}
                          css={override}
                          size={150}
                        />
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <small>
            Already have an account? <Link to="/vendor/login"> Login now </Link>
          </small>
        </div>
      </section>
    </Layout>
  );
};

export default Registration;
