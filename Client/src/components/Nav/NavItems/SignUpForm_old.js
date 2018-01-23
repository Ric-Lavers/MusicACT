import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import isAlphanumeric from 'validator/lib/isAlphanumeric';

class Form extends React.Component {
  state = {
    value: null,
    movie: {},
    errors: {}
  };

  handleChange = (event, index, value) => this.setState({ value });

  validate = movie => {
    const errors = {};
    if (!movie.title) errors.title = 'Title is required';
    if (movie.title && !isAlphanumeric(movie.title))
      errors.title = 'Invalid title';
    if (!movie.yearReleased) errors.yearReleased = 'Year Released is required';
    if (!(movie.title || movie.yearReleased))
      errors.base = ' Please fill out the form';
    return errors;
  };

  handleInputChange = event => {
    const attr = event.target.name;
    const value = event.target.value;
    const input = this.state.input;
    const errors = this.state.errors;
    input[attr] = value;
    errors[attr] = this.valid(target);
    this.setState({ input, errors });
  };

  static validators = {
    alphanumeric: value => (!value || isAlphanumeric(value) ? null : 'Wrong!')
  };

  render() {
    return (
      <div>
        <h1> Sing up </h1>
        <label>
          Title &nbsp;
          <input
            onChange={event =>
              this.handleInputChange(
                event,
                this.constructor.validators.alphanumeric
              )
            }
            type="text"
            name="title"
          />
          <span className="error">{this.state.errors.title}</span>
        </label>

        <TextField
          hintText="First Name"
          floatingLabelText="First Name"
          name="firstName"
          type="text"
          onChange={event => this.handleInputChange(event)}
          errorText={this.state.errors.firstName}
        />
        <br />
        <TextField
          hintText="Last Name"
          floatingLabelText="Last Name"
          name="lastName"
          type="text"
          // errorText="This field is required"
        />
        <br />
        <TextField
          hintText="email"
          floatingLabelText="email"
          name="email"
          type="text"
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
        <br />
        <TextField
          hintText="Address Field"
          floatingLabelText="Address"
          name="Address"
          type="text"
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
      </div>
    );
  }
}

export default Form;
