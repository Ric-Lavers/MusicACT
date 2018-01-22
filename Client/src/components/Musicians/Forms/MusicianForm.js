import React, { Component } from 'react';
import FormContactDetails from './FormContactDetails';
import FormMusicianProfile from './FormMusicianProfile';
import FormSocials from './FormSocials';
import FormMultimedia from './FormMultimedia';
import * as auth from '../../../api/profile';
import jwt_decode from 'jwt-decode';
require('../../../style/forms.css');
//test delete after

class MusicianForm extends Component {
  state = {
    tokenId: null
  };

  createProfile = event => {
    event.preventDefault();
    const form = event.target;
    const elements = form.elements;
    const input = elements.input.value;
    const token = elements.token.value;
    auth
      .createProfile({ input, token })
      .then(res => {
        console.log('Done', res);
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  // in order to avoid this error (InvalidTokenError: Invalid token specified)
  componentWillMount() {
    var getToken = auth.token();
    if (getToken !== null) {
      var decodeToken = jwt_decode(getToken);
      var tokenId = decodeToken.sub;
      this.setState({ tokenId });
    } else {
      console.log('error');
    }
  }

  render() {
    return (
      <div className="form-musician">
        <form onSubmit={this.createProfile}>
          <label> Input </label>
          <input type="text" name="input" />
          <input type="hidden" name="token" value={this.state.tokenId} />
          <input type="submit" />
        </form>
        {/* <FormContactDetails />
        <FormMusicianProfile handleImageUpload={props.handleImageUpload} />
        <FormSocials />
        <FormMultimedia /> */}
      </div>
    );
  }
}

export default MusicianForm;

/*
musicans data[]

  type,
  _id,
  contactDetails{
    email: String,
    phoneNumber: String,
    pointOfContact: String
  }
  profile{
    imageSrc: String,
    name: String,
    bio: Text
  }
  socialMedia{
    facebook: String,
    instagram: String,
    soundcloud: String,
    youtube: String,
    spotify: String,
    twitter: String,
    website: String
  }
  multimedia{
    soundcloudLink: String,
    youtubeLink: String
  }
*/
