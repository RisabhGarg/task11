//by mistake I have taken firstinput and secondinput as username and userage but at dom ther are fine.

import { useState } from "react";
import { useReducer } from "react";
import { Component } from "react";
class App extends Component {
  // console.log("Hello...")
  constructor() {
    super();
    this.state = {
      uservalues: { username: null, userage: null },
      resultofval: "",
    };
  }
  dispatch(action) {
    if (action.type == "+") {
      console.log(action.username);
      console.log(action.userage);
      let resultofinputs = Number(action.username) + Number(action.userage);
      this.setState({
        resultofval: resultofinputs,
        uservalues: { username: "", userage: "" },
      });
    } else if (action.type == "-") {
      let resultofinputs = action.username - action.userage;
      this.setState({
        resultofval: resultofinputs,
        uservalues: { username: "", userage: "" },
      });
    } else if (action.type == "*") {
      let resultofinputs = action.username * action.userage;
      this.setState({
        resultofval: resultofinputs,
        uservalues: { username: "", userage: "" },
      });
    } else if (action.type == "/") {
      let resultofinputs = action.username / action.userage;
      this.setState({
        resultofval: resultofinputs,
        uservalues: { username: "", userage: "" },
      });
    } else {
      let resultofinputs = "";
      this.setState({
        resultofval: resultofinputs,
        uservalues: { username: "", userage: "" },
      });
    }
  }
  render() {
    return (
      <>
        <label htmlFor="username">Enter Firstvale</label>:&nbsp;&nbsp;
        <input
          type="number"
          id="username"
          onChange={(e) =>
            this.setState({
              uservalues: {
                ...this.state.uservalues,
                username: e.target.value,
              },
            })
          }
          value={this.state.uservalues.username}
        />
        <br />
        <label htmlFor="userage">Enter secondval</label>
        :&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="number"
          id="userage"
          onChange={(e) =>
            this.setState({
              uservalues: {
                ...this.state.uservalues,
                userage: e.target.value,
              },
            })
          }
          value={this.state.uservalues.userage}
        />
        <br />
        <label htmlFor="result">Result</label>:&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="number"
          id="result"
          disabled
          value={this.state.resultofval}
        />
        <br />
        <br />
        <br />
        <div className="buttons">
          <input
            type="button"
            value="+"
            onClick={() =>
              this.dispatch({
                type: "+",
                username: this.state.uservalues.username,
                userage: this.state.uservalues.userage,
              })
            }
          />
          &nbsp;&nbsp;&nbsp;
          <input
            type="button"
            value="-"
            onClick={() =>
              this.dispatch({
                type: "-",
                username: this.state.uservalues.username,
                userage: this.state.uservalues.userage,
              })
            }
          />
          &nbsp;&nbsp;&nbsp;
          <input
            type="button"
            value="*"
            onClick={() =>
              this.dispatch({
                type: "*",
                username: this.state.uservalues.username,
                userage: this.state.uservalues.userage,
              })
            }
          />
          &nbsp;&nbsp;&nbsp;
          <input
            type="button"
            value="/"
            onClick={() =>
              this.dispatch({
                type: "/",
                username: this.state.uservalues.username,
                userage: this.state.uservalues.userage,
              })
            }
          />
        </div>
      </>
    );
  }
}

export default App;
