/** @format */

import React, { Component } from "react";

class Btn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={this.props.chloe.bclass}>
        <button className="cbutton" onClick={this.props.clickProp}>
          {this.props.chloe.symbol}
        </button>
      </div>
    );
  }
}
export default Btn;
