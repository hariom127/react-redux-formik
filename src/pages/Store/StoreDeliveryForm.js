import React, { useRef, useState, Fragment } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
// import { Formik, Form } from "formik";
// import FormikControl from "../../components/Formik/FormikControl";
import * as Yup from "yup";
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";

export default function StoreDeliveryForm() {
  const [sundayField, setSundayField] = useState([
    {
      open_at: "open_at_1",
      close_at: "close_at_1",
    },
  ]);
  const [mondayField, setMondayField] = useState([
    {
      open_at: "open_at_2",
      close_at: "close_at_2",
    },
  ]);

  const [tuesdayField, setTuesdayField] = useState([
    {
      open_at: "",
      close_at: "",
    },
  ]);

  const [wednesdayField, setWednesdayField] = useState([
    {
      open_at: "",
      close_at: "",
    },
  ]);

  const [thursdayField, setThursdayField] = useState([
    {
      open_at: "",
      close_at: "",
    },
  ]);

  const [fridayField, setFridayField] = useState([
    {
      open_at: "",
      close_at: "",
    },
  ]);

  const [saturdayField, setSaturdayField] = useState([
    {
      open_at: "",
      close_at: "",
    },
  ]);

  // add field
  const onClickAdd = (e) => {
    if (e.target.id == "sunday_add_btn") {
      setSundayField((initialState) => [
        ...initialState,
        {
          open_at: "",
          close_at: "",
        },
      ]);
    }
    if (e.target.id == "monday_add_btn") {
      setMondayField((initialState) => [
        ...initialState,
        {
          open_at: "",
          close_at: "",
        },
      ]);
    }
    if (e.target.id == "tuesday_add_btn") {
      setTuesdayField((initialState) => [
        ...initialState,
        {
          open_at: "",
          close_at: "",
        },
      ]);
    }
    if (e.target.id == "wednesday_add_btn") {
      setWednesdayField((initialState) => [
        ...initialState,
        {
          open_at: "",
          close_at: "",
        },
      ]);
    }

    if (e.target.id == "thursday_add_btn") {
      setThursdayField((initialState) => [
        ...initialState,
        {
          open_at: "",
          close_at: "",
        },
      ]);
    }

    if (e.target.id == "friday_add_btn") {
      setFridayField((initialState) => [
        ...initialState,
        {
          open_at: "",
          close_at: "",
        },
      ]);
    }

    if (e.target.id == "saturday_add_btn") {
      setSaturdayField((initialState) => [
        ...initialState,
        {
          open_at: "",
          close_at: "",
        },
      ]);
    }
  };

  const onClickRemove = (e) => {
    let idData = e.target.id.split("_");
    let index = idData[2];
    let day = idData[0];

    // if (day == "sunday") {
    //   const formFieldArr = Object.assign([], sundayField);
    //   formFieldArr.splice(index, 1);

    //   setTimeout(() => {
    //     setSundayField(formFieldArr);
    //   }, 100);
    // }

    switch (day) {
      case "sunday":
        let sundayformFieldArr = Object.assign([], sundayField);
        sundayformFieldArr.splice(index, 1);
        setTimeout(() => {
          setSundayField(sundayformFieldArr);
        }, 100);
        break;

      case "monday":
        let mondayformFieldArr = Object.assign([], mondayField);
        mondayformFieldArr.splice(index, 1);
        setTimeout(() => {
          setMondayField(mondayformFieldArr);
        }, 100);
        break;
      case "tuesday":
        let tuesdayformFieldArr = Object.assign([], tuesdayField);
        tuesdayformFieldArr.splice(index, 1);
        setTimeout(() => {
          setTuesdayField(tuesdayformFieldArr);
        }, 100);
        break;

      case "wednesday":
        let wednesdayformFieldArr = Object.assign([], wednesdayField);
        wednesdayformFieldArr.splice(index, 1);
        setTimeout(() => {
          setWednesdayField(wednesdayformFieldArr);
        }, 100);
        break;

      case "thursday":
        let thursdayformFieldArr = Object.assign([], thursdayField);
        thursdayformFieldArr.splice(index, 1);
        setTimeout(() => {
          setThursdayField(thursdayformFieldArr);
        }, 100);
        break;

      case "friday":
        let fridayformFieldArr = Object.assign([], fridayField);
        fridayformFieldArr.splice(index, 1);
        setTimeout(() => {
          setFridayField(fridayformFieldArr);
        }, 100);
        break;

      case "saturday":
        let saturdayformFieldArr = Object.assign([], saturdayField);
        saturdayformFieldArr.splice(index, 1);
        setTimeout(() => {
          setSaturdayField(saturdayformFieldArr);
        }, 100);
        break;

      default:
        break;
    }
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    let sundayData = [];
    let mondayData = [];
    let tuesdayData = [];
    let wednesdayData = [];
    let thursdayData = [];
    let fridayData = [];
    let saturdayData = [];

    // ----------sunday start------------
    let sundayOpenTime = document.getElementsByName("sunday_open_at[]");
    let sundayCloseTime = document.getElementsByName("sunday_close_at[]");
    for (var i = 0; i < sundayOpenTime.length; i++) {
      if (!sundayOpenTime[i].value) {
        toast("Sunday open time is required !", {
          type: "error",
          autoClose: 5000,
        });
        break;
      }
      if (!sundayCloseTime[i].value) {
        toast("Sunday close time is required !", {
          type: "error",
          autoClose: 5000,
        });
        break;
      }
      console.log(sundayData);
      // time of second timespan
      let todayDate = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
      var a = new Date(`${todayDate} ${sundayOpenTime[i].value}`).getTime();
      var b = new Date(`${todayDate} ${sundayCloseTime[i].value}`).getTime();
      console.log(a, b, sundayData.length);
      // break;
      console.log("out if", sundayData);
      if (sundayData.length >= 1) {
        for (const element of sundayData) {
          console.log("in loop", element);
          var x = new Date(`${todayDate} ${element["open_at"]}`).getTime();
          var y = new Date(`${todayDate} ${element["close_at"]}`).getTime();
          if (
            Math.min(x, y) <= Math.max(a, b) &&
            Math.max(x, y) >= Math.min(a, b)
          ) {
            toast("Sunday Time range is overlap !", {
              type: "error",
              autoClose: 5000,
            });
            console.log("range");
            break;
          }
        }
      }
      sundayData.push({
        open_at: sundayOpenTime[i].value,
        close_at: sundayCloseTime[i].value,
      });
    }
    // ----------sunday end-------------

    // ----------monday start------------
    let mondayOpenTime = document.getElementsByName("monday_open_at[]");
    let mondayCloseTime = document.getElementsByName("monday_close_at[]");

    for (var i = 0; i < mondayOpenTime.length; i++) {
      if (!mondayOpenTime[i].value) {
        toast("monday open time is required !", {
          type: "error",
          autoClose: 5000,
        });
        break;
      }
      if (!mondayCloseTime[i].value) {
        toast("monday close time is required !", {
          type: "error",
          autoClose: 5000,
        });
        break;
      }
      // time of second timespan
      let todayDate = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
      var a = new Date(`${todayDate} ${mondayOpenTime[i].value}`).getTime();
      var b = new Date(`${todayDate} ${mondayCloseTime[i].value}`).getTime();
      console.log(a, b, mondayData.length);
      // break;
      if (mondayData.length >= 1) {
        for (const element of mondayData) {
          var x = new Date(`${todayDate} ${element["open_at"]}`).getTime();
          var y = new Date(`${todayDate} ${element["close_at"]}`).getTime();
          if (
            Math.min(x, y) <= Math.max(a, b) &&
            Math.max(x, y) >= Math.min(a, b)
          ) {
            toast("Monday time range is overlap !", {
              type: "error",
              autoClose: 5000,
            });
            break;
          }
        }
      }
      mondayData.push({
        open_at: mondayOpenTime[i].value,
        close_at: mondayCloseTime[i].value,
      });
    }
    // ----------monday end------------

    // ----------tuesday start------------
    let tuesdayOpenTime = document.getElementsByName("tuesday_open_at[]");
    let tuesdayCloseTime = document.getElementsByName("tuesday_close_at[]");

    for (var i = 0; i < tuesdayOpenTime.length; i++) {
      if (!tuesdayOpenTime[i].value) {
        toast("tuesday open time is required !", {
          type: "error",
          autoClose: 5000,
        });
        break;
      }
      if (!tuesdayCloseTime[i].value) {
        toast("tuesday close time is required !", {
          type: "error",
          autoClose: 5000,
        });
        break;
      }
      // time of second timespan
      let todayDate = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
      var a = new Date(`${todayDate} ${tuesdayOpenTime[i].value}`).getTime();
      var b = new Date(`${todayDate} ${tuesdayCloseTime[i].value}`).getTime();
      if (tuesdayData.length >= 1) {
        for (const element of tuesdayData) {
          var x = new Date(`${todayDate} ${element["open_at"]}`).getTime();
          var y = new Date(`${todayDate} ${element["close_at"]}`).getTime();
          if (
            Math.min(x, y) <= Math.max(a, b) &&
            Math.max(x, y) >= Math.min(a, b)
          ) {
            toast("Tuesday time range is overlap !", {
              type: "error",
              autoClose: 5000,
            });
            break;
          }
        }
      }
      tuesdayData.push({
        open_at: tuesdayOpenTime[i].value,
        close_at: tuesdayCloseTime[i].value,
      });
    }

    // ----------tuesday end------------

    // ----------wednesday start------------
    let wednesdayOpenTime = document.getElementsByName("wednesday_open_at[]");
    let wednesdayCloseTime = document.getElementsByName("wednesday_close_at[]");

    for (var i = 0; i < wednesdayOpenTime.length; i++) {
      if (!wednesdayOpenTime[i].value) {
        toast("wednesday open time is required !", {
          type: "error",
          autoClose: 5000,
        });
        break;
      }
      if (!wednesdayCloseTime[i].value) {
        toast("wednesday close time is required !", {
          type: "error",
          autoClose: 5000,
        });
        break;
      }
      // time of second timespan
      let todayDate = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
      var a = new Date(`${todayDate} ${wednesdayOpenTime[i].value}`).getTime();
      var b = new Date(`${todayDate} ${wednesdayCloseTime[i].value}`).getTime();

      if (wednesdayData.length >= 1) {
        for (const element of wednesdayData) {
          var x = new Date(`${todayDate} ${element["open_at"]}`).getTime();
          var y = new Date(`${todayDate} ${element["close_at"]}`).getTime();
          if (
            Math.min(x, y) <= Math.max(a, b) &&
            Math.max(x, y) >= Math.min(a, b)
          ) {
            toast("Wednesday time range is overlap !", {
              type: "error",
              autoClose: 5000,
            });
            break;
          }
        }
      }
      wednesdayData.push({
        open_at: wednesdayOpenTime[i].value,
        close_at: wednesdayCloseTime[i].value,
      });
    }
    // ----------wednesday end------------

    // ----------thursday start------------
    let thursdayOpenTime = document.getElementsByName("thursday_open_at[]");
    let thursdayCloseTime = document.getElementsByName("thursday_close_at[]");

    for (var i = 0; i < thursdayOpenTime.length; i++) {
      if (!thursdayOpenTime[i].value) {
        toast("tuesday open time is required !", {
          type: "error",
          autoClose: 5000,
        });
        break;
      }
      if (!thursdayCloseTime[i].value) {
        toast("tuesday close time is required !", {
          type: "error",
          autoClose: 5000,
        });
        break;
      }
      // time of second timespan
      let todayDate = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
      var a = new Date(`${todayDate} ${thursdayOpenTime[i].value}`).getTime();
      var b = new Date(`${todayDate} ${thursdayCloseTime[i].value}`).getTime();
      console.log(a, b, thursdayData.length);
      // break;
      if (thursdayData.length >= 1) {
        for (const element of thursdayData) {
          var x = new Date(`${todayDate} ${element["open_at"]}`).getTime();
          var y = new Date(`${todayDate} ${element["close_at"]}`).getTime();
          if (
            Math.min(x, y) <= Math.max(a, b) &&
            Math.max(x, y) >= Math.min(a, b)
          ) {
            toast("Thursday time range is overlap !", {
              type: "error",
              autoClose: 5000,
            });
            break;
          }
        }
      }
      thursdayData.push({
        open_at: thursdayOpenTime[i].value,
        close_at: thursdayCloseTime[i].value,
      });
    }
    // ----------thursday end------------

    // ----------friday start------------
    let fridayOpenTime = document.getElementsByName("friday_open_at[]");
    let fridayCloseTime = document.getElementsByName("friday_close_at[]");

    for (var i = 0; i < fridayOpenTime.length; i++) {
      if (!fridayOpenTime[i].value) {
        toast("friday open time is required !", {
          type: "error",
          autoClose: 5000,
        });
        break;
      }
      if (!fridayCloseTime[i].value) {
        toast("friday close time is required !", {
          type: "error",
          autoClose: 5000,
        });
        break;
      }
      // time of second timespan
      let todayDate = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
      var a = new Date(`${todayDate} ${fridayOpenTime[i].value}`).getTime();
      var b = new Date(`${todayDate} ${fridayCloseTime[i].value}`).getTime();
      if (fridayData.length >= 1) {
        for (const element of fridayData) {
          var x = new Date(`${todayDate} ${element["open_at"]}`).getTime();
          var y = new Date(`${todayDate} ${element["close_at"]}`).getTime();
          if (
            Math.min(x, y) <= Math.max(a, b) &&
            Math.max(x, y) >= Math.min(a, b)
          ) {
            toast("Friday time range is overlap !", {
              type: "error",
              autoClose: 5000,
            });
            break;
          }
        }
      }
      fridayData.push({
        open_at: fridayOpenTime[i].value,
        close_at: fridayCloseTime[i].value,
      });
    }
    // ----------friday end------------

    // ----------saturday start------------
    let saturdayOpenTime = document.getElementsByName("saturday_open_at[]");
    let saturdayCloseTime = document.getElementsByName("saturday_close_at[]");

    for (var i = 0; i < saturdayOpenTime.length; i++) {
      if (!saturdayOpenTime[i].value) {
        toast("saturday open time is required !", {
          type: "error",
          autoClose: 5000,
        });
        break;
      }
      if (!saturdayCloseTime[i].value) {
        toast("saturday close time is required !", {
          type: "error",
          autoClose: 5000,
        });
        break;
      }
      // time of second timespan
      let todayDate = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
      var a = new Date(`${todayDate} ${saturdayOpenTime[i].value}`).getTime();
      var b = new Date(`${todayDate} ${saturdayCloseTime[i].value}`).getTime();
      console.log(a, b, saturdayData.length);
      // break;
      if (saturdayData.length >= 1) {
        for (const element of saturdayData) {
          var x = new Date(`${todayDate} ${element["open_at"]}`).getTime();
          var y = new Date(`${todayDate} ${element["close_at"]}`).getTime();
          if (
            Math.min(x, y) <= Math.max(a, b) &&
            Math.max(x, y) >= Math.min(a, b)
          ) {
            toast("Saturday time range is overlap !", {
              type: "error",
              autoClose: 5000,
            });
            break;
          }
        }
      }
      saturdayData.push({
        open_at: saturdayOpenTime[i].value,
        close_at: saturdayCloseTime[i].value,
      });
    }
    console.log(sundayData, saturdayData);
    // ----------saturday end------------
  };

  const timeValidate = (e) => {
    let idData = e.target.id.split("_");
    let id = idData[2];
    let day = idData[1];
    let startTime = document.getElementById(`openField_${day}_${id}`).value;
    let endTime = e.target.value;

    // time
    var timefrom = new Date();
    let temp = startTime.split(":");
    timefrom.setHours((parseInt(temp[0]) - 1 + 24) % 24);
    timefrom.setMinutes(parseInt(temp[1]));

    var timeto = new Date();
    temp = endTime.split(":");
    timeto.setHours((parseInt(temp[0]) - 1 + 24) % 24);
    timeto.setMinutes(parseInt(temp[1]));

    if (timeto <= timefrom) {
      document.getElementById(`${day}_error`).innerHTML =
        "start time should be smaller than end time!";
    } else {
      document.getElementById(`${day}_error`).innerHTML = "";
    }
  };

  return (
    <React.Fragment>
      <div className="select_time_form">
        <div className="choose_timeing_part">
          <form
            action="#"
            method="post"
            onSubmit={handelSubmit}
            className="firstrow"
          >
            {/*-----------sunday form field start ------------*/}
            <div className="timeing-label-outer">
              <h6>Sunday</h6>
              <div className="list-diff">
                {/* sunday form field loop */}
                {sundayField &&
                  sundayField.map((field, index) => (
                    <div
                      className="partofday"
                      id="field_section_sunday"
                      key={index}
                    >
                      <Form.Group className="form-group" controlId="">
                        <Form.Label>Open at</Form.Label>
                        <Form.Control
                          type="time"
                          name="sunday_open_at[]"
                          placeholder=""
                          day="sunday"
                          id={`openField_sunday_${index}`}
                        />
                      </Form.Group>
                      <Form.Group className="form-group" controlId="">
                        <Form.Label>Close at</Form.Label>
                        <Form.Control
                          type="time"
                          name="sunday_close_at[]"
                          placeholder=""
                          day="sunday"
                          onChange={timeValidate}
                          id={`closeField_sunday_${index}`}
                        />
                      </Form.Group>
                      {index > 0 ? (
                        <button
                          type="button"
                          className="timing_toggle only-minus"
                          id={`sunday_remove_${index}`}
                          day="sunday"
                          onClick={onClickRemove}
                        ></button>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
              </div>
              <div className="text-danger" id="sunday_error"></div>
              <button
                type="button"
                className="timing_toggle plushbtn"
                id="sunday_add_btn"
                onClick={onClickAdd}
              ></button>
              {/* sunday form field end */}
            </div>
            {/*-----------sunday form field end ------------*/}

            {/*-----------monday form field start ------------*/}
            <div className="timeing-label-outer">
              <h6>Monday</h6>
              <div className="list-diff">
                {mondayField &&
                  mondayField.map((field, index) => (
                    <div
                      className="partofday"
                      id="field_section_monday"
                      key={index}
                    >
                      <Form.Group className="form-group" controlId="">
                        <Form.Label>Open at</Form.Label>
                        <Form.Control
                          type="time"
                          name="monday_open_at[]"
                          placeholder=""
                          day="monday"
                          id={`openField_monday_${index}`}
                        />
                      </Form.Group>
                      <Form.Group className="form-group" controlId="">
                        <Form.Label>Close at</Form.Label>
                        <Form.Control
                          type="time"
                          name="monday_close_at[]"
                          placeholder=""
                          day="monday"
                          onChange={timeValidate}
                          id={`closeField_monday_${index}`}
                        />
                      </Form.Group>
                      {index > 0 ? (
                        <button
                          type="button"
                          className="timing_toggle only-minus"
                          id={`monday_remove_${index}`}
                          day="monday"
                          onClick={onClickRemove}
                        ></button>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
              </div>
              <div className="text-danger" id="monday_error"></div>
              <button
                type="button"
                className="timing_toggle"
                id="monday_add_btn"
                onClick={onClickAdd}
              ></button>
            </div>
            {/*-----------monday form field end ------------*/}

            {/*-----------tuesday form field start ------------*/}
            <div className="timeing-label-outer">
              <h6>Tuesday</h6>
              <div className="list-diff">
                {tuesdayField &&
                  tuesdayField.map((field, index) => (
                    <div
                      className="partofday"
                      id="field_section_tuesday"
                      key={index}
                    >
                      <Form.Group className="form-group" controlId="">
                        <Form.Label>Open at</Form.Label>
                        <Form.Control
                          type="time"
                          name="tuesday_open_at[]"
                          placeholder=""
                          day="tuesday"
                          id={`openField_tuesday_${index}`}
                        />
                      </Form.Group>
                      <Form.Group className="form-group" controlId="">
                        <Form.Label>Close at</Form.Label>
                        <Form.Control
                          type="time"
                          name="tuesday_close_at[]"
                          placeholder=""
                          day="tuesday"
                          onChange={timeValidate}
                          id={`closeField_tuesday_${index}`}
                        />
                      </Form.Group>
                      {index > 0 ? (
                        <button
                          type="button"
                          className="timing_toggle only-minus"
                          id={`tuesday_remove_${index}`}
                          day="tuesday"
                          onClick={onClickRemove}
                        ></button>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
              </div>
              <div className="text-danger" id="tuesday_error"></div>
              <button
                type="button"
                className="timing_toggle"
                id="tuesday_add_btn"
                onClick={onClickAdd}
              ></button>
            </div>
            {/*-----------tuesday form field end ------------*/}

            {/*-----------wednesday form field start ------------*/}
            <div className="timeing-label-outer">
              <h6>Wednesday</h6>
              <div className="list-diff">
                {wednesdayField &&
                  wednesdayField.map((field, index) => (
                    <div
                      className="partofday"
                      id="wednesday_field_section"
                      key={index}
                    >
                      <Form.Group className="form-group" controlId="">
                        <Form.Label>Open at</Form.Label>
                        <Form.Control
                          type="time"
                          name="wednesday_open_at[]"
                          placeholder=""
                          day="wednesday"
                          id={`openField_wednesday_${index}`}
                        />
                      </Form.Group>
                      <Form.Group className="form-group" controlId="">
                        <Form.Label>Close at</Form.Label>
                        <Form.Control
                          type="time"
                          name="wednesday_close_at[]"
                          placeholder=""
                          day="wednesday"
                          onChange={timeValidate}
                          id={`closeField_wednesday_${index}`}
                        />
                      </Form.Group>
                      {index > 0 ? (
                        <button
                          type="button"
                          className="timing_toggle only-minus"
                          id={`wednesday_remove_${index}`}
                          day="wednesday"
                          onClick={onClickRemove}
                        ></button>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
              </div>
              <div className="text-danger" id="wednesday_error"></div>
              <button
                type="button"
                className="timing_toggle"
                id="wednesday_add_btn"
                onClick={onClickAdd}
              ></button>
            </div>
            {/*-----------wednesday form field end ------------*/}

            {/*-----------thursday form field start ------------*/}
            <div className="timeing-label-outer">
              <h6>Thursday</h6>
              <div className="list-diff">
                {thursdayField &&
                  thursdayField.map((field, index) => (
                    <div
                      className="partofday"
                      id="thursday_field_section"
                      key={index}
                    >
                      <Form.Group className="form-group" controlId="">
                        <Form.Label>Open at</Form.Label>
                        <Form.Control
                          type="time"
                          name="thursday_open_at[]"
                          placeholder=""
                          day="thursday"
                          id={`openField_thursday_${index}`}
                        />
                      </Form.Group>
                      <Form.Group className="form-group" controlId="">
                        <Form.Label>Close at</Form.Label>
                        <Form.Control
                          type="time"
                          name="thursday_close_at[]"
                          placeholder=""
                          day="thursday"
                          onChange={timeValidate}
                          id={`closeField_thursday_${index}`}
                        />
                      </Form.Group>
                      {index > 0 ? (
                        <button
                          type="button"
                          className="timing_toggle only-minus"
                          id={`thursday_remove_${index}`}
                          day="thursday"
                          onClick={onClickRemove}
                        ></button>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
              </div>
              <div className="text-danger" id="thursday_error"></div>
              <button
                type="button"
                className="timing_toggle"
                id="thursday_add_btn"
                onClick={onClickAdd}
              ></button>
            </div>
            {/*-----------thursday form field end ------------*/}

            {/*-----------friday form field start ------------*/}
            <div className="timeing-label-outer">
              <h6>Friday</h6>
              <div className="list-diff">
                {fridayField &&
                  fridayField.map((field, index) => (
                    <div
                      className="partofday"
                      id="friday_field_section"
                      key={index}
                    >
                      <Form.Group className="form-group" controlId="">
                        <Form.Label>Open at</Form.Label>
                        <Form.Control
                          type="time"
                          name="friday_open_at[]"
                          placeholder=""
                          day="friday"
                          id={`openField_friday_${index}`}
                        />
                      </Form.Group>
                      <Form.Group className="form-group" controlId="">
                        <Form.Label>Close at</Form.Label>
                        <Form.Control
                          type="time"
                          name="friday_close_at[]"
                          placeholder=""
                          day="friday"
                          onChange={timeValidate}
                          id={`closeField_friday_${index}`}
                        />
                      </Form.Group>
                      {index > 0 ? (
                        <button
                          type="button"
                          className="timing_toggle only-minus"
                          id={`friday_remove_${index}`}
                          day="friday"
                          onClick={onClickRemove}
                        ></button>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
              </div>
              <div className="text-danger" id="friday_error"></div>
              <button
                type="button"
                className="timing_toggle"
                id="friday_add_btn"
                onClick={onClickAdd}
              ></button>
            </div>
            {/*-----------friday form field end ------------*/}

            {/*-----------saturday form field start ------------*/}
            <div className="timeing-label-outer">
              <h6>Saturday</h6>
              <div className="list-diff">
                {saturdayField &&
                  saturdayField.map((field, index) => (
                    <div
                      className="partofday"
                      id="saturday_field_section"
                      key={index}
                    >
                      <Form.Group className="form-group" controlId="">
                        <Form.Label>Open at</Form.Label>
                        <Form.Control
                          type="time"
                          name="saturday_open_at[]"
                          placeholder=""
                          day="saturday"
                          id={`openField_saturday_${index}`}
                        />
                      </Form.Group>
                      <Form.Group className="form-group" controlId="">
                        <Form.Label>Close at</Form.Label>
                        <Form.Control
                          type="time"
                          name="saturday_close_at[]"
                          placeholder=""
                          day="saturday"
                          onChange={timeValidate}
                          id={`closeField_saturday_${index}`}
                        />
                      </Form.Group>
                      {index > 0 ? (
                        <button
                          type="button"
                          className="timing_toggle only-minus"
                          id={`saturday_remove_${index}`}
                          day="saturday"
                          onClick={onClickRemove}
                        ></button>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
              </div>
              <div className="text-danger" id="saturday_error"></div>
              <button
                type="button"
                className="timing_toggle"
                id="saturday_add_btn"
                onClick={onClickAdd}
              ></button>
            </div>
            {/*-----------saturday form field end ------------*/}

            <button type="submit" className="btn green_btn">
              Save
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
