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
import { addGroups, getGroups ,updateGroups ,getGroup} from "../../redux/action/GroupAction";
const SettingSchema = Yup.object().shape({
 
  group_en: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  group_ar: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
});

let initialValues = {
  group_en: "" ,
  group_ar: " ",
};
export default function EditGroupForm (props) {
  const dispatch = useDispatch();
  const { groupdata } = props;
  console.log(groupdata._id)
  const [groupname, setGroupName] = useState({});
  const [Item_ID, setItemID] = useState(groupdata._id);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    dispatch(getGroup(groupdata._id))
    }, []);

    const groupData = useSelector((state) => state.GroupReducer);
   let  group_data= groupData && groupData.group_data_one ? groupData.group_data_one : [];
   initialValues = {
      group_en: group_data?.name?.en ,
      group_ar: group_data?.name?.ar,
    };
    
    useEffect(() => {
      dispatch(getGroup(groupdata._id))
      }, [groupdata._id]);

  
  const onSubmit = async (values) => {
    let formData = new FormData();
    let name = {
      en: values.group_en,
      ar: values.group_ar,
    };
    formData.append("name", JSON.stringify(name));
    dispatch(updateGroups(groupdata._id,formData))
   
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
