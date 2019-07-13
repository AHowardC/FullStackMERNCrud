import React, { Component } from "react";
import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import ListTodos from "./components/ListToDos/ListTodos";
import { Provider } from "react-redux";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* bootstrap container to make the todo app responsive */}
        <div className="container">
          <div className="header">
            <Header />
            <AddTodo />
          </div>
          <ListTodos />
        </div>
      </Provider>
    );
  }
}

export default App;
