import React, { Component } from "react";
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">User List</h3>
        {items.map(item => {
          return (
            <TodoItem
              key={item.id}
              title={item.name}
              email={item.email}
              status={item.status}
              gender={item.gender}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={(id) => handleEdit(item.id)}
            />
          );
        })}

        <button
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-5"
          onClick={clearList}
        >
          clear list
        </button>
      </ul>
    );
  }
}
