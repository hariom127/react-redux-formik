import React from "react";
import Input from "./Input";
import Select from "./Select";
import Textarea from "./Textarea";
import RadioButtons from "./RadioButtons";
import CheckboxGroup from "./CheckboxGroup";
import CheckboxSwitech from "./CheckboxSwitech";
// import DatePicker from './DatePicker'
// import ChakraInput from './ChakraInput'

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckboxGroup {...rest} />;
    case "checkbox-switech":
      return <CheckboxSwitech {...rest} />;
    // case 'date':
    //   return <DatePicker {...rest} />
    // case 'chakraInput':
    //   return <ChakraInput {...rest} />
    default:
      return null;
  }
}

export default FormikControl;
