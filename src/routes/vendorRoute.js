import Dashboard from "../pages/Dashboard";
import Notification from "../pages/Notification";
import Storeprofile from "../pages/Store/StoreProfile";
import StoreSetting from "../pages/Store/StoreSetting";
import Mysales from "../pages/Mysales/Mysales";
import Pastorder from "../pages/Order/Pastorder";
import Items from "../pages/Item/Items";
import AddItem from "../pages/Item/AddItem";
import Catering from "../pages/Catering/index";
import Dinein from "../pages/Dinein/index";
import Discount from "../pages/Discount/index";

const route = [
  {
    path: "/vendor",
    exact: true,
    name: "Dashboard",
    component: Dashboard,
    title: "Dashboard",
  },
  {
    path: "/vendor/store-profile",
    exact: true,
    name: "store-profile",
    component: Storeprofile,
    title: "Store Profile",
  },
  {
    path: "/vendor/store-setting",
    exact: true,
    name: "store-setting",
    component: StoreSetting,
    title: "Store Profile",
  },
  {
    path: "/vendor/users/branch-manager",
    exact: true,
    name: "branch-manager",
    component: Storeprofile,
    title: "Users",
  },
  {
    path: "/vendor/catering",
    exact: true,
    name: "catering",
    component: Catering,
    title: "Catering",
  },
  {
    path: "/vendor/dine-in",
    exact: true,
    name: "dine-in",
    component: Dinein,
    title: "Dine-in",
  },
  {
    path: "/vendor/notification",
    exact: true,
    name: "notification",
    component: Notification,
    title: "Notification",
  },
  {
    path: "/vendor/order-dashboard",
    exact: true,
    name: "order-dashboard",
    component: Notification,
    title: "Order Dashboard",
  },
  {
    path: "/vendor/all-order",
    exact: true,
    name: "all-orders",
    component: Notification,
    title: "All Order",
  },
  {
    path: "/vendor/past-order",
    exact: true,
    name: "all-orders",
    component: Pastorder,
    title: "All Order",
  },
  {
    path: "/vendor/discount",
    exact: true,
    name: "discount",
    component: Discount,
    title: "Discount",
  },
  {
    path: "/vendor/categories",
    exact: true,
    name: "categories",
    component: "",
    title: "Category",
  },
  {
    path: "/vendor/items",
    exact: true,
    name: "items",
    component: Items,
    title: "Item",
  },
  {
    path: "/vendor/add-item",
    exact: true,
    name: "add-item",
    component: AddItem,
    title: "Item",
  },
  {
    path: "/vendor/my-sales",
    exact: true,
    name: "my-sales",
    component: Mysales,
    title: "My Sales",
  },
  {
    path: "/vendor/logout",
    exact: true,
    name: "logout",
    component: Notification,
    title: "Logout",
  },
];

export default route;
