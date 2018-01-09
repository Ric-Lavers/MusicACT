import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  //
  //   if (env.REACT_APP_SECRET_CODE) {
  //   console.log(env.REACT_APP_SECRET_CODE);
  // }

  render() {
    return (
      <div>
        <small>
          You are running this application in <b>{process.env.NODE_ENV}</b>
          mode.
        </small>
        <h2>{process.env.REACT_APP_SECRET_CODE}</h2>
      </div>
    );
  }
}

export default App;
