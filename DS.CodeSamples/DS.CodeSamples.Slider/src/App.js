import React, { Component } from "react";
import { SliderComponent } from "@syncfusion/ej2-react-inputs";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);
class App extends Component {
  constructor() {
    super(...arguments);
    // Initialize ticks with placement, largestep, smallstep
    this.defaultTicks = {
      placement: "Before",
      largeStep: 0.1,
      smallStep: 0.05,
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
      <div className="App">
        <h1>Sliders</h1>
        <SliderComponent />
        <br />
        <br />
        <SliderComponent
          value={0.3}
          min={0.1}
          max={0.9}
          step={0.05}
          ticks={this.defaultTicks}
          showButtons={true}
          tooltip={this.defaultTooltip}
        />
      </div>
    );
  }
}

export default App;
