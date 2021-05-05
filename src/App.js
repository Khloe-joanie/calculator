/** @format */

import React, { Component } from "react";
import "./css/style.css";
import MyHeader from "./components/Header";
import Display from "./components/Display";
import Btn from "./components/Btn";
import CalcData from "./components/CalcData";
import MyFooter from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
    };
  }

  handleClick = (symbol) => {
    if (symbol == "=") {
      this.setState({ result: eval(this.state.result) });
    } else if (symbol == "C") {
      this.setState({ result: "" });
    } else {
      this.setState({ result: this.state.result + symbol });
    }
  };

  render() {
    return (
      <div>
        <MyHeader />
        <div className="container">
          <Display joan={this.state.result} />
          <div
            className="col-md-8 offset-md-2 row"
            style={{ MarginBottom: "2em" }}
          >
            {CalcData.map((cdata) => {
              return (
                <Btn
                  key={cdata.id}
                  chloe={cdata}
                  clickProp={() => {
                    this.handleClick(cdata.symbol);
                  }}
                />
              );
            })}
          </div>
        </div>

        <MyFooter />
      </div>
    );
  }
}

export default App;
