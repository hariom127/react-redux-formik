import React from "react";
import { Button } from "react-bootstrap";
import { Formik, Form } from "formik";
import FormikControl from "../../components/Formik/FormikControl";
import ApiRoutes from "../../helper/ApiRoutes"
import * as Yup from "yup";
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { toast } from "react-toastify";
import Http from "../../helper/Http";
import { useDispatch, useSelector } from "react-redux";
import { addGroups, getGroups } from "../../redux/action/GroupAction";
import { updateGroups } from "../../redux/action/GroupAction";
export default function AddGroupForm(props) {
  const dispatch = useDispatch();
   const SettingSchema = Yup.object().shape({
    group_en: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
      group_ar: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
 
  });
  
  const addgroup = useSelector((state) => state.GroupReducer);
  let groupData = addgroup.group_data ? addgroup.group_data : {};
 
  //form initial values
  const initialValues = {
    group_en: "",
    group_ar: "",
  };
  const onSubmit = async (values) => {
    let formData = new FormData();
   let name ={
     en:values.group_en,
     ar:values.group_ar
    }
    formData.append("name", JSON.stringify(name));
    dispatch(addGroups(formData))
    
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
                  label="Enter Group Name (In English)"
                  name="group_en"
                  placeholder=""
                  className="form-control"
                />
              </div>
            </div>
            <div className="form_row">
              <div className="form-group fullwidth" controlId="">
                <FormikControl
                  control="input"
                  type="text"
                  label="Enter Group Name (In Arabic)"
                  name="group_ar"
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
