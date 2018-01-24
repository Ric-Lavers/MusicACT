import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

// import asyncValidate from './asyncValidate';

const validate = values => {
  const errors = {};
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'password',
    'address',
    'type'
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength6 = minLength(6);

class RegisterForm extends Component {
  state = {
    value: 0
  };

  SelectFieldhandleChange = (event, key, payload) => {
    console.log(event.target, key);
    this.setState({ value: Number(key) });
  };

  render() {
    const { handleSubmit, pristine, reset, submitting, error } = this.props;

    const renderTextField = ({
      input,
      label,
      meta: { touched, error },
      ...custom
    }) => (
      <TextField
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
      />
    );

    const renderSelectField = ({
      input,
      label,
      meta: { touched, error },
      children,
      ...custom
    }) => (
      <SelectField
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children}
        {...custom}
      />
    );

    return (
      <div>
        <div>
          <Field
            name="firstName"
            component={renderTextField}
            label="First Name"
            type="firstName"
          />
        </div>
        <div>
          <Field
            name="lastName"
            component={renderTextField}
            label="Last Name"
            type="lastName"
          />
        </div>
        <div>
          <Field
            name="email"
            component={renderTextField}
            label="Email"
            type="email"
            ref="email"
          />
        </div>
        <div>
          <Field
            name="password"
            component={renderTextField}
            label="password"
            validate={[minLength6]}
            type="password"
          />
          {error && <strong>{error}</strong>}
        </div>
        <div>
          <Field
            name="address"
            component={renderTextField}
            label="address"
            type="address"
          />
        </div>
        <div>
          <Field
            name="type"
            component={renderSelectField}
            label="type"
            // value={this.state.value}
            onChange={this.SelectFieldhandleChange}
          >
            <MenuItem value="1" primaryText="Musicians" />
            <MenuItem value="2" primaryText="Venues" />
            <MenuItem value="3" primaryText="Businesses" />
          </Field>
        </div>
        <div>
          <input type="hidden" name="type" value={this.state.value} />
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'MaterialUiForm', // a unique identifier for this form
  validate
  // asyncValidate
})(RegisterForm);
