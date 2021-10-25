import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import navigation from "./Navigation";
import { Nav, Dropdown } from "react-bootstrap";

function ItemComonent() {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;
  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  console.log(splitLocation[1]);
  return (
    <Fragment>
      <ul className="vertical-nav-menu">
        {navigation &&
          navigation.map((Item) => (
            <Fragment key={Item.name}>
              {Item.arrow ? (
                <>
                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="sidebar_menu_dropdown"
                    >
                      {Item.icon}
                      {Item.heading}
                      <i class="fas fa-chevron-right"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {Item._children ? (
                        <>
                          {Item._children &&
                            Item._children.map((Chield) => (
                              <Link
                                to={Chield.to}
                                name={Chield.name}
                                className={
                                  "/" + splitLocation[1] === Item.to
                                    ? "active"
                                    : ""
                                }
                              >
                                {Chield.title}
                              </Link>
                            ))}
                        </>
                      ) : (
                        ""
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              ) : (
                <Link
                  to={Item.to}
                  className={"/" + splitLocation[1] === Item.to ? "active" : ""}
                >
                  {Item.icon} {Item.heading}
                  {Item.arrow}
                </Link>
              )}
            </Fragment>
          ))}
      </ul>
    </Fragment>
  );
}

export default ItemComonent;
