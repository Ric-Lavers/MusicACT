import React, { Component } from 'react';

const Register = () => {
  return (
    <div>
      <form action="/register" method="post">
        <label> email </label>
        <input type="email" name="email" />
        <label> firstName </label>
        <input type="text" name="firstName" />
        <label> lastName </label>
        <input type="text" name="lastName" />
        <label> Password </label>
        <input type="password" name="password" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Register;
