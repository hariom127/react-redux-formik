import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getStoreSetting,
  updateStoreSetting,
} from "../../redux/action/StoreSettingAction";

import { Button } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import FormikControl from "../../components/Formik/FormikControl";
import * as Yup from "yup";
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";

export default function StoreSettingForm() {
  const override = css`
    display: flex !important;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-color: red;
  `;

  const [mobileImg, setMobileImg] = useState();
  const [mobileImgPreview, setMobileImgPreview] = useState();
  const [webImg, setWebImg] = useState();
  const [webImgPreview, setWebImgPreview] = useState();
  const [logoImg, setLogoImg] = useState();
  const [logoImgPreview, setLogoImgPreview] = useState();

  /***
   * get setting data
   */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStoreSetting());
  }, []);

  const settingData = useSelector((state) => state.StoreSettingReducer);

  const {
    store_manager,
    store_name,
    store_number,
    store_description,
    tagline,
    preparation_time,
    delivery_time,
    house_no,
    block,
    latitude,
    longitude,
    restaurant_no,
    building_no,
    street,
    is_busy,
    is_available,
    type,
    web_bg_image_thumb_url,
    mobile_bg_image_thumb_url,
    mobile_logo_image_thumb_url,
  } = settingData.setting_data ? settingData.setting_data : {};
  // console.log(settingData.setting_data);

  useEffect(() => {
    const is_dine_available =
      type && type.length > 0 && type.includes("dine-in") ? 1 : 0;
    setIsDineAvailable(is_dine_available);
    setIsAvailable(is_available);
    setIsBusy(is_busy);
  }, [settingData]);

  const { loading } = settingData ? settingData : {};
  const [isAvailable, setIsAvailable] = useState(is_available);

  const [isDineAvailable, setIsDineAvailable] = useState(0);
  const [isBusy, setIsBusy] = useState(is_busy);

  const onClickToggle = (e) => {
    if (e.target.name == "is_busy") {
      isBusy ? setIsBusy(0) : setIsBusy(1);
    } else if (e.target.name == "is_available") {
      isAvailable ? setIsAvailable(0) : setIsAvailable(1);
    } else if (e.target.name == "is_dine_available") {
      isDineAvailable ? setIsDineAvailable(0) : setIsDineAvailable(1);
    }
  };

  /***
   * Setup form validation and submit handel
   */
  const SettingSchema = Yup.object().shape({
    store_manager: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    store_name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    store_number: Yup.string().required("Required"),
    store_description: Yup.string().required("Required"),
    tagline_en: Yup.string()
      .max(100, "Must be 100 characters or less")
      .required("Required"),
    tagline_ar: Yup.string()
      .max(100, "Must be 100 characters or less")
      .required("Required"),
    preparation_time: Yup.string().required("Required"),
    delivery_time: Yup.number().positive().integer().required("Required"),
    // dish_type: Yup.string().required("Required"),
    house_no_en: Yup.string().required("Required"),
    house_no_ar: Yup.string().required("Required"),
    street_name_en: Yup.string().required("Required"),
    street_name_ar: Yup.string().required("Required"),
    block_name_en: Yup.string().required("Required"),
    block_name_ar: Yup.string().required("Required"),
    latitude: Yup.number().required("Required"),
    longitude: Yup.number().required("Required"),
    restaurant_no: Yup.string().required("Required"),
    building_no: Yup.string().required("Required"),
    street_no: Yup.string().required("Required"),
    block_no: Yup.string().required("Required"),
    // store_type: Yup.string().required("Required"),

    is_dine_available: Yup.array(),
    is_available: Yup.array(),
    // background_image_mobile: Yup.mixed().test(
    //   "fileSize",
    //   "The file is too large",
    //   (value) => {
    //     if (!value.length) return true; // attachment is optional
    //     return value[0].size <= 2000;
    //   }
    // ),
  });
  //form initial values
  const initialValues = {
    store_manager,
    store_name,
    store_number,
    store_description,
    tagline_en: tagline && tagline.en ? tagline.en : "",
    tagline_ar: tagline && tagline.ar ? tagline.ar : "",
    preparation_time,
    delivery_time,
    house_no_en: house_no && house_no.en ? house_no.en : "",
    house_no_ar: house_no && house_no.ar ? house_no.ar : "",
    street_name_en: street && street.en ? street.en : "",
    street_name_ar: street && street.ar ? street.ar : "",
    block_name_en: block && block.en ? block.en : "",
    block_name_ar: block && block.ar ? block.ar : "",
    latitude,
    longitude,
    restaurant_no,
    building_no,
    street_no: "123",
    block_no: "123",
    store_type: "",
    is_busy: [isBusy],
    is_dine_available: [isDineAvailable],
    is_available: [isAvailable],
  };

  const onSubmit = async (values, onSubmitProps) => {
    values.is_busy = values.is_busy[0];
    values.type = values.is_dine_available[0]
      ? JSON.stringify(["dine-in"])
      : JSON.stringify([]);
    values.is_available = values.is_available[0];
    values.tagline = JSON.stringify({
      en: values.tagline_en,
      ar: values.tagline_ar,
    });
    values.house_no = JSON.stringify({
      en: values.house_no_en,
      ar: values.house_no_ar,
    });
    values.street = JSON.stringify({
      en: values.street_name_en,
      ar: values.street_name_ar,
    });
    values.street = JSON.stringify({
      en: values.street_name_en,
      ar: values.street_name_ar,
    });
    values.block = JSON.stringify({
      en: values.block_name_en,
      ar: values.block_name_ar,
    });
    values.block = JSON.stringify({
      en: values.block_name_en,
      ar: values.block_name_ar,
    });

    // remove additional data in values
    delete values.tagline_en;
    delete values.tagline_ar;
    delete values.house_no_en;
    delete values.house_no_ar;
    delete values.street_name_en;
    delete values.street_name_ar;
    delete values.block_name_en;
    delete values.block_name_ar;

    let data = new FormData();

    if (webImg) {
      data.append("web_bg_image", webImg);
    }
    if (mobileImg) {
      data.append("mobile_bg_image", mobileImg);
    }
    if (logoImg) {
      data.append("mobile_logo_image", logoImg);
    }
    for (var key in values) {
      data.append(key, values[key]);
    }

    setTimeout(function () {
      dispatch(updateStoreSetting(data));
      // for (var key of data.entries()) {
      //   console.log(key[0] + ", " + key[1]);
      // }
    }, 500);
  };

  //mobile image priview
  useEffect(() => {
    if (!mobileImg) {
      setMobileImgPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(mobileImg);
    setMobileImgPreview(objectUrl);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [mobileImg]);

  //web image priview
  useEffect(() => {
    if (!webImg) {
      setWebImgPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(webImg);
    setWebImgPreview(objectUrl);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [webImg]);

  //logo image priview
  useEffect(() => {
    if (!logoImg) {
      setLogoImgPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(logoImg);
    setLogoImgPreview(objectUrl);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [logoImg]);

  function onChnageImage(e) {
    if (!e.target.files || e.target.files.length === 0) {
      setMobileImg(undefined);
      return;
    }

    if (e.target.name == "background_image_mobile") {
      setMobileImg(e.target.files[0]);
    } else if (e.target.name == "background_image_website") {
      setWebImg(e.target.files[0]);
    } else if (e.target.name == "logo") {
      setLogoImg(e.target.files[0]);
    }
    return;
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SettingSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(formik) => (
        <Form>
          <div className="theme_form  editownrprofile">
            <div className="form_row">
              <div className="form-group fullwidth" controlId="">
                <FormikControl
                  control="input"
                  type="text"
                  label="Store Manager"
                  name="store_manager"
                  placeholder=""
                  className="form-control"
                />
              </div>
              <div className="form-group" controlId="">
                <FormikControl
                  control="input"
                  type="text"
                  label="Store name"
                  name="store_name"
                  placeholder=""
                  className="form-control"
                />
              </div>
              <div className="form-group" controlId="">
                <FormikControl
                  control="input"
                  type="text"
                  label="Store Number"
                  name="store_number"
                  placeholder=""
                  className="form-control"
                />
              </div>
              <div className="form-group fullwidth" controlId="">
                <FormikControl
                  control="textarea"
                  label="Description"
                  name="store_description"
                  placeholder=""
                  className="form-control"
                />
              </div>
              <div className="form-group upload_file" controlId="">
                <label className="form-label">
                  Background Image (Mobile) ( 500px X 600px )
                </label>
                <span className="upload_outer">
                  <FormikControl
                    control="input"
                    type="file"
                    placeholder=""
                    label=""
                    name="background_image_mobile"
                    className="form-control-file"
                    onChange={onChnageImage}
                  />
                  {/* show image */}
                  {(mobileImg || mobile_bg_image_thumb_url) && (
                    <img
                      src={
                        mobileImgPreview
                          ? mobileImgPreview
                          : mobile_bg_image_thumb_url
                      }
                      className="uploded-pic"
                    />
                  )}
                </span>
              </div>

              <div className="form-group upload_file" controlId="">
                <label className="form-label">
                  Background Image (Website) ( 500px X 600px )
                </label>
                <span className="upload_outer">
                  <FormikControl
                    control="input"
                    type="file"
                    placeholder=""
                    label=""
                    name="background_image_website"
                    className="form-control-file"
                    onChange={onChnageImage}
                  />
                  {/* show image */}
                  {(webImg || web_bg_image_thumb_url) && (
                    <img
                      src={
                        webImgPreview ? webImgPreview : web_bg_image_thumb_url
                      }
                      className="uploded-pic"
                    />
                  )}
                </span>
              </div>
              <div className="form-group upload_file fullwidth" controlId="">
                <label className="form-label">
                  Logo Image (Mobile) ( 500px X 600px )
                </label>
                <span className="upload_outer">
                  <FormikControl
                    control="input"
                    type="file"
                    placeholder=""
                    label=""
                    name="logo"
                    className="form-control-file"
                    onChange={onChnageImage}
                  />
                  {/* show image */}
                  {(logoImg || mobile_logo_image_thumb_url) && (
                    <img
                      src={
                        logoImgPreview
                          ? logoImgPreview
                          : mobile_logo_image_thumb_url
                      }
                      className="uploded-pic"
                    />
                  )}
                </span>
              </div>
              <div className="form-group" controlId="">
                <FormikControl
                  control="input"
                  type="text"
                  label="Tagline (English)"
                  name="tagline_en"
                  placeholder=""
                  className="form-control"
                />
              </div>
              <div className="form-group" controlId="">
                <FormikControl
                  control="input"
                  type="text"
                  label="Tagline (Arabic)"
                  name="tagline_ar"
                  placeholder=""
                  className="form-control"
                />
              </div>
              <div className="form-group" controlId="">
                <FormikControl
                  control="input"
                  type="text"
                  label="Preparation Time"
                  name="preparation_time"
                  placeholder=""
                  className="form-control"
                />
              </div>
              <div className="form-group" controlId="">
                <FormikControl
                  control="input"
                  type="text"
                  label="Delivery Time (In min)"
                  name="delivery_time"
                  placeholder=""
                  className="form-control"
                />
              </div>
              <div className="form-group" controlId="">
                <FormikControl
                  control="input"
                  type="text"
                  label="House No./Flat No. (English)"
                  name="house_no_en"
                  placeholder=""
                  className="form-control"
                />
              </div>
              <div className="form-group" controlId="">
                <FormikControl
                  control="input"
                  type="text"
                  label="House_No./Flat No. (Arabic)"
                  name="house_no_ar"
                  placeholder=""
                  className="form-control"
                />
              </div>
              <div className="form-group" controlId="">
                <FormikControl
                  control="input"
                  type="text"
                  label="Street Name (English)"
                  name="street_name_en"
                  placeholder=""
                  className="form-control"
                />
              </div>
              <div className="form-group" controlId="">
                <FormikControl
                  control="input"
                  type="text"
                  label="Street Name (Arabic)"
                  name="street_name_ar"
                  placeholder=""
                  className="form-control"
                />
              </div>
              <div className="form-group" controlId="">
                <FormikControl
                  control="input"
                  type="text"
                  label="Block Name (English)"
                  name="block_name_en"
                  placeholder=""
                  className="form-control"
                />
              </div>
              <div className="form-group" controlId="">
                <FormikControl
                  control="input"
                  type="text"
                  label="Block Name (Arabic)"
                  name="block_name_ar"
                  placeholder=""
                  className="form-control"
                />
              </div>
              <div className="form-group" controlId="">
                <FormikControl
                  control="input"
                  type="text"
                  label="Latitude"
                  name="latitude"
                  placeholder=""
                  className="form-control"
                />
              </div>
              <div className="form-group" controlId="">
                <FormikControl
                  control="input"
                  type="text"
                  label="Longitude"
                  name="longitude"
                  placeholder=""
                  className="form-control"
                />
              </div>
              <div className="form-group" controlId="">
                <FormikControl
                  control="input"
                  type="text"
                  label="Restaurant No"
                  name="restaurant_no"
                  placeholder=""
                  className="form-control"
                />
              </div>
              <div className="form-group" controlId="">
                <FormikControl
                  control="input"
                  type="text"
                  label="Building No"
                  name="building_no"
                  placeholder=""
                  className="form-control"
                />
              </div>
              <div className="form-group" controlId="">
                <FormikControl
                  control="input"
                  type="text"
                  label="Street no"
                  name="street_no"
                  placeholder=""
                  className="form-control"
                />
              </div>
              <div className="form-group" controlId="">
                <FormikControl
                  control="input"
                  type="text"
                  label="Block No"
                  name="block_no"
                  placeholder=""
                  className="form-control"
                />
              </div>
              <div className="form-group fullwidth">
                <FormikControl
                  control="select"
                  label="Store Type"
                  name="store_type"
                  options={[{ key: "Choose Store Type", value: "" }]}
                />
              </div>

              {/* check */}
              <div className="toggle_list">
                <div className="form-group radio-row" controlId="">
                  <label className="p-0 form-label">Busy</label>
                  <div className="choose_option single_select">
                    <span className="switch">
                      <span className="line_condition"></span>
                      <Field
                        type="checkbox"
                        name="is_busy"
                        value={isBusy}
                        className={isBusy ? "checkbox-b" : false}
                        onClick={onClickToggle}
                      />
                      <span class="overswitch"></span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="toggle_list">
                <div className="form-group radio-row" controlId="">
                  <label className="p-0 form-label">Dine availability</label>
                  <div className="choose_option single_select">
                    <span className="switch">
                      <span className="line_condition"></span>
                      <Field
                        type="checkbox"
                        name="is_dine_available"
                        value={isDineAvailable}
                        className={isDineAvailable ? "checkbox-b" : false}
                        onClick={onClickToggle}
                      />
                      <span class="overswitch"></span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="toggle_list">
                <div className="form-group radio-row" controlId="">
                  <label className="p-0 form-label">Store availability</label>
                  <div className="choose_option single_select">
                    <span className="switch">
                      <span className="line_condition"></span>
                      <Field
                        type="checkbox"
                        name="is_available"
                        value={isAvailable}
                        className={isAvailable ? "checkbox-b" : false}
                        onClick={onClickToggle}
                      />
                      <span class="overswitch"></span>
                    </span>
                  </div>
                </div>
              </div>

              {/* check */}
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
              "Save"
            )}
          </Button>
        </Form>
      )}
    </Formik>
  );
}
