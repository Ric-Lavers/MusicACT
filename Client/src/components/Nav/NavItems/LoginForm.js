import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import validator from 'validator';

class LoginForm extends React.Component {
  state = {
    value: null
  };

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <div>
        <h1> Login </h1>
        <TextField
          hintText="email"
          floatingLabelText="email"
          name="email"
          type="email"
          // errorText="This field is required"
        />
        <br />
        <TextField
          hintText="Password Field"
          floatingLabelText="Password"
          name="password"
          type="password"
          // errorText="This field is required"
        />
      </div>
    );
  }
}

export default LoginForm;
