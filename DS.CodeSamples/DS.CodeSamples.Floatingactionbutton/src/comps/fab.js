import React, { Component } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

export default class App extends Component {
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="md:flex items-center">
          <div className="w-48 font-bold">Floating Action</div>

          <div className="flex-1">
            <ButtonComponent
              cssClass="e-round"
              iconCss="material_icons add"
              isPrimary={true}
            />
          </div>
        </div>
      </div>
    );
  }
}
