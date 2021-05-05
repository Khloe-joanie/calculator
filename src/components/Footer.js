/** @format */

import React, { Component } from "react";

class MyFooter extends Component {
  render() {
    return (
      <footer className="myfooter">
        <p className="foot">
          © 2021. All Rights reserved | Design by{" "}
          <span
            style={{
              fontFamily: "Romantica Regular",
              fontSize: "33px",
              color: "#fff)",
            }}
          >
            Joan Mumbi
          </span>
        </p>
      </footer>
    );
  }
}

export default MyFooter;
