import React, { Component } from 'react';
import {NavLink, BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Directory from './Directory'

const Header = () => {
  return (
      <div>
        <nav>
           <div style={ {width:"60%"} }>
            <ul style={ {display:"flex",justifyContent:"center"} }>
              <NavLink  activeClassName="selected" to={`/directory`}>Directory</NavLink>
              <NavLink  activeClassName="selected" to={`/about`}> About </NavLink>
              <NavLink  activeClassName="selected" to={`/news`}> News </NavLink>
              <NavLink  activeClassName="selected" to={`/musicians`}> Musicians </NavLink>
              <NavLink  activeClassName="selected" to={`/venues`}> Venues </NavLink>
              <NavLink  activeClassName="selected" to={`/businesses`}> Businesses </NavLink>
              <NavLink  activeClassName="selected" to={`/contact`}> Contact </NavLink>
              <NavLink  activeClassName="selected" to={`/signup`}> SignUp </NavLink>
              <NavLink  activeClassName="selected" to={`/login`}> LogIn </NavLink>
           </ul>
         </div>
        </nav>

        <Switch>
          <Route
            path="/signup"
            render={() => <Register component={Register} />}
          />
          <Route path="/login" render={() => <Login component={Login} />} />
        </Switch>
      </div>
  );
};

export default Header;
