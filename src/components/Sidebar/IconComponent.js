import React from "react";

function IconComponent({ img_icon }) {
  return (
    <span className="nav_icon">
      <img src={img_icon} />
    </span>
  );
}

export default IconComponent;
