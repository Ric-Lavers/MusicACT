import React from 'react';
import MusicianForm from './MusicianForm';
import MusicianProfile from './MusicianProfile';

import validator from 'validator';
import request from 'superagent';
import urlExists from 'url-exists';

import _ from 'lodash';
import validate from '../library/validate';
import * as auth from '../api/profile';

require('../style/forms.css');

// Models

const CLOUDINARY_UPLOAD_PRESET = 'profile_image';
const CLOUDINARY_UPLOAD_URL =
  'https://api.cloudinary.com/v1_1/aeonknight/upload';

const status = ['NONE', 'PENDING', 'VALID'];
const errors = {
  email: 0,
  phoneNumber: 0,
  pointOfContact: 0,
  name: 0,
  bio: 0,
  soundcloud: 0,
  spotify: 0,
  instagram: 0,
  facebook: 0,
  youtube: 0,
  website: 0,
  soundcloudLink: 0,
  youtubeLink: 0,
  vimeoLink: 0
};

class ProfileCreate extends React.Component {
  constructor(props) {
    super(props);
    if (window.localStorage.getItem('newProfile')) {
      let profile = JSON.parse(window.localStorage.getItem('newProfile'));
      this.state = {
        errors,
        profile: profile
      };
    } else {
      this.state = {
        errors,
        contactDetails: {
          _id: '',
          email: '',
          phoneNumber: '',
          pointOfContact: ''
        },
        profile: {
          imageSrc: '',
          name: '',
          bio: ''
        },
        socialMedia: {
          instagram: '',
          website: ''
        },
        multimedia: {
          soundcloudLink: '',
          youtubeLink: ''
        }
      };
    }
  }

  handleChange = event => {
    const group = event.target.className;
    const name = event.target.name;
    let value = event.target.value;

    const profile = this.state.profile;
    console.log(name);

    const errors = validate(name, value, this.state.errors);
    this.setState({ errors });
    // if (Object.keys(errors).length > 0 ) {return}
    //check if errors validation is 2 before adding to profile
    if (errors[name] === 2) {
      console.log(name, errors[name]);
      profile[group][name] = value;
      this.setState({ profile });
    }

    window.localStorage.setItem('newProfile', JSON.stringify(profile));
  };

  handleImageUpload = file => {
    let upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        const profile = this.state.profile;
        profile.profile.imageSrc = response.body.secure_url;
        this.setState({
          profile: profile
        });
      }
    });
  };

  onImageDrop = files => {
    const profile = this.state.profile;
    profile.profile.imageSrcBuild = files[0];
    this.setState({
      profile: profile
    });
    this.handleImageUpload(files[0]);
  };

  handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const elements = form.elements;
    const token = elements.token.value;
    const profile = { ...this.state.profile };
    // console.dir(`this is profile.create ${profile}`);
    profile._id = token;
    // console.dir(`this is profile.create ${profile}`);
    auth
      .createProfile(profile)
      .then(res => {
        console.log('Done', res);
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  render() {
    return (
      <div className="ProfileCreate">
        <MusicianForm
          className="MusicianForm"
          handleChange={this.handleChange}
          handleImageUpload={this.onImageDrop}
          handleSubmit={this.handleSubmit}
          errors={this.state.errors}
        />

        <MusicianProfile _id="1234" data={this.state.profile} />
      </div>
    );
  }
}

export default ProfileCreate;
