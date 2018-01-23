import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import submit from './Submit';

export default class DialogExampleSimple extends React.Component {
  state = {
    haveAccount: false,
    date: Date.now()
  };

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

  onSubmitWithProps = (values, dispatch, props) => {
    alert('heoooo');
    console.log(props); // Object
  };

  render() {
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
          {/********* Login Form ******************/}
          <form
            onSubmit={
              this.state.haveAccount ? this.props.onLogin : this.props.onSignUp
            }
          >
            {this.renderForm()}
          </form>
          {/********* Login form ******************/}
        </Dialog>
      </div>
    ) : null;
  }
}
