import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';

const Header = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <Link to={`/signup`}> SignUp </Link>
            <Link to={`/login`}> LogIn </Link>
          </ul>
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
