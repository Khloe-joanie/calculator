/** @format */

import { Component } from "react";

class Display extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <input
          className="col-md-8 offset-md-2 mdisplay"
          value={this.props.joan}
        />
      </div>
    );
  }
}

export default Display;
