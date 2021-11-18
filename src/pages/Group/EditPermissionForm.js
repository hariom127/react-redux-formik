import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Formik, Form } from "formik";
import FormikControl from "../../components/Formik/FormikControl";
import ApiRoutes from "../../helper/ApiRoutes";
import * as Yup from "yup";
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { toast } from "react-toastify";
import Http from "../../helper/Http";
import { useDispatch, useSelector } from "react-redux";
import { updatePermissions } from "../../redux/action/PermissionAction";
const SettingSchema = Yup.object().shape({
 
  name: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  
});

export default function EditPermissionForm (props) {
  const dispatch = useDispatch();
  const { permissionData } = props;
  const [permissionName, setPermissionName] = useState(permissionData.name);
  const [Item_ID, setItemID] = useState(permissionData._id);
  const [isLoading, setIsLoading] = useState(false);

  let initialValues = {
    name:permissionName
   };
   

  const onSubmit = async (values) => {
    let formData = new FormData();
     formData.append("name", values?.name ? values.name :initialValues.name);
    dispatch(updatePermissions(Item_ID,formData))
       
  };

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
