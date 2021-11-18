import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function CheckboxSwitech(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="toggle_list">
      <Field name={name}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <div className="form-group radio-row" controlId="">
                  <label className="p-0 form-label">{label}</label>
                  <div className="choose_option single_select">
                    <span className="switch">
                      <span className="line_condition"></span>
                      <input
                        type="checkbox"
                        id={option.value}
                        {...field}
                        {...rest}
                        value={option.value}
                        // checked={field.value.includes(option.value)}
                      />
                      {/* <label htmlFor={option.value}>{option.key}</label> */}
                      <span class="overswitch"></span>
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default CheckboxSwitech;
