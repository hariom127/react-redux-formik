import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function RadioButtons(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="">
      <label>{label}</label>
      <Field name={name}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <div className="toggle_list">
                  <div className="form-group radio-row" controlId="">
                    <label className="p-0">Busy</label>
                    <div className="choose_option single_select">
                      <span className="switch">
                        <span className="line_condition"></span>
                        <input
                          type="radio"
                          id={option.value}
                          {...field}
                          {...rest}
                          value={option.value}
                          checked={field.value === option.value}
                          className="form-check-input"
                        />
                        <label
                          htmlFor={option.value}
                          className="form-check-lable"
                        >
                          {option.key}
                        </label>
                        <span class="overswitch"></span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* <div className="form-check">
                  <input
                    type="radio"
                    id={option.value}
                    {...field}
                    {...rest}
                    value={option.value}
                    checked={field.value === option.value}
                    className="form-check-input"
                  />
                  <label htmlFor={option.value} className="form-check-lable">
                    {option.key}
                  </label>
                </div> */}
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default RadioButtons;
