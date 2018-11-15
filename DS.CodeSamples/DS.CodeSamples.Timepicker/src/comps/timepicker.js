import React, { Component } from "react";
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";

export default class TimepickerDoc extends Component {
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="md:flex items-center">
          <div className="w-48 font-bold">Timepicker</div>

          <div className="flex-1">
            <TimePickerComponent placeholder="Select" />
          </div>
        </div>
      </div>
    );
  }
}
