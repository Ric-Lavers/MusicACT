import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Form from './Form';



export default class DialogExampleSimple extends React.Component {
  render() {

    const date = Date.now()

    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.props.close} />,
      <FlatButton label="Submit" primary={true} type="submit" />
    ];

    const date = Date.now();
    console.log(date);

    return this.props.show ? (
      <div>
        <Dialog
          title="SignUp"
          // actions={actions}
          modal={false}
          open={this.props.show}
          onRequestClose={this.props.close}
        >
          {/********* Login form ******************/}
          <form onSubmit={this.props.onSignUp}>
            <Form />
            {actions}
            <input type="hidden" name="registrationDate" value={date} />
          </form>
          {/********* Login form ******************/}
          {/* <a onClick={this.changeForm}> Do you already have an account? </a> */}
        </Dialog>
      </div>
    ) : null;
  }
}
