import React, { Component } from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
export default class TooltipDoc extends Component {
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="md:flex items-center">
          <div className="w-48 font-bold">Tooltip</div>
          <div className="flex-1">
            <p>
              <TooltipComponent content="Hello!" className="inline-block">
                <div>Tooltip</div>
              </TooltipComponent>
              ipsum dolor sit, ametadipisicing elit.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
