import React, { Fragment } from "react";
import { Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

function Input(props) {
  const {
    name,
    placeholder,
    type,
    onChange,
    onBlur,
    form_ik,
    error,
    class_name,
  } = props;

  return (
    <Fragment>
      <Form.Group className="form-group" controlId="">
        <Form.Control
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
        />
        {/* {errors.name && <div id="feedback">{errors.name}</div>} */}
      </Form.Group>
    </Fragment>
  );
}

export default Input;
