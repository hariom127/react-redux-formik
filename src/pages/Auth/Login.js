import { useDispatch, useSelector } from "react-redux";
import { Button, Spinner } from "react-bootstrap";
import Layout from "../../components/Layout";
import { login } from "../../redux/action/authAction";
import { Redirect } from "react-router-dom";
import { Formik, Form } from "formik";
import FormikControl from "../../components/Formik/FormikControl";
import * as Yup from "yup";
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { Link } from "react-router-dom";

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
      .email("Email must be a valid email")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  //form initial values
  const initialValues = {
    username: "",
    password: "",
  };

  const onSubmit = (values, onSubmitProps) => {
    dispatch(login(values));
  };

  // if user loged in redirect to on dashboard
  // if (auth.authenticate && auth.token) {
  //   return <Redirect to={`/vendor/dashboard`} />;
  // }

  return (
    <Layout>
      <section className="signing-page">
        <div className="login_box">
          <a href="/" className="brand">
            <img src="../../vendor/assets/images/logo2.svg" />
          </a>
          <strong>Welcome back</strong>
          <small>Sign in to your account</small>
          <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <Form>
                <div className="theme_form  signing-form login_form">
                  <div className="form-group">
                    <FormikControl
                      control="input"
                      type="text"
                      label="Email Address"
                      name="username"
                      placeholder="Email Address"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <FormikControl
                      control="input"
                      type="password"
                      label="Password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>
                  <Button type="submit" className="btn green_btn">
                    {auth.loading && auth.authenticating ? (
                      <ScaleLoader
                        color={"#fff"}
                        loading={auth.loading}
                        css={override}
                        size={150}
                      />
                    ) : (
                      "Login"
                    )}
                  </Button>
                  <Link
                    exact
                    to="/registration"
                    name="registration"
                    className="forgotpass"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
