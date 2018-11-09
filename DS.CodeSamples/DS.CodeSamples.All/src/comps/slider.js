import React, { Component } from "react";
import { SliderComponent } from "@syncfusion/ej2-react-inputs";

export default class SilderDoc extends Component {
  constructor() {
    super(...arguments);
    // Initialize ticks with placement, largestep, smallstep
    this.defaultTicks = {
      placement: "Before",
      largeStep: 20,
      smallStep: 10,
      showSmallTicks: true
    };
    this.defaultTooltip = {
      placement: "Before",
      isVisible: true,
      showOn: "Focus"
    };
    this.fields = { value: "value", text: "text" };
  }
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="md:flex items-center">
          <div className="w-48 font-bold">Slider</div>
          <div className="flex-1 px-2">
            <SliderComponent cssClass="abi-css" />
          </div>
          <div className="flex-1 px-2">
            <SliderComponent
              value={45}
              min={0}
              max={100}
              step={5}
              ticks={this.defaultTicks}
              tooltip={this.defaultTooltip}
            />
          </div>
          <div className="flex-1 px-2">
            <SliderComponent
              value={45}
              min={0}
              max={100}
              step={5}
              ticks={this.defaultTicks}
              tooltip={this.defaultTooltip}
              enabled={false}
              cssClass="malt-style"
            />
          </div>
        </div>
      </div>
    );
  }
}
