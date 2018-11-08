import React, { Component } from "react";
// import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
export default class SidebarDoc extends Component {
  render() {
    return (
      <div className="control-section">
        <div id="wrapper">
          <SidebarComponent
            id="default-sidebar"
            ref={Sidebar => (this.sidebarobj = Sidebar)}
          >
            <div className="title">Sidebar content</div>
          </SidebarComponent>
          <div>
            <div className="title">Main content</div>
            <div className="sub-title">content goes here</div>
          </div>
        </div>
      </div>
    );
  }
}
