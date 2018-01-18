import React, { Component } from 'react';
import {
  NavLink,
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Directory from './Directory';
import Dialog from './Dialog';
//material UI
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import * as auth from '../api/auth';

export default class DrawerSimpleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { drawer: false, dialog: false, token: null };
  }

  //click Nav iconElementLet to openDrawer
  handleToggle = () => this.setState({ drawer: !this.state.drawer });
  handleClose = () => this.setState({ drawer: false });

  //click Nav iconElementRight to handleSignUp
  dialogOpenHander = () => {
    this.setState({ dialog: true });
  };

  dialogCloseHander = () => {
    this.setState({ dialog: false });
  };

  //signIn event to assgin the localStorage to token
  handleSignIn = event => {
    // stop refreshing the page
    event.preventDefault();
    const form = event.target;
    const elements = form.elements;
    const email = elements.email.value;
    const password = elements.password.value;
    auth
      .signIn({ email, password })
      .then(res => {
        console.log('res from signin', res);
        this.setState({ token: res });
        this.setState({ dialog: false });
      })
      .catch(err => {
        console.log('error in res', err);
      });
  };

  //signUp event to assgin the localStorage to token
  handleSignUp = event => {
    // stop refreshing the page
    event.preventDefault();
    const form = event.target;
    const elements = form.elements;
    const firstName = elements.firstName.value;
    const lastName = elements.lastName.value;
    const email = elements.email.value;
    const password = elements.password.value;
    const registrationDate = elements.registrationDate.value;
    auth
      .signUp({ firstName, lastName, email, password, registrationDate })
      .then(res => {
        console.log('res from signin', res);
        this.setState({ token: res });
        this.setState({ dialog: false });
      })
      .catch(err => {
        console.log('error in res', err);
      });
  };

  //remove token in localStorage
  handleSignOut = () => {
    auth.signOut();
    this.setState({ token: null });
  };

  renderuserSign = () => {
    const TOKEN_KEY = 'token';
    if (!auth.isSignedIn()) {
      return (
        <div>
          <MenuItem>
            <NavLink activeClassName="selected" to={`/signup`}>
              SignUp
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink activeClassName="selected" to={`/signin`}>
              Login
            </NavLink>
          </MenuItem>
        </div>
      );
    } else {
      return (
        <div>
          <MenuItem onClick={this.handleSignOut}>
            <NavLink to={`/`}>Logout</NavLink>
          </MenuItem>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        {/* login modal */}
        <Dialog
          show={this.state.dialog}
          close={this.dialogCloseHander}
          onSignUp={this.handleSignUp}
        />

        {/* nav bar */}
        <AppBar
          onLeftIconButtonClick={this.handleToggle}
          onRightIconButtonClick={
            auth.isSignedIn() ? this.handleSignOut : this.dialogOpenHander
          }
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          iconElementRight={
            auth.isSignedIn() ? (
              <FlatButton label="SignOut" />
            ) : (
              <FlatButton label="SignUp / LogIn" />
            )
          }
        />

        {/* Drawer(left icon) */}
        <Drawer
          docked={false}
          width={200}
          open={this.state.drawer}
          onRequestChange={open => this.setState({ drawer: open })}
        >
          <MenuItem onClick={() => this.setState({ drawer: false })}>
            <NavLink to={`/`}>Logo</NavLink>
          </MenuItem>
          <MenuItem onClick={() => this.setState({ drawer: false })}>
            <NavLink activeClassName="selected" to={`/directory`}>
              Directory
            </NavLink>
          </MenuItem>
          <MenuItem onClick={() => this.setState({ drawer: false })}>
            <NavLink activeClassName="selected" to={`/about`}>
              About
            </NavLink>
          </MenuItem>
          <MenuItem onClick={() => this.setState({ drawer: false })}>
            <NavLink activeClassName="selected" to={`/news`}>
              News
            </NavLink>
          </MenuItem>
          <MenuItem onClick={() => this.setState({ drawer: false })}>
            <NavLink activeClassName="selected" to={`/directory/create`}>
              Create Musician Profile
            </NavLink>
          </MenuItem>
          <MenuItem onClick={() => this.setState({ drawer: false })}>
            <NavLink activeClassName="selected" to={`/venues`}>
              Venues
            </NavLink>
          </MenuItem>
          <MenuItem onClick={() => this.setState({ drawer: false })}>
            <NavLink activeClassName="selected" to={`/businesses`}>
              Businesses
            </NavLink>
          </MenuItem>
          <MenuItem onClick={() => this.setState({ drawer: false })}>
            <NavLink activeClassName="selected" to={`/contact`}>
              Contact
            </NavLink>
          </MenuItem>
          <MenuItem
            onClick={() => this.setState({ drawer: false, dialog: true })}
          >
            {this.renderuserSign()}
          </MenuItem>
        </Drawer>

        {/* <Switch>
          <Route
            path="/signup"
            render={() => (
              <div>
                <Register onSignUp={this.handleSignUp} />
              </div>
            )}
          />
          <Route
            path="/signin"
            render={() => (
              <div>
                <Login onSignIn={this.handleSignIn} />
              </div>
            )}
          />
        </Switch> */}
      </div>
    );
  }
}
