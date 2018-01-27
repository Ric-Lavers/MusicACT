import React from 'react';
import MusicianForm from './MusicianForm';
import MusicianProfile from './MusicianProfile';

import validator from 'validator';
import request from 'superagent';
import urlExists from 'url-exists';

import _ from 'lodash';
import validate from '../library/validate';
import * as auth from '../api/profile';
import jwt_decode from 'jwt-decode';

require('../style/forms.css');

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

    console.log("%c this.props","font-size: 1.3em; color:blue",this.props);

    if (this.props.myProfile != null) {
console.log("this.props.myProfile != null");
      this.state = {
        errors,
        profile: this.props.myProfile
      };
    }else if ( window.localStorage.getItem('newProfile') ) {
console.log("window.localStorage.getItem('newProfile')");
     let profile = JSON.parse(window.localStorage.getItem('newProfile'));
     this.state = {
       errors,
       profile: profile
     };
   }else if(this.props.myProfile === null){
console.log("%c this.props.myProfile === null","color:green");
      this.state = {
        errors,
        profile: "none"
      }
    }
      else {
console.log("else");
      this.state = {
        errors,
        profile: {
          type: 'DJs',
          _id: '1234',
          contactDetails: {
            email: '',
            phoneNumber: '',
            pointOfContact: ''
          },
          profile: {
            imageSrc: '',
            name: '',
            bio: ''
          },
          socialMedia: {},
          multimedia: {
            soundcloudLink: '',
            youtubeLink: ''
          }
        }
      };
    }
  }
  componentDidMount() {
    if (this.state.profile ===  "none") {
      const getToken = auth.token();

      if (getToken !== null) {
        const decodeToken = jwt_decode(getToken);
        const tokenId = decodeToken.sub;
        console.log(decodeToken,tokenId);
        auth.fetchProfile(tokenId).then(res =>{
          let profile = {}

          profile.multimedia = res.profile.profile.multimedia[0]
          profile.socialMediaIcons = res.profile.profile.socialMediaIcons[0]
          profile.profile = res.profile.profile.profile[0]
          profile.contactDetails = res.profile.profile.contactDetails[0]
          profile.type = decodeToken.type // this is just to make it work for musician!!
          this.setState({
            profile: profile
          })
        })
      }else {
        console.log('No token');
      }
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

  handleSocialDelete = (event) => {
    console.log("%c ____!!!!", "color: green");
    event.preventDefault();
    const target = event.target.name;
    console.log(target);
    const profile = this.state.profile;
    delete profile.socialMedia[target]
    this.setState({
      profile: profile
    });
    console.log(this.state.profile.socialMedia);
    window.localStorage.setItem('newProfile', JSON.stringify(profile));
  }

  render() {
    return (this.state.profile === "none" ?
      (null)
    :
      <div className="ProfileCreate">
        <MusicianForm
          data = {this.state.profile}
          className="MusicianForm"
          handleChange={this.handleChange}
          handleImageUpload={this.onImageDrop}
          handleSubmit={this.handleSubmit}
          handleSocialDelete ={this.handleSocialDelete}
          errors={this.state.errors}
        />
        {<MusicianProfile
          _id="1234"
          data={this.state.profile}
          type={this.state.profile.type} />}
    </div>
    );
  }
}

export default ProfileCreate;
