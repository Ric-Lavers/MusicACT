import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactForm from './components/ContactForm';
import MusicianForm from './components/MusicianForm';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import Landing from './components/Landing';
import Footer from './components/Footer';

import Directory from './components/Directory';

class App extends Component {
  //
  //   if (env.REACT_APP_SECRET_CODE) {
  //   console.log(env.REACT_APP_SECRET_CODE);
  // }

  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Directory />
          <Landing />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
