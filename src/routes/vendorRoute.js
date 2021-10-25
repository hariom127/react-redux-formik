import Dashboard from "../pages/Dashboard";
import Notification from "../pages/Notification";
import Storeprofile from "../pages/Store/StoreProfile";
import Mysales from "../pages/Mysales";
import Pastorder from "../pages/Pastorder";
import Items from "../pages/Items";
import Catering from "../pages/Catering";

const route = [
  {
    path: "/",
    exact: true,
    name: "Dashboard",
    component: Dashboard,
    title: "Dashboard",
  },
  {
    path: "/store-profile",
    exact: true,
    name: "store-profile",
    component: Storeprofile,
    title: "Store Profile",
  },
  {
    path: "/users/branch-manager",
    exact: true,
    name: "branch-manager",
    component: Storeprofile,
    title: "Users",
  },
  {
    path: "/catering",
    exact: true,
    name: "catering",
    component: Catering,
    title: "Catering",
  },
  {
    path: "/notification",
    exact: true,
    name: "notification",
    component: Notification,
    title: "Notification",
  },
  {
    path: "/order-dashboard",
    exact: true,
    name: "order-dashboard",
    component: Notification,
    title: "Order Dashboard",
  },
  {
    path: "/all-order",
    exact: true,
    name: "all-orders",
    component: Notification,
    title: "All Order",
  },
  {
    path: "/past-order",
    exact: true,
    name: "all-orders",
    component: Pastorder,
    title: "All Order",
  },
  {
    path: "/discount",
    exact: true,
    name: "discount",
    component: Notification,
    title: "Discount",
  },
  {
    path: "/category",
    exact: true,
    name: "category",
    component: Notification,
    title: "Category",
  },
  {
    path: "/item",
    exact: true,
    name: "item",
    component: Items,
    title: "Item",
  },
  {
    path: "/my-sales",
    exact: true,
    name: "my-sales",
    component: Mysales,
    title: "My Sales",
  },
  {
    path: "/logout",
    exact: true,
    name: "logout",
    component: Notification,
    title: "Logout",
  },
];

export default route;
