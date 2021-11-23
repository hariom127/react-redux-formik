import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getStoreSetting,
  updateStoreOwnerProfile,
} from "../../redux/action/StoreSettingAction";
import { Button } from "react-bootstrap";
import Layout from "../../components/Layout";
import { Formik, Form, Field } from "formik";
import FormikControl from "../../components/Formik/FormikControl";
import * as Yup from "yup";
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";

const EditOwnerProfile = () => {
  const override = css`
    display: flex !important;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-color: red;
  `;
  const [profileImg, setProfileImg] = useState();
  const [profileImgPreview, setProfileImgPreview] = useState();

  // on change profile pic
  function onChnageImage(e) {
    if (!e.target.files || e.target.files.length === 0) {
      setProfileImg(undefined);
      return;
    }
    setProfileImg(e.target.files[0]);

    return;
  }

  //mobile image priview
  useEffect(() => {
    if (!profileImg) {
      setProfileImgPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(profileImg);
    setProfileImgPreview(objectUrl);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [profileImg]);

  /***
   * get profile data
   */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStoreSetting());
  }, []);

  const settingData = useSelector((state) => state.StoreSettingReducer);

  const {
    firstName,
    lastName,
    email,
    country_code,
    phone,
    dob,
    user_image_thumb_url,
  } = settingData.setting_data ? settingData.setting_data : {};

  const { loading } = settingData ? settingData : {};

  /***
   * Setup form validation and submit handel
   */
  const SettingSchema = Yup.object().shape({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string()
      .email("Email must be a valid email")
      .required("Required"),
    phone: Yup.string()
      .required()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(8, "Must be exactly 8 digits or more")
      .max(12, "Must be exactly 12 digits or less"),
    dob: Yup.date().required("Required"),
  });
  //form initial values
  const initialValues = {
    name: `${firstName} ${lastName}`,
    email,
    phone,
    dob,
  };
  const onSubmit = (values, onSubmitProps) => {
    let data = new FormData();
    if (profileImg) {
      data.append("user_image", profileImg);
    }
    data.append("name", values["name"]);
    data.append("email", values["email"]);
    data.append("phone", values["phone"]);
    data.append("dob", values["dob"]);

    setTimeout(function () {
      dispatch(updateStoreOwnerProfile(data));
      // for (var key of data.entries()) {
      //   console.log(key[0] + ", " + key[1]);
      // }
    }, 200);
  };

  return (
    <Layout sidebar header>
      <div className="dashboard_conatnt">
        <h2 className="dashboard_title">Edit owner Profile</h2>
        <div className="editprofile_contant">
          <div className="editprofile_form">
            <Formik
              initialValues={initialValues}
              validationSchema={SettingSchema}
              onSubmit={onSubmit}
              enableReinitialize
            >
              {(formik) => (
                <Form>
                  <div className="theme_form editownrprofile">
                    <div className="form_row">
                      <div className="form-group" controlId="">
                        <FormikControl
                          control="input"
                          type="text"
                          label="Name"
                          name="name"
                          placeholder=""
                          className="form-control"
                        />
                      </div>
                      <div className="form-group" controlId="">
                        <FormikControl
                          control="input"
                          type="text"
                          label="Email Address"
                          name="email"
                          placeholder=""
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="form_row">
                      <div className="form-group" controlId="">
                        <FormikControl
                          control="input"
                          type="text"
                          label="Phone Number"
                          name="phone"
                          placeholder=""
                          className="form-control"
                        />
                      </div>
                      <div className="form-group" controlId="">
                        <FormikControl
                          control="input"
                          type="date"
                          label="Date of Birth"
                          name="dob"
                          placeholder=""
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="form_row">
                      <div className="upload_file" controlId="">
                        <label className="form-label">Profile Image</label>
                        <span className="upload_outer">
                          <FormikControl
                            control="input"
                            type="file"
                            placeholder=""
                            label=""
                            name="background_image_website"
                            className="form-control-file form-control"
                            onChange={onChnageImage}
                          />
                          {/* show image */}
                          {(profileImg || user_image_thumb_url) && (
                            <img
                              src={
                                profileImgPreview
                                  ? profileImgPreview
                                  : user_image_thumb_url
                              }
                              className="uploded-pic"
                            />
                          )}
                        </span>
                      </div>
                    </div>

                    <Button type="submit" className="btn green_btn">
                      {loading ? (
                        <ScaleLoader
                          color={"#fff"}
                          loading={loading}
                          css={override}
                          size={150}
                        />
                      ) : (
                        "Update"
                      )}
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default EditOwnerProfile;
