import React from "react";
import IconComponent from "./IconComponent";
import ArrowComponent from "./ArrowComponent";

const navigation = [
  {
    heading: "Dashboard",
    name: "Dashboard",
    to: "/",
    icon: (
      <IconComponent img_icon="./assets/images/icons/home.svg"></IconComponent>
    ),
    arrow: "",
  },
  {
    heading: "Store Profile",
    name: "store-profile",
    to: "/store-profile",
    icon: (
      <IconComponent img_icon="./assets/images/icons/store.svg"></IconComponent>
    ),
  },
  {
    heading: "Notification",
    name: "notification",
    to: "/notification",
    icon: (
      <IconComponent img_icon="./assets/images/icons/notification.svg"></IconComponent>
    ),
  },
  {
    heading: "Users",
    name: "users",
    to: "/users",
    icon: (
      <IconComponent img_icon="./assets/images/icons/user.svg"></IconComponent>
    ),
    arrow: <ArrowComponent icon_class="fas fa-chevron-right" />,
    _children: [
      {
        title: "Branch Manager",
        name: "branch-manager",
        to: "/users/branch-manager",
      },
    ],
  },
];

export default navigation;
