import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UsersFunction() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error)=> console.log(error));
  });
  return (
    <>
    <h1>Users</h1>      
    <div>
        <hr />
        <div  style={{width: '50%'}}>
        {users.map((user, id)=> (
            <div className="tab" key={id}>
                <h2>{user.id}</h2>
                <h2>{user.name}</h2>
                <h2>{user.username}</h2>
                <h2>{user.email}</h2>
            </div>
        ) )}
      </div>
    </div>    
    </>
  );
}
