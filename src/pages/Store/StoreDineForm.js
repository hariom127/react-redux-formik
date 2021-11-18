import React from "react";
import { Button } from "react-bootstrap";
import { Formik, Form } from "formik";
import FormikControl from "../../components/Formik/FormikControl";
import * as Yup from "yup";
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";

export default function StoreDineForm() {
  /***
   * Setup form validation and submit handel
   */
  const SettingSchema = Yup.object().shape({
    open_at: Yup.string().required("Required"),
    close_at: Yup.string().required("Required"),
  });
  //form initial values
  const initialValues = {};
  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SettingSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <div className="select_time_form">
            <div className="choose_timeing_part">
              <div className="timeing-label-outer">
                <h6>Sunday</h6>
                <div className="select_date_time">
                  <div className="partofday">
                    <div className="form-group" controlId="">
                      <FormikControl
                        control="select"
                        label="Open at"
                        name="open_at[]"
                        class="form-select"
                        options={[{ key: "6:00", value: "6:00 AM" }]}
                      />
                    </div>
                    <div className="form-group" controlId="">
                      <FormikControl
                        control="select"
                        label="Close at"
                        name="close_at[]"
                        class="form-select"
                        options={[{ key: "7:00", value: "7:00 AM" }]}
                      />
                    </div>
                    <button className="timing_toggle"></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="choose_timeing_part">
              <div className="timeing-label-outer">
                <h6>Monday</h6>
                <div className="select_date_time">
                  <div className="partofday">
                    <div className="form-group" controlId="">
                      <FormikControl
                        control="select"
                        label="Open at"
                        name="open_at[]"
                        class="form-select"
                        options={[{ key: "6:00", value: "6:00 AM" }]}
                      />
                    </div>
                    <div className="form-group" controlId="">
                      <FormikControl
                        control="select"
                        label="Close at"
                        name="close_at[]"
                        class="form-select"
                        options={[{ key: "7:00", value: "7:00 AM" }]}
                      />
                    </div>
                    <button className="timing_toggle"></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="choose_timeing_part">
              <div className="timeing-label-outer">
                <h6>Tuesday</h6>
                <div className="select_date_time">
                  <div className="partofday">
                    <div className="form-group" controlId="">
                      <FormikControl
                        control="select"
                        label="Open at"
                        name="open_at[]"
                        class="form-select"
                        options={[{ key: "6:00", value: "7:00 AM" }]}
                      />
                    </div>
                    <div className="form-group" controlId="">
                      <FormikControl
                        control="select"
                        label="Close at"
                        name="close_at[]"
                        class="form-select"
                        options={[{ key: "7:00", value: "7:00 AM" }]}
                      />
                    </div>
                    <button className="timing_toggle"></button>
                  </div>
                </div>
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
