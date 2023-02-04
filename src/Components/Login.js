import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './Nav.js';

const Login = () => (
<div>
  <Nav />
  <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter your email address"></input>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" placeholder="Password"></input>
    </div>
      <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
);

export default Login;