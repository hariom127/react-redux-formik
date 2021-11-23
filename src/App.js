import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/App.css";
import "./assets/css/Dashboard.css";
import "./assets/css/media.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/css/developer.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import vendorRoute from "./routes/vendorRoute";
import authRoute from "./routes/authRoute";
import config from "./config";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App(props) {
  const dispatch = useDispatch();
  const { authenticate } = props;
  console.log(authenticate);

  // register app routing
  const authRoutes = authRoute.map((route, index) => {
    return route.component ? (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        name={route.name}
        render={(props) =>
          authenticate ? (
            <Redirect to={config.basename} />
          ) : (
            <route.component {...props} title={route.title} />
          )
        }
      />
    ) : null;
  });
  const vendorRoutes = vendorRoute.map((route, index) => {
    return route.component ? (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        name={route.name}
        render={(props) =>
          authenticate ? (
            <route.component {...props} title={route.title} />
          ) : (
            <Redirect to={config.LOGIN_PATH} />
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

      <Switch>
        {vendorRoutes}
        {authRoutes}
      </Switch>
    </>
  );
}

function mapStateToProps(state) {
  const { authenticate } = state.authState;
  return {
    authenticate: authenticate,
  };
}

export default connect(mapStateToProps)(App);
