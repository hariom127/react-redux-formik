import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar/Sidebar";

const Layout = (props) => {
  function bodyremove() {
    document.getElementById("OnscrollBody").classList.remove("show_sidebar1");
    document.getElementById("OnscrollBody").classList.remove("show_sidebar");
  }
  return (
    <>
      <div className="full_container">
        <div className="App">
          {props.header ? <Header /> : ""}
          {props.sidebar ? <Sidebar /> : ""}
          {props.children}
          <div className="sidebar_overlay" onClick={bodyremove}></div>
        </div>
      </div>
    </>
  );
};

export default Layout;
