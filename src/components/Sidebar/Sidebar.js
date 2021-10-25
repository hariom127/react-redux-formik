import React from "react";
import { Nav } from "react-bootstrap";
import ItemComonent from "./ItemComponent";
const Sidebar = () => {
  return (
    <>
      <div className="dashboard_sidebar">
        <Nav defaultActiveKey="/home" className="flex-column dashboard_sidenav">
          {/* sidebar Item start */}
          <ItemComonent />
          {/* sidebar Item end */}

          {/* <Dropdown>
            <Dropdown.Toggle
              id="dropdown-basic"
              className="sidebar_menu_dropdown"
            >
              <span className="nav_icon">
                <img src="./assets/images/icons/user.svg" />
              </span>
              Users<i class="fas fa-chevron-right"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Branch Manager</Dropdown.Item>
              <Dropdown.Item href="#">Add Branch Manager</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
        </Nav>
      </div>
    </>
  );
};
export default Sidebar;
