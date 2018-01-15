import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Directory from './Directory'

const Header = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <div style={ {width:"60%"} }>
            <ul style={ {display:"flex",justifyContent:"center"} }>
              <Link to="/directory">Directory</Link>
              <Link to={`/signup`}> SignUp </Link>
              <Link to={`/login`}> LogIn </Link>
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
    </BrowserRouter>
  );
};

export default Header;
