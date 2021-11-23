import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tabs, Tab } from "react-bootstrap";
import Layout from "../../components/Layout";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { addItem } from "../../redux/action/ItemAction";
import { fetchItemsAllCategories } from "../../redux/action/ItemCategoryAction";

const SignupSchema = Yup.object().shape({
  category_id: Yup.string()
    .min(2, "Must be 2 characters or more")
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  item_name_en: Yup.string()
    .min(2, "Must be 2 characters or more")
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  item_name_ar: Yup.string()
    .min(2, "Must be 2 characters or more")
    .max(50, "Must be 50 characters or less")
    .required("Required"),

  description_en: Yup.string()
    .min(2, "Must be 2 characters or more")
    .max(300, "Must be 300 characters or less")
    .required("Required"),
  description_ar: Yup.string()
    .min(2, "Must be 2 characters or more")
    .max(300, "Must be 300 characters or less")
    .required("Required"),

  brand: Yup.string()
    .min(2, "Must be 2 characters or more")
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  price: Yup.number().positive().required("Required"),
});

const Additem = () => {
  const categories = useSelector((state) => state.ItemCategoryReducer);
  const dispatch = useDispatch();
  const [itemImages, setItemImages] = useState([]);
  const [imgPreview, setImgPreview] = useState();
  const [renderImg, setRenderImg] = useState();
  const initialValues = {
    category_id: "",
    item_name_en: "",
    item_name_ar: "",
    description_en: "",
    description_ar: "",
    brand: "",
    variant: [],
    price: "",
    add_on: [],
  };

  const onSubmit = (values, onSubmitProps) => {
    values.add_on = values.add_on[0] ? 1 : 0;
    values.variant = values.variant[0] ? 1 : 0;
    values.name = JSON.stringify({
      en: values.item_name_en,
      ar: values.item_name_ar,
    });
    values.description = JSON.stringify({
      en: values.description_en,
      ar: values.description_ar,
    });

    values.sub_category_id = "615312385ef2803a6c165420";
    values.business_category_id = "6152c3140e28132f30f4e5c5";

    delete values.item_name_en;
    delete values.item_name_ar;
    delete values.description_en;
    delete values.description_ar;

    let data = new FormData();
    for (var key in values) {
      data.append(key, values[key]);
    }
    if (itemImages) {
      var numOfImg = document.getElementById("productImgs").files.length;
      for (var i = 0; i < numOfImg; i++) {
        data.append("images", document.getElementById("productImgs").files[i]);
      }
    }
    setTimeout(function () {
      dispatch(addItem(data));
      // for (var key of data.entries()) {
      //   console.log(key[0] + ", " + key[1]);
      // }
      onSubmitProps.resetForm();
      setImgPreview("");
    }, 100);
  };

  // get item categories
  useEffect(() => {
    dispatch(fetchItemsAllCategories());
  }, []);

  // get categories form state
  const categoriesData =
    categories.payload &&
    categories.payload.data &&
    categories.payload.data.docs
      ? categories.payload.data.docs
      : [];

  // privew images
  useEffect(() => {
    if (!itemImages.length) {
      setItemImages([]);
      return;
    }
    const objectUrl = URL.createObjectURL(itemImages[0][1]);
    let imgUrls = [];
    for (let index = 0; index < itemImages[0].length - 2; index++) {
      const objectUrl = URL.createObjectURL(itemImages[0][index]);
      imgUrls.push(objectUrl);
    }
    setImgPreview(imgUrls);
    //free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [renderImg]);
  // privew images set state
  function onChnageImage(e) {
    setRenderImg((Math.random() + 1).toString(36).substring(7));
    if (!e.target.files || e.target.files.length === 0) {
      setItemImages([]);
      return;
    } else {
      let imgdata = e.target.files;
      let imgArray = [];
      for (const property in imgdata) {
        imgArray.push(imgdata[property]);
      }
      setItemImages([imgArray]);
    }
    return;
  }

  return (
    <Layout sidebar header>
      <div className="dashboard_conatnt">
        <div className="mysales_outer">
          <Tabs
            defaultActiveKey="itemdetail"
            id="uncontrolled-tab-example"
            className="store_setting_tabs_contant"
          >
            <Tab eventKey="itemdetail" title="Item-Detail">
              <div className="item_page">
                <Formik
                  initialValues={initialValues}
                  validationSchema={SignupSchema}
                  onSubmit={onSubmit}
                >
                  {({ errors, touched }) => (
                    <Form className="theme_form">
                      {/* ===========images========== */}
                      <div className="upload_droaper">
                        <Field
                          name="images"
                          type="file"
                          multiple={true}
                          id="productImgs"
                          onChange={onChnageImage}
                        />
                        {/* show image */}
                        {imgPreview &&
                          imgPreview.map((img) => (
                            <img src={img} className="uploded-pic" />
                          ))}

                        <img
                          className="draoper"
                          src="./assets/images/camera.png"
                        />
                        <span>Upload Photo</span>
                        <span className="upload_outer"></span>
                      </div>

                      {/* ===========images========== */}
                      <div className="form_row">
                        <div className="form-group fullwidth">
                          <label htmlFor="category_id" className="form-label">
                            Item Category
                          </label>
                          <Field
                            name="category_id"
                            className="form-control"
                            as="select"
                          >
                            <option value="">Item Category</option>
                            {categoriesData.length &&
                              categoriesData.map((category) => (
                                <option value={category._id}>
                                  {`${category.name.en} (${category.name.ar})`}
                                </option>
                              ))}
                          </Field>
                          {errors.category_id && touched.category_id ? (
                            <span className="form-text text-danger">
                              {errors.category_id}
                            </span>
                          ) : null}
                        </div>

                        <div className="form-group">
                          <label htmlFor="item_name_en" className="form-label">
                            Item Name (English)
                          </label>
                          <Field name="item_name_en" className="form-control" />
                          {errors.item_name_en && touched.item_name_en ? (
                            <span className="form-text text-danger">
                              {errors.item_name_en}
                            </span>
                          ) : null}
                        </div>

                        <div className="form-group">
                          <label htmlFor="item_name_ar" className="form-label">
                            Item Name (Arabic)
                          </label>
                          <Field name="item_name_ar" className="form-control" />
                          {errors.item_name_ar && touched.item_name_ar ? (
                            <span className="form-text text-danger">
                              {errors.item_name_ar}
                            </span>
                          ) : null}
                        </div>

                        <div className="form-group">
                          <label
                            htmlFor="description_en"
                            className="form-label"
                          >
                            Description (English)
                          </label>
                          <Field
                            name="description_en"
                            className="form-control"
                          />
                          {errors.description_en && touched.description_en ? (
                            <span className="form-text text-danger">
                              {errors.description_en}
                            </span>
                          ) : null}
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="description_ar"
                            className="form-label"
                          >
                            Description (Arabic)
                          </label>
                          <Field
                            name="description_ar"
                            className="form-control"
                          />
                          {errors.description_ar && touched.description_ar ? (
                            <span className="form-text text-danger">
                              {errors.description_ar}
                            </span>
                          ) : null}
                        </div>

                        <div className="form-group">
                          <label htmlFor="brand" className="form-label">
                            Add brand
                          </label>
                          <Field name="brand" className="form-control" />
                          {errors.brand && touched.brand ? (
                            <span className="form-text text-danger">
                              {errors.brand}
                            </span>
                          ) : null}
                        </div>

                        <div className="form-group">
                          <label htmlFor="price" className="form-label">
                            Add price
                          </label>
                          <Field name="price" className="form-control" />
                          {errors.price && touched.price ? (
                            <span className="form-text text-danger">
                              {errors.price}
                            </span>
                          ) : null}
                        </div>

                        {/* check */}

                        <div
                          className="form-group radio-row fullwidth"
                          controlId=""
                        >
                          <div className="choose_option">
                            <label className="p-0 form-label">Variant</label>
                            <div className="choose_option single_select">
                              <span className="switch">
                                <span className="line_condition"></span>
                                <Field
                                  type="checkbox"
                                  name="variant"
                                  value="1"
                                />
                                <span class="overswitch"></span>
                              </span>
                            </div>

                            <label className="p-0 form-label">Add On</label>
                            <div className="choose_option single_select">
                              <span className="switch">
                                <span className="line_condition"></span>
                                <Field
                                  type="checkbox"
                                  name="add_on"
                                  value="1"
                                />
                                <span class="overswitch"></span>
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* check */}
                      </div>
                      <button
                        type="submit"
                        class="btn green_btn btn btn-primary"
                      >
                        Submit
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </Tab>

            <Tab eventKey="itemChoose" title="Add-ons">
              XYDDjbkb
            </Tab>

            <Tab eventKey="variant" title="Variant ">
              variant
            </Tab>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};
export default Additem;
