import React from "react";
import { Button, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/action/authAction";

const Header = () => {
  const dispatch = useDispatch();
  const handelLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  function mobileopennav() {
    document.getElementById("OnscrollBody").classList.toggle("show_sidebar");
  }
  return (
    <>
      <Button className="btn btn_toggle" onClick={mobileopennav}>
        <img className="navtggl_pic" src="./assets/images/toggle.png" />
        <img className="crosenavtggl_pic" src="./assets/images/crose.png" />
      </Button>
      <header className="dashboard_header">
        <div className="header_top">
          <a href="#" className="logo_brand">
            <img src="../assets/images/logo.svg" />
          </a>
          <div className="user_info_detail">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <div className="user_figure_header">
                  <figure>
                    <img src="../assets/images/user.png" />
                  </figure>{" "}
                  <span className="user_name">Treat</span>
                  <i class="fas fa-chevron-down"></i>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item onClick={handelLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
