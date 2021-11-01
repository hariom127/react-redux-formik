import React from "react";
import { Button, Form } from "react-bootstrap";
import Layout from "../../components/Layout";
const Pastorder = () => {
  return (
    <Layout sidebar header>
      <div className="dashboard_conatnt">
        <h2 className="dashboard_title">Past Orders</h2>
        <div className="past_order_contant">
          <form>
            <div className="form_past_order">
              <Form.Control type="text" placeholder="Order ID" />
              <Form.Control type="date" placeholder="From Date" />
              <Form.Control type="date" placeholder="To Date" />
              <Button className="btn search_btn">Search</Button>
            </div>
          </form>

          <div className="pastorder_list">
            <div className="order_list_head">
              <div className="order_left_info">
                <span className="ordernumber">Order Number:#65645641</span>
                <span className="normalorder">Normal Order</span>
                <span className="datetime">
                  <i className="far fa-clock"></i>10:20 am, 10 August 2021
                </span>
              </div>
              <div className="order_list_value">
                <span className="order_valuesft">BHD20.00</span>
                <span className="order_delevery">Order Delivered</span>
              </div>
            </div>

            <div className="order_list_outer">
              <strong className="strong_cont">3 Items</strong>
              <div className="list_inner">
                <figure>
                  <img src="./assets/images/chart.jpg" />
                </figure>
                <div className="past-order_detail">
                  <h5>
                    <a href="#">Mexican Green Wave</a>
                  </h5>
                  <p>
                    A pizza loaded with crunchy onions, crisp capsicum,
                    <br /> juicy tomatoes and jalapeno
                  </p>
                </div>
                <strong className="price_value">BD 2.500</strong>
              </div>

              <div className="list_inner">
                <figure>
                  <img src="./assets/images/chart2.jpg" />
                </figure>
                <div className="past-order_detail">
                  <h5>
                    <a href="#">Veggie Paradise</a>
                  </h5>
                  <p>
                    A pizza loaded with crunchy onions, crisp capsicum,
                    <br /> juicy tomatoes and jalapeno with a liberal sprinkling
                    <br /> of exotic Mexican herbs
                  </p>
                </div>
                <strong className="price_value">BD 2.500</strong>
              </div>

              <div className="list_inner">
                <figure>
                  <img src="./assets/images/chart.jpg" />
                </figure>
                <div className="past-order_detail">
                  <h5>
                    <a href="#">Mexican Green Wave</a>
                  </h5>
                  <p>
                    A pizza loaded with crunchy onions, crisp capsicum,
                    <br /> juicy tomatoes and jalapeno with a liberal sprinkling
                    <br /> of exotic Mexican herbs
                  </p>
                </div>
                <strong className="price_value">BD 2.500</strong>
              </div>

              <div className="discount_row">
                <span className="discount_tag">Discount</span>
                <span className="discount_value">BHD05.00</span>
              </div>

              <div className="spacial_info">
                <h4>Special Instructions</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.{" "}
                </p>
              </div>

              <div className="spacial_info">
                <h4>Delivery Address</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="pastorder_list">
            <div className="order_list_head">
              <div className="order_left_info">
                <span className="ordernumber">Order Number:#65645641</span>
                <span className="normalorder">Normal Order</span>
                <span className="datetime">
                  <i className="far fa-clock"></i>10:20 am, 10 August 2021
                </span>
              </div>
              <div className="order_list_value">
                <span className="order_valuesft">BHD20.00</span>
                <span className="order_delevery">Order Delivered</span>
              </div>
            </div>

            <div className="order_list_outer">
              <strong className="strong_cont">3 Items</strong>
              <div className="list_inner">
                <figure>
                  <img src="./assets/images/chart.jpg" />
                </figure>
                <div className="past-order_detail">
                  <h5>
                    <a href="#">Mexican Green Wave</a>
                  </h5>
                  <p>
                    A pizza loaded with crunchy onions, crisp capsicum,
                    <br /> juicy tomatoes and jalapeno
                  </p>
                </div>
                <strong className="price_value">BD 2.500</strong>
              </div>

              <div className="list_inner">
                <figure>
                  <img src="./assets/images/chart2.jpg" />
                </figure>
                <div className="past-order_detail">
                  <h5>
                    <a href="#">Veggie Paradise</a>
                  </h5>
                  <p>
                    A pizza loaded with crunchy onions, crisp capsicum,
                    <br /> juicy tomatoes and jalapeno with a liberal sprinkling
                    <br /> of exotic Mexican herbs
                  </p>
                </div>
                <strong className="price_value">BD 2.500</strong>
              </div>

              <div className="list_inner">
                <figure>
                  <img src="./assets/images/chart.jpg" />
                </figure>
                <div className="past-order_detail">
                  <h5>
                    <a href="#">Mexican Green Wave</a>
                  </h5>
                  <p>
                    A pizza loaded with crunchy onions, crisp capsicum,
                    <br /> juicy tomatoes and jalapeno with a liberal sprinkling
                    <br /> of exotic Mexican herbs
                  </p>
                </div>
                <strong className="price_value">BD 2.500</strong>
              </div>

              <div className="discount_row">
                <span className="discount_tag">Discount</span>
                <span className="discount_value">BHD05.00</span>
              </div>

              <div className="spacial_info">
                <h4>Special Instructions</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.{" "}
                </p>
              </div>

              <div className="spacial_info">
                <h4>Delivery Address</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Pastorder;
