import React, { Component } from "react";

export default class CardDoc extends Component {
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="md:flex items-center">
          <div className="w-48 font-bold">Card</div>

          <div className="flex-1 px-2">
            <div className="e-card">
              <div className="e-card-header">
                <div className="e-card-header-caption">
                  <div className="e-card-header-title">Laura Callahan</div>
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
          <div className="flex-1 px-2">
            <div className="e-card">
              <div className="e-card-image">
                <div className="e-card-title">Lorem</div>
              </div>
              <div className="e-card-content">
                Lorem, ipsum dolor sit amet consectetur elit.
              </div>
            </div>
          </div>
          <div className="flex-1 px-2">
            <div className="e-card">
              <div className="e-card-header-title">Eiffel Tower</div>
              <div className="e-card-content">
                The Eiffel Tower is acknowledged as the universal symbol of
                Paris and France. Commodi vero repellendus doloribus perferendis
                assumenda praesentium vitae.
              </div>
              <div className="e-card-actions">
                <button className="e-card-btn">More</button>
                <a href="/">Share</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
