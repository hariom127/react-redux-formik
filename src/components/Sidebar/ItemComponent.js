import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import navigation from "./Navigation";
import { Dropdown } from "react-bootstrap";

function ItemComponent() {
  return (
    <Fragment>
      <ul className="vertical-nav-menu">
        {navigation &&
          navigation.map((Item) => (
            <Fragment key={Item.name}>
              {Item.arrow ? (
                <Fragment key={Item.key}>
                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="sidebar_menu_dropdown"
                    >
                      {Item.icon}
                      {Item.heading}
                      <i className="fas fa-chevron-right"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {Item._children ? (
                        <Fragment>
                          {Item._children &&
                            Item._children.map((Chield) => (
                              <NavLink
                                exact
                                to={Chield.to}
                                name={Chield.name}
                                key={Chield.key}
                              >
                                {Chield.title}
                              </NavLink>
                            ))}
                        </Fragment>
                      ) : (
                        ""
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                </Fragment>
              ) : (
                <NavLink exact to={Item.to}>
                  {Item.icon} {Item.heading}
                  {Item.arrow}
                </NavLink>
              )}
            </Fragment>
          ))}
      </ul>
    </Fragment>
  );
}

export default ItemComponent;
