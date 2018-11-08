import React, { Component } from "react";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

export default class DatePickerDoc extends Component {
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="md:flex items-center">
          <div className="w-48 font-bold">Timepicker</div>

          <div className="flex-1">
            <DatePickerComponent id="timepicker" placeholder="Select a Time" />
          </div>
        </div>
      </div>
    );
  }
}
