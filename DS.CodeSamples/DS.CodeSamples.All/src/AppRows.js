import React, { Component } from "react";

class AppRows extends Component {
  render() {
    return (
      <div className="mt-16 Comp">
        <div className="flex font-bold">
          <div className="flex-1" />
          <div className="flex-1 text-center">Primary</div>
          <div className="flex-1 text-center">Alt 1</div>
          <div className="flex-1 text-center">Alt 2</div>
          <div className="flex-1 text-center">Alt 3</div>
          <div className="flex-1 text-center">Off</div>
        </div>
        <div className="flex">
          <div className="flex-1" />
          <div className="flex-1 text-center">
            <div className="flex">
              <div className="flex-1 font-bold">On</div>
              <div className="flex-1">
                <div className="font-bold">On</div>
                <div className="text-xs">(disabled)</div>
              </div>
            </div>
          </div>
          <div className="flex-1 text-center">
            <div className="flex">
              <div className="flex-1 font-bold">On</div>
              <div className="flex-1">
                <div className="font-bold">On</div>
                <div className="text-xs">(disabled)</div>
              </div>
            </div>
          </div>
          <div className="flex-1 text-center">
            <div className="flex">
              <div className="flex-1 font-bold">On</div>
              <div className="flex-1">
                <div className="font-bold">On</div>
                <div className="text-xs">(disabled)</div>
              </div>
            </div>
          </div>
          <div className="flex-1 text-center">
            <div className="flex">
              <div className="flex-1 font-bold">On</div>
              <div className="flex-1">
                <div className="font-bold">On</div>
                <div className="text-xs">(disabled)</div>
              </div>
            </div>
          </div>
          <div className="flex-1 text-center">
            <div className="flex">
              <div className="flex-1 font-bold">Off</div>
              <div className="flex-1">
                <div className="font-bold">Off</div>
                <div className="text-xs">(disabled)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppRows;
