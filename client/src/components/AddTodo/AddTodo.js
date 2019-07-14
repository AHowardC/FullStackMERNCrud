import React from "react";
import { connect } from "react-redux";

import { addTodo } from "../../Actions/actions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // this key word does not need to be bound to the function with es6 arrow function
  // new way to make methods is with es6 arrow function to handle binding methods to a class
  handleSubmit = e => {
    // if (e.key === "Enter") {
    //   this.props.addTodo(e.target.value);
    //   e.target.value = "";
    // }
    e.preventDefault();
    var inputValue = this.refs.inputValue.value;
    this.props.addTodo(inputValue);
    this.refs.inputValue.value = "";
  };

  render() {
    return (
      <form role="form" onSubmit={this.handleSubmit}>
        <input type="text" ref="inputValue" />
        <input
          type="submit"
          value="Submit"
          className="btn btn-warning btn-lg"
        />
      </form>
      // <div>
      //   <input onKeyPress={this.handleSubmit} />
      // </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
