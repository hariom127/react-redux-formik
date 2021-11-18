import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Formik, Form } from "formik";
import FormikControl from "../../components/Formik/FormikControl";
import * as Yup from "yup";
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useDispatch, useSelector } from "react-redux";
import { getStoreSetting } from "../../redux/action/StoreSettingAction";
import { updateBankDetail } from "../../redux/action/StoreBankAction";

export default function StoreBankForm() {
  const override = css`
    display: flex !important;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-color: red;
  `;
  /***
   * get setting data
   */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStoreSetting());
  }, []);

  const bankData = useSelector((state) => state.StoreSettingReducer);
  const { bank_holder_name, bank_name, bank_account_number, iban_number } =
    bankData.setting_data ? bankData.setting_data : {};

  const { loading } = bankData ? bankData : {};

  /***
   * Setup form validation and submit handel
   */
  const SettingSchema = Yup.object().shape({
    bank_holder_name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    bank_name: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    bank_account_number: Yup.number()
      .positive()
      .integer()
      // .max(20, "Must be 20 characters or less")
      .required("Required"),
    iban_number: Yup.string()
      .max(30, "Must be 30 characters or less")
      .required("Required"),
  });
  //form initial values
  const bankInitialValues = {
    bank_holder_name,
    bank_name,
    bank_account_number,
    iban_number,
  };

  const onSubmit = (values, onSubmitProps) => {
    // console.log(values);
    dispatch(updateBankDetail(values));
  };

  return (
    <Formik
      initialValues={bankInitialValues}
      validationSchema={SettingSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(formik) => (
        <Form>
          <div className="theme_form  editownrprofile">
            <div className="form_row">
              <div className="form-group" controlId="">
                <FormikControl
                  control="input"
                  type="text"
                  label="Bank Holder Name"
                  name="bank_holder_name"
                  placeholder=""
                  className="form-control"
                />
              </div>
              <div className="form-group" controlId="">
                <FormikControl
                  control="input"
                  type="text"
                  label="Bank Name"
                  name="bank_name"
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
                  label="Bank Account Number"
                  name="bank_account_number"
                  placeholder=""
                  className="form-control"
                />
              </div>
              <div className="form-group" controlId="">
                <FormikControl
                  control="input"
                  type="text"
                  label="IBAN Number"
                  name="iban_number"
                  placeholder=""
                  className="form-control"
                />
              </div>
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
