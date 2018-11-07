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
                <div className="e-card-title">JavaScript</div>
              </div>
              <div className="e-card-content">
                JavaScript Succinctly was written to give readers an accurate,
                concise examination of JavaScript objects and their supporting
                nuances, such as complex values, primitive values, scope,
                inheritance, the head object, and more.
              </div>
            </div>
          </div>
          <div className="flex-1 px-2">
            <div className="e-card">
              <div className="e-card-header-title">Eiffel Tower</div>
              <div className="e-card-content">
                The Eiffel Tower is acknowledged as the universal symbol of
                Paris and France.
              </div>
              <div className="e-card-actions e-card-vertical">
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
