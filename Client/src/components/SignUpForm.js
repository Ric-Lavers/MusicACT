import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator } from 'react-material-ui-form-validator';

class Form extends React.Component {
  state = {
    value: null
  };

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <div>
        <h1> Sing up </h1>
        {/* <ValidatorForm
          ref="form"
          onSubmit={this.handleSubmit}
          onError={errors => console.log(errors)}
        > */}
        <TextField
          hintText="First Name"
          floatingLabelText="First Name"
          name="firstName"
          type="firstName"
          // errorText="This field is required"
        />
        <br />
        <TextField
          hintText="Last Name"
          floatingLabelText="Last Name"
          name="lastName"
          type="lastName"
           errorText="This field is required"
        />
        <br />
        <TextField
          hintText="email"
          floatingLabelText="email"
          name="email"
          type="email"
          // errorText="This field is required"
        />
        {/* <TextValidator
          floatingLabelText="Email"
          onChange={this.handleChange}
          name="email"
          // value={email}
          validators={['required', 'isEmail']}
          errorMessages={['this field is required', 'email is not valid']}
        /> */}
        <br />
        <TextField
          hintText="Password Field"
          floatingLabelText="Password"
          name="password"
          type="password"
          // errorText="This field is required"
        />
        <br />
        <TextField
          hintText="Address Field"
          floatingLabelText="Address"
          name="Address"
          type="Address"
          // errorText="This field is required"
        />
        <br />
        <br />
        <SelectField
          hintText="Type"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="Musicians" />
          <MenuItem value={2} primaryText="Venues" />
          <MenuItem value={3} primaryText="Businesses" />
        </SelectField>
        <br />
        {/* <TextField type="comment" hintText="Comment" fullWidth={true} /> */}
        {/* </ValidatorForm> */}
      </div>
    );
  }
}

export default Form;
