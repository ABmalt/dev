import React, { Component } from "react";
// import { Button, ButtonGroup } from "@progress/kendo-react-buttons";

import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Buttons</h1>

        <ButtonComponent cssClass="e-primary">Primary</ButtonComponent>
        <br />
        <br />
        <ButtonComponent>Normal</ButtonComponent>
        <br />
        <br />
        <ButtonComponent cssClass="e-outline" isPrimary>
          Outline
        </ButtonComponent>
        <br />
        <br />
        <ButtonComponent cssClass="e-flat e-primary">Flat</ButtonComponent>
        <br />
        <br />
        <ButtonComponent cssClass="e-success">Success</ButtonComponent>
        <br />
        <br />
        <ButtonComponent cssClass="e-warning">Warning</ButtonComponent>
        <br />
        <br />
        <ButtonComponent cssClass="e-danger">Danger</ButtonComponent>
        <br />
        <br />
        <ButtonComponent cssClass="e-info">Info</ButtonComponent>
        <br />
        <br />
        <ButtonComponent
          cssClass="e-small e-round"
          iconCss="e-icons e-add-icon"
          isPrimary
        />
        <br />
        <br />
        <ButtonComponent
          cssClass="e-flat e-primary"
          ref={scope => {
            this.btnobj = scope;
          }}
          iconCss="e-icons e-play-icon"
          isToggle
        >
          Play
        </ButtonComponent>
        <br />
        <br />
        <ButtonComponent
          cssClass="e-flat e-primary"
          iconCss="e-icons e-open-icon"
          iconPosition="Right"
        >
          Open
        </ButtonComponent>
        <br />
        <br />
        <ButtonComponent cssClass="e-small">Small</ButtonComponent>
      </div>
    );
  }
}

export default App;
