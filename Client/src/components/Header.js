import React, { Component } from 'react';
import { NavLink, BrowserRouter, Route, Link, Switch } from 'react-router-dom';
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
    this.state = { open: false, dialog: false };
  }

  //click iconElementLet to openDrawer
  handleToggle = () => this.setState({ open: !this.state.open });
  handleClose = () => this.setState({ open: false });

  //click iconElementRight to handleSignUp
  dialogOpenHander = () => {
    this.setState({ dialog: true });
  };

  dialogCloseHander = () => {
    this.setState({ dialog: false });
    console.log('helllo');
  };

  //handleSignIn
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
        // this.setState({ res.token })
      })
      .catch(err => {
        console.log('error in res', err);
      });
  };

  render() {
    return (
      <div>
        {/* login modal */}
        <Dialog show={this.state.dialog} close={this.dialogCloseHander} />

        {/* nav bar */}
        <AppBar
          onLeftIconButtonClick={this.handleToggle}
          onRightIconButtonClick={this.dialogOpenHander}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          iconElementRight={<FlatButton label="SignUp / LogIn" />}
        />

        {/* Drawer(left icon) */}
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <MenuItem>
            <NavLink to={`/`}>Logo</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink activeClassName="selected" to={`/directory`}>
              Directory
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink activeClassName="selected" to={`/about`}>
              About
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink activeClassName="selected" to={`/news`}>
              News
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink activeClassName="selected" to={`/musicians`}>
              Musicians
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink activeClassName="selected" to={`/venues`}>
              Venues
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink activeClassName="selected" to={`/businesses`}>
              Businesses
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink activeClassName="selected" to={`/contact`}>
              Contact
            </NavLink>
          </MenuItem>

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
        </Drawer>

        <Switch>
          <Route
            path="/signup"
            render={() => (
              <div>
                <Register />
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
        </Switch>
      </div>
    );
  }
}
