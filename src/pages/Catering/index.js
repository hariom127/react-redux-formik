import React from "react";

import Layout from "../../components/Layout";
const Catering = () => {
  return (
    <Layout sidebar header>
      <div className="dashboard_conatnt">
        <h2 className="dashboard_title">Catering</h2>

        <div className="pastorder_list items_page catering_Page_wrapper">
          <div className="order_list_outer">
            <div className="items_page_head">
              <strong className="strong_cont">Packages</strong>
              <div className="item_action">
                <a href="#" className="btn item_btn">
                  Add New Catering
                </a>
              </div>
            </div>

            <div className="list_inner">
              <figure>
                <img src="./assets/images/chart.jpg" />
              </figure>
              <div className="past-order_detail">
                <h5>
                  <a href="#">Package 1</a>
                </h5>
                <div className="statusflow">
                  <small className="veg">Beverages</small>
                  <span className="item_value price">BHD20.00</span>
                </div>
              </div>

              <div className="item_right">
                <div className="item_review_action">
                  <a href="#" className="edit_icon">
                    <i className="fas fa-pen"></i>
                  </a>
                  <a href="#" className="edit_icon">
                    <i className="fas fa-times"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="list_inner">
              <figure>
                <img src="./assets/images/chart.jpg" />
              </figure>
              <div className="past-order_detail">
                <h5>
                  <a href="#">Package 1</a>
                </h5>
                <div className="statusflow">
                  <small className="veg">Beverages</small>
                  <span className="item_value price">BHD20.00</span>
                </div>
              </div>

              <div className="item_right">
                <div className="item_review_action">
                  <a href="#" className="edit_icon">
                    <i className="fas fa-pen"></i>
                  </a>
                  <a href="#" className="edit_icon">
                    <i className="fas fa-times"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="list_inner">
              <figure>
                <img src="./assets/images/chart.jpg" />
              </figure>
              <div className="past-order_detail">
                <h5>
                  <a href="#">Package 1</a>
                </h5>
                <div className="statusflow">
                  <small className="veg">Beverages</small>
                  <span className="item_value price">BHD20.00</span>
                </div>
              </div>

              <div className="item_right">
                <div className="item_review_action">
                  <a href="#" className="edit_icon">
                    <i className="fas fa-pen"></i>
                  </a>
                  <a href="#" className="edit_icon">
                    <i className="fas fa-times"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Catering;
