import React, { useRef } from "react";
// import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import Layout from "../components/Layout";
import { login } from "../redux/action/authAction";

const Login = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authState);
  const username = useRef();
  const password = useRef();
  const handelSubmit = (e) => {
    e.preventDefault();
    const userCredentials = {
      username: username.current.value,
      password: password.current.value,
    };
    console.log(userCredentials);
    dispatch(login(userCredentials));
  };

  return (
    <Layout>
      <div className="dashboard_conatnt">
        <h2 className="dashboard_title">Login</h2>
        <div className="storeprifile_contant">
          <div className="storeprofile_form">
            <form className="theme_form" onSubmit={handelSubmit}>
              <div className="form_row">
                <Form.Group className="form-group" controlId="">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="email"
                    name="username"
                    ref={username}
                    placeholder="Enter Username"
                  />
                </Form.Group>
              </div>

              <div className="form_row">
                <Form.Group className="form-group" controlId="">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    ref={password}
                    placeholder="Enter Password"
                  />
                </Form.Group>
              </div>
              <Button type="submit" className="btn btn-primary">
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
