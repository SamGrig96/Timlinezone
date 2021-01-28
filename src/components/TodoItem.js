import React, { Component } from "react";
import { FaPen } from 'react-icons/fa';
import {FaTrashAlt} from "react-icons/fa"
export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit,email,status,gender } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-6">
        <ul>Name:{title}</ul>
        <ul>Email:{email}</ul>
        <ul>Status:{status}</ul>
        <ul>Gender:{gender}</ul>
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={handleEdit}>
          <FaPen/>
          </span>
          <span className="mx-2 text-danger" onClick={handleDelete}>
          <FaTrashAlt/>
          </span>
        </div>
      </li>
    );
  }
}
