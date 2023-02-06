import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './Nav.js';

const Register = () => {

  const createAccount = (e) => {
    e.preventDefault();
    fetch(process.env['REACT_APP_API_URI'] + '/register', {
      method: 'POST',
      body: JSON.stringify({
          username: "test",
          password: "test"
        }),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
         },
      })
         .then((res) => res.json());
  };

  return (
    <div>
      <Nav />
      <form onSubmit={createAccount}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter your email address"></input>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" placeholder="Password"></input>
        </div>
          <button type="submit" class="btn btn-primary">Create account</button>
      </form>
    </div>
    );
};

export default Register;