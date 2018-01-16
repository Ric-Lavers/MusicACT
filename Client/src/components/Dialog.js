import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Form from './Form';

export default class DialogExampleSimple extends React.Component {
  render() {
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.props.close} />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />
    ];

    return this.props.show ? (
      <div>
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.props.show}
          onRequestClose={this.props.close}
        >
          {/********* Login form ******************/}
          <Form />
          {/********* Login form ******************/}
        </Dialog>
      </div>
    ) : null;
  }
}
