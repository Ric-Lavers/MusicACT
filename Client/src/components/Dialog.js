import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

export default class DialogExampleSimple extends React.Component {
  state = {
    haveAccount: false,
    date: Date.now()
  };

<<<<<<< HEAD
    const date = Date.now()

    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.props.close} />,
      <FlatButton label="Submit" primary={true} type="submit" />
    ];

  
=======
  renderForm = () => {
    if (this.state.haveAccount == false) {
      return (
        <div>
          <SignUpForm />
          <input type="hidden" name="registrationDate" value={this.date} />
          <FlatButton
            label="Cancel"
            primary={true}
            onClick={this.props.close}
          />
          &nbsp;
          <FlatButton label="Submit" primary={true} type="submit" />
          <br />
          <br />
          <p>
            Already have an account? &nbsp;
            <a
              href="#"
              onClick={() => {
                this.setState({ haveAccount: true });
              }}
            >
              LogIn
            </a>
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <LoginForm />
          <FlatButton
            label="Cancel"
            primary={true}
            onClick={this.props.close}
          />
          &nbsp;
          <FlatButton label="Submit" primary={true} type="submit" />
          <br />
          <br />
          <p>
            Don't have an account? &nbsp;
            <a
              href="#"
              onClick={() => {
                this.setState({ haveAccount: false });
              }}
            >
              SignUp
            </a>
          </p>
        </div>
      );
    }
  };
>>>>>>> 12da3b0680d874a2901ee24939910bf91daf5d3a

  render() {
    // const actions = [
    //   <FlatButton label="Cancel" primary={true} onClick={this.props.close} />,
    //   <FlatButton label="Submit" primary={true} type="submit" />
    // ];
    return this.props.show ? (
      <div>
        <Dialog
          // title="SignUp"
          // actions={actions}
          modal={false}
          open={this.props.show}
          onRequestClose={this.props.close}
          autoScrollBodyContent={true}
        >
          {/********* Login form ******************/}
          <form
            onSubmit={
              this.state.haveAccount ? this.props.onLogin : this.props.onSignUp
            }
            style={{ textAlign: 'center' }}
          >
            {this.renderForm()}
          </form>
          {/********* Login form ******************/}
          {/* <a onClick={this.changeForm}> Do you already have an account? </a> */}
        </Dialog>
      </div>
    ) : null;
  }
}
