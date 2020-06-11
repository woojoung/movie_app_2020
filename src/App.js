import React from "react";
import PropTypes from "prop-types";

// state, class component of component in React
// react component has many things behind
// take react class component
// not using return because it is not a function. use render method
// the reason why we use class component is that class component has state what we want to use
// and React run render method in the class component automatically
// state is a object that we can put the data into your component. And the data will change.
// The react doesnt refresh the render function
class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    // console.log("add");
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    // console.log("minus");
    this.setState((current) => ({ count: current.count - 1 }));
  };
  render() {
    return (
      <div>
        <h1>The Number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
