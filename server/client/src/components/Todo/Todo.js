import React from "react";
import { connect } from "react-redux";
import "./Todo.css";
import { deleteTodo, completeTodo } from "../../Actions/actions";

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
  }

  handleDelete() {
    this.props.deleteTodo(this.props.todo._id);
  }

  handleComplete() {
    this.props.completeTodo(this.props.todo._id);
  }
  render() {
    const { todo } = this.props;
    return (
      <li className={todo.isCompleted ? "checked" : ""}>
        <span onClick={this.handleComplete}>{todo.text}</span>
        <button
          type="button"
          onClick={this.handleDelete}
          // bootstrap button to close the task and delete it from db
          className="close btn btn-danger"
        >
          &#10799;
        </button>
      </li>
    );
  }
}

export default connect(
  null,
  { deleteTodo, completeTodo }
)(Todo);
