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

export default class DrawerSimpleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, dialog: false };
  }

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
              SignUp / Login
            </NavLink>
          </MenuItem>
        </Drawer>

        <Switch>
          <Route
            path="/signup"
            render={() => <Register component={Register} />}
          />
          <Route path="/login" render={() => <Login component={Login} />} />
        </Switch>
      </div>
    );
  }
}
