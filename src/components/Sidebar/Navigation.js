import React from "react";
import IconComponent from "./IconComponent";
import ArrowComponent from "./ArrowComponent";
const iconUrl = "../vendor/assets/images/icons";
const navigation = [
  {
    heading: "Dashboard",
    name: "Dashboard",
    key: "Dashboard-key",
    to: "/vendor",
    icon: <IconComponent img_icon={`${iconUrl}/home.svg`}></IconComponent>,
    arrow: "",
  },
  {
    heading: "Store Profile",
    name: "store-profile",
    key: "store-profile-key",
    to: "/vendor/store-profile",
    icon: <IconComponent img_icon={`${iconUrl}/store.svg`}></IconComponent>,
  },
  {
    heading: "Store Setting",
    name: "store-setting",
    key: "store-setting",
    to: "/vendor/store-setting",
    icon: <IconComponent img_icon={`${iconUrl}/setting.svg`}></IconComponent>,
  },

  {
    heading: "Group",
    name: "groups",
    key: "groups",
    to: "/vendor/groups",
    icon: <IconComponent img_icon={`${iconUrl}/setting.svg`}></IconComponent>,
  },

  {
    heading: "Users",
    name: "users",
    key: "users-key",
    to: "/vendor/users",
    icon: <IconComponent img_icon={`${iconUrl}/user.svg`}></IconComponent>,
    arrow: <ArrowComponent icon_className="fas fa-chevron-right" />,
    _children: [
      {
        title: "Branch Manager",
        name: "branch-manager",
        to: "/vendor/branch-manager",
        key: "branch-manager-key",
      },
    ],
  },
  // {
  //   heading: "Catering",
  //   name: "catering",
  //   key: "catering-key",
  //   to: "/vendor/catering",
  //   icon: (
  //     <IconComponent img_icon={`${iconUrl}/catering.svg`}></IconComponent>
  //   ),
  // },
  // {
  //   heading: "Dine in",
  //   name: "dine-in",
  //   key: "dine-in-key",
  //   to: "/vendor/dine-in",
  //   icon: (
  //     <IconComponent img_icon={`${iconUrl}/notification.svg`}></IconComponent>
  //   ),
  // },
  // {
  //   heading: "Notification",
  //   name: "notification",
  //   key: "notification-key",
  //   to: "/vendor/notification",
  //   icon: (
  //     <IconComponent img_icon={`${iconUrl}/notification.svg`}></IconComponent>
  //   ),
  // },
  // {
  //   heading: "Order Dashboard",
  //   name: "order-dashboard",
  //   key: "order-dashboard-key",
  //   to: "/vendor/order-dashboard",
  //   icon: (
  //     <IconComponent img_icon={`${iconUrl}/order.svg`}></IconComponent>
  //   ),
  // },
  // {
  //   heading: "All Orders",
  //   name: "all-order",
  //   key: "all-order-key",
  //   to: "/vendor/all-order",
  //   icon: (
  //     <IconComponent img_icon={`${iconUrl}/cart.svg`}></IconComponent>
  //   ),
  // },
  // {
  //   heading: "Past Orders",
  //   name: "past-order",
  //   key: "past-order-key",
  //   to: "/vendor/past-order",
  //   icon: (
  //     <IconComponent img_icon={`${iconUrl}/order.svg`}></IconComponent>
  //   ),
  // },
  {
    heading: "Discount",
    name: "discount",
    key: "discount-key",
    to: "/vendor/discount",
    icon: <IconComponent img_icon={`${iconUrl}/discount.svg`}></IconComponent>,
  },
  // {
  //   heading: "Category",
  //   name: "categories",
  //   key: "category-key",
  //   to: "/vendor/categories",
  //   icon: (
  //     <IconComponent img_icon={`${iconUrl}/categoery.svg`}></IconComponent>
  //   ),
  // },
  {
    heading: "Item",
    name: "item",
    key: "item-key",
    to: "/vendor/items",
    icon: <IconComponent img_icon={`${iconUrl}/item.svg`}></IconComponent>,
  },
  // {
  //   heading: "My Sales",
  //   name: "my-sales",
  //   key: "my-sales-key",
  //   to: "/vendor/my-sales",
  //   icon: (
  //     <IconComponent img_icon={`${iconUrl}/sales.svg`}></IconComponent>
  //   ),
  // },
];

export default navigation;
