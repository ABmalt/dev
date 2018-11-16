import React, { Component } from "react";
// import {MenuComponent,FieldsSettingsModel} from "@syncfusion/ej2-react-navigations";
import { MenuComponent } from "@syncfusion/ej2-react-navigations";

export default class MenuDoc extends Component {
  constructor() {
    super(...arguments);
    // define the JSON of data
    this.list = [
      {
        header: "Events",
        subItems: [
          { text: "Conferences" },
          { text: "Music" },
          { text: "Workshops" }
        ]
      },
      {
        header: "Movies",
        subItems: [{ text: "Now Showing" }, { text: "Coming soon" }]
      },
      {
        header: "Directory",
        subItems: [{ text: "Media Gallery" }, { text: "Newsletters" }]
      },
      {
        header: "Queries",
        subItems: [
          { text: "Our policy" },
          { text: "Site Map" },
          { text: "24x7 Support" }
        ]
      },
      { header: "Services" }
    ];
    // maps the appropriate column to fields property
    this.fields = {
      text: ["header", "text"],
      children: ["subItems"]
    };
  }
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="md:flex items-center">
          <div className="w-48 font-bold">Menu</div>

          <div className="flex-1">
            <MenuComponent items={this.list} fields={this.fields} />
          </div>
        </div>
      </div>
    );
  }
}
