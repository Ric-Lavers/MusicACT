import React from 'react';

const Register = ({ onSignUp }) => {
  return (
    <div>
      <form onSubmit={onSignUp}>
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
