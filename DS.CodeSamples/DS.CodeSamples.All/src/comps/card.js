import React, { Component } from "react";

export default class CardDoc extends Component {
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="md:flex items-center">
          <div className="w-48 font-bold">Card</div>

          <div className="flex-1 p-4">
            <div className="e-card">
              <div className="e-card-header">
                <div className="e-card-header-image football" />
                <div className="e-card-header-caption">
                  <div className="e-card-header-title"> Laura Callahan</div>
                  <div className="e-card-sub-title">
                    Sales Coordinator and Representative
                  </div>
                </div>
              </div>
              <div className="e-card-content">
                Laura received a BA in psychology from the University of
                Washington. She has also completed a course in business French.
                She reads and writes French.
              </div>
            </div>
          </div>
          <div className="flex-1 p-4">
            <div className="e-card">
              <div className="e-card-header">
                <div className="e-card-header-image football" />
                <div className="e-card-header-caption">
                  <div className="e-card-header-title"> Laura Callahan</div>
                  <div className="e-card-sub-title">
                    Sales Coordinator and Representative
                  </div>
                </div>
              </div>
              <div className="e-card-content">
                Laura received a BA in psychology from the University of
                Washington. She has also completed a course in business French.
                She reads and writes French.
              </div>
            </div>
          </div>
          <div className="flex-1 p-4">
            <div className="e-card">
              <div className="e-card-header">
                <div className="e-card-header-image football" />
                <div className="e-card-header-caption">
                  <div className="e-card-header-title"> Laura Callahan</div>
                  <div className="e-card-sub-title">
                    Sales Coordinator and Representative
                  </div>
                </div>
              </div>
              <div className="e-card-content">
                Laura received a BA in psychology from the University of
                Washington. She has also completed a course in business French.
                She reads and writes French.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
