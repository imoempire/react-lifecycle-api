import React, { Component } from "react";

export default class UsersClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
    .then((users)=> this.setState({ users: users}))
    .catch((error) => console.log(error));
  }

  render() {
    return (
        <>
        <div>
        <h1>Users</h1>
        </div>
      <div  style={{width: '50%'}}>
        {this.state.users.map((user, id)=> (
            <div className="tab" key={id}>
                <h2>{user.id}</h2>
                <h2>{user.name}</h2>
                <h2>{user.username}</h2>
                <h2>{user.email}</h2>
            </div>
        ) )}
      </div>
      </>
    );
  }
}
