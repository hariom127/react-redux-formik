import { React, useState } from "react";
import Layout from "../../components/Layout";
import { Tab, Tabs, Form, Button, Modal } from "react-bootstrap";
import StoreSettingForm from "./StoreSettingForm";
import StoreDeliveryForm from "./StoreDeliveryForm";
import StoreDineForm from "./StoreDineForm";
import StoreBankForm from "./StoreBankForm";

const Storesetting = () => {
  return (
    <Layout sidebar header>
      <div className="dashboard_conatnt">
        <h2 className="dashboard_title">Store Settings</h2>
        <div className="storeprifile_contant">
          <div className="profile_detail storesetting">
            <figure className="user_pic_profile">
              <img src="./assets/images/profile.png" />
            </figure>
            <strong class="profile_Name">Treat Restaurant</strong>

            <a href="#" className="btn editprofile">
              <i class="fas fa-pen"></i>Edit
            </a>
            <a href="#" className="btn cuisine">
              {" "}
              Cuisine
            </a>
          </div>

          <div className="mysales_outer store_setting_tabs">
            <Tabs
              defaultActiveKey="storesetting"
              id="uncontrolled-tab-example"
              className="store_setting_tabs_contant"
            >
              <Tab eventKey="storesetting" title="Store Settings">
                <h2 className="dashboard_title">Store Settings</h2>
                {/* store setting form render */}
                <StoreSettingForm />
              </Tab>

              <Tab
                eventKey="storedelivery-settings"
                title="Store Delivery Settings"
              >
                <h2 className="dashboard_title">Store Delivery Timings</h2>
                {/* Delivery form */}
                <StoreDeliveryForm />
                {/* Delivery form end */}
              </Tab>

              <Tab eventKey="dine-in" title="Dine in">
                <h2 className="dashboard_title">Dine in Availability</h2>
                {/* Store dine form */}
                <StoreDineForm />
                {/* Store dine form end */}
              </Tab>

              <Tab eventKey="bank-details" title="Bank Details">
                <h2 className="dashboard_title">Bank Details</h2>
                <StoreBankForm />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Storesetting;
