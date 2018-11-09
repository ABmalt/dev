import React, { Component } from "react";

import {
  AccordionComponent,
  AccordionItemsDirective,
  AccordionItemDirective
} from "@syncfusion/ej2-react-navigations";

export default class AccordionDoc extends Component {
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="md:flex">
          <div className="w-48 font-bold">Accordion</div>
          <div className="flex-1 px-2">
            <AccordionComponent>
              <AccordionItemsDirective>
                <AccordionItemDirective
                  header="Video"
                  content="<div>video</div>"
                />
                <AccordionItemDirective
                  header="Music"
                  content="<div>music</div>"
                />
                <AccordionItemDirective
                  header="Images"
                  content="<div>images</div>"
                />
              </AccordionItemsDirective>
            </AccordionComponent>
          </div>

          <div className="flex-1 px-2">
            <AccordionComponent expandMode="Single">
              <AccordionItemsDirective>
                <AccordionItemDirective
                  header="Video"
                  content="<div>video</div>"
                />
                <AccordionItemDirective
                  header="Music"
                  content="<div>music</div>"
                />
                <AccordionItemDirective
                  header="Images"
                  content="<div>images</div>"
                />
              </AccordionItemsDirective>
            </AccordionComponent>
          </div>
          <div className="flex-1 px-2">
            <AccordionComponent expandMode="Multiple">
              <div>
                <div>
                  <div>
                    <span
                      className="material-icons account_circle mr-2"
                      style={{ verticalAlign: -3 + "px" }}
                    />
                    Section A
                  </div>
                </div>
                <div className="pl-4">
                  <div>Content A</div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <span
                      className="material-icons account_circle mr-2"
                      style={{ verticalAlign: -3 + "px" }}
                    />
                    Section B
                  </div>
                </div>
                <div className="pl-4">
                  <div>Content B</div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <span
                      className="material-icons account_circle mr-2"
                      style={{ verticalAlign: -3 + "px" }}
                    />
                    Section C
                  </div>
                </div>
                <div className="pl-4">
                  <div>Content C</div>
                </div>
              </div>
            </AccordionComponent>
          </div>
        </div>
      </div>
    );
  }
}
