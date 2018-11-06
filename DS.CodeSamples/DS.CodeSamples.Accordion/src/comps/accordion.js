import React, { Component } from "react";
import {
  AccordionComponent,
  AccordionItemDirective,
  AccordionItemsDirective
} from "@syncfusion/ej2-react-navigations";

export default class AccordionDoc extends Component {
  content0() {
    return (
      <div>
        Microsoft ASP.NET is a set of technologies in the Microsoft .NET
        Framework for building Web applications and XML Web services.
      </div>
    );
  }
  content1() {
    return (
      <div>
        The Model-View-Controller (MVC) architectural pattern separates an
        application into three main components: the model, the view, and the
        controller.
      </div>
    );
  }
  content2() {
    return (
      <div>
        JavaScript (JS) is an interpreted computer programming language.It was
        originally implemented as part of web browsers so that client-side
        scripts could interact with the user, control the browser, communicate
        asynchronously, and alter the document content that was displayed.
      </div>
    );
  }
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="md:flex items-center">
          <div className="w-48 font-bold">AccordionComponent</div>

          <div className="flex-1">
            <AccordionComponent>
              <AccordionItemsDirective>
                <AccordionItemDirective
                  expanded="true"
                  header="ASP.NET"
                  content={this.content0}
                />
                <AccordionItemDirective
                  header="ASP.NET MVC"
                  content={this.content1}
                />
                <AccordionItemDirective
                  header="JavaScript"
                  content={this.content2}
                />
              </AccordionItemsDirective>
            </AccordionComponent>
          </div>
        </div>
      </div>
    );
  }
}
