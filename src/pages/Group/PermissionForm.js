import React from "react";
import { Button } from "react-bootstrap";
import { Formik, Form } from "formik";
import FormikControl from "../../components/Formik/FormikControl";
import * as Yup from "yup";
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useDispatch, useSelector } from "react-redux";
import { addPermissions, getPermissions } from "../../redux/action/PermissionAction";
export default function PermissionForm() {
  /***
   * Setup form validation and submit handel
   */
   const dispatch = useDispatch();
  const SettingSchema = Yup.object().shape({
    name: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
  });
  //form initial values
  const initialValues = {
    name: "",
  };

  
  const onSubmit = (values) => {
    console.log("sdjfsdj")
    let formData = new FormData();
    formData.append("name", values.name);
    console.log(values.name)
    dispatch(addPermissions(formData))
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SettingSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <div className="theme_form  editownrprofile">
            <div className="form_row">
              <div className="form-group fullwidth" controlId="">
                <FormikControl
                  control="input"
                  type="text"
                  label="Enter Permission Name"
                  name="name"
                  placeholder=""
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <Button type="submit" className="btn green_btn">
            {/* <ScaleLoader
              color={"#fff"}
              loading={auth.loading}
              css={override}
              size={150}
            /> */}
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
}
