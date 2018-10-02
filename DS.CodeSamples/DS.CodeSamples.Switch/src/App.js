import React, { Component } from "react";
import { SwitchComponent } from "@syncfusion/ej2-react-buttons";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Switch</h1>
        <SwitchComponent />
      </div>
    );
  }
}

export default App;
