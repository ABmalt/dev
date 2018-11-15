import React, { Component } from "react";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
export default class SidebarDoc extends Component {
  constructor() {
    super(...arguments);
    this.sidebarobj = SidebarComponent;
  }
  rendereComplete() {
    this.sidebarobj.closeOnDocumentClick = true;
    this.sidebarobj.showBackdrop = true;
    this.sidebarobj.type = "Over";
  }
  componentDidMount() {
    this.rendereComplete();
  }
  openClick() {
    this.sidebarobj.show();
  }
  closeClick() {
    this.sidebarobj.hide();
  }
  render() {
    return (
      <div>
        <span
          id="hamburger"
          className="e-icons"
          onClick={this.openClick.bind(this)}
        />
        <SidebarComponent
          ref={Sidebar => (this.sidebarobj = Sidebar)}
          type="Over"
          width="304px"
        >
          <div className="sidebar-hdr">
            <div className="sidebar-title">Sidebar</div>
            <div
              id="close"
              className="e-icons"
              onClick={this.closeClick.bind(this)}
            />
          </div>
          <div className="sidebar-content">List</div>
        </SidebarComponent>
        <section className="main">App content</section>
      </div>
    );
  }
}
