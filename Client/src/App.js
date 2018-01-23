import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ContactForm from './components/ContactForm';
import MusicianForm from './components/MusicianForm';
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Profile from './pages/Profiles';
import ProfileCreate from './components/ProfileCreate';
import Directory from './components/Directory';
import Contact from './components/Contact';

import * as auth from './api/profile';
import jwt_decode from 'jwt-decode';

class App extends Component {
  state = {
    tokenId: null
  };
  //   if (env.REACT_APP_SECRET_CODE) {s
  //   console.log(env.REACT_APP_SECRET_CODE);
  // }

  onClick = () => {
    const id = this.state.tokenId;
    console.log(`************ ${id}`);
    auth.fetchProfile(id);
  };

  componentWillMount() {
    var getToken = auth.token();
    if (getToken !== null) {
      var decodeToken = jwt_decode(getToken);
      var tokenId = decodeToken.sub;
      this.setState({ tokenId });
    } else {
      console.log('No token');
    }
  }

  render() {
    return (
      <Router>
        <div className="app">
          <MuiThemeProvider>
            <Header />
          </MuiThemeProvider>

          {/* testing dynamic route */}
          <div>
            <button onClick={this.onClick} />
          </div>

          <Route exact path="/" component={Home} />
          <Switch>
            {/* <Route
              path="/directory/create"
              render={() => {
                const id = this.state.tokenId;
                auth.hasProfileId(id) ? <Redirect to="/" /> : <ProfileCreate />;
              }}
            /> */}
            <Route path="/directory/create" component={ProfileCreate} />
            {/* <Route path="/directory/:id" component={Profile} /> */}
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
