import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";
class App extends Component {
  state = {
    items: [],
    // id: uuid(),
    name: "",
    email: '',
    gender: "",
    status: '',
    editItem: false,
    item: ""
  };
  handleChange = e => {
    const { email, gender, status, name, value } = e.target
  
    this.setState({
      [name]: value,
      [email]: value,
      [gender]: value,
      [status]: value,

    });
  };


  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state, 5555)
    const newItem = {
      // id: this.state.id,
      email: this.state.email,
      name: this.state.name,
      gender: this.state.gender,

      status: this.state.status
    };
    let myJSON = JSON.stringify(newItem)

    Axios.post("https://gorest.co.in/public-api/users", myJSON, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        'Authorization': `Bearer a6e8a51d79546ac79c5165bb181bad6268cfe14dc10af86b0fa6ed7cad7a91b1`
      }
    })
      .then(res => {
        console.log(res, 'data')
        this.getId()
      })
      .catch(err => {
        console.log(err);

      })
    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: "",

    });
  };
  clearList = () => {
    this.setState({
      items: []
    });
  };


  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
    console.log(id)
    Axios.delete(`https://gorest.co.in/public-api/users/${id}`, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        'Authorization': `Bearer a6e8a51d79546ac79c5165bb181bad6268cfe14dc10af86b0fa6ed7cad7a91b1`
      }
    })
      .then(res => {
        // console.log(res, 'data')
        this.getId()
      })
      .catch(err => {
        console.log(err);

      })

  };


  getId() {
    Axios.get(`https://gorest.co.in/public-api/users`)
      .then(response => {
        console.log(response.data.data, 'post')
        this.setState({ items: response.data.data })

      })
  }
  componentDidMount() {
    this.getId()
  }

  handleEdit = id => {
    console.log(id, 'id')
    const filteredItems = this.state.items.filter(item => item.id !== id);

    const selectedItem = this.state.items.find(item => item.id === id);



    this.setState({
      items: filteredItems,
      name: selectedItem.name,
      email: selectedItem.email,
      gender: selectedItem.gender,
      status: selectedItem.status,
      id: selectedItem.id
    });


    // console.log(this.state, 'sadsaas')

  };
  handeleUpdate = () => {
    // console.log(id,'sds')
    // // const filteredItems = this.state.items.filter(item => item.id !== id);

    // const selectedItem = this.state.items.find(item => item.id === id);
    let id=this.state.id
    const newItem = {
      // id: this.state.id,
      email: this.state.email,
      name: this.state.name,
      gender: this.state.gender,

      status: this.state.status
    };
    let myJSON = JSON.stringify(newItem)
    Axios.patch(`https://gorest.co.in/public-api/users/${id}`, myJSON, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        'Authorization': `Bearer a6e8a51d79546ac79c5165bb181bad6268cfe14dc10af86b0fa6ed7cad7a91b1`
      }
    })
      .then(res => {
        console.log(res, 'data')
        this.getId()
      })
      .catch(err => {
        console.log(err);

      })
console.log(newItem)
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">User</h3>
            <TodoInput
              name={this.state.name}
              email={this.state.email}
              gender={this.state.gender}
              status={this.state.status}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
             
              handeleUpdate={this.handeleUpdate}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
