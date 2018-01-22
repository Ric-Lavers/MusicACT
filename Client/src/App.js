import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ContactForm from './components/ContactForm';
import MusicianForm from './components/MusicianForm';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Profile from './pages/Profiles';
import ProfileCreate from './components/ProfileCreate';
import Directory from './components/Directory';
import Contact from './components/Contact';

class App extends Component {
  //
  //   if (env.REACT_APP_SECRET_CODE) {s
  //   console.log(env.REACT_APP_SECRET_CODE);
  // }
  //

  render() {
    return (
      <Router>
        <div className="app">
          <MuiThemeProvider>
            <Header />
          </MuiThemeProvider>

          <Route exact path="/" component={Home} />
          <Switch>
            <Route path="/directory/create" component={ProfileCreate} />
            <Route path="/directory/:id" component={Profile} />
            <Route path="/directory" component={Directory} />
            <Route path="/contact" component={Contact} />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
