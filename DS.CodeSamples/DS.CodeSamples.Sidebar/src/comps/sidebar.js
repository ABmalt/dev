import React, { Component } from "react";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
export default class SidebarDoc extends Component {
  constructor() {
    super(...arguments);
    this.sidebarobj = SidebarComponent;
  }
  componentDidMount() {
    this.sidebarobj.closeOnDocumentClick = true;
    this.sidebarobj.showBackdrop = true;
  }
  openSide() {
    this.sidebarobj.show();
  }
  closeSide() {
    this.sidebarobj.hide();
  }
  render() {
    return (
      <div className="app">
        <div className="absolute pin z-10 p-4 text-xl">
          <span
            className="material-icons menu"
            onClick={this.openSide.bind(this)}
          />
        </div>

        <SidebarComponent
          type="Over"
          width="304px"
          className="invisible"
          ref={Sidebar => (this.sidebarobj = Sidebar)}
        >
          <div className="flex justify-between p-8 text-xl">
            <div>Sidebar</div>
            <div
              className="material-icons close"
              onClick={this.closeSide.bind(this)}
            />
          </div>
          <div className="p-8">
            <p>List item</p>
            <p>List item</p>
            <p>List item</p>
          </div>
        </SidebarComponent>
        <section className="p-12 text-center text-xl">App content</section>
      </div>
    );
  }
}
