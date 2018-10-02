import React, { Component } from "react";
import { SliderComponent } from "@syncfusion/ej2-react-inputs";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Sliders</h1>
        <SliderComponent />
      </div>
    );
  }
}

export default App;
