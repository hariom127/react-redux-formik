import React from "react";
import { Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import FigureCaption from "react-bootstrap/esm/FigureCaption";
import Layout from "../../../components/Layout";
const ManagerList = () => {
  return (
    <Layout sidebar header>
      <div className="dashboard_conatnt customizatin_page">
        <div className="manager_head d-flex">
          <h2 className="dashboard_title">User</h2>
          <NavLink
            exact
            to={`add-branch-manager`}
            name="add-branch-manager"
            key={`add-branch-manager`}
            className="btn btn-primary"
          >
            Add Manager
          </NavLink>
        </div>

        <div className="customization_table user_detail">
          <Table responsive bordered hover>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Group</th>
                <th>Business Owner ID</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td>Shawaya House Manager</td>
                <td>Shawaya@Mailnator.com</td>
                <td>Manager</td>
                <td>1</td>
                <td>
                  <div className="table_action">
                    <a href="#">
                      <img src="./assets/images/edit.png" />
                    </a>
                    <a href="#">
                      <img src="./assets/images/delete.png" />
                    </a>
                  </div>
                </td>
              </tr>

              <tr>
                <td>02</td>
                <td>Jasys</td>
                <td>Shawaya@Mailnator.com</td>
                <td>Manager</td>
                <td>10</td>
                <td>
                  <div className="table_action">
                    <a href="#">
                      <img src="./assets/images/edit.png" />
                    </a>
                    <a href="#">
                      <img src="./assets/images/delete.png" />
                    </a>
                  </div>
                </td>
              </tr>

              <tr>
                <td>03</td>
                <td>Louis</td>
                <td>Shawaya@Mailnator.com</td>
                <td>Manager</td>
                <td>12</td>
                <td>
                  <div className="table_action">
                    <a href="#">
                      <img src="./assets/images/edit.png" />
                    </a>
                    <a href="#">
                      <img src="./assets/images/delete.png" />
                    </a>
                  </div>
                </td>
              </tr>

              <tr>
                <td>04</td>
                <td>john Doe</td>
                <td>Shawaya@Mailnator.com</td>
                <td>Manager</td>
                <td>8</td>
                <td>
                  <div className="table_action">
                    <a href="#">
                      <img src="./assets/images/edit.png" />
                    </a>
                    <a href="#">
                      <img src="./assets/images/delete.png" />
                    </a>
                  </div>
                </td>
              </tr>

              <tr>
                <td>05</td>
                <td>Steve Smith</td>
                <td>Shawaya@Mailnator.com</td>
                <td>Manager</td>
                <td>9</td>
                <td>
                  <div className="table_action">
                    <a href="#">
                      <img src="./assets/images/edit.png" />
                    </a>
                    <a href="#">
                      <img src="./assets/images/delete.png" />
                    </a>
                  </div>
                </td>
              </tr>

              <tr>
                <td>06</td>
                <td>Mitchell Thomas</td>
                <td>Shawaya@Mailnator.com</td>
                <td>Manager</td>
                <td>16</td>
                <td>
                  <div className="table_action">
                    <a href="#">
                      <img src="./assets/images/edit.png" />
                    </a>
                    <a href="#">
                      <img src="./assets/images/delete.png" />
                    </a>
                  </div>
                </td>
              </tr>

              <tr>
                <td>07</td>
                <td>Shawaya House Manager</td>
                <td>Shawaya@Mailnator.com</td>
                <td>Manager</td>
                <td>1</td>
                <td>
                  <div className="table_action">
                    <a href="#">
                      <img src="./assets/images/edit.png" />
                    </a>
                    <a href="#">
                      <img src="./assets/images/delete.png" />
                    </a>
                  </div>
                </td>
              </tr>

              <tr>
                <td>08</td>
                <td>Jasys</td>
                <td>Shawaya@Mailnator.com</td>
                <td>Manager</td>
                <td>10</td>
                <td>
                  <div className="table_action">
                    <a href="#">
                      <img src="./assets/images/edit.png" />
                    </a>
                    <a href="#">
                      <img src="./assets/images/delete.png" />
                    </a>
                  </div>
                </td>
              </tr>

              <tr>
                <td>09</td>
                <td>Louis</td>
                <td>Shawaya@Mailnator.com</td>
                <td>Manager</td>
                <td>12</td>
                <td>
                  <div className="table_action">
                    <a href="#">
                      <img src="./assets/images/edit.png" />
                    </a>
                    <a href="#">
                      <img src="./assets/images/delete.png" />
                    </a>
                  </div>
                </td>
              </tr>

              <tr>
                <td>10</td>
                <td>john Doe</td>
                <td>Shawaya@Mailnator.com</td>
                <td>Manager</td>
                <td>8</td>
                <td>
                  <div className="table_action">
                    <a href="#">
                      <img src="./assets/images/edit.png" />
                    </a>
                    <a href="#">
                      <img src="./assets/images/delete.png" />
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </Layout>
  );
};
export default ManagerList;
