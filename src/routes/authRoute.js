import Login from "../pages/Auth/Login";
import Registration from "../pages/Auth/Registration";

const authRoute = [
  {
    path: "/vendor/login",
    exact: true,
    name: "login",
    component: Login,
    title: "Login",
  },
  {
    path: "/vendor/registration",
    exact: true,
    name: "store-profile",
    component: Registration,
    title: "Store Profile",
  },
];

export default authRoute;
