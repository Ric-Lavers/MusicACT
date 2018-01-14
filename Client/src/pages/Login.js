import React, { Component } from 'react';

const Login = () => {
  return (
    <div>
      <form action="/signin" method="post">
        <label> email </label>
        <input type="email" name="email" />
        <label> Password </label>
        <input type="password" name="password" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
