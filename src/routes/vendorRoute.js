import Dashboard from "../pages/Dashboard";
import Notification from "../pages/Notification";
import Storeprofile from "../pages/Store/StoreProfile";
import EditOwnerProfile from "../pages/Store/EditOwnerProfile";
import ManagerList from "../pages/User/BranchManager/ManagerList";
import AddBrnchManager from "../pages/User/BranchManager/AddBrnchManager";
import StoreSetting from "../pages/Store/StoreSetting";
import Mysales from "../pages/Mysales/Mysales";
import Pastorder from "../pages/Order/Pastorder";
import Items from "../pages/Item/Items";
import AddItem from "../pages/Item/AddItem";
import Catering from "../pages/Catering/index";
import Dinein from "../pages/Dinein/index";
import Discount from "../pages/Discount/index";
import Group from "../pages/Group/Group";

const route = [
  {
    path: "/vendor",
    exact: true,
    name: "dashboard",
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
    path: "/vendor/owner-profile",
    exact: true,
    name: "owner-profile",
    component: EditOwnerProfile,
    title: "Owner Profile",
  },
  {
    path: "/vendor/store-setting",
    exact: true,
    name: "store-setting",
    component: StoreSetting,
    title: "Store Profile",
  },
  {
    path: "/vendor/groups",
    exact: true,
    name: "groups",
    component: Group,
    title: "Groups",
  },
  {
    path: "/vendor/branch-manager",
    exact: true,
    name: "branch-manager",
    component: ManagerList,
    title: "Branch Manager",
  },
  {
    path: "/vendor/add-branch-manager",
    exact: true,
    name: "add-branch-manager",
    component: AddBrnchManager,
    title: "Add Manager",
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
