import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/App.css";
import "./assets/css/Dashboard.css";
import "./assets/css/media.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/css/developer.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/Auth/Login";
import Registration from "./pages/Auth/Registration";

import vendorRoute from "./routes/vendorRoute";
import config from "./config";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App(props) {
  const auth = useSelector((state) => state.authState);
  const { authenticate } = auth;

  // register app routing
  const menu = vendorRoute.map((route, index) => {
    return route.component ? (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        name={route.name}
        render={(props) =>
          authenticate === false ? (
            <Redirect to={config.LOGIN_PATH} />
          ) : (
            <route.component {...props} title={route.title} />
          )
        }
      />
    ) : null;
  });

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
      <BrowserRouter>
        <Switch>
          {menu}
          <Route
            key="login"
            path="/login"
            exact={true}
            name="login"
            component={Login}
          />
          <Route
            key="registration"
            path="/registration"
            exact={true}
            name="registration"
            component={Registration}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
