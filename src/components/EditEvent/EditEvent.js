import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  DatePicker,
  DatePickerInput,
  Form,
  Select,
  SelectItem,
  TextArea,
  TextInput,
} from "carbon-components-react";
import React from "react";

const EditEvent = () => {
  // short way, I am writing this for all but in reality, this must be used for 1 datepicker
  const props = {
    datePicker: () => ({
      id: "date-picker",
      light: true,
      className: "event-start-date",
      onChange: console.log("onPickerChange"),
      onClose: console.log("onClose"),
    }),
    datePickerInput: () => ({
      id: "date-picker-input-id",
      className: "event-ss",
      disabled: false,
      invalid: false,
      invalidText: "A valid value is required",
      iconDescription: "Icon description",
      onClick: console.log("onClick"),
      onChange: console.log("onInputChange"),
    }),
  };
  return (
    <div className="edit-event">
      <div className="rectangular"></div>
      <div className="bx--grid edit-wrapper">
        <div className="form-header">
          <Breadcrumb>
            <BreadcrumbItem href="/">Events</BreadcrumbItem>
            <BreadcrumbItem href="/">Revenue reporting Q2</BreadcrumbItem>
          </Breadcrumb>
          <h2 className="title">Edit event</h2>
        </div>
        <div className="bx--row">
          <div className="bx--col">
            <Form>
              <div style={{ marginBottom: "2rem", marginTop: "1rem" }}>
                <TextInput
                  helperText="Displayed as the channel title while the event page is open."
                  id="test2"
                  invalidText="Invalid error message."
                  labelText="Event name"
                  placeholder="Revenue reporting Q2"
                  className="bx--text-input--light"
                  value="Revenue reporting Q2"
                />
              </div>
              <div style={{ marginBottom: "2rem" }}>
                <Select
                  defaultValue="placeholder-item"
                  id="select-1"
                  invalidText="This is an invalid error message."
                  labelText="Event time zone"
                  className="bx--select--light"
                >
                  <SelectItem text="Europe/Budapest" value="Budapest" />
                  <SelectItem text="Europe/Berlin" value="Berlin" />
                  <SelectItem text="Europe/Poland" value="Poland" />
                </Select>
              </div>
              <div style={{ marginBottom: "0rem" }} className="event-start">
                <div className="event-start-header">
                  <h3 className="event-title">Event date</h3>
                  <p className="event-detail">
                    Start and end date of the event displayed on the event page.
                    Sessions between these two dates are listed on the event
                    page under the Schedule tab.
                  </p>
                </div>
                <div className="event-start-end">
                  <DatePicker
                    {...props.datePicker()}
                    datePickerType="single"
                    dateFormat="m/d/Y"
                  >
                    <DatePickerInput
                      {...props.datePickerInput()}
                      labelText="Event start"
                      placeholder="28/09/2021"
                    />
                  </DatePicker>

                  <DatePicker
                    {...props.datePicker()}
                    datePickerType="single"
                    dateFormat="m/d/Y"
                    style={{ width: "100%" }}
                  >
                    <DatePickerInput
                      {...props.datePickerInput()}
                      labelText="Event end"
                      placeholder="28/09/2021"
                    />
                  </DatePicker>
                </div>
              </div>
              <div style={{ marginBottom: "2rem" }}>
                <div className="event-start-header">
                  <h3 className="event-title">Event page </h3>
                  <p className="event-detail">
                    Opening the event page turns your channel page into your
                    event's landing page.
                  </p>
                </div>
                <div className="event-start-end">
                  <DatePicker
                    {...props.datePicker()}
                    datePickerType="single"
                    dateFormat="m/d/Y"
                  >
                    <DatePickerInput
                      {...props.datePickerInput()}
                      labelText="Event page opens"
                      placeholder="26/09/2021"
                    />
                  </DatePicker>

                  <DatePicker
                    {...props.datePicker()}
                    datePickerType="single"
                    dateFormat="m/d/Y"
                    style={{ width: "100%" }}
                  >
                    <DatePickerInput
                      {...props.datePickerInput()}
                      labelText="Event page closes"
                      placeholder="28/09/2021"
                    />
                  </DatePicker>
                </div>
              </div>
              <div className="bx--row edit-actions">
                <div className="bx--col">
                  <Button kind="primary" tabIndex={0} type="submit">
                    Save
                  </Button>
                </div>
                <div className="bx--col">
                  <Button kind="secondary" tabIndex={1} type="submit">
                    Cancel
                  </Button>
                </div>
              </div>
            </Form>
          </div>
          <div className="bx--col"></div>
        </div>
      </div>
    </div>
  );
};

export default EditEvent;
