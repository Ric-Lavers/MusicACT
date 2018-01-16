import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { NavLink, BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Directory from './Directory';

export default class DrawerSimpleExample extends React.Component {
  state = { open: false, drawer: null };

  handleToggle = () => {
    const doesShow = this.state.open;
    this.setState((prevState, props) => {
      return {
        open: !doesShow
      };
    });
  };

  render() {
    let drawer = null;
    if (this.state.open) {
      drawer = (
        <div>
          <Drawer open={this.state.open}>
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
              <NavLink activeClassName="selected" to={`/login`}>
                LogIn
              </NavLink>
            </MenuItem>
          </Drawer>
          {/* need to fix Switch statement */}
          <Switch>
            <Route
              path="/signup"
              render={() => <Register component={Register} />}
            />
            <Route path="/login" render={() => <Login component={Login} />} />
          </Switch>;
        </div>
      );
    }

    return (
      <div onClick={this.handleToggle}>
        <AppBar
          title="Logo"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        {drawer}
      </div>
    );
  }
}

// const Header = () => {
//   return (
//       <div>
//         <nav>
//            <div style={ {width:"60%"} }>
//             <ul style={ {display:"flex",justifyContent:"center"} }>
//               <NavLink  activeClassName="selected" to={`/directory`}>Directory</NavLink>
//               <NavLink  activeClassName="selected" to={`/about`}> About </NavLink>
// <NavLink  activeClassName="selected" to={`/news`}> News </NavLink>
// <NavLink  activeClassName="selected" to={`/musicians`}> Musicians </NavLink>
// <NavLink  activeClassName="selected" to={`/venues`}> Venues </NavLink>
// <NavLink  activeClassName="selected" to={`/businesses`}> Businesses </NavLink>
// <NavLink  activeClassName="selected" to={`/contact`}> Contact </NavLink>
// <NavLink  activeClassName="selected" to={`/signup`}> SignUp </NavLink>
// <NavLink  activeClassName="selected" to={`/login`}> LogIn </NavLink>
//            </ul>
//          </div>
//         </nav>
//
<Switch>
  <Route path="/signup" render={() => <Register component={Register} />} />
  <Route path="/login" render={() => <Login component={Login} />} />
</Switch>;
//       </div>
//   );
// };
//
// export default Header;
